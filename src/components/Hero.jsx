import React from 'react';
import { ArrowUpRight, FileText, Sparkles, Terminal, Cpu, Database, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0d0d0d]">
      {/* Background glowing ambient light blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8792A]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-[#E8792A]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#E8792A]/5 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#26262615_1px,transparent_1px),linear-gradient(to_bottom,#26262615_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status chip */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#2e2e2e] text-xs font-semibold tracking-wide text-gray-300 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8792A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E8792A]"></span>
              </span>
              <span className="text-gray-300">Open to SDE & AI/ML Opportunities</span>
              <span className="text-[#555]">•</span>
              <span className="text-[#E8792A] font-bold">KARE '27</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h1 className="font-heading font-black tracking-tight text-4xl sm:text-6xl lg:text-7xl uppercase text-white leading-none">
                CHITHAMBARESH <span className="text-[#E8792A]">S</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-gray-300 flex items-center gap-2 flex-wrap">
                <span>Aspiring AI/ML Engineer</span>
                <span className="text-[#E8792A] font-light">|</span>
                <span className="text-gray-100">Software Developer (SDE)</span>
              </p>
            </div>

            {/* Core Summary description */}
            <p className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed max-w-2xl">
              B.Tech CSE (AI & ML) undergraduate at{' '}
              <span className="text-white font-medium">Kalasalingam Academy of Research and Education</span>{' '}
              with a <span className="text-[#E8792A] font-bold">9.16/10 CGPA</span>. Architecting end-to-end ML pipelines, stacking ensembles, and explainable AI (XAI) systems deployed as resilient FastAPI microservices for agriculture, healthcare, and telematics.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#E8792A] hover:bg-[#f0893d] text-white text-sm uppercase tracking-wider font-bold px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-200"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 bg-[#171717] hover:bg-[#202020] text-gray-200 hover:text-white text-sm uppercase tracking-wider font-bold px-7 py-3.5 rounded-full border border-[#2f2f2f] hover:border-[#E8792A]/50 hover:-translate-y-1 transition-all duration-200"
              >
                <span>View Projects</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold text-gray-400 hover:text-[#E8792A] px-4 py-2 transition-colors"
              >
                <span>Learn More About Me →</span>
              </a>
            </div>

            {/* Micro badges row */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1.5 bg-[#141414] px-3 py-1.5 rounded-md border border-[#262626]">
                <Cpu className="w-3.5 h-3.5 text-[#E8792A]" />
                Stacking Ensembles & XAI
              </span>
              <span className="flex items-center gap-1.5 bg-[#141414] px-3 py-1.5 rounded-md border border-[#262626]">
                <ZapIcon />
                FastAPI & Microservices
              </span>
              <span className="flex items-center gap-1.5 bg-[#141414] px-3 py-1.5 rounded-md border border-[#262626]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E8792A]" />
                1,657 Automated Tests
              </span>
            </div>
          </div>

          {/* Right Column: Professional Portrait & Floating Stat Badges */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#E8792A] via-[#f97316] to-[#ffaa5a] rounded-3xl opacity-35 blur-xl group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-[#141414] border-2 border-[#2b2b2b] p-3 shadow-2xl overflow-hidden">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02] hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Bottom Overlay Pill on Image */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#161616]/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#E8792A]/20 flex items-center justify-center border border-[#E8792A]/40">
                      <Terminal className="w-4 h-4 text-[#E8792A]" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">AI/ML & SDE</h4>
                      <p className="text-[10px] text-gray-400">Tenkasi, Tamil Nadu</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E8792A] text-white">
                    Verified
                  </span>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left: CGPA */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-[#181818]/95 backdrop-blur-md border border-[#2e2e2e] shadow-xl shadow-black/60 rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 hover:scale-105 transition-transform">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E8792A] to-[#f97316] flex items-center justify-center shadow-md shadow-orange-500/30">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">9.16 / 10</div>
                  <div className="text-[10px] text-gray-400">B.Tech CGPA (AI & ML)</div>
                </div>
              </div>

              {/* Floating Badge 2 - Top Right / Middle Right: Current Internship */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-[#181818]/95 backdrop-blur-md border border-[#2e2e2e] shadow-xl shadow-black/60 rounded-2xl px-3.5 py-2.5 flex items-center gap-2.5 hover:scale-105 transition-transform">
                <div className="w-9 h-9 rounded-xl bg-[#222222] border border-[#E8792A]/40 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-[#E8792A]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Infosys Intern</div>
                  <div className="text-[10px] text-gray-400">Sasyam AI • Oct 2026–Present</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-[#222222]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#141414] hover:bg-[#191919] border border-[#262626] hover:border-[#E8792A]/50 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="font-heading font-black text-2xl sm:text-3xl text-white group-hover:text-[#E8792A] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-gray-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ZapIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-[#E8792A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
