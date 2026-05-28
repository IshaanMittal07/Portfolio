import {
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  Folder,
  Github,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  UserRound
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaDocker,
  FaLinux,
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
import type { CSSProperties, ComponentType, SVGProps } from "react";
import { useEffect, useMemo, useState } from "react";
import Beams from "./components/Beams";

type NavItem = {
  id: string;
  label: string;
  Icon: typeof Home;
};

type Project = {
  title: string;
  body: string;
  tags: string[];
  className: string;
  github: string;
  secondary: { label: string; href: string };
  language?: string;
};

type Experience = {
  date: string;
  role: string;
  company: string;
  body: string;
  tags: string[];
  logo: string;
  logoUrl: string;
};

type SkillGroup = {
  title: string;
  items: { label: string; Icon: ComponentType<SVGProps<SVGSVGElement> & { style?: CSSProperties }>; color: string }[];
};

const navItems: NavItem[] = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: UserRound },
  { id: "projects", label: "Projects", Icon: Folder },
  { id: "experience", label: "Experience", Icon: Briefcase },
  { id: "skills", label: "Skills", Icon: Code2 },
  { id: "education", label: "Education", Icon: GraduationCap },
  { id: "contact", label: "Contact", Icon: Mail }
];

const projects: Project[] = [
  {
    title: "Greenify",
    body: "Python ML application that detects food waste, using YOLO and OpenCV datasets to promote environmental sustainability.",
    tags: ["Python", "OpenCV", "ML", "Figma"],
    className: "greenify",
    github: "https://github.com/IshaanMittal07",
    secondary: { label: "Case Study", href: "#contact" },
    language: "Python"
  },
  {
    title: "SmartVault",
    body: "Java banking simulator with Face ID authentication, transfers, balance management, stock tracking, and barcode lookup.",
    tags: ["Java", "OpenCV", "Java Swing", "ZXing"],
    className: "smartvault",
    github: "https://github.com/IshaanMittal07/SmartVault",
    secondary: { label: "Demo", href: "https://youtu.be/Vu_eO2Fyd28" },
    language: "Java"
  },
  {
    title: "BookVault",
    body: "C# library management system with login, checkout and return flows, ratings, file persistence, due dates, and ISBN scanning.",
    tags: ["C#", "Windows Forms", ".NET MAUI"],
    className: "bookvault",
    github: "https://github.com/IshaanMittal07/BookVault",
    secondary: { label: "Preview", href: "https://ibb.co/vGj0ZHz" },
    language: "C#"
  },
  {
    title: "SeniorBenefits",
    body: "TypeScript product helping seniors, permanent residents, and non-citizens discover benefits they may be eligible for.",
    tags: ["TypeScript", "React", "Product"],
    className: "seniorbenefits",
    github: "https://github.com/IshaanMittal07/SeniorBenefits",
    secondary: { label: "Repo", href: "https://github.com/IshaanMittal07/SeniorBenefits" },
    language: "TypeScript"
  },
  {
    title: "ArcticAnalytics",
    body: "JavaScript analytics project exploring dashboards and data views for decision-making workflows.",
    tags: ["JavaScript", "Analytics", "UI"],
    className: "arcticanalytics",
    github: "https://github.com/IshaanMittal07/ArcticAnalytics",
    secondary: { label: "Repo", href: "https://github.com/IshaanMittal07/ArcticAnalytics" },
    language: "JavaScript"
  },
  {
    title: "DroneGroundStation",
    body: "Python ground-station work connected to autonomy systems, MAVLink communication, and computer vision control modules.",
    tags: ["Python", "MAVLink", "Robotics"],
    className: "dronegroundstation",
    github: "https://github.com/IshaanMittal07/DroneGroundStation",
    secondary: { label: "Repo", href: "https://github.com/IshaanMittal07/DroneGroundStation" },
    language: "Python"
  }
];

