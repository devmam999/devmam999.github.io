export const site = {
  name: "Devesh Mamidi",
  domain: "devesh.dev",
  role: "Software Engineer",
  eyebrow: "CS @ UCSB",
  tagline:
    "Software engineer building projects — from features powered by RAG pipelines to full-stack applications tested by real users.",
  email: "devmam999@gmail.com",
  linkedin: "https://www.linkedin.com/in/devesh-mamidi",
  linkedinDisplay: "linkedin.com/in/devesh-mamidi",
  github: "https://github.com/devmam999",
  githubDisplay: "github.com/devmam999",
  resumePath: "/Devesh_Mamidi_Resume.pdf",
  headshot: {
    src: "/headshot.png",
    alt: "Headshot of Devesh Mamidi",
  },
  location: "Santa Barbara, CA",
  description:
    "Devesh Mamidi is a Computer Science student at UC Santa Barbara and a software engineer building full-stack web apps, RAG systems, and AI-powered learning tools.",
} as const;

export const navItems = [
  { href: "/#about", id: "about", label: "About" },
  { href: "/#projects", id: "projects", label: "Projects" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#skills", id: "skills", label: "Skills" },
  { href: "/#contact", id: "contact", label: "Contact" },
] as const;
