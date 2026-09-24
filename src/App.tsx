import {
  ArrowLeft,
  Briefcase,
  Code2,
  Download,
  Dumbbell,
  ExternalLink,
  Folder,
  Github,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  Moon,
  ShieldCheck,
  Sun,
  TrendingDown,
  TrendingUp,
  Trophy,
  UserRound
} from "lucide-react";
import {
  FaCss3Alt,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRaspberryPi
} from "react-icons/fa";
import {
  SiArduino,
  SiCplusplus,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiMongodb,
  SiOpencv,
  SiSharp,
  SiTypescript
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrain, TbCircuitResistor, TbHexagonLetterY } from "react-icons/tb";
import type {
  ComponentType,
  CSSProperties,
  KeyboardEvent as ReactKeyboardEvent,
  PointerEvent as ReactPointerEvent,
  ReactNode,
  SVGProps
} from "react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

type Panel = "esports" | "training";

type NavItem = {
  id: string;
  label: string;
  Icon: typeof Home;
  kind?: "section" | "panel";
};

type Project = {
  title: string;
  category: string;
  date: string;
  hook: string;
  writeup: string;
  outcomes: string[];
  gallery: string[];
  tags: string[];
  github: string;
  image: string;
  imageAlt: string;
};

type ExperienceItem = {
  date: string;
  role: string;
  company: string;
  body: string;
  tags: string[];
  logo: string;
  logoSrc: string;
  linkedInUrl?: string;
};

type SkillGroup = {
  title: string;
  items: { label: string; Icon: ComponentType<SVGProps<SVGSVGElement> & { style?: CSSProperties }>; color: string }[];
};

const navItems: NavItem[] = [
  { id: "about", label: "About", Icon: UserRound },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "projects", label: "Projects", Icon: Folder },
  { id: "skills", label: "Tech Stack", Icon: Code2 },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "contact", label: "Contact", Icon: Mail },
  { id: "esports", label: "Esports", Icon: Trophy, kind: "panel" },
  { id: "training", label: "Training", Icon: Dumbbell, kind: "panel" }
];

const sectionNavItems = navItems.filter((item) => item.kind !== "panel");
const panelNavItems = navItems.filter((item) => item.kind === "panel");

const projects: Project[] = [
  {
    title: "Greenify",
    category: "ML",
    date: "2026",
    hook: "Food-waste detection with YOLO and OpenCV.",
    writeup:
      "Greenify turns food images into waste insights through a Python vision pipeline. The interface keeps the workflow simple while the model handles classification, cleanup, and prediction confidence.",
    outcomes: ["YOLO-backed detection flow", "900+ image training dataset", "Figma prototype for product handoff"],
    gallery: ["Model scan preview", "Dataset board", "Waste insight flow"],
    tags: ["Python", "OpenCV", "ML", "Figma"],
    github: "https://github.com/IshaanMittal07",
    image: "https://opengraph.githubassets.com/portfolio/IshaanMittal07/Greenify",
    imageAlt: "Greenify GitHub project preview"
  },
  {
    title: "SmartVault",
    category: "Security",
    date: "2025",
    hook: "Face ID banking simulator with real flows.",
    writeup:
      "SmartVault models banking actions across authentication, transfers, balances, stock tracking, and barcode lookup. The project ties Java UI work to OpenCV authentication and practical account workflows.",
    outcomes: ["Face authentication path", "Transfers and balance management", "Barcode lookup with ZXing"],
    gallery: ["Login security flow", "Banking dashboard", "Barcode lookup"],
    tags: ["Java", "OpenCV", "Swing", "ZXing"],
    github: "https://github.com/IshaanMittal07/SmartVault",
    image: "https://opengraph.githubassets.com/portfolio/IshaanMittal07/SmartVault",
    imageAlt: "SmartVault GitHub project preview"
  },
  {
    title: "BookVault",
    category: "Product",
    date: "2025",
    hook: "Library operations with persistence and ISBN scanning.",
    writeup:
      "BookVault brings checkout, returns, due dates, ratings, and file persistence into one C# library system. It focuses on the everyday loops a librarian or student would actually use.",
    outcomes: ["Login and checkout flows", "Due-date tracking", "ISBN scanning support"],
    gallery: ["Library catalog", "Checkout flow", "ISBN scan"],
    tags: ["C#", "Windows Forms", ".NET"],
    github: "https://github.com/IshaanMittal07/BookVault",
    image: "https://opengraph.githubassets.com/portfolio/IshaanMittal07/BookVault",
    imageAlt: "BookVault GitHub project preview"
  },
  {
    title: "SeniorBenefits",
    category: "Frontend",
    date: "2025",
    hook: "Benefits discovery for seniors and newcomers.",
    writeup:
      "SeniorBenefits helps users surface programs they may qualify for without wading through scattered pages. The React interface favors plain language, fast scanning, and eligibility-first navigation.",
    outcomes: ["React discovery flow", "Eligibility-centered content model", "Accessible TypeScript UI"],
    gallery: ["Eligibility cards", "Search flow", "Benefit detail"],
    tags: ["TypeScript", "React", "Product"],
    github: "https://github.com/IshaanMittal07/SeniorBenefits",
    image: "https://opengraph.githubassets.com/portfolio/IshaanMittal07/SeniorBenefits",
    imageAlt: "SeniorBenefits GitHub project preview"
  },
  {
    title: "ArcticAnalytics",
    category: "Analytics",
    date: "2025",
    hook: "Decision dashboards with sharper data views.",
    writeup:
      "ArcticAnalytics explores compact dashboards for comparing signals and spotting operational patterns. The project shaped how I think about visual hierarchy in data-heavy interfaces.",
    outcomes: ["Dashboard exploration", "JavaScript data views", "Reusable UI patterns"],
    gallery: ["Analytics overview", "Data card grid", "Trend panel"],
    tags: ["JavaScript", "Analytics", "UI"],
    github: "https://github.com/IshaanMittal07/ArcticAnalytics",
    image: "https://opengraph.githubassets.com/portfolio/IshaanMittal07/ArcticAnalytics",
    imageAlt: "ArcticAnalytics GitHub project preview"
  },
  {
    title: "DroneGroundStation",
    category: "Robotics",
    date: "2025",
    hook: "Ground-station work for autonomy systems.",
    writeup:
      "DroneGroundStation connects MAVLink communication, computer vision, and autonomy tooling for robotics workflows. It is practical systems work: observe, command, validate, repeat.",
    outcomes: ["MAVLink communication", "Autonomy workflow support", "Python control modules"],
    gallery: ["Telemetry view", "Autonomy loop", "Ground station commands"],
    tags: ["Python", "MAVLink", "Robotics"],
    github: "https://github.com/IshaanMittal07/DroneGroundStation",
    image: "https://opengraph.githubassets.com/portfolio/IshaanMittal07/DroneGroundStation",
    imageAlt: "DroneGroundStation GitHub project preview"
  }
];

