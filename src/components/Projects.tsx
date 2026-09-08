import { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import {
  Sparkles,
  Github,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle2,
  Maximize2,
  FolderGit2,
} from 'lucide-react';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filters = ['All', 'RAG & Knowledge Systems', 'Decision & Diagnostic Copilots', 'Predictive & Data AI'];

  const filteredProjects =
    selectedFilter === 'All'
      ? PROJECTS
      : selectedFilter === 'RAG & Knowledge Systems'
      ? PROJECTS.filter((p) => p.tags.includes('RAG') || p.tags.includes('RAG Pipelines') || p.tags.includes('FAISS'))
      : selectedFilter === 'Decision & Diagnostic Copilots'
      ? PROJECTS.filter((p) => p.tags.includes('Data Quality') || p.tags.includes('Data Analysis') || p.tags.includes('What-If Analysis'))
      : selectedFilter === 'Predictive & Data AI'
      ? PROJECTS.filter((p) => p.tags.includes('Machine Learning') || p.tags.includes('ETL Pipelines') || p.tags.includes('Data Cleaning'))
      : PROJECTS;

  return (
    <section id="projects" className="py-24 relative bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/50 text-xs font-semibold text-indigo-400 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Python & Generative AI Systems • 6 Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              GitHub GenAI Projects
            </h2>
            <p className="mt-2 text-slate-400 text-base max-w-2xl">
              All 6 Generative AI systems, RAG pipelines, diagnostic copilots, decision intelligence platforms, and automated ML pipelines from my GitHub account.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((category) => (
              <button
                key={category}
                id={`project-filter-${category.toLowerCase().replace(/[\s&]+/g, '-')}`}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-indigo-900/30'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isGenAI = project.category === 'GenAI & LLMs';
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`group rounded-2xl bg-slate-900/60 border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  project.featured
                    ? 'border-indigo-800/70 hover:border-indigo-500/80 shadow-lg shadow-indigo-950/20'
                    : 'border-slate-800/90 hover:border-slate-700/90'
                }`}
              >
                {/* Top Banner / Category Badge */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide ${
                        isGenAI
                          ? 'bg-indigo-950/90 text-indigo-300 border border-indigo-800/60'
                          : project.category === 'Machine Learning & Data'
                          ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-800/60'
                          : 'bg-slate-800 text-slate-300 border border-slate-700/60'
                      }`}
                    >
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-medium text-blue-400 font-mono">
                        <Sparkles className="w-3 h-3 text-blue-400" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <div className="text-xs text-indigo-400 font-medium mt-1">
                      {project.subtitle}
                    </div>
                  )}

                  {/* Short Description */}
                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights list (first 2-3 items) */}
                  <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-800/60">
                    {project.keyHighlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: Tags & Actions */}
                <div className="p-6 pt-0 mt-auto">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 my-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950/80 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-400">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Details & Pipeline</span>
                    </button>

                    <a
                      id={`project-github-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-slate-600 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View on GitHub</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Base Profile Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 p-3 px-5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400">
            <Github className="w-4 h-4 text-slate-300" />
            <span>
              All project repositories and codebases are hosted on GitHub at{' '}
              <a
                href="https://github.com/jalil7777"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline font-mono font-medium"
              >
                github.com/jalil7777
              </a>
            </span>
          </div>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
