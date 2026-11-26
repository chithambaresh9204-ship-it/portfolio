import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers, Sparkles, Server } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#111111] border-t border-[#202020] relative">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#E8792A]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#2b2b2b] text-xs font-bold uppercase tracking-widest text-[#E8792A]">
            <span>Industry Engagements</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            WORK <span className="text-[#E8792A]">EXPERIENCE</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Hands-on software engineering and machine learning internships delivering scalable pipelines and real-time production modules.
          </p>
          <div className="w-16 h-1 bg-[#E8792A] mx-auto rounded-full mt-4" />
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {experienceData.map((exp, idx) => {
            const isCurrent = exp.badge === 'Current Role';
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 sm:p-9 transition-all duration-300 hover:-translate-y-1 group shadow-2xl ${
                  isCurrent
                    ? 'bg-[#161616] border-2 border-[#E8792A]/60 shadow-orange-950/20'
                    : 'bg-[#151515] border border-[#262626] hover:border-[#E8792A]/40'
                }`}
              >
                {/* Top Role Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#242424]">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#202020] to-[#121212] border border-[#333] group-hover:border-[#E8792A] flex items-center justify-center text-[#E8792A] group-hover:bg-[#E8792A] group-hover:text-white transition-all shadow-md shrink-0">
                      <Briefcase className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-heading font-black text-xl sm:text-2xl text-white uppercase tracking-wide">
                          {exp.role}
                        </h3>
                        <span className={`text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full ${
                          isCurrent
                            ? 'bg-[#E8792A] text-white shadow-md shadow-orange-500/25'
                            : 'bg-[#222222] text-gray-300 border border-[#303030]'
                        }`}>
                          {exp.badge}
                        </span>
                      </div>
                      <div className="text-base font-bold text-[#E8792A] mt-1">
                        {exp.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5 bg-[#121212] px-3 py-1.5 rounded-full border border-[#242424]">
                      <Calendar className="w-3.5 h-3.5 text-[#E8792A]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#121212] px-3 py-1.5 rounded-full border border-[#242424]">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary narrative */}
                <div className="py-5">
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
                    {exp.summary}
                  </p>
                </div>

                {/* Key Responsibilities / Technical Impact */}
                <div className="space-y-3 pb-6">
                  <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 flex items-center gap-2">
                    <span>Key Engineering Deliverables & Contributions</span>
                    <ChevronRight className="w-3 h-3 text-[#E8792A]" />
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="bg-[#111111] p-3.5 rounded-2xl border border-[#222222] flex items-start gap-3 hover:border-[#E8792A]/30 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#E8792A] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-[#242424] flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-gray-400 mr-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#E8792A]" />
                    Tech Stack:
                  </span>
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-3 py-1 rounded-full bg-[#1b1b1b] text-gray-300 border border-[#2c2c2c] hover:border-[#E8792A] hover:text-[#E8792A] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
