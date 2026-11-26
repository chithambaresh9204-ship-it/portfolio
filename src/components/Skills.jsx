import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Cpu, 
  Layers, 
  Eye, 
  TrendingUp, 
  Activity, 
  Binary, 
  BarChart3, 
  Layout, 
  Globe, 
  Zap, 
  Network, 
  Sparkles, 
  Radio, 
  Box, 
  GitBranch, 
  GitCommit, 
  BookOpen, 
  MessageSquare, 
  Languages as LangIcon 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Code2,
  Terminal,
  Database,
  Cpu,
  Layers,
  Eye,
  TrendingUp,
  Activity,
  Binary,
  BarChart3,
  Layout,
  Globe,
  Zap,
  Network,
  Sparkles,
  Radio,
  Box,
  GitBranch,
  GitCommit,
  BookOpen,
  MessageSquare,
  Languages: LangIcon
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 bg-[#111111] border-t border-[#202020] relative">
      {/* Background ambient light */}
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#E8792A]/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#2b2b2b] text-xs font-bold uppercase tracking-widest text-[#E8792A]">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            SKILLS & <span className="text-[#E8792A]">EXPERTISE</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Proficiencies across algorithmic design, scalable backends, explainable machine learning, and cloud deployment pipelines.
          </p>
          <div className="w-16 h-1 bg-[#E8792A] mx-auto rounded-full mt-4" />
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {skillsData.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`text-xs uppercase tracking-wider font-bold px-4 py-2.5 rounded-full transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-[#E8792A] text-white shadow-lg shadow-orange-500/25 scale-105'
                  : 'bg-[#181818] text-gray-400 hover:text-white hover:bg-[#222222] border border-[#2a2a2a]'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Active Category Display Grid */}
        <div className="bg-[#151515] border border-[#262626] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="mb-8 pb-4 border-b border-[#242424] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-heading font-black text-2xl uppercase tracking-wide text-white">
                {skillsData[activeTab].category}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                {skillsData[activeTab].description}
              </p>
            </div>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#1e1e1e] text-[#E8792A] border border-[#2e2e2e] self-start sm:self-auto">
              {skillsData[activeTab].skills.length} Competencies
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {skillsData[activeTab].skills.map((skill, sIdx) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <div
                  key={sIdx}
                  className="bg-[#101010] border border-[#222222] hover:border-[#E8792A]/50 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] border border-[#2b2b2b] group-hover:border-[#E8792A] flex items-center justify-center text-[#E8792A] group-hover:bg-[#E8792A] group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-[#E8792A] transition-colors">
                      {skill.level}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-[#E8792A] transition-colors">
                      {skill.name}
                    </h4>
                    <div className="w-full bg-[#202020] h-1 rounded-full mt-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#E8792A] to-[#f97316] h-full rounded-full transition-all duration-500"
                        style={{
                          width:
                            skill.level === 'Advanced'
                              ? '95%'
                              : skill.level === 'Proficient' || skill.level === 'Fluent (Professional)' || skill.level === 'Native'
                              ? '85%'
                              : '70%',
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comprehensive Grid of All Skill Tags */}
        <div className="mt-14 pt-10 border-t border-[#222222]">
          <h4 className="text-xs font-black uppercase tracking-wider text-gray-400 text-center mb-6">
            Complete Technical Vocabulary
          </h4>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {skillsData.flatMap((c) => c.skills).map((s, idx) => (
              <span
                key={idx}
                className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#141414] text-gray-300 border border-[#262626] hover:border-[#E8792A] hover:text-[#E8792A] transition-colors"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