const experiences: ExperienceItem[] = [
  {
    date: "Mar. 2026 - Present",
    role: "Quantum Hardware/Software Development Intern",
    company: "SQE.io",
    body: "Building quantum-safe transaction systems across software, embedded hardware, and secure communication protocols.",
    tags: ["Python", "TypeScript", "Hardware"],
    logo: "SQE",
    logoSrc: "/logos/SQE.jpeg",
    linkedInUrl: "https://www.linkedin.com/company/sqe-io/"
  },
  {
    date: "Feb. 2026 - May 2026",
    role: "Software Development Intern",
    company: "Clouds Analytics",
    body: "Built secure React, Python, and Flask applications supporting SOC 2 and vulnerability assessment work.",
    tags: ["React", "Python", "Flask"],
    logo: "CA",
    logoSrc: "/logos/CloudAnalytics.jpeg",
    linkedInUrl: "https://www.linkedin.com/company/clouds-analytics/"
  },
  {
    date: "Sept. 2025 - Dec. 2025",
    role: "Autonomy Software Developer",
    company: "Waterloo Aerial Robotics Group",
    body: "Engineered a MAVLink ground station for drone autonomy, computer vision, and communication workflows.",
    tags: ["Python", "MAVLink", "OpenCV"],
    logo: "WARG",
    logoSrc: "/logos/WARG.jpeg",
    linkedInUrl: "https://www.linkedin.com/company/waterloo-aerial-robotics-group/"
  },
  {
    date: "Jul. 2025 - Sept. 2025",
    role: "Cybersecurity Intern",
    company: "NetraScale",
    body: "Built React and FastAPI dashboards with Chart.js visuals and LLM-assisted cybersecurity summaries.",
    tags: ["React", "FastAPI", "Chart.js"],
    logo: "NS",
    logoSrc: "/logos/Netrascale.jpeg",
    linkedInUrl: "https://www.linkedin.com/company/netrascale/"
  }
];

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { label: "Java", Icon: FaJava, color: "#f89820" },
      { label: "Python", Icon: FaPython, color: "#4b8bbe" },
      { label: "C#", Icon: SiSharp, color: "#9b4fca" },
      { label: "C++", Icon: SiCplusplus, color: "#659ad2" },
      { label: "TypeScript", Icon: SiTypescript, color: "#3178c6" }
    ]
  },
  {
    title: "Frontend",
    items: [
      { label: "React", Icon: FaReact, color: "#00a8cc" },
      { label: "HTML", Icon: FaHtml5, color: "#e34f26" },
      { label: "CSS", Icon: FaCss3Alt, color: "#1572b6" },
      { label: "JavaScript", Icon: FaJsSquare, color: "#d4a400" },
      { label: "Figma", Icon: FaFigma, color: "#a259ff" }
    ]
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", Icon: FaNodeJs, color: "#68a063" },
      { label: "Express.js", Icon: SiExpress, color: "#1a1a2e" },
      { label: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { label: "Flask", Icon: SiFlask, color: "#1a1a2e" }
    ]
  },
  {
    title: "Security / Data",
    items: [
      { label: "SOC 2", Icon: ShieldCheck, color: "#00C896" },
      { label: "MongoDB", Icon: SiMongodb, color: "#47a248" },
      { label: "OpenCV", Icon: SiOpencv, color: "#5c3ee8" },
      { label: "YOLO / ML", Icon: TbHexagonLetterY, color: "#d99000" }
    ]
  },
  {
    title: "Hardware",
    items: [
      { label: "Arduino", Icon: SiArduino, color: "#00979d" },
      { label: "ESP32", Icon: TbCircuitResistor, color: "#00a8cc" },
      { label: "Raspberry Pi", Icon: FaRaspberryPi, color: "#c51a4a" },
      { label: "FPGA", Icon: TbBrain, color: "#d99000" }
    ]
  },
  {
    title: "Tools",
    items: [
      { label: "Git", Icon: FaGitAlt, color: "#f05032" },
      { label: "Docker", Icon: FaDocker, color: "#2496ed" },
      { label: "VS Code", Icon: VscVscode, color: "#007acc" },
      { label: "Linux", Icon: FaLinux, color: "#d4a400" }
    ]
  }
];

