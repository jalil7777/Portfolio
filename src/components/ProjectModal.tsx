import { Project } from '../types';
import { X, Github, ExternalLink, Sparkles, Layers, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/70 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                {project.category}
              </span>
              {project.featured && (
                <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-950/80 text-blue-300 border border-blue-800/60">
                  <Sparkles className="w-3 h-3 text-blue-400" /> Featured Project
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm text-slate-400 mt-0.5 font-medium">
                {project.subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">
              System Overview
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Architecture Pipeline (if available) */}
          {project.architecture && (
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-indigo-400 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> Technical Architecture & Flow
              </h4>

              {project.architecture.inputs && (
                <div className="text-xs">
                  <span className="text-slate-400 font-semibold">Inputs: </span>
                  <span className="text-slate-200">{project.architecture.inputs}</span>
                </div>
              )}

              {project.architecture.processing && (
                <div className="text-xs">
                  <span className="text-slate-400 font-semibold">Processing Engine: </span>
                  <span className="text-slate-200">{project.architecture.processing}</span>
                </div>
              )}

              {project.architecture.outputs && (
                <div className="text-xs">
                  <span className="text-slate-400 font-semibold">Outputs: </span>
                  <span className="text-slate-200">{project.architecture.outputs}</span>
                </div>
              )}

              {project.architecture.pipeline && project.architecture.pipeline.length > 0 && (
                <div className="pt-2">
                  <div className="text-xs font-semibold text-slate-400 mb-2">
                    Execution Pipeline:
                  </div>
                  <div className="space-y-1.5 font-mono text-xs">
                    {project.architecture.pipeline.map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300 bg-slate-900/80 px-3 py-1.5 rounded border border-slate-800/80">
                        <span className="text-indigo-400 font-bold">{idx + 1}.</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Key Engineering Highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2.5">
              Engineering Highlights & Outcomes
            </h4>
            <div className="space-y-2">
              {project.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2.5">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 font-mono text-xs border border-slate-700/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer with Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between gap-4">
          <div className="text-xs text-slate-400 hidden sm:block">
            Source repository on GitHub
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-indigo-900/30 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
