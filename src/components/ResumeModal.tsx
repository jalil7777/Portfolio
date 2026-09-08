import { useState, useEffect } from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCES, EDUCATION_DATA, PROJECTS } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Check, Copy } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState<string>(() => {
    return localStorage.getItem('portfolio_custom_avatar') || PERSONAL_INFO.avatar;
  });

  useEffect(() => {
    const handleAvatarUpdate = () => {
      const saved = localStorage.getItem('portfolio_custom_avatar');
      if (saved) setAvatarSrc(saved);
    };
    window.addEventListener('portfolio_avatar_updated', handleAvatarUpdate);
    return () => window.removeEventListener('portfolio_avatar_updated', handleAvatarUpdate);
  }, []);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `Abdul Jalil Sait Mohammed
Generative AI Engineer | Python & ML Developer
Chennai, Tamil Nadu, India | smabduljalil2001@gmail.com | +91 97878 28956
GitHub: https://github.com/jalil7777 | LinkedIn: https://linkedin.com/in/abdul-jalil-sait-mohammed-020901254

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.summary}

EDUCATION:
B.E. Computer Science & Engineering - NPR College of Engineering & Technology, Anna University (2019–2023, CGPA: 7.69)

EXPERIENCE:
- Generative AI Engineer Intern — TechPanda Academy (2026 – Present)
- Customer Support Executive — Digitide / Conneqt Business Solutions (Bangalore, India | July 2024 – October 2025)
- Java Full Stack Developer Trainee — Kodnest Technologies (Bangalore, India | August 2023 – March 2024)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-sm font-semibold text-white">
              Resume Preview — Abdul Jalil Sait Mohammed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Paper-Style Content */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-100 font-sans space-y-8 text-sm">
          {/* Header */}
          <div className="text-center border-b border-slate-800 pb-6 flex flex-col items-center">
            <img
              id="resume-profile-photo"
              src={avatarSrc}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://avatars.githubusercontent.com/u/113597229?v=4';
              }}
              className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/40 mb-3 shadow-md bg-slate-900"
            />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Abdul Jalil Sait Mohammed
            </h2>
            <div className="text-sm font-semibold text-indigo-400 mt-1">
              Generative AI Engineer | Python & ML Developer | Prompt Engineering & RAG
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-3 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> {PERSONAL_INFO.location}
              </span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-slate-400" /> {PERSONAL_INFO.phone}
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 mt-2 text-xs text-indigo-400">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/abdul-jalil-sait-mohammed
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline font-mono">
                github.com/jalil7777
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-wider font-bold text-indigo-400 border-b border-slate-800 pb-1">
              Professional Summary
            </h3>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Aspiring Generative AI professional with hands-on training in Python, Generative AI, Large Language Models (LLMs),
              Prompt Engineering, Retrieval-Augmented Generation (RAG), NLP fundamentals, and API integration. Experienced in
              building practical AI applications for conversational question answering, document-based information retrieval, and
              LLM-powered solutions. Strong understanding of GenAI application workflows, prompt design, API communication, data
              processing, and responsible use of AI technology. Eager to contribute to AI/ML, Generative AI, Python, or software
              development teams while continuously expanding technical expertise.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider font-bold text-indigo-400 border-b border-slate-800 pb-1">
              Technical Skills
            </h3>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div>
                <strong className="text-slate-200">Programming Languages:</strong>{' '}
                <span className="text-slate-400">Python, SQL</span>
              </div>
              <div>
                <strong className="text-slate-200">Generative AI & LLMs:</strong>{' '}
                <span className="text-slate-400">
                  Large Language Models (LLMs), RAG, Prompt Engineering, Gemini API, OpenAI API, Vector Databases & Embeddings, Context-Aware AI Chatbots, NLP Fundamentals
                </span>
              </div>
              <div>
                <strong className="text-slate-200">Frameworks & Tools:</strong>{' '}
                <span className="text-slate-400">
                  Streamlit, Gradio, Google Colab, Jupyter Notebook, VS Code, Git & GitHub
                </span>
              </div>
              <div>
                <strong className="text-slate-200">Data Processing & Databases:</strong>{' '}
                <span className="text-slate-400">
                  NumPy, Pandas, Data Cleaning, Data Transformation, Exploratory Data Analysis (EDA), MySQL, Relational Database Design
                </span>
              </div>
              <div>
                <strong className="text-slate-200">Software Concepts:</strong>{' '}
                <span className="text-slate-400">
                  REST APIs, JSON, Exception Handling, File Handling, Clean Architecture, Algorithmic Problem Solving
                </span>
              </div>
            </div>
          </div>

          {/* Key GenAI Projects */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-indigo-400 border-b border-slate-800 pb-1">
              GitHub Generative AI & Python Projects
            </h3>
            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <div className="flex items-center justify-between font-bold text-white">
                  <span>AI Enterprise Knowledge Copilot (Project 4)</span>
                  <span className="text-xs text-slate-400 font-mono">Python, Gemini API, FAISS, PyPDF, RAG</span>
                </div>
                <p className="text-slate-400 mt-1">
                  Multi-document RAG system with document parsing, FAISS vector embeddings, citation-backed answers, multi-doc comparisons, and automated action item recommendations.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-white">
                  <span>AI Data Quality & Root-Cause Copilot</span>
                  <span className="text-xs text-slate-400 font-mono">Python, Google Gemini, Gradio, Pandas</span>
                </div>
                <p className="text-slate-400 mt-1">
                  Autonomous data diagnostics copilot analyzing dataset pipeline failures, synthesizing plain-language root causes, and generating executable SQL/Python fixes.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-white">
                  <span>AI Business Decision Intelligence Platform</span>
                  <span className="text-xs text-slate-400 font-mono">Python, Gemini API, Pandas, PyPDF</span>
                </div>
                <p className="text-slate-400 mt-1">
                  Analyzes sales KPIs, MoM anomaly detection (&gt;20% swings), customer sentiment analysis, what-if revenue growth projections, and conversational business Q&amp;A.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-white">
                  <span>Conversational RAG Chatbot System (Project 2)</span>
                  <span className="text-xs text-slate-400 font-mono">Python, Sentence-Transformers, FAISS, Gradio</span>
                </div>
                <p className="text-slate-400 mt-1">
                  Conversational RAG with sliding-window chunking, dense vector embeddings (all-MiniLM-L6-v2), FAISS similarity retrieval, and Gemini context synthesis in Gradio.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-white">
                  <span>AI Career &amp; Placement Intelligence Copilot (Project 3)</span>
                  <span className="text-xs text-slate-400 font-mono">Python, Gemini 2.5, Scikit-Learn, Streamlit</span>
                </div>
                <p className="text-slate-400 mt-1">
                  Hybrid predictive ML and GenAI evaluating placement readiness with Scikit-Learn and generating structured Pydantic JSON career advice roadmaps via Gemini API.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-white">
                  <span>Python Data Processing &amp; Automated ETL Pipeline (Project 1)</span>
                  <span className="text-xs text-slate-400 font-mono">Python, Pandas, NumPy, Data Cleaning</span>
                </div>
                <p className="text-slate-400 mt-1">
                  Automated ETL pipeline handling missing data, type casting, gross and discount calculations, and preparing normalized data for vector indexing and LLMs.
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-bold text-indigo-400 border-b border-slate-800 pb-1">
              Work Experience
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <div className="flex items-center justify-between font-bold text-white">
                  <span>Generative AI Engineer Intern — TechPanda Academy</span>
                  <span className="text-xs text-indigo-400 font-mono">2026 – Present</span>
                </div>
                <p className="text-slate-400 mt-1">
                  Developing practical GenAI systems, RAG pipelines, prompt design, and interactive applications using Python, Gemini, and OpenAI APIs.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-white">
                  <span>Customer Support Executive — Digitide (formerly Conneqt Business Solutions)</span>
                  <span className="text-xs text-slate-400 font-mono">Jul 2024 – Oct 2025</span>
                </div>
                <div className="text-xs text-indigo-400 font-medium mt-0.5">Bangalore, India</div>
                <p className="text-slate-400 mt-1">
                  Delivered dedicated customer support in Bangalore, troubleshooting workflows, managing complex inquiries, and performing root-cause issue resolution under strict SLAs.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between font-bold text-white">
                  <span>Java Full Stack Developer Trainee — Kodnest Technologies</span>
                  <span className="text-xs text-slate-400 font-mono">Aug 2023 – Mar 2024</span>
                </div>
                <div className="text-xs text-indigo-400 font-medium mt-0.5">Bangalore, India</div>
                <p className="text-slate-400 mt-1">
                  Completed intensive enterprise software training in Bangalore covering Core Java, J2EE, Spring Boot, Hibernate, REST APIs, SQL, and MVC architectures.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-wider font-bold text-indigo-400 border-b border-slate-800 pb-1">
              Education
            </h3>
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-white">
              <span>B.E. — Computer Science & Engineering</span>
              <span className="text-slate-400 font-mono">2019 – 2023</span>
            </div>
            <div className="text-xs text-slate-400">
              NPR College of Engineering & Technology, Anna University • CGPA: 7.69 / 10.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
