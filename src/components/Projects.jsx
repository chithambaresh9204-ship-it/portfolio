import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Cpu, ShieldCheck, Activity, Layers, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'AI / ML & XAI', 'Systems & Security', 'Smart IoT & Web'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#0d0d0d] border-t border-[#202020] relative">
      {/* Background glow accent */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#E8792A]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#2b2b2b] text-xs font-bold uppercase tracking-widest text-[#E8792A]">
            <span>Production Portfolio</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            ENGINEERED <span className="text-[#E8792A]">PROJECTS</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            End-to-end machine learning pipelines, explainable AI diagnostics, high-throughput security gateways, and IoT telematics platforms.
          </p>
          <div className="w-16 h-1 bg-[#E8792A] mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded-full transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#E8792A] text-white shadow-lg shadow-orange-500/25 scale-105'
                  : 'bg-[#171717] text-gray-400 hover:text-white hover:bg-[#202020] border border-[#262626]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-[#141414] border border-[#242424] hover:border-[#E8792A]/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group shadow-xl hover:shadow-orange-950/20"
              >
                <div className="space-y-4">
                  
                  {/* Category & Featured Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#1c1c1c] text-[#E8792A] border border-[#2e2e2e]">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] uppercase font-black tracking-widest px-2.5 py-0.5 rounded-full bg-[#E8792A] text-white">
                        Flagship
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-white group-hover:text-[#E8792A] transition-colors uppercase leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-gray-400 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Metrics Row if available */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 pb-1">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="bg-[#0f0f0f] border border-[#222222] rounded-xl p-2 text-center">
                          <div className="font-heading font-black text-xs text-[#E8792A] truncate">
                            {m.value}
                          </div>
                          <div className="text-[9px] uppercase font-medium text-gray-400 truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.slice(0, 3).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-400">
                        <span className="text-[#E8792A] font-bold">›</span>
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#1a1a1a] text-gray-300 border border-[#2b2b2b]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="mt-6 pt-5 border-t border-[#222222] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-white hover:text-[#E8792A] transition-colors py-1"
                  >
                    <span>Architecture Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E8792A]" />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#202020] hover:bg-[#E8792A] text-gray-300 hover:text-white text-xs uppercase font-bold tracking-wider px-4 py-2 rounded-full border border-[#2e2e2e] hover:border-transparent transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
