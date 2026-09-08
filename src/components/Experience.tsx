import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-800/50 text-xs font-semibold text-purple-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work History & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-2 text-slate-400 text-base max-w-2xl">
            A track record combining real-world Generative AI development, enterprise customer diagnostics, and rigorous software training.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Bullet Marker */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full border-4 transition-all duration-300 ${
                  exp.isCurrent
                    ? 'border-indigo-500 bg-white shadow-md shadow-indigo-500/50 scale-110'
                    : 'border-slate-800 bg-slate-900 group-hover:border-slate-600'
                }`}
              />

              {/* Card Content */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-950/90 text-indigo-300 border border-indigo-700/50">
                          <Sparkles className="w-3 h-3 text-indigo-400" /> Present Role
                        </span>
                      )}
                    </div>

                    <div className="text-sm font-semibold text-indigo-400 mt-1">
                      {exp.company}{' '}
                      {exp.formerName && (
                        <span className="text-xs text-slate-400 font-normal">
                          ({exp.formerName})
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-400 gap-1 font-medium">
                    <span className="flex items-center gap-1.5 font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-400" /> {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="mt-4 space-y-2">
                  {exp.description.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Technology Badges */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950/80 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
