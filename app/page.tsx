"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Globe,
  Trophy,
  Download,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  Wrench,
  MapPin,
  Award,
  Briefcase,
  Calendar,
} from "lucide-react";

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
  photo: "/profile.svg", // place your actual photo as profile.jpg in /public
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
    icon: Award,
  },
  {
    title: "Technology Job Simulation",
    issuer: "Deloitte (Forage)",
    date: "Jun 2025",
    icon: Award,
  },
  {
    title: "Competitive Programming (Certificate of Excellence)",
    issuer: "Coding Ninjas",
    date: "Jun 2024",
    icon: Award,
  },
  {
    title: "Natural Language Processing",
    issuer: "NPTEL",
    date: "Apr 2025",
    icon: Award,
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "Oct 2023",
    icon: Award,
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

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              {PROFILE.name}
            </motion.h1>
            <div className="hidden md:flex items-center gap-8">
              {["about", "projects", "skills", "experience", "achievements", "certifications", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
                  >
                    {section}
                  </button>
                )
              )}
            </div>
            <a
              href={PROFILE.resumePath}
              download
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            {/* Profile Image */}
            <motion.div variants={fadeInUp} className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20"></div>
                <Image
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  width={256}
                  height={256}
                  className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Hero Text */}
            <div className="flex-1 text-center md:text-left" id="about">
              <motion.div variants={fadeInUp} className="flex items-center gap-2 justify-center md:justify-start mb-4">
                <MapPin size={18} className="text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">{PROFILE.location}</span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                {PROFILE.name}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
              >
                {PROFILE.title}
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
              >
                {PROFILE.tagline}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-4 justify-center md:justify-start"
              >
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                >
                  <Mail size={18} />
                  Get in Touch
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 rounded-lg transition-colors font-medium text-gray-700 dark:text-gray-300"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 rounded-lg transition-colors font-medium text-gray-700 dark:text-gray-300"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a
                  href={PROFILE.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-500 rounded-lg transition-colors font-medium text-gray-700 dark:text-gray-300"
                >
                  <Globe size={18} />
                  Website
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-4xl font-bold mb-4 text-center"
            >
              Awards & Achievements
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
            >
              Competitive milestones and recognition from hackathons and innovation events.
            </motion.p>

            <div className="space-y-6">
              {ACHIEVEMENTS.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">
                      <Trophy size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{item.issuer}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.date} • {item.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-4xl font-bold mb-4 text-center"
            >
              Featured Projects
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
            >
              Here are some of my recent projects showcasing my skills in AI/ML, full-stack development, and data science.
            </motion.p>

            <div className="grid gap-8 md:grid-cols-2">
              {PROJECTS.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`group relative p-6 rounded-xl border-2 transition-all duration-300 ${
                    project.highlight
                      ? "border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20"
                      : "border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 bg-gray-50 dark:bg-gray-800/50"
                  }`}
                >
                  {project.highlight && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                      ⭐ HIGHLIGHT
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                        <Calendar size={14} />
                        {project.period}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-4xl font-bold mb-4 text-center"
            >
              Technical Skills
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
            >
              A comprehensive toolkit for building modern AI/ML applications and data-driven solutions.
            </motion.p>

            <div className="grid gap-8 md:grid-cols-2">
              {Object.entries(SKILLS).map(([category, skills], index) => {
                const icons = {
                  "Programming Languages": Code2,
                  "AI/ML & Data Science": Cpu,
                  "Frameworks & Libraries": Database,
                  "Tools & Technologies": Wrench,
                };
                const Icon = icons[category as keyof typeof icons];

                return (
                  <motion.div
                    key={category}
                    variants={fadeInUp}
                    className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <Icon size={24} />
                      </div>
                      <h4 className="text-xl font-bold">{category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900/30 dark:hover:text-blue-300 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-4xl font-bold mb-4 text-center"
            >
              Experience
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
            >
              Professional internships and hands-on experience in data analysis, web development, and strategic planning.
            </motion.p>

            <div className="space-y-8">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 hover:border-blue-500 dark:hover:border-blue-500 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      <Briefcase size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-xl font-bold">{exp.role}</h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        {exp.location}
                      </p>
                      <ul className="space-y-2">
                        {exp.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
            >
              <h4 className="text-2xl font-bold mb-4">Education</h4>
              <div className="space-y-2">
                <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {EDUCATION.institution}
                </p>
                <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
                  {EDUCATION.degree}
                </p>
                <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {EDUCATION.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {EDUCATION.location}
                  </span>
                  {EDUCATION.gpa && (
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      CGPA: {EDUCATION.gpa}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h3
              variants={fadeInUp}
              className="text-4xl font-bold mb-4 text-center"
            >
              Certifications
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto"
            >
              Professional certifications from industry leaders and prestigious institutions.
            </motion.p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-500 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 group-hover:scale-110 transition-transform">
                      <Award size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1 text-gray-800 dark:text-gray-200">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {cert.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-4xl font-bold mb-4"
            >
              Let&apos;s Connect
            </motion.h3>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
            >
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
            >
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all transform hover:scale-105 font-medium text-lg shadow-lg"
              >
                <Mail size={24} />
                Send Email
              </a>
              <a
                href={PROFILE.resumePath}
                download
                className="flex items-center gap-3 px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-xl transition-all transform hover:scale-105 font-medium text-lg"
              >
                <Download size={24} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-6"
            >
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github size={24} />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href={PROFILE.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Code2 size={24} />
                <span className="font-medium">LeetCode</span>
              </a>
              <a
                href={PROFILE.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Globe size={24} />
                <span className="font-medium">Website</span>
              </a>
              <a
                href={`tel:${PROFILE.phone}`}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={24} />
                <span className="font-medium">{PROFILE.phone}</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto max-w-6xl text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Built with Next.js & Tailwind CSS.</p>
          <p className="text-sm mt-2">
            Designed to showcase AI/ML projects and full-stack development skills.
          </p>
        </div>
      </footer>
    </main>
  );
}
