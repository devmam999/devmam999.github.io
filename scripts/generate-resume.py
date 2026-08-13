from fpdf import FPDF
from fpdf.enums import XPos, YPos


class Resume(FPDF):
    def footer(self):
        self.set_y(-12)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(110, 110, 110)
        self.cell(0, 8, f"Devesh Mamidi  |  Page {self.page_no()}", new_x=XPos.LMARGIN, new_y=YPos.NEXT, align="C")


pdf = Resume()
pdf.set_auto_page_break(auto=True, margin=16)
pdf.add_page()
pdf.set_margins(16, 14, 16)

pdf.set_font("Helvetica", "B", 18)
pdf.cell(0, 8, "Devesh Mamidi", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("Helvetica", "", 9)
pdf.set_text_color(60, 60, 60)
pdf.multi_cell(
    0,
    5,
    "510-505-8643  |  devmam999@gmail.com  |  linkedin.com/in/devesh-mamidi  |  github.com/devmam999",
    new_x=XPos.LMARGIN,
    new_y=YPos.NEXT,
)
pdf.ln(2)
pdf.set_draw_color(20, 20, 20)
pdf.line(16, pdf.get_y(), 194, pdf.get_y())
pdf.ln(4)


def heading(text):
    pdf.set_text_color(20, 20, 20)
    pdf.set_font("Helvetica", "B", 11)
    pdf.cell(0, 6, text.upper(), new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.set_draw_color(20, 20, 20)
    pdf.line(16, pdf.get_y(), 194, pdf.get_y())
    pdf.ln(3)


def job(role, company, dates, location):
    pdf.set_text_color(20, 20, 20)
    pdf.set_font("Helvetica", "B", 10)
    pdf.cell(0, 5, f"{company}", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.set_font("Helvetica", "I", 9)
    pdf.cell(0, 5, f"{role}  |  {location}  |  {dates}", new_x=XPos.LMARGIN, new_y=YPos.NEXT)


def bullet(text):
    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(30, 30, 30)
    pdf.set_x(16)
    pdf.cell(4, 4, "-")
    pdf.multi_cell(174, 4, text, new_x=XPos.LMARGIN, new_y=YPos.NEXT)
    pdf.set_x(16)


heading("Education")
pdf.set_font("Helvetica", "B", 10)
pdf.cell(0, 5, "University of California, Santa Barbara", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.set_font("Helvetica", "", 9)
pdf.cell(0, 5, "Bachelor of Science (B.S.) in Computer Science  |  Santa Barbara, CA", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.cell(0, 5, "Expected Graduation: December 2028  |  GPA: 3.80/4.00  |  2x Dean's Honor List", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.multi_cell(
    0,
    4,
    "Relevant Coursework: Problem Solving With Computers, Linear Algebra with Applications, Data Structures and Algorithms, Discrete Mathematics",
    new_x=XPos.LMARGIN,
    new_y=YPos.NEXT,
)
pdf.ln(2)

heading("Software Engineering Experience")
job("Web Developer", "UCSB Caliber", "Jan 2026 - Present", "Santa Barbara, CA")
bullet(
    "Developed a mastery-based course application with assignment, practice question, and instructor analytics workflows, delivering 6+ performance tracking views and summary statistics for a React-based platform used by 300+ students while collaborating with a 10+ member team."
)
bullet(
    "Resolved up to two assigned issues per sprint in Agile Scrum, implementing 6+ features and 3+ bug fixes for the course platform."
)
pdf.ln(1)
job("Web Developer", "Teach4Speech", "Jan 2026 - Present", "Santa Barbara, CA")
bullet(
    "Developed a difficulty system for the games feature of the app, as measured by having three difficulties for each game, by assigning 1000+ words to each difficulty in the backend and difficulty buttons for each game in the frontend."
)
bullet(
    "Boosted semantic word-matching accuracy from 66.7% to 95.8% by replacing keyword matching with MiniLM sentence embeddings, building custom Node.js evaluation scripts to benchmark performance across labeled test sets."
)
pdf.ln(1)
job(
    "Web Developer",
    "TMAS Academy",
    "July 2025 - Sep 2025; June 2026 - July 2026",
    "Remote",
)
bullet(
    "Built a personalized AI chatbot for 500+ STEM AP students with quiz generation and book/problem recommendations to enhance learning and exam preparation."
)
bullet(
    "Implemented an AI-powered quiz generation feature as measured by dynamically creating up to 10-question assessments by integrating Gemini into the chatbot workflow for STEM AP topics."
)
bullet(
    "Built a lightweight RAG-powered recommendation system that semantically retrieved the most relevant study materials from 12 PDFs containing 1,000+ practice problems based on each student's selected topic."
)
pdf.ln(2)

heading("Software Engineering Projects")
job(
    "React, TypeScript, Tailwind, FastAPI, ChromaDB, Supabase (PostgreSQL), Docker",
    "SentinelAI",
    "Jul 2026 - Present",
    "Remote",
)
bullet(
    "Built an Agentic AI pipeline with RAG (FastAPI, ChromaDB, Gemini Embeddings + Gemini Flash) that performs semantic search over uploaded runbooks, correlates GitHub commit history, and uses prompt-engineered LLM workflows to generate structured root-cause analyses with remediation steps delivered to Slack via webhooks, completing incident analysis in ~8 seconds."
)
bullet(
    "Developed a full-stack React/TypeScript app with Supabase auth (username/email login, profiles, RLS), project management, and semantic runbook validation (.md/.pdf) by verifying required sections before indexing, with runbooks stored in Supabase."
)
bullet(
    "Containerized the backend with Docker and a persistent vector store volume for ChromaDB; evaluated system durability trade-offs to retain user-uploaded runbook embeddings across deployments without requiring expensive re-indexing."
)
bullet(
    "Integrated GitHub, Slack, and Gemini APIs into an async incident orchestration service with structured JSON output and production deployment on Vercel + Render."
)
bullet(
    "Shipped team collaboration with username/email invites, dashboard notifications, and Owner/Admin/Member RBAC backed by Supabase RLS and PostgreSQL RPCs for invites, role changes, and ownership transfer."
)
bullet(
    "Built an assign -> fix -> review -> resolve workflow with assignment requests, mandatory fix descriptions, decline-with-feedback resubmissions, and admin auto-resolve paths, enforced end-to-end in Supabase RPCs and surfaced in a role-aware React UI."
)
bullet(
    "Automated Slack postmortems on incident closure by aggregating AI root-cause analysis, runbook retrieval, GitHub commit evidence, fix submissions, and rejection history into a structured 9-section timeline report via a FastAPI postmortem service."
)
pdf.ln(1)
job(
    "React, TypeScript, Tailwind, Python, PostgreSQL",
    "UCSB Caliber",
    "Jan 2026 - Present",
    "Santa Barbara, CA",
)
bullet(
    "Developed multiple question formats (multiple choice and free response) as measured by increased assignment and practice questions flexibility by four times by defining question schemas in PostgreSQL and implementing a React-based frontend."
)
bullet("Implemented a search feature to search keywords from numerous questions using the searchQuery and searchFilter libraries.")
bullet(
    "Implemented an assignments dashboard for teachers and students, enabling creation of multi-question assignments with due dates and student submission tracking by building a React frontend."
)
bullet(
    "Implemented role-based permissions for teachers and students, enabling teachers to create courses, assignments, and questions and students to join courses and complete assignments and practice questions through a React-based interface."
)
bullet(
    "Enforced role- and enrollment-based access control across 3 permission levels (admin, instructor, student), gating 9 of 43 authenticated backend endpoints - including grading, grade release, and instructor analytics - to prevent unauthorized access to sensitive academic data."
)
bullet(
    "Built an instructor analytics dashboard using React/JavaScript (JSX) for interactive table and chart views, JavaScript API client logic for frontend-backend integration, and Python backend aggregation endpoints/schemas to compute and serve course-level student performance metrics (min, mean, median, max, std dev) including at-risk flagging for students with 2+ consecutive submissions below 70%."
)
pdf.ln(1)
job(
    "Next.js, Tailwind, pdf-parse, OpenRouter",
    "TMASChatbot",
    "July 2025 - Sep 2025; June 2026 - July 2026",
    "Remote",
)
bullet(
    "Developed an AI chatbot supporting 500+ TMAS Academy STEM AP students by integrating Next.js, Tailwind, and OpenRouter models to provide automated study assistance and resource discovery."
)
bullet("Created up to 10 question interactive quizzes with hints to reinforce mastery of topics using OpenRouter models.")
bullet(
    "Built a lightweight RAG pipeline by parsing 12+ PDFs (1,000+ practice questions) with pdf-parse, storing NVIDIA Llama vector embeddings in a JSON-based vector store, and using semantic search to recommend the most relevant study resources."
)
pdf.ln(2)

heading("Technical Skills")
pdf.set_x(16)
pdf.set_font("Helvetica", "", 9)
pdf.multi_cell(0, 4, "Languages: Java, Python, C++, JavaScript, TypeScript, HTML/CSS, SQL", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.multi_cell(0, 4, "Frameworks and Architectures: Node.js, Tailwind, FastAPI, Flask, REST APIs", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.multi_cell(0, 4, "Databases: PostgreSQL, Supabase, Firebase, Convex, ChromaDB", new_x=XPos.LMARGIN, new_y=YPos.NEXT)
pdf.multi_cell(0, 4, "Developer Tools: Git, GitHub, Visual Studio Code, Docker, Unix/Linux", new_x=XPos.LMARGIN, new_y=YPos.NEXT)

pdf.output("public/Devesh_Resume.pdf")
print("wrote public/Devesh_Resume.pdf")
