"""Pull nutrition and weight data from MyFitnessPal into public/data/fitness.json.

Run: python scripts/sync_fitness.py

A normal Chrome window opens with its own profile (kept in scripts/.mfp-browser, gitignored).
The first time, log in to MyFitnessPal there and press Enter in the terminal; later runs stay
logged in. Every request is made from inside that Chrome window, so MyFitnessPal and Cloudflare
see an ordinary logged-in browser (no password or cookie copying needed).
"""

from __future__ import annotations

import argparse
import datetime as dt
import json
import os
import subprocess
import time
from http.cookiejar import CookieJar
from pathlib import Path
from statistics import mean

import myfitnesspal
import requests
from playwright.sync_api import Error as PlaywrightError
from playwright.sync_api import Page, sync_playwright
from requests.structures import CaseInsensitiveDict

SCRIPTS_DIR = Path(__file__).resolve().parent
OUTPUT_PATH = SCRIPTS_DIR.parent / "public" / "data" / "fitness.json"
PROFILE_DIR = SCRIPTS_DIR / ".mfp-browser"
SITE_URL = "https://www.myfitnesspal.com"
DEBUG_PORT = 9223

FETCH_IN_PAGE = """
async ({ url, headers }) => {
  try {
    const response = await fetch(url, { headers, credentials: "include" });
    return { status: response.status, headers: Object.fromEntries(response.headers), body: await response.text() };
  } catch (error) {
    return { status: 0, headers: {}, body: String(error) };
  }
}
"""


class BrowserSession:
    """Stands in for requests.Session: runs each GET as fetch() inside the logged-in Chrome tab."""

    def __init__(self, page: Page):
        self.page = page

    def get(self, url: str, headers: dict[str, str] | None = None, **_kwargs) -> requests.Response:
        result = self.page.evaluate(FETCH_IN_PAGE, {"url": url, "headers": headers or {}})
        if result["status"] == 0:
            # Blocked by CORS (other MyFitnessPal subdomains): send it with the browser's cookies instead.
            api_response = self.page.context.request.get(url, headers=headers or {})
            result = {"status": api_response.status, "headers": api_response.headers, "body": api_response.text()}

        response = requests.Response()
        response.url = url
        response.status_code = result["status"]
        response.headers = CaseInsensitiveDict(result["headers"])
        response.encoding = "utf-8"
        response._content = result["body"].encode("utf-8")
        return response


class BrowserClient(myfitnesspal.Client):
    """myfitnesspal.Client whose requests all go through a Chrome tab."""

    page: Page

    def _get_auth_data(self):
        self.session = BrowserSession(self.page)
        return super()._get_auth_data()


def find_chrome() -> Path:
    for root in ("PROGRAMFILES", "PROGRAMFILES(X86)", "LOCALAPPDATA"):
        path = Path(os.environ.get(root, "")) / "Google" / "Chrome" / "Application" / "chrome.exe"
        if path.is_file():
            return path
    raise SystemExit("Could not find Chrome, which is needed to talk to MyFitnessPal.")


def is_logged_in(page: Page) -> bool:
    result = page.evaluate(FETCH_IN_PAGE, {"url": "/user/auth_token?refresh=true", "headers": {}})
    return result["status"] == 200 and result["headers"].get("content-type", "").startswith("application/json")


def nutrition_average(client: myfitnesspal.Client, end: dt.date, days: int) -> dict:
    """Average daily totals over the last `days` days, skipping days with nothing logged."""
    logged = []
    for offset in range(days):
        totals = client.get_date(end - dt.timedelta(days=offset)).totals
        if totals.get("calories"):
            logged.append(totals)

    if not logged:
        raise SystemExit(f"No food logged in the {days} days ending {end}.")

    def avg(key: str) -> int:
        return round(mean(day.get(key, 0) for day in logged))

    return {
        "daysLogged": len(logged),
        "calories": avg("calories"),
        "protein": avg("protein"),
        "carbs": avg("carbohydrates"),
        "fat": avg("fat"),
    }


def weight_history(client: myfitnesspal.Client, since: dt.date) -> list[dict]:
    """Every weigh-in from `since` through today, oldest first."""
    entries = client.get_measurements("Weight", since, dt.date.today())
    return [{"date": day.isoformat(), "value": round(value, 1)} for day, value in sorted(entries.items())]


def collect(page: Page, args: argparse.Namespace) -> dict:
    page.goto(SITE_URL)
    while not is_logged_in(page):
        input("Log in to MyFitnessPal in the Chrome window, then press Enter here... ")
        page.goto(SITE_URL)

    BrowserClient.page = page
    client = BrowserClient(CookieJar())

    # Today's diary is usually incomplete, so stats end yesterday.
    end = dt.date.today() - dt.timedelta(days=1)
    print("Logged in. Fetching nutrition and weight...")
    return {
        "lastSynced": dt.date.today().isoformat(),
        "nutrition": nutrition_average(client, end, args.days),
        "weightUnit": args.unit,
        "weight": weight_history(client, args.since),
    }


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--days", type=int, default=7, help="days to average nutrition over (default 7)")
    parser.add_argument(
        "--since",
        type=dt.date.fromisoformat,
        default=dt.date(2000, 1, 1),
        help="earliest weigh-in to include, YYYY-MM-DD (default: all history)",
    )
    parser.add_argument("--unit", default="lbs", help="weight unit label shown on the chart (default lbs)")
    args = parser.parse_args()

    # Start Chrome as a normal browser (not automation-controlled) and attach over its debug port.
    chrome = subprocess.Popen(
        [
            str(find_chrome()),
            f"--user-data-dir={PROFILE_DIR}",
            f"--remote-debugging-port={DEBUG_PORT}",
            "--no-first-run",
            "--no-default-browser-check",
            "about:blank",
        ]
    )
    try:
        with sync_playwright() as playwright:
            for attempt in range(20):
                try:
                    browser = playwright.chromium.connect_over_cdp(f"http://127.0.0.1:{DEBUG_PORT}")
                    break
                except PlaywrightError:
                    if attempt == 19:
                        raise SystemExit(
                            "Could not connect to Chrome. Close any Chrome window this script opened earlier and retry."
                        )
                    time.sleep(0.5)
            context = browser.contexts[0]
            page = context.pages[0] if context.pages else context.new_page()
            data = collect(page, args)
    finally:
        chrome.terminate()

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUTPUT_PATH}")
    print(json.dumps(data, indent=2))


if __name__ == "__main__":
    main()
