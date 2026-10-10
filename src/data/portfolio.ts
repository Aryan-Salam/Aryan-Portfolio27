/**
 * Central portfolio data — generated from Aryan's portfolio information.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: "Aryan Salam",
  displayName: "Aryan Salam",
  firstName: "ARYAN",
  seriesTag: "THE SERIES",
  originalLabel: "AN ARYAN ORIGINAL",
  role: "Full-Stack Developer",
  tagline: ["Full-Stack Developer", "Java", "Web Development"],
  intro:
    "An MCA student with a BSc IT background, building full-stack web applications with Java, JavaScript, React, Node.js and databases. Interested in practical software development and continuously improving through hands-on projects.",
  location: "Mumbai, Maharashtra, India",
  email: "aryansalam201@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/aryan-salam-679635260/",
    github: "https://github.com/Aryan-Salam",
  },
  resumePdf: "/assets/Aryan_Salam_Resume.pdf",
  portrait: {
    src: "/assets/aryan-portrait.png",
    srcSet: "/assets/aryan-portrait.png",
    alt: "Aryan Salam in a white kurta outdoors",
  },
  interests: ["Full-Stack Development", "Java", "Building Web Applications"],
};

export const education = [
  {
    school: "Zeal College of Engineering and Research",
    place: "Pune, Maharashtra",
    degree: "Master of Computer Applications (MCA)",
    period: "2025 – Present",
    score: "In progress",
  },
  {
    school: "University of Mumbai",
    place: "Mumbai, Maharashtra",
    degree: "Bachelor of Science — Information Technology",
    period: "Completed 2025",
    score: "BSc IT",
  },
];

export const experience = [
  {
    company: "Gadget Dash",
    role: "Software Development Intern",
    place: "Pune, Maharashtra",
    period: "July 2026 – Present",
    points: [
      "Contributing to software development tasks and gaining practical experience with development workflows.",
      "Applying full-stack development knowledge to practical work and continuing to strengthen debugging and implementation skills.",
    ],
  },
  {
    company: "The Cake World",
    role: "Assistant Manager",
    place: "Panvel, Maharashtra",
    period: "May 2025 – September 2025",
    points: [
      "Supported day-to-day operations and coordination in a customer-facing business environment.",
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: "shield" | "flow" | "tenants";
};

export const projects: Project[] = [
  {
    id: "productai-studio",
    title: "ProductAI Studio",
    year: "2026",
    genre: "AI • FULL STACK",
    logline:
      "An AI-powered web application that helps generate product descriptions.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    build: [
      "Built a full-stack product description generator with a React frontend and Node.js/Express backend.",
      "Integrated database-backed application workflows and an AI-powered generation experience.",
    ],
    features: [
      "Product input form",
      "AI-assisted product description generation",
      "React and Vite frontend",
      "Node.js and Express backend",
      "MongoDB Atlas integration",
    ],
    metrics: [],
    github: "https://productai-studio.netlify.app/",
    palette: {
      from: "#2a0610",
      via: "#7a0f24",
      to: "#0b0710",
      accent: "#ff3d5a",
    },
    motif: "shield",
  },
  {
    id: "staynest",
    title: "StayNest",
    year: "2026",
    genre: "WEB DEVELOPMENT",
    logline: "A hostel and accommodation website concept.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    build: [
      "Created a responsive accommodation website interface with a focus on presenting hostel information clearly.",
      "Designed the project as a practical web development portfolio project.",
    ],
    features: [
      "Responsive website UI",
      "Accommodation-focused layout",
      "Mobile-friendly styling",
    ],
    metrics: [],
    github: "https://staynestog.netlify.app/",
    palette: {
      from: "#04121f",
      via: "#0f4c6e",
      to: "#05080d",
      accent: "#4cc9ff",
    },
    motif: "flow",
  },
  {
    id: "smart-attendance",
    title: "Smart Face Recognition Attendance",
    year: "2025",
    genre: "PYTHON • COMPUTER VISION",
    logline:
      "A face-recognition attendance system with records and reporting features.",
    stack: ["Python", "OpenCV", "Streamlit", "SQLite"],
    build: [
      "Developed a face-recognition attendance project using Python and a Streamlit interface.",
      "Designed attendance records with subject-based tracking and reporting features.",
    ],
    features: [
      "Face recognition",
      "Subject-wise attendance",
      "SQLite records",
      "Attendance reporting",
    ],
    metrics: [],
    palette: {
      from: "#1a0d02",
      via: "#8a4a07",
      to: "#0a0806",
      accent: "#ffb547",
    },
    motif: "tenants",
  },
  {
    id: "zealconnect",
    title: "ZealConnect",
    year: "2026",
    genre: "WEB APPLICATION",
    logline: "A student-focused project concept for campus connections.",
    stack: ["Java", "JavaScript", "Database"],
    build: [
      "A student-focused project concept designed around campus interactions and information sharing.",
    ],
    features: ["Student-focused concept", "Web application project"],
    metrics: [],
    palette: {
      from: "#04121f",
      via: "#0f4c6e",
      to: "#05080d",
      accent: "#4cc9ff",
    },
    motif: "flow",
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: "full-stack-journey",
    title: "Full-Stack Development",
    org: "Hands-on Projects",
    detail:
      "Building projects across frontend, backend, databases and AI-assisted application workflows.",
    laurel: "Project Building",
  },
  {
    id: "mca",
    title: "MCA Student",
    org: "Zeal College, Pune",
    detail: "Continuing postgraduate studies in computer applications.",
    laurel: "Education",
  },
  {
    id: "bsc-it",
    title: "BSc Information Technology",
    org: "University of Mumbai",
    detail: "Undergraduate foundation in information technology.",
    laurel: "Education",
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: "Symbiosis Bhavan Campus",
    name: "Java Programming Course",
    link: "",
  },
  {
    issuer: "IT Vedant",
    name: "Java Full Stack Development Course — In Progress",
    link: "",
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    subtitle: "Languages listed on my resume",
    skills: [
      { name: "Java", mono: "Jv" },
      { name: "JavaScript", mono: "Js" },
      { name: "SQL", mono: "Sq" },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "Frontend, backend and database technologies",
    skills: [
      { name: "HTML", mono: "Ht" },
      { name: "CSS", mono: "Cs" },
      { name: "React.js", mono: "Re" },
      { name: "Node.js", mono: "No" },
      { name: "Express.js", mono: "Ex" },
      { name: "MongoDB", mono: "Mg" },
      { name: "Bootstrap", mono: "Bs" },
    ],
  },
  {
    id: "concepts-tools",
    title: "Concepts & Tools",
    subtitle: "Engineering concepts and tools listed on my resume",
    skills: [
      { name: "Data Structures", mono: "DS" },
      { name: "REST APIs", mono: "API" },
      { name: "JWT Authentication", mono: "JWT" },
      { name: "Git", mono: "Gt" },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: [
    "Java Full Stack Developer certification in progress",
    "Java Programming Course",
  ],
  JavaScript: ["ProductAI Studio", "StayNest", "ZealConnect"],
  SQL: ["Database technologies"],
  HTML: ["StayNest", "SoleStyle"],
  CSS: ["StayNest", "SoleStyle"],
  "React.js": ["ProductAI Studio", "ZealConnect"],
  "Node.js": ["ProductAI Studio", "ZealConnect", "SoleStyle"],
  "Express.js": ["ProductAI Studio", "ZealConnect", "SoleStyle"],
  MongoDB: ["ProductAI Studio", "ZealConnect", "SoleStyle"],
  Bootstrap: ["StayNest", "SoleStyle"],
  "Data Structures": ["Problem-solving and data structures"],
  "REST APIs": ["Full-stack application development"],
  "JWT Authentication": ["ZealConnect"],
  Git: ["Software development workflow"],
  "Software Testing": ["Application testing and debugging"],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = {
  from: "#24060b",
  via: "#6e0d1d",
  to: "#09070a",
  accent: "#ff3d5a",
};
const amber: Palette = {
  from: "#1c1003",
  via: "#6b3c06",
  to: "#0a0806",
  accent: "#ffb547",
};
const ocean: Palette = {
  from: "#04121f",
  via: "#0f4c6e",
  to: "#05080d",
  accent: "#4cc9ff",
};
const violet: Palette = {
  from: "#120822",
  via: "#3d1a6e",
  to: "#07060c",
  accent: "#b98bff",
};
const jade: Palette = {
  from: "#03150f",
  via: "#0d5a40",
  to: "#050a08",
  accent: "#46e3a8",
};

export const seasons: Season[] = [
  {
    number: 1,
    title: "The IT Foundation",
    period: "BSc IT",
    synopsis:
      "Building a foundation in information technology at the University of Mumbai.",
    episodes: [
      {
        code: "S01 E01",
        title: "The Foundation",
        description:
          "Bachelor of Science in Information Technology, University of Mumbai.",
        tags: ["BSc IT", "Information Technology"],
        runtime: "Completed 2025",
        palette: amber,
      },
      {
        code: "S01 E02",
        title: "The Builder",
        description:
          "Exploring web development and building practical projects.",
        tags: ["HTML", "CSS", "JavaScript"],
        runtime: "Project work",
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: "The MCA Chapter",
    period: "2025 – Present",
    synopsis:
      "Pursuing postgraduate studies in computer applications at Zeal College, Pune.",
    episodes: [
      {
        code: "S02 E01",
        title: "The Student",
        description: "Master of Computer Applications at Zeal College, Pune.",
        tags: ["MCA", "Computer Applications"],
        runtime: "2025 – Present",
        palette: violet,
      },
      {
        code: "S02 E02",
        title: "The Java Journey",
        description: "Strengthening Java and full-stack development skills.",
        tags: ["Java", "Spring Boot", "SQL"],
        runtime: "Learning",
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: "Building Real Projects",
    period: "2025 – Present",
    synopsis:
      "Creating practical web applications and expanding full-stack development experience.",
    episodes: [
      {
        code: "S03 E01",
        title: "The AI Builder",
        description:
          "ProductAI Studio — an AI-assisted product description generator.",
        tags: ["React", "Node.js", "MongoDB"],
        runtime: "Live project",
        palette: crimson,
      },
      {
        code: "S03 E02",
        title: "The Host",
        description: "StayNest — a hostel and accommodation website concept.",
        tags: ["HTML", "CSS", "JavaScript"],
        runtime: "Live project",
        palette: ocean,
      },
      {
        code: "S03 E03",
        title: "The Vision",
        description:
          "Smart Face Recognition Attendance using Python and OpenCV.",
        tags: ["Python", "OpenCV", "SQLite"],
        runtime: "Project",
        palette: jade,
      },
    ],
  },
];

export type TopPick = {
  label: string;
  title: string;
  detail: string;
  palette: Palette;
};

export const topPicks: TopPick[] = [
  {
    label: "Full-stack project",
    title: "ProductAI Studio",
    detail: "AI-assisted product descriptions",
    palette: crimson,
  },
  {
    label: "Live website",
    title: "StayNest",
    detail: "Hostel and accommodation concept",
    palette: ocean,
  },
  {
    label: "Computer vision",
    title: "Smart Attendance",
    detail: "Python • OpenCV • SQLite",
    palette: jade,
  },
  {
    label: "Current chapter",
    title: "MCA",
    detail: "Zeal College, Pune",
    palette: violet,
  },
  {
    label: "Core language",
    title: "Java",
    detail: "Full-stack development learning",
    palette: amber,
  },
  {
    label: "Current focus",
    title: "Building Projects",
    detail: "Learning by making practical applications",
    palette: ocean,
  },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = {
  kicker: string;
  title: string;
  lines: string[];
  chips?: string[];
};

export const introSlides: IntroSlide[] = [
  {
    kicker: "Education",
    title: "MCA · Computer Applications",
    lines: [
      "Zeal College, Pune",
      "BSc Information Technology · University of Mumbai",
    ],
    chips: ["MCA", "BSc IT"],
  },
  {
    kicker: "Skills",
    title: "Building with Java.",
    lines: [
      "Java, JavaScript, HTML, CSS",
      "React, Node.js, Express, SQL, MongoDB",
    ],
    chips: ["Java", "React", "Node.js", "MongoDB"],
  },
  {
    kicker: "Projects",
    title: "Projects in Progress",
    lines: [
      "ProductAI Studio — AI-assisted product descriptions",
      "StayNest — accommodation website",
      "Smart Face Recognition Attendance — Python and OpenCV",
    ],
  },
  {
    kicker: "Experience",
    title: "Learning in the Real World",
    lines: [
      "Software Development Intern · Gadget Dash",
      "Assistant Manager · The Cake World",
    ],
  },
  {
    kicker: "Current mission",
    title: "The Next Chapter",
    lines: [
      "Build useful software",
      "Strengthen full-stack development skills",
    ],
  },
];

export type ProfileId = "aryan" | "recruiter" | "developer" | "creative";
export type SectionId =
  | "about"
  | "journey"
  | "originals"
  | "picks"
  | "skills"
  | "moments"
  | "story";

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: "aryan",
    name: "Aryan",
    blurb: "The full series, in order",
    color: "#e5132b",
    order: [
      "about",
      "journey",
      "originals",
      "picks",
      "skills",
      "moments",
      "story",
    ],
  },
  {
    id: "recruiter",
    name: "Recruiter",
    blurb: "Resume, achievements & skills first",
    color: "#4cc9ff",
    order: [
      "story",
      "moments",
      "skills",
      "originals",
      "about",
      "journey",
      "picks",
    ],
  },
  {
    id: "developer",
    name: "Developer",
    blurb: "Projects, stack & GitHub first",
    color: "#46e3a8",
    order: [
      "originals",
      "skills",
      "journey",
      "moments",
      "about",
      "picks",
      "story",
    ],
  },
  {
    id: "creative",
    name: "Creative",
    blurb: "The story arc & highlights first",
    color: "#ffb547",
    order: [
      "journey",
      "picks",
      "originals",
      "moments",
      "about",
      "skills",
      "story",
    ],
  },
];

export const sectionMeta: Record<
  SectionId,
  { nav: string; card: string; meta: string; palette: Palette }
> = {
  about: {
    nav: "About",
    card: "About Me",
    meta: "The Pilot • Education & training",
    palette: violet,
  },
  journey: {
    nav: "Journey",
    card: "My Journey",
    meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`,
    palette: amber,
  },
  originals: {
    nav: "Originals",
    card: "My Projects",
    meta: `${projects.length} Originals • 2026`,
    palette: crimson,
  },
  picks: {
    nav: "Top Picks",
    card: "Top Picks",
    meta: "Top 10 from the resume",
    palette: jade,
  },
  skills: {
    nav: "Skills",
    card: "My Skills",
    meta: `${skillCategories.length} Categories`,
    palette: ocean,
  },
  moments: {
    nav: "Moments",
    card: "My Achievements",
    meta: `${achievements.length} Moments • ${certifications.length} Certifications`,
    palette: crimson,
  },
  story: {
    nav: "Resume",
    card: "The Full Story",
    meta: "Resume • View & download",
    palette: violet,
  },
};