const experiences: Experience[] = [
  {
    date: "Mar. 2026 - Present",
    role: "Quantum Hardware/Software Development Intern",
    company: "SQE.io",
    body: "Implementing quantum-safe financial transactions and encrypted communication systems with Python, TypeScript, TLS, ESP32, Raspberry Pi, RS485, and Modbus.",
    tags: ["Python", "TypeScript", "Hardware"],
    logo: "SQ",
    logoUrl: "https://logo.clearbit.com/sqe.io"
  },
  {
    date: "Feb. 2026 - May 2026",
    role: "Software Development Intern",
    company: "Clouds Analytics",
    body: "Developed secure full-stack web applications with React, Python, and Flask while supporting SOC 2, vulnerability assessment, and secure coding work.",
    tags: ["React", "Python", "Flask"],
    logo: "CA",
    logoUrl: "https://logo.clearbit.com/cloudsanalytics.com"
  },
  {
    date: "Sept. 2025 - Dec. 2025",
    role: "Autonomy Software Developer",
    company: "Waterloo Aerial Robotics Group",
    body: "Engineered a Python ground station using MAVLink, multi-process architecture, and computer vision to improve drone communication and orientation accuracy.",
    tags: ["Python", "MAVLink", "OpenCV"],
    logo: "UW",
    logoUrl: "https://logo.clearbit.com/uwarg.com"
  },
  {
    date: "Jul. 2025 - Sept. 2025",
    role: "Cybersecurity Intern",
    company: "NetraScale",
    body: "Built React/FastAPI dashboards, Chart.js visuals, and LLM-assisted summaries that made cybersecurity policy and threat analysis easier to understand.",
    tags: ["React", "FastAPI", "Chart.js"],
    logo: "NS",
    logoUrl: "https://logo.clearbit.com/netrascale.com"
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
      { label: "React", Icon: FaReact, color: "#61dafb" },
      { label: "HTML", Icon: FaHtml5, color: "#e34f26" },
      { label: "CSS", Icon: FaCss3Alt, color: "#1572b6" },
      { label: "JavaScript", Icon: FaJsSquare, color: "#f7df1e" },
      { label: "Figma", Icon: FaFigma, color: "#a259ff" }
    ]
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", Icon: FaNodeJs, color: "#68a063" },
      { label: "Express.js", Icon: SiExpress, color: "#d8dedb" },
      { label: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { label: "Flask", Icon: SiFlask, color: "#d8dedb" }
    ]
  },
  {
    title: "Security / Data",
    items: [
      { label: "SOC 2", Icon: ShieldCheck, color: "#62f58a" },
      { label: "MongoDB", Icon: SiMongodb, color: "#47a248" },
      { label: "OpenCV", Icon: SiOpencv, color: "#5c3ee8" },
      { label: "YOLO / ML", Icon: TbHexagonLetterY, color: "#ffae61" }
    ]
  },
  {
    title: "Hardware",
    items: [
      { label: "Arduino", Icon: SiArduino, color: "#00979d" },
      { label: "ESP32", Icon: TbCircuitResistor, color: "#66d4ff" },
      { label: "Raspberry Pi", Icon: FaRaspberryPi, color: "#c51a4a" },
      { label: "FPGA", Icon: TbBrain, color: "#ffb15f" }
    ]
  },
  {
    title: "Tools",
    items: [
      { label: "Git", Icon: FaGitAlt, color: "#f05032" },
      { label: "Docker", Icon: FaDocker, color: "#2496ed" },
      { label: "VS Code", Icon: VscVscode, color: "#007acc" },
      { label: "Linux", Icon: FaLinux, color: "#f0c674" }
    ]
  }
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const updateActiveSection = () => {
      const current = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          return element ? { id, top: Math.abs(element.getBoundingClientRect().top - 80) } : null;
        })
        .filter(Boolean)
        .sort((a, b) => a!.top - b!.top)[0];

      if (current) setActiveSection(current.id);
    };

    updateActiveSection();
    document.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => document.removeEventListener("scroll", updateActiveSection);
  }, [sectionIds]);

  return (
    <div className="page-shell">
      <div className="ambient-grid" />
      <Sidebar activeSection={activeSection} />
      <main className="content">
        <Header theme={theme} onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))} />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <BottomPanels />
      </main>
    </div>
  );
}

