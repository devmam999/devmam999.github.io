export const education = {
  school: "University of California, Santa Barbara",
  degree: "B.S. Computer Science",
  location: "Santa Barbara, CA",
  graduation: "Expected graduation: December 2028",
  gpa: "3.80",
  honors: "2x",
  coursework: [
    "Data Structures & Algorithms",
    "Discrete Mathematics",
    "Linear Algebra",
    "Problem Solving with Computers",
  ],
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  dates: string;
  metric: string;
  tech: string[];
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "UCSB Caliber",
    role: "Web Developer",
    location: "Santa Barbara, CA",
    dates: "Jan 2026 – Present",
    metric: "Tested by 300+ students",
    tech: ["React", "TypeScript", "Tailwind", "Python", "PostgreSQL", "REST API"],
    bullets: [
      "Built a mastery-based course platform with assignment, practice, and instructor analytics workflows.",
      "Delivered 6+ performance tracking views and summary statistics, tested by 300+ students.",
      "Shipped 6+ features and 3+ bug fixes while resolving up to two issues per Agile Scrum sprint.",
      "Collaborated with a 10+ member cross-functional team on a React-based course product.",
    ],
  },
  {
    company: "Teach4Speech",
    role: "Web Developer",
    location: "Santa Barbara, CA",
    dates: "Jan 2026 – Present",
    metric: "66.7% → 95.8% accuracy",
    tech: ["Node.js", "TypeScript", "MiniLM", "Tailwind", "REST API"],
    bullets: [
      "Built a three-level difficulty system for games by assigning 1,000+ words per difficulty in the backend.",
      "Raised semantic word-matching accuracy from 66.7% to 95.8% with MiniLM sentence embeddings.",
      "Wrote custom Node.js evaluation scripts to benchmark performance across labeled test sets.",
    ],
  },
  {
    company: "TMAS Academy",
    role: "Web Developer",
    location: "Remote",
    dates: "Jul 2025 – Sep 2025 · Jun 2026 – Jul 2026",
    metric: "500+ students",
    tech: ["Next.js", "Tailwind", "pdf-parse", "OpenRouter", "REST API"],
    bullets: [
      "Built a personalized AI chatbot for 500+ STEM AP students with quiz generation and study recommendations.",
      "Integrated Gemini to dynamically create up to 10-question assessments for STEM AP topics.",
      "Shipped a lightweight RAG system over 12 PDFs and 1,000+ practice problems by selected topic.",
    ],
  },
];

export type ProjectItem = {
  id: string;
  name: string;
  dates: string;
  headline: string;
  summary: string;
  badge: string;
  image: string;
  imageAlt: string;
  github?: string;
  demo?: string;
  stack: string[];
  bullets: string[];
};