const esportsStats = {
  trophies: "55,000+",
  maxBrawlers: 12,
  winRate: "61%",
  pushRank: "#847",
  pushMode: "Power League"
};

const placements = [
  { year: "2024", tournament: "NA Open Qualifier", placement: "Top 64" },
  { year: "2023", tournament: "Community Cup", placement: "1st Place" },
  { year: "2022", tournament: "Club League Finals", placement: "Top 8" }
];

const organizations = [
  { initials: "IM", name: "Independent", role: "Player", years: "2020 - 2022" },
  { initials: "CC", name: "Community Circuit", role: "Flex", years: "2023" },
  { initials: "PL", name: "Power League Squad", role: "Captain", years: "2024 - Now" }
];

type WeightPoint = { date: string; value: number };

// Written by scripts/sync_fitness.py from MyFitnessPal.
type FitnessData = {
  lastSynced: string;
  nutrition: { daysLogged: number; calories: number; protein: number; carbs: number; fat: number };
  weightUnit: string;
  weight: WeightPoint[];
};

const trainingData = {
  activity: {
    stepsAverage: 8400,
    stepsGoal: 10000,
    activeDays: "22 / 30",
    workoutDuration: "58 min"
  }
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">(() => (new URLSearchParams(window.location.search).get("theme") === "light" ? "light" : "dark"));
  const [activePanel, setActivePanel] = useState<Panel | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const sectionIds = useMemo(() => ["home", ...sectionNavItems.map((item) => item.id)], []);

  const openPanel = (panel: Panel) => {
    setActiveProject(null);
    setActivePanel(panel);
    window.history.pushState(null, "", `#${panel}`);
  };

  const openProject = (project: Project) => {
    setActivePanel(null);
    setActiveProject(project);
    window.history.pushState(null, "", `#project-${slugify(project.title)}`);
  };

  const closePanel = () => {
    setActivePanel(null);
    setActiveProject(null);
    window.history.pushState(null, "", "#projects");
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const syncPanelFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "esports" || hash === "training") {
        setActiveProject(null);
        setActivePanel(hash);
        return;
      }

      if (hash.startsWith("project-")) {
        const projectSlug = hash.replace("project-", "");
        const project = projects.find((item) => slugify(item.title) === projectSlug);
        if (project) {
          setActivePanel(null);
          setActiveProject(project);
        }
        return;
      }

      setActivePanel(null);
      setActiveProject(null);
    };

    syncPanelFromHash();
    window.addEventListener("hashchange", syncPanelFromHash);
    return () => window.removeEventListener("hashchange", syncPanelFromHash);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const current = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          return element ? { id, top: Math.abs(element.getBoundingClientRect().top - 92) } : null;
        })
        .filter((entry): entry is { id: string; top: number } => entry !== null)
        .sort((a, b) => a.top - b.top)[0];

      if (current) setActiveSection(current.id);
    };

    updateActiveSection();
    document.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => document.removeEventListener("scroll", updateActiveSection);
  }, [sectionIds]);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -70px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <div className="ambient-grid" />
      <Sidebar
        activeSection={activeSection}
        activePanel={activePanel}
        onOpenPanel={openPanel}
      />
      <main className="content">
        <Header
          theme={theme}
          onToggleTheme={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
        />
        <Hero />
        <About />
        <Experience />
        <Projects onOpenProject={openProject} />
        <Skills />
        <Education />
        <Contact />
      </main>
      {activePanel && (
        <PanelShell tone={activePanel} onBack={closePanel}>
          {activePanel === "esports" ? <EsportsPanel /> : <TrainingPanel />}
        </PanelShell>
      )}
      {activeProject && (
        <PanelShell tone="project" onBack={closePanel}>
          <ProjectPanel project={activeProject} />
        </PanelShell>
      )}
    </div>
  );
}