function Sidebar({ activeSection }: { activeSection: string }) {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="/assets/ishaan-portrait.png" alt="Portrait of Ishaan Mittal" />
        <h1>Ishaan Mittal</h1>
        <p>Computer Engineering Student</p>
        <span>University of Waterloo</span>
      </div>

      <div className="identity-links">
        <a href="https://www.linkedin.com/in/ishaan-mittal10/" target="_blank" rel="noreferrer">
          <Linkedin aria-hidden="true" />
          LinkedIn
        </a>
        <a href="mailto:imittal@uwaterloo.ca">
          <Mail aria-hidden="true" />
          imittal@uwaterloo.ca
        </a>
      </div>

      <nav className="side-nav" aria-label="Primary">
        {navItems.map(({ id, label, Icon }) => (
          <a key={id} className={`nav-link ${activeSection === id ? "active" : ""}`} href={`#${id}`}>
            <Icon aria-hidden="true" />
            {label}
          </a>
        ))}
      </nav>

      <section className="sidebar-section">
        <h2>Statistics</h2>
        <dl>
          <div>
            <dt>40</dt>
            <dd>Public repositories</dd>
          </div>
          <div>
            <dt>15+</dt>
            <dd>Technologies</dd>
          </div>
          <div>
            <dt>4</dt>
            <dd>Recent roles</dd>
          </div>
        </dl>
      </section>

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

function Header({ theme, onToggleTheme }: { theme: "dark" | "light"; onToggleTheme: () => void }) {
  return (
    <header className="topbar">
      <a href="#home">ISHAAN MITTAL</a>
      <div className="topbar-actions">
        <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle light mode">
          {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </button>
        <button type="button" className="menu-button" onClick={() => document.querySelector(".side-nav")?.scrollIntoView({ behavior: "smooth" })}>
          MENU
          <Menu aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <motion.section className="hero section-rule" id="home" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}>
      <div className="hero-beams" aria-hidden="true">
        <div className="beams-frame">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
      </div>
      <motion.div className="hero-copy" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
        <h2>Computer engineer building secure software systems.</h2>
        <p>Computer Engineering student at the University of Waterloo building backend, robotics, computer vision, and cybersecurity projects.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects <ExternalLink aria-hidden="true" />
          </a>
          <a className="button" href="#contact">
            Contact Me <ExternalLink aria-hidden="true" />
          </a>
          <a className="button" href="/assets/IshaanMittal.pdf">
            Download Resume <Download aria-hidden="true" />
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}

function About() {
  return (
    <motion.section className="about section-rule" id="about" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={sectionVariants}>
      <div className="about-copy">
        <p className="label">About Me</p>
        <p>Hey, I am Ishaan, a Computer Engineering student at the University of Waterloo building software at the intersection of engineering, automation, and real-world impact.</p>
        <p>I have built projects across medical AI, banking, robotics, and cybersecurity, and I like taking ideas from zero to working product.</p>
      </div>
      <ValueCard title="Problem Solver" icon={<Code2 aria-hidden="true" />} body="I break down technical systems and turn them into working tools." />
      <ValueCard title="Product Builder" icon={<Folder aria-hidden="true" />} body="I care about useful workflows, clean interfaces, and reliable systems." />
      <ValueCard title="Security Minded" icon={<ShieldCheck aria-hidden="true" />} body="I build with attention to privacy, risk, and long-term resilience." />
    </motion.section>
  );
}

function ValueCard({ title, body, icon }: { title: string; body: string; icon: React.ReactNode }) {
  return (
    <motion.article className="value-card" variants={itemVariants}>
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </motion.article>
  );
}

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [repoProjects, setRepoProjects] = useState<Project[]>(projects);

  useEffect(() => {
    let cancelled = false;
    fetch("https://api.github.com/users/IshaanMittal07/repos?sort=updated&per_page=12")
      .then((response) => (response.ok ? response.json() : Promise.reject(new Error("GitHub unavailable"))))
      .then((repos: Array<{ name: string; html_url: string; description: string | null; language: string | null; fork: boolean }>) => {
        if (cancelled) return;
        const imported = repos
          .filter((repo) => !repo.fork)
          .slice(0, 6)
          .map<Project>((repo) => ({
            title: repo.name,
            body: repo.description || `Public ${repo.language || "software"} repository from Ishaan's GitHub profile.`,
            tags: [repo.language || "GitHub", "Repository"],
            className: "github-import",
            github: repo.html_url,
            secondary: { label: "Repo", href: repo.html_url },
            language: repo.language || "GitHub"
          }));
        setRepoProjects([...projects.slice(0, 3), ...imported.filter((repo) => !projects.some((project) => project.title === repo.title)).slice(0, 6)]);
      })
      .catch(() => setRepoProjects(projects));
    return () => {
      cancelled = true;
    };
  }, []);

  const visibleProjects = repoProjects.slice(activeIndex, activeIndex + 3);
  const canGoNext = activeIndex < Math.max(repoProjects.length - 3, 0);

  return (
    <motion.section className="projects section-rule" id="projects" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={sectionVariants}>
      <div className="section-heading">
        <p className="label">Featured Projects</p>
        <div className="carousel-controls">
          <button type="button" onClick={() => setActiveIndex((index) => Math.max(index - 1, 0))} aria-label="Previous projects">
            <ChevronLeft aria-hidden="true" />
          </button>
          <button type="button" onClick={() => setActiveIndex((index) => (canGoNext ? index + 1 : 0))} aria-label="Next projects">
            <ChevronRight aria-hidden="true" />
          </button>
          <a href="https://github.com/IshaanMittal07" target="_blank" rel="noreferrer">
            View all projects <ExternalLink aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="project-grid">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article className="project-card" key={`${activeIndex}-${project.title}`} layout initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }} transition={{ duration: 0.35 }}>
              <ProjectMedia project={project} />
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.body}</p>
                <TagList tags={project.tags} />
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub <ExternalLink aria-hidden="true" />
                  </a>
                  <a href={project.secondary.href} target={project.secondary.href.startsWith("#") ? undefined : "_blank"} rel="noreferrer">
                    {project.secondary.label} <ExternalLink aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

