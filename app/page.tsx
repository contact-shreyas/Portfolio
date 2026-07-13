"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// ---------- CONFIG: Edit these to personalize ----------
const PROFILE = {
  name: "Shreyas Gupta",
  title: "AI/ML Engineer • Full-Stack Developer • Research Intern",
  tagline:
    "Integrated M.Tech in Artificial Intelligence with hands-on experience in AI systems, cybersecurity research, and full-stack product development.",
  location: "Chennai, India",
  email: "contactshreyasgupta@gmail.com",
  phone: "+91 9151606122",
  linkedin: "https://www.linkedin.com/in/contact-shreyas/",
  github: "https://github.com/contact-shreyas",
  leetcode: "https://leetcode.com/u/Gupta_Shreyas/",
  website: "https://shreyas-gupta-portfolio.vercel.app",
  resumePath: "/resume_shreyas_gupta.pdf",
  photo: "/profile.jpg",
};

// Projects
const PROJECTS = [
  {
    title: "BharatGreen AI",
    period: "Feb 2026 – Mar 2026",
    stack: ["Python", "FastAPI", "Next.js", "TypeScript", "NVIDIA NIM"],
    summary:
      "Built an AI sustainability platform tracking energy, carbon, and water across regions. Integrated NVIDIA Nemotron for optimization insights with a reliable fallback mode, and developed a real-time dashboard with what-if analysis and carbon-aware scheduling tools.",
    github: "https://github.com/contact-shreyas/BharatGreen-AI",
    demo: "https://frontend-nine-bay-81.vercel.app/",
    highlight: true,
    cover: "/covers/bharatgreen.png",
  },
  {
    title: "AI Policy Enforcement Platform",
    period: "Jan 2026 – Mar 2026",
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "SQLAlchemy", "LangChain", "OpenAI GPT-4"],
    summary:
      "Implemented JWT authentication with role-based access control for faculty, students, and admins. Built a PostgreSQL schema with SQLAlchemy for policies, decisions, and metadata logs, and integrated GPT-4 + LangChain for a RAG copilot with citation verification.",
    github: "https://github.com/contact-shreyas/Information-Technology-in-Education",
    demo: "",
    highlight: true,
    cover: "/covers/policy-enforcement.png",
  },
  {
    title: "Infrastructure Configuration Hardening Engine",
    period: "Nov 2025 – Jan 2026",
    stack: ["Node.js", "TypeScript", "Docker", "Kubernetes", "Nginx", "CVSS"],
    summary:
      "Built a TypeScript system for scanning folders, identifying risks, and applying security fixes. Created analyzers for Nginx, Docker, and Kubernetes configurations and developed CVSS-based risk scoring for attack, access, and time factors.",
    github: "https://github.com/contact-shreyas/HardenerAI",
    demo: "",
    highlight: true,
    cover: "/covers/hardening-engine.png",
  },
  {
    title: "GenAI Governance Platform",
    period: "Aug 2025 – Oct 2025",
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Docker"],
    summary:
      "Built a policy decision engine with rule evaluation, conflict detection, and multiple resolution strategies. Implemented privacy-safe audit logging with SHA256 hashing and developed FastAPI endpoints with validation, rate limiting, and CORS.",
    github: "https://github.com/contact-shreyas/GenAI-GOVERNANCE-SYSTEM",
    demo: "",
    highlight: false,
    cover: "/covers/genai-governance.png",
  },
  {
    title: "Light Pollution Explorer 2.0 (Agentic Light Sentinel)",
    period: "Nov 2024 – Present",
    stack: ["Next.js", "TypeScript", "React", "Leaflet", "Prisma", "PostgreSQL", "Earth Engine", "AI Agents"],
    summary:
      "Built an AI-powered geospatial platform mapping light pollution across India with district-level drilldowns and autonomous AI agents. Features time-series data (2013-2024), real-time alerts, and interactive visualizations for environmental monitoring.",
    github: "https://github.com/contact-shreyas/agentic-light-sentinel",
    demo: "",
    highlight: true,
    cover: "/covers/light-pollution.png",
  },
  {
    title: "AI-Powered Fraud Detection System",
    period: "Dec 2024 – Feb 2025",
    stack: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "TensorFlow"],
    summary:
      "Led development of AI fraud detection system enabling real-time threat mitigation. Reduced false positives by 95% using machine learning. Integrated automated compliance checks and developed scalable framework for adaptive detection.",
    github: "",
    demo: "",
    highlight: true,
    cover: "/covers/fraud-detection.svg",
  },
  {
    title: "Medical Visual Question Answering (VQA)",
    period: "Jan 2024 – May 2024",
    stack: ["Deep Learning", "Computer Vision", "NLP", "PyTorch", "Transformers"],
    summary:
      "Built conditional reasoning framework to interpret medical images (X-rays, fractures) and answer domain-specific questions about symptoms, treatments, and diagnoses. Enables AI-assisted medical image analysis.",
    github: "",
    demo: "",
    highlight: false,
    cover: "/covers/medical-vqa.svg",
  },
  {
    title: "AI Assistant Bot",
    period: "Jul 2024 – Nov 2024",
    stack: ["Raspberry Pi", "TensorFlow", "Python", "NLP", "APIs"],
    summary:
      "Implemented machine learning models for natural language understanding and generation. Trained chatbot model integrated with external APIs for scheduling, weather checks, and restaurant recommendations.",
    github: "",
    demo: "",
    highlight: false,
    cover: "/covers/assistant-bot.svg",
  },
  {
    title: "Electricity Billing System",
    period: "Oct 2024 – Dec 2024",
    stack: ["Java", "Swing", "MySQL", "JDBC"],
    summary:
      "Created Java Swing-based application with user-friendly interface for managing electricity bills. Integrated MySQL database for secure storage, automated bill calculation, invoice generation, and developed reporting tools for usage insights.",
    github: "",
    demo: "",
    highlight: false,
    cover: "/covers/electricity-billing.svg",
  },
  {
    title: "Secure Full-Stack Application",
    period: "Dec 2024",
    stack: ["Next.js", "React", "Prisma", "PostgreSQL", "TypeScript"],
    summary:
      "Built secure full-stack web application with authentication, database integration, and modern UI. Implemented best practices for security and performance optimization.",
    github: "https://github.com/contact-shreyas/nextjs-secure-app",
    demo: "",
    highlight: false,
    cover: "/covers/secure-fullstack.png",
  },
];