function Sidebar({
  activeSection,
  activePanel,
  onOpenPanel
}: {
  activeSection: string;
  activePanel: Panel | null;
  onOpenPanel: (panel: Panel) => void;
}) {
  return (
    <aside className="sidebar" id="primary-sidebar">
      <div className="profile">
        <img src="/assets/ishaan-portrait.png" alt="Portrait of Ishaan Mittal" />
        <h1>Ishaan Mittal</h1>
        <p>Computer Engineering Student</p>
        <span>University of Waterloo</span>
      </div>

      <nav className="side-nav" aria-label="Primary">
        {sectionNavItems.map(({ id, label, Icon }, index) => (
          <a
            key={id}
            className={`nav-link ${activeSection === id ? "active" : ""}`}
            href={`#${id}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <Icon aria-hidden="true" />
            {label}
          </a>
        ))}
        {panelNavItems.map(({ id, label, Icon }, index) => (
          <button
            key={id}
            type="button"
            className={`nav-link nav-button ${activePanel === id ? "active" : ""}`}
            style={{ animationDelay: `${(sectionNavItems.length + index) * 0.05}s` }}
            onClick={() => onOpenPanel(id as Panel)}
          >
            <Icon aria-hidden="true" />
            {label}
          </button>
        ))}
      </nav>

      <section className="sidebar-section social">
        <h2>Socials</h2>
        <div>
          <a href="https://github.com/IshaanMittal07" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/ishaan-mittal10/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin aria-hidden="true" />
          </a>
          <a href="mailto:imittal@uwaterloo.ca" aria-label="Email">
            <Mail aria-hidden="true" />
          </a>
          <a href="/assets/IshaanMittal.pdf" aria-label="Resume">
            <Download aria-hidden="true" />
          </a>
        </div>
      </section>

      <p className="copyright">&copy; 2026 Ishaan Mittal</p>
    </aside>
  );
}

function Header({
  theme,
  onToggleTheme
}: {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}) {
  return (
    <header className="topbar">
      <a href="#home">Ishaan Mittal</a>
      <div className="topbar-actions">
        <button type="button" className="theme-button" onClick={onToggleTheme} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>
          {theme === "light" ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-rule reveal" id="home">
      <div className="hero-copy">
        <h2>Ishaan Mittal</h2>
        <p>Computer Engineering @ Waterloo</p>
        <div className="hero-actions">
          <a className="button button-outline" href="#contact">
            Contact Me <ExternalLink aria-hidden="true" />
          </a>
          <a className="button button-primary" href="/assets/IshaanMittal.pdf">
            Download Resume <Download aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-geometry" aria-hidden="true">
        {Array.from({ length: 36 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section-rule" id="about">
      <div className="about-details">
        <article className="about-card reveal">
          <div className="about-heading">
            <span className="about-icon"><UserRound aria-hidden="true" /></span>
            <h3>Who Am I?</h3>
          </div>
          <p>Computer Engineering student at Waterloo building across embedded systems, cybersecurity, robotics, and applied software.</p>
        </article>
        <article className="about-card reveal">
          <div className="about-heading">
            <span className="about-icon"><Code2 aria-hidden="true" /></span>
            <h3>Currently Working On</h3>
          </div>
          <ul>
            <li>Developing ESP32 Modbus protocol for hardware communication.</li>
            <li>Researching lightweight PQC for a formal request for proposal (RFP).</li>
            <li>
              Assisting in PQC research with Denis Nwanshi, CEO of{" "}
              <a href="https://www.netrascale.com/" target="_blank" rel="noreferrer">NetraScale</a>, for the NRC's Quantum-Safe Technologies initiative.
            </li>
            <li>Exploring FPGA development with Quartus Prime and Verilog.</li>
          </ul>
        </article>
        <article className="about-card reveal">
          <div className="about-heading">
            <span className="about-icon"><ShieldCheck aria-hidden="true" /></span>
            <h3>Interests</h3>
          </div>
          <ul>
            <li>Post-quantum cryptography development.</li>
            <li>Red teaming and ethical hacking.</li>
            <li>Embedded software development.</li>
          </ul>
          <h4>Desired Positions/Roles</h4>
          <ul>
            <li>Quantum Developer.</li>
            <li>Cybersecurity Analyst.</li>
            <li>Embedded Software Engineer.</li>
            <li>Software Developer/Engineer.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience section-rule" id="experience">
      <p className="label reveal">Experience</p>
      <div className="timeline">
        {experiences.map((experience) => (
          <article className="card reveal" key={`${experience.company}-${experience.role}`}>
            <LogoMark experience={experience} />
            <time>{experience.date}</time>
            <h3>{experience.role}</h3>
            <h4>{experience.company}</h4>
            <p>{experience.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function LogoMark({ experience }: { experience: ExperienceItem }) {
  const [failed, setFailed] = useState(false);
  const content = !failed ? (
    <img src={experience.logoSrc} alt={`${experience.company} logo`} onError={() => setFailed(true)} />
  ) : (
    <span>{experience.logo}</span>
  );

  if (experience.linkedInUrl) {
    return (
      <a className="company-logo" href={experience.linkedInUrl} target="_blank" rel="noreferrer" aria-label={`${experience.company} LinkedIn page`}>
        {content}
      </a>
    );
  }

  return <div className="company-logo">{content}</div>;
}

function Projects({ onOpenProject }: { onOpenProject: (project: Project) => void }) {
  return (
    <section className="projects section-rule" id="projects">
      <div className="section-heading reveal">
        <p className="label">Featured Projects</p>
        <a href="https://github.com/IshaanMittal07" target="_blank" rel="noreferrer">
          View all projects <ExternalLink aria-hidden="true" />
        </a>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card card reveal" key={project.title}>
            <div className="project-summary">
              <span className="project-meta">
                <span>{project.category}</span>
                <time>{project.date}</time>
              </span>
              <div className="project-card-head">
                <ProjectIcon project={project} />
                <span>
                  <span className="project-title">{project.title}</span>
                  <span className="project-hook">{project.hook}</span>
                </span>
              </div>
              <span className="project-footer">
                <span className="tags">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </span>
                <button type="button" className="read-link" onClick={() => onOpenProject(project)}>
                  Learn more <ExternalLink aria-hidden="true" />
                </button>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectIcon({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  return (
    <span className="project-icon">
      {!failed ? <img src={project.image} alt={project.imageAlt} onError={() => setFailed(true)} /> : <Folder aria-hidden="true" />}
    </span>
  );
}

function EsportsPanel() {
  return (
    <div className="panel-content brawl-panel">
      <div className="panel-heading">
        <div>
          <p className="label">Esports · Brawl Stars</p>
          <span className="section-kicker">Competing since 2020</span>
        </div>
      </div>
      <div className="feature-grid">
        <article className="card stat-card">
          <h3>Current Stats</h3>
          <dl>
            <div><dt>Trophies</dt><dd>{esportsStats.trophies}</dd></div>
            <div><dt>Max Brawlers</dt><dd>{esportsStats.maxBrawlers}</dd></div>
            <div><dt>Win Rate</dt><dd>{esportsStats.winRate}</dd></div>
            <div><dt>Push Rank</dt><dd>{esportsStats.pushRank} <span>({esportsStats.pushMode})</span></dd></div>
          </dl>
        </article>
        <article className="card placements-card">
          <h3>Placements</h3>
          <div className="leaderboard">
            {placements.map((placement) => (
              <div key={`${placement.year}-${placement.tournament}`}>
                <span>{placement.year}</span>
                <strong>{placement.tournament}</strong>
                <em>{placement.placement}</em>
              </div>
            ))}
          </div>
        </article>
        <article className="card org-card">
          <h3>Organizations</h3>
          <div className="org-list">
            {organizations.map((org) => (
              <div key={org.name}>
                <span>{org.initials}</span>
                <strong>{org.name}</strong>
                <p>{org.role} · {org.years}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}

function useFitnessData() {
  const [data, setData] = useState<FitnessData | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/data/fitness.json")
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json() as Promise<FitnessData>;
      })
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { data, failed };
}

function formatSyncDate(isoDate: string) {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function TrainingPanel() {
  const { data: fitness, failed } = useFitnessData();
  const progress = Math.min((trainingData.activity.stepsAverage / trainingData.activity.stepsGoal) * 100, 100);

  return (
    <div className="panel-content gym-panel">
      <div className="panel-heading">
        <div>
          <p className="label">Training</p>
          <span className="section-kicker">Nutrition, activity, and weekly trend</span>
        </div>
      </div>
      <div className="feature-grid">
        <article className="card nutrition-card">
          <h3>Nutrition</h3>
          {fitness ? (
            <>
              <NutritionRow label="Calories" value={`${fitness.nutrition.calories.toLocaleString()} kcal`} />
              <NutritionRow label="Protein" value={`${fitness.nutrition.protein}g`} />
              <NutritionRow label="Carbs" value={`${fitness.nutrition.carbs}g`} />
              <NutritionRow label="Fat" value={`${fitness.nutrition.fat}g`} />
              <NutritionRow label="Source" value="MyFitnessPal" />
              <footer>
                Daily average over {fitness.nutrition.daysLogged} logged days · Last synced: {formatSyncDate(fitness.lastSynced)}
              </footer>
            </>
          ) : (
            <p>{failed ? "Nutrition data is unavailable right now." : "Loading nutrition data..."}</p>
          )}
        </article>
        <article className="card activity-card">
          <h3>Activity Stats</h3>
          <p>Daily Steps (7-day avg)</p>
          <div className="progress-bar" aria-label={`${trainingData.activity.stepsAverage} of ${trainingData.activity.stepsGoal} daily steps`}>
            <span style={{ width: `${progress}%` }} />
          </div>
          <strong>{trainingData.activity.stepsAverage.toLocaleString()} / {trainingData.activity.stepsGoal.toLocaleString()}</strong>
          <p>Active Days this month: <b>{trainingData.activity.activeDays}</b></p>
          <p>Avg Workout Duration: <b>{trainingData.activity.workoutDuration}</b></p>
        </article>
        <article className="card chart-card">
          <h3>Weight Curve</h3>
          {fitness && fitness.weight.length > 0 ? (
            <WeightChart data={fitness.weight} unit={fitness.weightUnit} />
          ) : (
            <p>{failed || fitness ? "Weight data is unavailable right now." : "Loading weight data..."}</p>
          )}
        </article>
      </div>
    </div>
  );
}

function PanelShell({
  tone,
  children,
  onBack
}: {
  tone: "project" | Panel;
  children: ReactNode;
  onBack: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onBack();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onBack]);

  return (
    <div className={`panel-overlay ${tone}`} role="dialog" aria-modal="true">
      <section className="panel-tab">
        <button type="button" className="back-button" onClick={onBack}>
          <ArrowLeft aria-hidden="true" />
          Back
        </button>
        {children}
      </section>
    </div>
  );
}

function ProjectPanel({ project }: { project: Project }) {
  return (
    <article className="panel-content project-panel">
      <div className="project-article-hero">
        <ProjectIcon project={project} />
        <div>
          <p className="label">{project.category} · {project.date}</p>
          <h2>{project.title}</h2>
          <p>{project.hook}</p>
        </div>
      </div>

      <div className="project-article-grid">
        <div className="project-gallery">
          {project.gallery.map((item, index) => (
            <figure key={item} className="gallery-tile">
              {index === 0 ? <img src={project.image} alt={project.imageAlt} /> : <ProjectIcon project={project} />}
              <figcaption>{item}</figcaption>
            </figure>
          ))}
        </div>
        <div className="project-article-copy">
          <h3>Overview</h3>
          <p>{project.writeup}</p>
          <h3>Key Outcomes</h3>
          <ul>
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
          <TagList tags={project.tags} />
          <a className="button button-primary" href={project.github} target="_blank" rel="noreferrer">
            Open GitHub <ExternalLink aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function NutritionRow({ label, value }: { label: string; value: string }) {
  return (
    <p className="nutrition-row">
      <span>{label}</span>
      <strong>{value}</strong>
    </p>
  );
}

const weightRanges = [
  { id: "3M", months: 3 },
  { id: "6M", months: 6 },
  { id: "1Y", months: 12 },
  { id: "All", months: null }
] as const;

type WeightRange = (typeof weightRanges)[number]["id"];

function parseIsoDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatShortDate(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatWeight(value: number, unit: string) {
  return `${Number(value.toFixed(1))} ${unit}`;
}

// Round an axis step to 1, 2, 5, or 10 times a power of ten so tick labels stay readable.
function niceStep(span: number, targetTicks: number) {
  const raw = span / targetTicks;
  const magnitude = 10 ** Math.floor(Math.log10(raw));
  const normalized = raw / magnitude;
  return (normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10) * magnitude;
}

function WeightChart({ data, unit }: { data: WeightPoint[]; unit: string }) {
  const [range, setRange] = useState<WeightRange>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const gradientId = useId();

  const allPoints = useMemo(
    () => data.map((point) => ({ ...point, time: parseIsoDate(point.date).getTime() })).sort((a, b) => a.time - b.time),
    [data]
  );
  const visible = useMemo(() => {
    const months = weightRanges.find((option) => option.id === range)?.months;
    if (!months) return allPoints;
    const last = new Date(allPoints[allPoints.length - 1].time);
    const cutoff = new Date(last.getFullYear(), last.getMonth() - months, last.getDate()).getTime();
    return allPoints.filter((point) => point.time >= cutoff);
  }, [allPoints, range]);

  // Draw at the rendered pixel width so labels keep their real font size on small screens.
  const plotRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(640);
  useEffect(() => {
    const element = plotRef.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => setWidth(Math.max(Math.round(entry.contentRect.width), 240)));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const height = width < 480 ? 220 : 260;
  const margin = { top: 16, right: 18, bottom: 30, left: 40 };
  const plotWidth = width - margin.left - margin.right;
  const plotHeight = height - margin.top - margin.bottom;

  const values = visible.map((point) => point.value);
  const yStep = niceStep(Math.max(Math.max(...values) - Math.min(...values), 4), 4);
  const yMin = Math.floor(Math.min(...values) / yStep) * yStep;
  const yMax = Math.max(Math.ceil(Math.max(...values) / yStep) * yStep, yMin + yStep);
  const halfMonth = 15 * 24 * 60 * 60 * 1000;
  const tMin = visible[0].time - (visible.length === 1 ? halfMonth : 0);
  const tMax = visible[visible.length - 1].time + (visible.length === 1 ? halfMonth : 0);

  const xFor = (time: number) => margin.left + ((time - tMin) / (tMax - tMin)) * plotWidth;
  const yFor = (value: number) => margin.top + ((yMax - value) / (yMax - yMin)) * plotHeight;
  const points = visible.map((point) => ({ ...point, x: xFor(point.time), y: yFor(point.value) }));

  const yTicks = Array.from({ length: Math.round((yMax - yMin) / yStep) + 1 }, (_, index) => yMin + index * yStep);
  const first = new Date(tMin);
  const last = new Date(tMax);
  const spanMonths = (last.getFullYear() - first.getFullYear()) * 12 + last.getMonth() - first.getMonth();
  const monthStep = Math.max(1, Math.ceil(spanMonths / Math.max(2, Math.floor(plotWidth / 90))));
  const xTicks: Date[] = [];
  for (
    let tick = new Date(first.getFullYear(), first.getMonth() + 1, 1);
    tick.getTime() <= tMax;
    tick = new Date(tick.getFullYear(), tick.getMonth() + monthStep, 1)
  ) {
    xTicks.push(tick);
  }

  const linePath = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const baseline = margin.top + plotHeight;
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${baseline} L ${points[0].x} ${baseline} Z`;

  const start = visible[0];
  const current = visible[visible.length - 1];
  const change = current.value - start.value;
  const changePercent = (change / start.value) * 100;
  const active = activeIndex === null ? null : points[activeIndex];
  const ChangeIcon = change <= 0 ? TrendingDown : TrendingUp;

  const selectNearest = (event: ReactPointerEvent<SVGSVGElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * width;
    let nearest = 0;
    points.forEach((point, index) => {
      if (Math.abs(point.x - x) < Math.abs(points[nearest].x - x)) nearest = index;
    });
    setActiveIndex(nearest);
  };

  const handleKeyDown = (event: ReactKeyboardEvent<SVGSVGElement>) => {
    const lastIndex = points.length - 1;
    const moves: Record<string, number> = {
      ArrowLeft: Math.max((activeIndex ?? lastIndex) - 1, 0),
      ArrowRight: Math.min((activeIndex ?? lastIndex) + 1, lastIndex),
      Home: 0,
      End: lastIndex
    };
    if (event.key in moves) {
      event.preventDefault();
      setActiveIndex(moves[event.key]);
    }
  };

  return (
    <div className="weight-panel">
      <div className="weight-toolbar">
        <div className="weight-stats">
          <div className="weight-stat">
            <span>Start</span>
            <strong>{formatWeight(start.value, unit)}</strong>
            <small>{formatShortDate(new Date(start.time))}</small>
          </div>
          <div className="weight-stat">
            <span>Current</span>
            <strong>{formatWeight(current.value, unit)}</strong>
            <small>{formatShortDate(new Date(current.time))}</small>
          </div>
          <div className="weight-stat weight-change">
            <span>Change</span>
            <strong>
              <ChangeIcon aria-hidden="true" />
              {formatWeight(Math.abs(change), unit)}
            </strong>
            <small>({changePercent > 0 ? "+" : ""}{changePercent.toFixed(1)}%)</small>
          </div>
        </div>
        <div className="range-toggle" role="group" aria-label="Weight chart range">
          {weightRanges.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={range === option.id}
              onClick={() => {
                setRange(option.id);
                setActiveIndex(null);
              }}
            >
              {option.id}
            </button>
          ))}
        </div>
      </div>

      <div className="weight-chart-plot" ref={plotRef}>
        <svg
          className="weight-chart"
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          tabIndex={0}
          aria-label={`Weight from ${formatWeight(start.value, unit)} to ${formatWeight(current.value, unit)} over ${visible.length} weigh-ins. Use arrow keys to inspect entries.`}
          onPointerMove={selectNearest}
          onPointerDown={selectNearest}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") setActiveIndex(null);
          }}
          onFocus={() => setActiveIndex((index) => index ?? points.length - 1)}
          onBlur={() => setActiveIndex(null)}
          onKeyDown={handleKeyDown}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" style={{ stopColor: "var(--primary)", stopOpacity: 0.28 }} />
              <stop offset="100%" style={{ stopColor: "var(--primary)", stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          {yTicks.map((tick) => (
            <g key={tick}>
              <line className="grid-line" x1={margin.left} x2={width - margin.right} y1={yFor(tick)} y2={yFor(tick)} />
              <text x={margin.left - 8} y={yFor(tick) + 4} textAnchor="end">{tick}</text>
            </g>
          ))}
          {xTicks.map((tick) => (
            <text key={tick.getTime()} x={xFor(tick.getTime())} y={height - 8} textAnchor="middle">
              {`${tick.toLocaleDateString("en-US", { month: "short" })} '${String(tick.getFullYear()).slice(2)}`}
            </text>
          ))}
          <path className="area" d={areaPath} fill={`url(#${gradientId})`} />
          <path className="line" d={linePath} />
          {active && <line className="guide" x1={active.x} x2={active.x} y1={margin.top} y2={baseline} />}
          {points.map((point, index) => (
            <circle
              key={point.date}
              className={`point ${index === activeIndex ? "active" : ""}`}
              cx={point.x}
              cy={point.y}
              r={index === activeIndex ? 6 : 3.5}
            />
          ))}
        </svg>
        {active && (
          <div
            className="weight-tooltip"
            style={{
              left: `${(active.x / width) * 100}%`,
              top: `${(active.y / height) * 100}%`,
              transform: `translate(${active.x / width > 0.8 ? "-100%" : active.x / width < 0.2 ? "0" : "-50%"}, calc(-100% - 12px))`
            }}
          >
            <strong>{formatWeight(active.value, unit)}</strong>
            {formatShortDate(new Date(active.time))}
          </div>
        )}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="skills section-rule" id="skills">
      <p className="label reveal">Tech Stack</p>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <article className="card reveal" key={group.title}>
            <h3>{group.title}</h3>
            {group.items.map(({ label, Icon, color }) => (
              <p key={label}>
                <Icon className="skill-icon" style={{ color }} aria-hidden="true" />
                {label}
              </p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="education section-rule" id="education">
      <article className="education-card card reveal">
        <p className="label">Education</p>
        <div className="education-heading">
          <LogoTile src="/logos/Waterloo.jpeg" fallback="UW" alt="University of Waterloo logo" size="large" />
          <div>
            <h3>University of Waterloo</h3>
            <p>BASc, Computer Engineering</p>
          </div>
        </div>
        <time>Sept. 2025 - Present</time>
      </article>
    </section>
  );
}

function LogoTile({ src, fallback, alt, size = "normal" }: { src: string; fallback: string; alt: string; size?: "normal" | "large" }) {
  const [failed, setFailed] = useState(false);

  return (
    <span className={`logo-tile ${size}`}>
      {!failed ? <img src={src} alt={alt} onError={() => setFailed(true)} /> : <strong>{fallback}</strong>}
    </span>
  );
}

function Contact() {
  return (
    <section className="contact section-rule" id="contact">
      <article className="contact-card reveal">
        <p className="label">Let's Connect</p>
        <p>Open to internships, projects, and collabs.</p>
        <div className="contact-links">
          <a className="card" href="mailto:imittal@uwaterloo.ca">
            <Mail aria-hidden="true" />
            imittal@uwaterloo.ca
            <span><ExternalLink aria-hidden="true" /></span>
          </a>
          <a className="card" href="https://www.linkedin.com/in/ishaan-mittal10/" target="_blank" rel="noreferrer">
            <Linkedin aria-hidden="true" />
            linkedin.com/in/ishaan-mittal10
            <span><ExternalLink aria-hidden="true" /></span>
          </a>
          <a className="card" href="https://github.com/IshaanMittal07" target="_blank" rel="noreferrer">
            <Github aria-hidden="true" />
            github.com/IshaanMittal07
            <span><ExternalLink aria-hidden="true" /></span>
          </a>
        </div>
      </article>
    </section>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
}

export default App;
