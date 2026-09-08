import { useState, useEffect } from 'react';
import { GraduationCap, ArrowUpRight, Cpu, Layers, ShieldCheck, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
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

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/50 text-xs font-semibold text-blue-400 mb-3">
            <span>Career Evolution & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-slate-400 text-base max-w-2xl">
            From enterprise software foundations to engineering practical, scalable Generative AI systems.
          </p>
        </div>

        {/* Grid layout: Story on left, Pillar Cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                The Software Engineering Foundation
              </h3>
              <p>
                I hold a <strong className="text-white">Bachelor of Engineering (B.E.) in Computer Science & Engineering</strong> from{' '}
                <strong className="text-slate-100">NPR College of Engineering & Technology, Anna University</strong> (2019–2023, CGPA 7.69).
                My academic journey equipped me with strong analytical thinking and deep roots in algorithms, data structures, and database management systems (DBMS).
              </p>
              <p>
                Building on this computer science foundation, I completed full-stack software training at <strong className="text-slate-100">Kodnest Technologies (Bangalore)</strong>, followed by enterprise client support and deep specialization in <strong className="text-slate-100">Python, SQL, and Generative AI</strong>. This background instilled software craftsmanship, clean code practices, and an architectural understanding of scalable data pipelines and LLM systems.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                Specialization in Generative AI & Python
              </h3>
              <p>
                Witnessing the rapid acceleration of Large Language Models and semantic retrieval, I directed my core focus to{' '}
                <span className="text-indigo-300 font-semibold">Python, SQL, and Generative AI</span>. My engineering foundation gave me an immediate advantage: while many treat AI as black-box APIs, I approach GenAI through the lens of robust software engineering — focusing on latency, schema validation, context optimization, and defensive exception handling.
              </p>
              <p>
                Currently, as a <strong className="text-white">Generative AI Engineer Intern at TechPanda Academy</strong>, I design and deploy practical AI systems. My work centers on building Retrieval-Augmented Generation (RAG) architectures, prompt evaluation frameworks, automated data diagnostics copilots, and intelligent conversational agents that drive verifiable business value.
              </p>
            </div>
          </div>

          {/* Right Column: Key Metrics & What Sets Me Apart */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Quick Summary Pill Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-indigo-900/40 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative flex-shrink-0">
                  <img
                    id="about-profile-photo"
                    src={avatarSrc}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://avatars.githubusercontent.com/u/113597229?v=4';
                    }}
                    className="w-16 h-16 rounded-xl object-cover border border-indigo-500/40 shadow-md bg-slate-900"
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900 shadow-sm" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-indigo-400">
                    Current Role
                  </div>
                  <div className="text-lg font-bold text-white">
                    Generative AI Engineer Intern
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    TechPanda Academy (2026 – Present)
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Building real-world GenAI systems utilizing the Gemini & OpenAI APIs, vector databases, custom RAG pipelines, and interactive deployment frontends with Streamlit and Gradio.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Location: Chennai, India</span>
                <span className="text-emerald-400 font-medium">Available for Hiring</span>
              </div>
            </div>

            {/* Pillar Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <Cpu className="w-5 h-5 text-blue-400 mb-2" />
                <div className="text-sm font-bold text-white">RAG Systems</div>
                <div className="text-xs text-slate-400 mt-1">
                  Semantic chunking, vector embeddings, and zero-hallucination context retrieval.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <Terminal className="w-5 h-5 text-purple-400 mb-2" />
                <div className="text-sm font-bold text-white">Prompt Optimization</div>
                <div className="text-xs text-slate-400 mt-1">
                  Structured few-shot prompting, JSON output enforcement, and safety guardrails.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <Layers className="w-5 h-5 text-indigo-400 mb-2" />
                <div className="text-sm font-bold text-white">Python & SQL Rigor</div>
                <div className="text-xs text-slate-400 mt-1">
                  Python, SQL, REST APIs, and relational schemas for resilient AI integration.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="text-sm font-bold text-white">Data Diagnostics</div>
                <div className="text-xs text-slate-400 mt-1">
                  Pandas, automated anomaly detection, and LLM-assisted root-cause remediation.
                </div>
              </div>
            </div>

            {/* Education Quick Tag */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800/50">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-slate-400">Academic Background</div>
                <div className="text-sm font-bold text-white">B.E. Computer Science & Engineering</div>
                <div className="text-xs text-slate-400">Anna University (2019–2023) • CGPA 7.69</div>
              </div>
              <a
                href="#education"
                className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                title="View Education details"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
