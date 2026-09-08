import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/50 text-xs font-semibold text-blue-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-slate-400 text-base max-w-2xl">
            Formal training in computer science, algorithmic foundations, and system design.
          </p>
        </div>

        {/* Education Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/60 border border-slate-800/90 shadow-xl relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 blur-[100px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left: Degree & University */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-950/90 border border-blue-800/60 text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <div className="text-base font-semibold text-indigo-400">
                    {EDUCATION_DATA.field}
                  </div>
                </div>
              </div>

              <div className="text-slate-200 font-medium text-base">
                {EDUCATION_DATA.institution}
              </div>
              <div className="text-slate-400 text-sm">
                Affiliated with <strong className="text-slate-300">{EDUCATION_DATA.university}</strong>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {EDUCATION_DATA.period}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  {EDUCATION_DATA.location}
                </span>
                {EDUCATION_DATA.cgpa && (
                  <span className="flex items-center gap-1.5 bg-emerald-950/80 text-emerald-300 px-3 py-1.5 rounded-lg border border-emerald-800/60 font-semibold">
                    <Award className="w-3.5 h-3.5 text-emerald-400" />
                    CGPA: {EDUCATION_DATA.cgpa}
                  </span>
                )}
              </div>
            </div>

            {/* Right: Academic Focus & Highlights */}
            <div className="lg:col-span-5 bg-slate-950/60 p-6 rounded-xl border border-slate-800/80 space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-indigo-400">
                <BookOpen className="w-4 h-4" /> Academic Focus & Highlights
              </div>

              <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                {EDUCATION_DATA.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
                  Core Foundations
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Data Structures', 'Algorithms', 'DBMS (SQL)', 'OOP Concepts', 'Operating Systems', 'Computer Networks'].map((course) => (
                    <span
                      key={course}
                      className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[11px] font-mono border border-slate-800"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
