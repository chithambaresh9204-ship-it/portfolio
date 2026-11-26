import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, ShieldCheck, Activity, Layers, Cpu } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-3xl bg-[#141414] border-2 border-[#E8792A]/50 rounded-3xl p-6 sm:p-9 shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto custom-scrollbar animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#202020] text-gray-400 hover:text-white hover:bg-[#2a2a2a] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-gray-300 hover:text-[#E8792A]" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-10">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#E8792A]/15 text-[#E8792A] border border-[#E8792A]/30">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded-full bg-[#E8792A] text-white">
                Featured Flagship
              </span>
            )}
          </div>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base font-medium text-gray-300">
            {project.tagline}
          </p>
        </div>

        {/* Metrics Bar */}
        {project.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 pt-2">
            {project.metrics.map((m, mIdx) => (
              <div key={mIdx} className="p-3 rounded-2xl bg-[#0d0d0d] border border-[#262626] text-center">
                <div className="font-heading font-black text-base text-[#E8792A]">
                  {m.value}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Deep Dive & Architecture narrative */}
        <div className="space-y-4 my-6 text-gray-300 text-sm leading-relaxed">
          <h4 className="text-xs font-black uppercase tracking-wider text-[#E8792A] flex items-center gap-1.5">
            <Cpu className="w-4 h-4" />
            <span>Architecture & Technical Implementation</span>
          </h4>
          <p className="bg-[#181818] p-4 rounded-2xl border border-[#282828] text-gray-300">
            {project.deepDive}
          </p>
        </div>

        {/* Highlights List */}
        <div className="space-y-2.5 my-6">
          <h4 className="text-xs font-black uppercase tracking-wider text-gray-400">
            Key Architectural Achievements
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {project.highlights.map((h, hIdx) => (
              <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#E8792A] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2 my-6 pt-4 border-t border-[#242424]">
          <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#E8792A]" />
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tech.map((t, tIdx) => (
              <span
                key={tIdx}
                className="text-xs px-3 py-1 rounded-full bg-[#1c1c1c] text-gray-200 border border-[#2e2e2e]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="pt-6 border-t border-[#242424] flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E8792A] hover:bg-[#f0893d] text-white text-xs uppercase font-bold tracking-wider px-6 py-3 rounded-full transition-all shadow-lg shadow-orange-500/25"
          >
            <Github className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="text-xs uppercase font-bold tracking-wider text-gray-400 hover:text-white px-4 py-2 transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}
