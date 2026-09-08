import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Sparkles,
  ArrowRight,
  Send,
  Github,
  Linkedin,
  MapPin,
  Terminal,
  Cpu,
  Database,
  CheckCircle2,
  FileCode2,
  Copy,
  Check,
  Camera,
} from 'lucide-react';

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'rag' | 'prompt'>('rag');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [avatarSrc, setAvatarSrc] = useState<string>(() => {
    return localStorage.getItem('portfolio_custom_avatar') || PERSONAL_INFO.avatar;
  });

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setAvatarSrc(result);
        localStorage.setItem('portfolio_custom_avatar', result);
        window.dispatchEvent(new Event('portfolio_avatar_updated'));
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const handleAvatarUpdate = () => {
      const saved = localStorage.getItem('portfolio_custom_avatar');
      if (saved) setAvatarSrc(saved);
    };
    window.addEventListener('portfolio_avatar_updated', handleAvatarUpdate);
    return () => window.removeEventListener('portfolio_avatar_updated', handleAvatarUpdate);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden tech-grid-pattern"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Calls to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Profile Avatar & Availability Badge */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div
                className="relative group cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
                title="Click to upload/change photo"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-0.5 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-xl shadow-indigo-950/60 group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <img
                    id="hero-profile-avatar"
                    src={avatarSrc}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://avatars.githubusercontent.com/u/113597229?v=4';
                    }}
                    className="w-full h-full object-cover rounded-[14px] bg-slate-900 border border-slate-800"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-[14px] flex flex-col items-center justify-center text-white text-[10px] font-semibold gap-1">
                    <Camera className="w-4 h-4" />
                    <span>Change</span>
                  </div>
                </div>
                <div
                  title="Open to GenAI & ML opportunities"
                  className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center shadow-md z-10"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  aria-label="Upload profile photo"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div
                  id="hero-status-badge"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-xs font-medium text-slate-300 shadow-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-emerald-400 font-semibold">{PERSONAL_INFO.availability}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 pl-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Name */}
            <h1
              id="hero-name"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]"
            >
              Abdul Jalil <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Sait Mohammed
              </span>
            </h1>

            {/* Professional Title */}
            <div className="mt-3 flex items-center gap-2 text-lg sm:text-xl font-semibold text-indigo-400">
              <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0" />
              <span>{PERSONAL_INFO.title}</span>
            </div>

            {/* Transition Tagline */}
            <p
              id="hero-tagline"
              className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              Generative AI Engineer specialized in engineering production-grade{' '}
              <span className="text-blue-300 font-semibold">LLM architectures</span>,{' '}
              <span className="text-purple-300 font-semibold">RAG pipelines</span>, and intelligent Python & SQL data systems.
            </p>

            {/* Quick Competency Chips */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {[
                'Retrieval-Augmented Generation (RAG)',
                'Gemini & OpenAI APIs',
                'Prompt Engineering',
                'Vector Embeddings',
                'Python & Data Processing',
                'Python & SQL',
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 font-mono"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Primary CTAs & Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-indigo-900/40 hover:shadow-indigo-900/60 transition-all group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-cta-contact"
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 transition-all"
              >
                <Send className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>

              {/* Social links */}
              <div className="flex items-center gap-2.5 pt-2 sm:pt-0">
                <a
                  id="hero-github-icon-link"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  id="hero-linkedin-icon-link"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <button
                  id="hero-copy-email-btn"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-mono text-slate-300 border border-slate-800 hover:border-slate-700 transition-all"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>{PERSONAL_INFO.email.split('@')[0]}...</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive AI Pipeline Visual / Tech Card */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-2xl shadow-indigo-950/40 overflow-hidden">
              {/* Window Header */}
              <div className="bg-slate-950/90 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" /> genai_copilot_workflow.py
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('rag')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'rag' ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    RAG Pipeline
                  </button>
                  <button
                    onClick={() => setActiveTab('prompt')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'prompt' ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Prompt Guard
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-5 font-mono text-xs">
                {activeTab === 'rag' ? (
                  <div className="space-y-3.5">
                    <div className="flex items-start gap-2.5 text-slate-400">
                      <span className="text-slate-600 select-none">01</span>
                      <div className="flex-1">
                        <span className="text-purple-400 font-semibold">class</span>{' '}
                        <span className="text-amber-300">EnterpriseKnowledgeRAG</span>:
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-slate-300 pl-4 border-l border-slate-800">
                      <span className="text-slate-600 select-none">02</span>
                      <div className="flex-1 text-slate-300">
                        <span className="text-blue-400">docs</span> = chunk_and_embed(
                        <span className="text-emerald-300">&quot;company_policy.pdf&quot;</span>, model=
                        <span className="text-emerald-300">&quot;text-embedding-004&quot;</span>)
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-slate-300 pl-4 border-l border-slate-800">
                      <span className="text-slate-600 select-none">03</span>
                      <div className="flex-1 text-slate-300">
                        <span className="text-blue-400">vector_index</span> = VectorStore.create(docs)
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-slate-300 pl-4 border-l border-slate-800">
                      <span className="text-slate-600 select-none">04</span>
                      <div className="flex-1 text-slate-300">
                        <span className="text-blue-400">retrieved_context</span> = vector_index.similarity_search(query, top_k=
                        <span className="text-amber-300">3</span>)
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-slate-300 pl-4 border-l border-slate-800">
                      <span className="text-slate-600 select-none">05</span>
                      <div className="flex-1 text-slate-300">
                        <span className="text-blue-400">response</span> = gemini.generate_content(
                        <br />
                        <span className="text-slate-400 pl-4">prompt=augmented_context(query, retrieved_context)</span>
                        <br />)
                      </div>
                    </div>

                    {/* Live Pipeline Step Indicator */}
                    <div className="mt-4 pt-4 border-t border-slate-800/90">
                      <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center justify-between">
                        <span>Runtime Architecture</span>
                        <span className="text-emerald-400 font-normal">Active Grounding</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5 text-center">
                        <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
                          <FileCode2 className="w-3.5 h-3.5 text-blue-400 mx-auto mb-1" />
                          <div className="text-[10px] text-slate-300">1. Chunk</div>
                        </div>
                        <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
                          <Cpu className="w-3.5 h-3.5 text-indigo-400 mx-auto mb-1" />
                          <div className="text-[10px] text-slate-300">2. Embed</div>
                        </div>
                        <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
                          <Database className="w-3.5 h-3.5 text-purple-400 mx-auto mb-1" />
                          <div className="text-[10px] text-slate-300">3. Retrieve</div>
                        </div>
                        <div className="p-2 rounded bg-blue-950/30 border border-blue-600/40">
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400 mx-auto mb-1" />
                          <div className="text-[10px] text-cyan-300 font-semibold">4. Synthesize</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-slate-400">
                      <span className="text-slate-600"># System Guardrail Configuration</span>
                    </div>
                    <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                      <p className="text-indigo-300 mb-1 font-semibold">SYSTEM_DIRECTIVE = &quot;&quot;&quot;</p>
                      <p className="text-slate-400 leading-relaxed">
                        You are an Enterprise AI Specialist. Answer only based on verified retrieved facts.
                        Never speculate on unverified policies. Output strict JSON formatting for diagnostic alerts.
                      </p>
                      <p className="text-indigo-300 font-semibold">&quot;&quot;&quot;</p>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-400 text-[11px] pt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Zero-hallucination policy guardrails enabled</span>
                    </div>
                  </div>
                )}

                {/* Footer status */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                    TechPanda Academy Lab
                  </span>
                  <span>Python 3.11 • Gemini 2.0 • OpenAI</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