function ProjectMedia({ project }: { project: Project }) {
  return (
    <div className={`project-media ${project.className}`}>
      {project.className === "greenify" && (
        <>
          <span>Greenify</span>
          <div className="scan-grid" />
          <strong>900+ images</strong>
        </>
      )}
      {project.className === "smartvault" && (
        <>
          <span>SmartVault</span>
          <div className="vault-card" />
          <strong>Face ID banking</strong>
        </>
      )}
      {project.className === "bookvault" && (
        <>
          <div className="book-logo">B</div>
          <span>BookVault</span>
          <strong>Library system</strong>
        </>
      )}
      {!["greenify", "smartvault", "bookvault"].includes(project.className) && (
        <>
          <span>{project.title}</span>
          <div className="github-orbit">
            <Github aria-hidden="true" />
          </div>
          <strong>{project.language || "GitHub"}</strong>
        </>
      )}
    </div>
  );
}

function Experience() {
  return (
    <motion.section className="experience section-rule" id="experience" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={sectionVariants}>
      <p className="label">Experience</p>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <motion.article key={`${experience.company}-${experience.role}`} variants={itemVariants} transition={{ delay: index * 0.07 }}>
            <i />
            <LogoMark experience={experience} />
            <time>{experience.date}</time>
            <h3>{experience.role}</h3>
            <h4>{experience.company}</h4>
            <p>{experience.body}</p>
            <TagList tags={experience.tags} />
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function LogoMark({ experience }: { experience: Experience }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="company-logo" aria-label={`${experience.company} logo`}>
      {!failed ? (
        <img src={experience.logoUrl} alt="" onError={() => setFailed(true)} />
      ) : (
        <span>{experience.logo}</span>
      )}
    </div>
  );
}

function Skills() {
  return (
    <motion.section className="skills section-rule" id="skills" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={sectionVariants}>
      <p className="label">Tech Stack</p>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <motion.article key={group.title} variants={itemVariants}>
            <h3>{group.title}</h3>
            {group.items.map(({ label, Icon, color }) => (
              <p key={label}>
                <Icon className="skill-icon" style={{ color }} aria-hidden="true" />
                {label}
              </p>
            ))}
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function BottomPanels() {
  return (
    <motion.section className="bottom-panels" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={sectionVariants}>
      <article className="education-card" id="education">
        <p className="label">Education</p>
        <h3>University of Waterloo</h3>
        <p>Candidate for BASc, Computer Engineering</p>
        <time>Sept. 2025 - Present</time>
        <p>Relevant focus: secure software, systems, robotics, computer vision, backend development, and hardware communication.</p>
      </article>

      <article className="contact-card" id="contact">
        <p className="label">Let's Connect</p>
        <p>I am open to discussing internships, software projects, cybersecurity work, robotics, and technical collaborations.</p>
        <a href="mailto:imittal@uwaterloo.ca">
          <Mail aria-hidden="true" />
          imittal@uwaterloo.ca
          <span><ExternalLink aria-hidden="true" /></span>
        </a>
        <a href="https://www.linkedin.com/in/ishaan-mittal10/" target="_blank" rel="noreferrer">
          <Linkedin aria-hidden="true" />
          linkedin.com/in/ishaan-mittal10
          <span><ExternalLink aria-hidden="true" /></span>
        </a>
        <a href="https://github.com/IshaanMittal07" target="_blank" rel="noreferrer">
          <Github aria-hidden="true" />
          github.com/IshaanMittal07
          <span><ExternalLink aria-hidden="true" /></span>
        </a>
      </article>
    </motion.section>
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

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