// Skills organized by category
const SKILLS = {
  "Programming Languages": [
    "Python",
    "C++",
    "SQL",
    "Java",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
  ],
  "AI/ML & Data Science": [
    "TensorFlow",
    "OpenAI API",
    "Google Gemini API",
    "NLP",
    "NLTK",
    "Streamlit",
    "Seaborn",
    "Pandas",
    "NumPy",
    "Matplotlib",
  ],
  "Frameworks & Libraries": [
    "Next.js",
    "React",
    "Node.js",
    "FastAPI",
    "Flask",
    "LangChain",
    "SQLAlchemy",
  ],
  "Tools & Technologies": [
    "Git",
    "GitHub",
    "VS Code",
    "Linux",
    "AWS",
    "Azure",
    "Docker",
    "Jupyter Notebook",
    "Anaconda",
    "PyCharm",
    "Power BI",
    "Tableau",
    "PostgreSQL",
    "SQL",
  ],
};

// Experience
const EXPERIENCE = [
  {
    role: "AI Engineer",
    company: "Revenuxe",
    period: "Jun 2026 – Jul 2026",
    location: "Remote",
    points: [
      "Built and deployed RAG pipelines and agentic AI features for Intorza and Looplic using Python, FastAPI, and LangChain, enabling context-aware automation across core product workflows",
      "Developed a Repair/Sell decision engine for Looplic with Cashify-style device evaluation logic and dynamic pricing, improving operator decision accuracy",
      "Designed and shipped full-stack modules (quotation, invoice, real-time canvas) across Looplic and Intorza using Next.js and PostgreSQL, streamlining end-to-end transaction workflows",
      "Led infrastructure migration of Intorza's backend from AWS Amplify/Supabase to AWS RDS, improving scalability and reducing operational overhead",
      "Debugged and optimized the quotation module's preview editor and invoice generation flow, resolving critical production issues affecting client-facing outputs",
      "Containerized services with Docker to standardize deployment across development and production environments",
    ],
  },
  {
    role: "Cybersecurity Research Intern",
    company: "Indian Institute of Technology, Guwahati",
    period: "Dec 2025 – Mar 2026",
    location: "Guwahati, India",
    points: [
      "Designed modular architecture with CLI, parser, validator, loader, query, and UI modules",
      "Implemented custom LadyBugDB embedded graph database using CSV storage for functions and edges",
      "Explored methods to visualize GitHub collaboration in a classroom setting",
    ],
  },
  {
    role: "Business Strategy Intern",
    company: "To-Let Globe",
    period: "May 2024 – Jul 2024",
    location: "Remote",
    points: [
      "Analyzed rental datasets using SQL and delivered insights through Tableau/Power BI dashboards",
      "Conducted market & competitor research to identify growth opportunities",
      "Supported leadership with data-driven strategic recommendations for platform optimization",
    ],
  },
];

