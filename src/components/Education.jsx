import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0d0d0d] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E8792A]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#2b2b2b] text-xs font-bold uppercase tracking-widest text-[#E8792A]">
            <span>Academic Milestones</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            EDUCATION & <span className="text-[#E8792A]">CREDENTIALS</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Strong analytical foundations and rigorous academic pursuit in computer science, machine learning, and artificial intelligence.
          </p>
          <div className="w-16 h-1 bg-[#E8792A] mx-auto rounded-full mt-4" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {educationData.map((edu, idx) => {
            const isCollege = idx === 0;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group shadow-xl ${
                  isCollege
                    ? 'bg-[#151515] border-2 border-[#E8792A]/60 shadow-orange-950/20'
                    : 'bg-[#141414] border border-[#242424] hover:border-[#E8792A]/40'
                }`}
              >
                {/* Featured badge for B.Tech */}
                {isCollege && (
                  <div className="absolute -top-3.5 right-6 bg-[#E8792A] text-white text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full shadow-md">
                    Undergraduate Degree
                  </div>
                )}

                <div className="space-y-5">
                  {/* Top Bar: Icon & Period */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#1f1f1f] border border-[#303030] group-hover:border-[#E8792A] flex items-center justify-center text-[#E8792A] group-hover:bg-[#E8792A] group-hover:text-white transition-all shadow-md">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-400 bg-[#1c1c1c] px-3 py-1 rounded-full border border-[#2b2b2b]">
                      <Calendar className="w-3.5 h-3.5 text-[#E8792A]" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Institution & Degree */}
                  <div className="space-y-1.5">
                    <h3 className="font-heading font-black text-lg sm:text-xl text-white group-hover:text-[#E8792A] transition-colors uppercase leading-snug">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-gray-300">
                      {edu.degree}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  {/* Score Highlight Box */}
                  <div className="p-4 rounded-2xl bg-[#0f0f0f] border border-[#262626] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                        Academic Standing
                      </div>
                      <div className="font-heading font-black text-xl text-[#E8792A]">
                        {edu.score}
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#1f1f1f] text-gray-300 border border-[#303030]">
                      {edu.scoreHighlight}
                    </span>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 pt-2">
                    {edu.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-gray-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E8792A] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Status */}
                <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between text-xs text-gray-400">
                  <span className="font-medium">{edu.status}</span>
                  <span className="text-[10px] text-[#E8792A] font-bold tracking-wider uppercase">
                    Verified Record
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic Highlights Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#171717] via-[#1c1c1c] to-[#171717] border border-[#2b2b2b] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#E8792A]/10 border border-[#E8792A]/40 flex items-center justify-center text-[#E8792A] shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base sm:text-lg text-white uppercase tracking-wider">
                Excellence in Artificial Intelligence & Machine Learning
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
                Consistently ranked at the top of the engineering cohort with a 9.16/10 CGPA, pairing theoretical rigor in algorithms with production deployments.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-[#E8792A] hover:bg-[#f0893d] text-white text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-full transition-all shrink-0 shadow-md shadow-orange-500/20"
          >
            <span>See Project Deployments</span>
          </a>
        </div>

      </div>
    </section>
  );
}