export const projects: ProjectItem[] = [
  {
    id: "sentinelai",
    name: "SentinelAI",
    dates: "Jul 2026 – Present",
    headline: "Agentic incident response in ~8 seconds",
    summary:
      "AI-powered incident orchestration platform that performs semantic search over runbooks, correlates GitHub commits, and generates structured root-cause analyses with remediation steps.",
    badge: "~8s incident analysis",
    image: "/projects/sentinel-dashboard.jpg",
    imageAlt: "SentinelAI incident dashboard showing an active authentication incident with GitHub, Slack, and runbook status.",
    github: "https://github.com/devmam999/SentinelAI",
    demo: "https://sentinel-ai-coral-nine.vercel.app/",
    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "FastAPI",
      "ChromaDB",
      "Supabase",
      "PostgreSQL",
      "Docker",
      "Gemini",
      "Slack API",
      "REST API",
    ],
    bullets: [
      "RAG pipeline (FastAPI, ChromaDB, Gemini Embeddings) completes incident analysis in ~8 seconds.",
      "Full-stack React/TypeScript with Supabase auth, RLS, and Owner/Admin/Member RBAC.",
      "Automated Slack postmortems aggregating AI analysis, GitHub evidence, and fix history into 9-section reports.",
      "Containerized backend with Docker + persistent ChromaDB vector store across deployments.",
      "Assign → fix → review → resolve workflow with role-aware React UI.",
    ],
  },
  {
    id: "caliber",
    name: "UCSB Caliber",
    dates: "Jan 2026 – Present",
    headline: "Mastery-based learning, tested by 300+ students",
    summary:
      "Course platform with assignments, practice questions, role-based access, and instructor analytics for teachers and students.",
    badge: "Tested by 300+ students",
    image: "/projects/caliber-analytics.jpg",
    imageAlt: "UCSB Caliber instructor analytics dashboard with course filters, grade metrics, and at-risk student views.",
    stack: ["React", "TypeScript", "Tailwind", "Python", "PostgreSQL", "REST API"],
    bullets: [
      "Multiple-choice and free-response question formats, increasing assignment flexibility by four times.",
      "Assignments dashboard with due dates, submissions, and keyword search across questions.",
      "Role- and enrollment-based access control across admin, instructor, and student — gating 9 of 43 authenticated endpoints.",
      "Instructor analytics with min, mean, median, max, and std dev, plus at-risk flagging below 70%.",
    ],
  },
  {
    id: "teach4speech",
    name: "Teach4Speech",
    dates: "Jan 2026 – Present",
    headline: "Game difficulty and semantic word matching",
    summary:
      "Games feature with three difficulty levels and MiniLM sentence embeddings for word matching.",
    badge: "66.7% → 95.8% accuracy",
    image: "/projects/teach4speech-game.jpg",
    imageAlt:
      "Teach4Speech ice cream flavors word game with a timer, typed guess, and words found.",
    demo: "https://www.teach4speech.com/play",
    stack: ["Node.js", "TypeScript", "MiniLM", "Tailwind", "REST API"],
    bullets: [
      "Developed a difficulty system for the games feature of the app, with three difficulties for each game, by assigning 1,000+ words to each difficulty in the backend and difficulty buttons for each game in the frontend.",
      "Boosted semantic word-matching accuracy from 66.7% to 95.8% by replacing keyword matching with MiniLM sentence embeddings, building custom Node.js evaluation scripts to benchmark performance across labeled test sets.",
    ],
  },
  {
    id: "tmas",
    name: "TMAS Chatbot",
    dates: "Jul 2025 – Jul 2026",
    headline: "AI study assistant for 500+ STEM AP students",
    summary:
      "Chatbot with quiz generation, hints, and semantic resource recommendations over a 1,000+ problem practice bank.",
    badge: "500+ students",
    image: "/projects/tmas-chatbot.jpg",
    imageAlt:
      "TMAS Academy chatbot showing recommended study guides and closest textbook passages for a calculus query.",
    stack: ["Next.js", "Tailwind", "pdf-parse", "OpenRouter", "REST API"],
    bullets: [
      "Study assistance and resource discovery with Next.js, Tailwind, and OpenRouter models.",
      "Interactive quizzes of up to 10 questions with hints to reinforce topic mastery.",
      "RAG pipeline parsing 12+ PDFs (1,000+ practice questions) with NVIDIA Llama embeddings and semantic search.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "code" as const,
    items: ["Java", "Python", "C++", "JavaScript", "TypeScript", "HTML/CSS", "SQL"],
  },
  {
    title: "Frameworks",
    icon: "box" as const,
    items: ["React", "Next.js", "Node.js", "FastAPI", "Flask", "Tailwind"],
  },
  {
    title: "Databases",
    icon: "database" as const,
    items: ["PostgreSQL", "Supabase", "Firebase", "Convex", "ChromaDB"],
  },
  {
    title: "Dev Tools",
    icon: "tools" as const,
    items: ["Git", "GitHub", "Docker", "VS Code", "Unix/Linux"],
  },
  {
    title: "AI / ML",
    icon: "spark" as const,
    items: ["Gemini API", "OpenRouter", "MiniLM", "RAG", "Embeddings"],
  },
];

export const involvement = [
  {
    org: "UCSB Caliber",
    role: "Web Developer",
    detail: "Agile Scrum, 10+ member team, tested by 300+ students.",
  },
  {
    org: "Teach4Speech",
    role: "Web Developer",
    detail: "Semantic NLP system, games difficulty architecture.",
  },
];