const ACHIEVEMENTS = [
  {
    title: "Winner - Agentic AI Hackathon 2025",
    issuer: "ALPS - Agentic Light Pollution Sentinel",
    date: "Sep 2025",
    location: "Chennai, India",
  },
];

// Certifications
const CERTIFICATIONS = [
  {
    title: "TATA GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Oct 2025",
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte (Forage)",
    date: "Jun 2025",
  },
  {
    title: "Competitive Programming (Certificate of Excellence)",
    issuer: "Coding Ninjas",
    date: "Jun 2024",
  },
  {
    title: "Natural Language Processing",
    issuer: "NPTEL",
    date: "Apr 2025",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "Oct 2023",
  },
];

// Education
const EDUCATION = {
  institution: "SRM Institute of Science and Technology (SRMIST)",
  location: "Chennai, India",
  degree: "M.Tech (Integrated) – Artificial Intelligence",
  period: "Aug 2022 – May 2027",
  gpa: "",
};

// ---------- Motion helpers ----------
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

// Alternating typographic cover treatments for project tiles
const COVER_STYLES = [
  "bg-ink text-cream",
  "bg-beige text-ink",
  "bg-white text-ink",
  "bg-sand text-ink",
  "bg-stone text-ink",
];

function initials(title: string) {
  return title
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

const NAV_LINKS = [
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [chennaiTime, setChennaiTime] = useState("");
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ down: false, moved: false, startX: 0, startLeft: 0 });

  // Quiet live clock for the contact section — my local time in Chennai
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      }).format(new Date());
    setChennaiTime(fmt());
    const timer = setInterval(() => setChennaiTime(fmt()), 60_000);
    return () => clearInterval(timer);
  }, []);

  // Track carousel position for the editorial "01 / 10" counter
  const onCarouselScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const idx = max > 0 ? Math.round((el.scrollLeft / max) * (PROJECTS.length - 1)) : 0;
    setActiveSlide(idx);
  };

  const scrollCarousel = (dir: 1 | -1) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: "smooth" });
  };

  // Mouse drag-to-scroll for the carousel (touch already scrolls natively)
  const onDragStart = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = carouselRef.current;
    if (!el) return;
    dragState.current = { down: true, moved: false, startX: e.clientX, startLeft: el.scrollLeft };
  };
  const onDragMove = (e: React.PointerEvent) => {
    const el = carouselRef.current;
    if (!el || !dragState.current.down) return;
    const dx = e.clientX - dragState.current.startX;
    if (!dragState.current.moved && Math.abs(dx) > 5) {
      dragState.current.moved = true;
      el.setPointerCapture(e.pointerId);
      el.dataset.dragging = "true";
    }
    if (dragState.current.moved) el.scrollLeft = dragState.current.startLeft - dx;
  };
  const onDragEnd = () => {
    const el = carouselRef.current;
    dragState.current.down = false;
    if (el) delete el.dataset.dragging;
  };
  const onCarouselClickCapture = (e: React.MouseEvent) => {
    if (dragState.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      dragState.current.moved = false;
    }
  };

  const featured = [
    {
      label: "Project",
      title: PROJECTS[0].title,
      meta: PROJECTS[0].period,
      href: "#projects",
    },
    {
      label: "Experience",
      title: `${EXPERIENCE[0].role} — ${EXPERIENCE[0].company}`,
      meta: EXPERIENCE[0].period,
      href: "#experience",
    },
    {
      label: "Award",
      title: ACHIEVEMENTS[0].title,
      meta: `${ACHIEVEMENTS[0].date} • ${ACHIEVEMENTS[0].location}`,
      href: "#about",
    },
  ];

  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 border-b border-beige">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-4 flex items-center justify-between">
          <a href="#top" className="text-lg tracking-tight lowercase">
            shreyas<span className="text-smoke">.</span>gupta
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm lowercase">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:underline underline-offset-4">
                {link.label}
              </a>
            ))}
            <a href={PROFILE.resumePath} download className="link-quiet">
              resume
            </a>
          </div>
          <button
            className="md:hidden text-sm lowercase underline underline-offset-4"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            menu
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-cream flex flex-col px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-lg lowercase">
              shreyas<span className="text-smoke">.</span>gupta
            </span>
            <button
              className="text-sm lowercase underline underline-offset-4"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              close
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="display-huge text-[13vw] leading-none hover:text-smoke transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PROFILE.resumePath}
              download
              onClick={() => setMenuOpen(false)}
              className="display-huge text-[13vw] leading-none text-smoke"
            >
              resume
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section id="top" className="pt-32 md:pt-40 pb-16 px-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="display-huge text-[15vw] md:text-[11vw] text-ink-deep"
          >
            Shreyas
            <br />
            Gupta
          </motion.h1>

          <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.9 }}
              className="md:col-span-5"
            >
              <div className="border border-beige bg-white p-3">
                <Image
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  width={560}
                  height={700}
                  className="w-full h-auto object-cover grayscale"
                  priority
                />
              </div>
              <p className="mt-3 text-xs uppercase tracking-widest text-smoke">
                {PROFILE.location}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="md:col-span-7"
            >
              <p className="font-serif italic text-2xl md:text-4xl leading-snug text-balance">
                The official home for my work in AI, engineering, and research.
              </p>
              <p className="mt-6 text-sm uppercase tracking-widest text-smoke">
                {PROFILE.title}
              </p>
              <p className="mt-6 text-base md:text-lg leading-relaxed max-w-xl text-ink">
                {PROFILE.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm lowercase">
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="link-quiet">
                  github
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="link-quiet">
                  linkedin
                </a>
                <a href={PROFILE.leetcode} target="_blank" rel="noopener noreferrer" className="link-quiet">
                  leetcode
                </a>
                <a href={`mailto:${PROFILE.email}`} className="link-quiet">
                  email
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest — featured strip */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-7xl border-t border-beige">
          <motion.p {...reveal} className="pt-6 text-xs uppercase tracking-[0.35em] text-smoke">
            Latest
          </motion.p>
          <div className="mt-6 grid md:grid-cols-3">
            {featured.map((item, i) => (
              <motion.a
                key={i}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.12 }}
                href={item.href}
                className={`group py-8 md:py-10 md:px-8 border-b md:border-b-0 border-beige ${
                  i > 0 ? "md:border-l" : "md:pl-0"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-smoke">{item.label}</p>
                <h3 className="mt-4 text-xl md:text-2xl font-medium leading-snug group-hover:text-smoke transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 font-serif italic text-smoke">{item.meta}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 md:py-28 border-t border-beige scroll-mt-16">
        <div className="px-6 md:px-10 mx-auto max-w-7xl">
          <motion.div {...reveal} className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="section-marker text-[9vw] md:text-[5.5vw]">Projects</h2>
            <div className="flex items-center gap-6 text-sm lowercase pb-2">
              <span className="font-serif italic text-smoke tabular-nums">
                {String(activeSlide + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
              </span>
              <button onClick={() => scrollCarousel(-1)} className="link-quiet">
                prev
              </button>
              <button onClick={() => scrollCarousel(1)} className="link-quiet">
                next
              </button>
            </div>
          </motion.div>
          <motion.p {...reveal} className="mt-4 font-serif italic text-xl md:text-2xl text-smoke max-w-2xl">
            Selected work in AI/ML, security, and full-stack systems.
          </motion.p>
        </div>

        <motion.div {...reveal} className="mt-12">
          <div
            ref={carouselRef}
            onPointerDown={onDragStart}
            onPointerMove={onDragMove}
            onPointerUp={onDragEnd}
            onPointerCancel={onDragEnd}
            onClickCapture={onCarouselClickCapture}
            onScroll={onCarouselScroll}
            className="no-scrollbar carousel-drag flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-10 scroll-pl-6 md:scroll-pl-10 pb-4 select-none cursor-grab"
          >
            {PROJECTS.map((project, i) => (
              <article
                key={i}
                className="group snap-start shrink-0 w-[80vw] sm:w-[46vw] md:w-[30vw] lg:w-[24vw]"
              >
                {/* Cover art: real screenshot / bespoke artwork, typographic fallback */}
                {project.cover ? (
                  <div className="aspect-square border border-beige overflow-hidden bg-white">
                    <Image
                      src={project.cover}
                      alt={`${project.title} — cover`}
                      width={800}
                      height={800}
                      draggable={false}
                      className="w-full h-full object-cover object-top pointer-events-none transition-opacity duration-500 group-hover:opacity-80"
                    />
                  </div>
                ) : (
                  <div
                    className={`aspect-square flex flex-col justify-between p-6 border border-beige ${
                      COVER_STYLES[i % COVER_STYLES.length]
                    }`}
                  >
                    <div className="flex items-start justify-between text-xs uppercase tracking-[0.3em] opacity-70">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      {project.highlight && <span>Featured</span>}
                    </div>
                    <p className="display-huge text-[5rem] md:text-[5.5rem] leading-none self-center">
                      {initials(project.title)}
                    </p>
                    <p className="text-xs uppercase tracking-[0.3em] opacity-70">{project.period}</p>
                  </div>
                )}

                <h3 className="mt-5 text-lg md:text-xl font-medium leading-snug">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-smoke">{project.summary}</p>
                <p className="mt-4 text-xs uppercase tracking-widest text-sand">
                  {project.stack.join(", ")}
                </p>
                <div className="mt-4 flex gap-6 text-sm lowercase">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-quiet">
                      github
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link-quiet">
                      live demo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div {...reveal} className="mt-10 px-6 md:px-10 mx-auto max-w-7xl">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet text-sm lowercase"
          >
            view all on github
          </a>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20 md:py-28 border-t border-beige scroll-mt-16">
        <div className="px-6 md:px-10 mx-auto max-w-7xl">
          <motion.h2 {...reveal} className="section-marker text-[9vw] md:text-[5.5vw]">
            Experience
          </motion.h2>

          <div className="mt-14 max-w-3xl space-y-16">
            {EXPERIENCE.map((exp, i) => (
              <motion.article key={i} {...reveal}>
                <p className="font-serif italic text-lg text-smoke">
                  {exp.period} — {exp.location}
                </p>
                <h3 className="mt-3 text-2xl md:text-4xl font-medium leading-tight">
                  {exp.role}
                </h3>
                <p className="mt-1 text-lg text-smoke">{exp.company}</p>
                <ul className="mt-6 space-y-3 text-base md:text-lg leading-relaxed">
                  {exp.points.map((point, j) => (
                    <li key={j} className="pl-5 border-l border-beige">
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}

            {/* Education */}
            <motion.article {...reveal} className="pt-4 border-t border-beige">
              <p className="pt-10 font-serif italic text-lg text-smoke">
                {EDUCATION.period} — {EDUCATION.location}
              </p>
              <h3 className="mt-3 text-2xl md:text-4xl font-medium leading-tight">
                {EDUCATION.degree}
              </h3>
              <p className="mt-1 text-lg text-smoke">{EDUCATION.institution}</p>
              {EDUCATION.gpa && (
                <p className="mt-4 text-base">CGPA: {EDUCATION.gpa}</p>
              )}
            </motion.article>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 md:py-28 border-t border-beige scroll-mt-16">
        <div className="px-6 md:px-10 mx-auto max-w-7xl">
          <motion.h2 {...reveal} className="section-marker text-[9vw] md:text-[5.5vw]">
            About
          </motion.h2>
          <motion.p {...reveal} className="mt-8 font-serif italic text-2xl md:text-3xl leading-snug max-w-3xl text-balance">
            I&apos;m Shreyas — an engineer working where AI systems meet the real world:
            sustainability platforms, security tooling, and research. I like building
            things end to end, from the model to the interface, and shipping them.
          </motion.p>
          <motion.p {...reveal} className="mt-6 text-xs uppercase tracking-[0.3em] text-smoke">
            Tools, recognition, and credentials
          </motion.p>

          <div className="mt-14 grid md:grid-cols-2 gap-x-16 gap-y-14">
            {/* Skills */}
            <div className="space-y-10">
              {Object.entries(SKILLS).map(([category, skills]) => (
                <motion.div key={category} {...reveal}>
                  <p className="text-xs uppercase tracking-[0.3em] text-smoke">{category}</p>
                  <p className="mt-3 text-base md:text-lg leading-relaxed">
                    {skills.join(", ")}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Awards + Certifications */}
            <div className="space-y-14">
              <motion.div {...reveal}>
                <p className="text-xs uppercase tracking-[0.3em] text-smoke">Awards</p>
                {ACHIEVEMENTS.map((item, i) => (
                  <div key={i} className="mt-5 pb-5 border-b border-beige">
                    <p className="font-serif italic text-smoke">
                      {item.date} — {item.location}
                    </p>
                    <h3 className="mt-2 text-xl font-medium">{item.title}</h3>
                    <p className="mt-1 text-smoke">{item.issuer}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div {...reveal}>
                <p className="text-xs uppercase tracking-[0.3em] text-smoke">Certifications</p>
                <ul className="mt-5">
                  {CERTIFICATIONS.map((cert, i) => (
                    <li key={i} className="py-4 border-b border-beige flex items-baseline justify-between gap-6">
                      <div>
                        <p className="font-medium leading-snug">{cert.title}</p>
                        <p className="text-sm text-smoke">{cert.issuer}</p>
                      </div>
                      <span className="font-serif italic text-smoke whitespace-nowrap">{cert.date}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT — inverted */}
      <section id="contact" className="bg-ink text-cream py-24 md:py-32 scroll-mt-16">
        <div className="px-6 md:px-10 mx-auto max-w-7xl text-center">
          <motion.p {...reveal} className="font-serif italic text-2xl md:text-3xl text-stone">
            Have a project, a role, or just an idea worth chasing? Write to me.
          </motion.p>
          <motion.a
            {...reveal}
            href={`mailto:${PROFILE.email}`}
            className="display-huge block mt-10 text-[4.5vw] md:text-[3vw] break-all hover:text-beige transition-colors"
          >
            {PROFILE.email}
          </motion.a>
          <motion.div
            {...reveal}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm lowercase text-stone"
          >
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="link-quiet">
              github
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="link-quiet">
              linkedin
            </a>
            <a href={PROFILE.leetcode} target="_blank" rel="noopener noreferrer" className="link-quiet">
              leetcode
            </a>
            <a href={PROFILE.resumePath} download className="link-quiet">
              download resume
            </a>
            <a href={`tel:${PROFILE.phone}`} className="link-quiet">
              {PROFILE.phone}
            </a>
          </motion.div>
          <motion.p {...reveal} className="mt-10 text-xs uppercase tracking-[0.35em] text-smoke">
            {PROFILE.location}
            {chennaiTime && ` — ${chennaiTime} IST`}
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink-deep text-stone border-t border-ink py-8">
        <div className="px-6 md:px-10 mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>
            © {new Date().getFullYear()} {PROFILE.name} — {PROFILE.location}
          </p>
          <p className="lowercase">
            <a href="#projects" className="hover:underline underline-offset-4">projects</a>
            <span className="mx-3">/</span>
            <a href="#experience" className="hover:underline underline-offset-4">experience</a>
            <span className="mx-3">/</span>
            <a href="#about" className="hover:underline underline-offset-4">about</a>
            <span className="mx-3">/</span>
            <a href="#contact" className="hover:underline underline-offset-4">contact</a>
          </p>
          <a href="#top" className="lowercase hover:underline underline-offset-4">
            back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
