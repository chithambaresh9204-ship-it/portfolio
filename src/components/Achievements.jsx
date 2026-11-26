import React from 'react';
import { Trophy, Megaphone, Award, Calendar, Sparkles } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

const iconMap = {
  Megaphone,
  Trophy,
  Award,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#0d0d0d] border-t border-[#202020] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#2b2b2b] text-xs font-bold uppercase tracking-widest text-[#E8792A]">
            <span>Leadership & Hackathons</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            HONORS & <span className="text-[#E8792A]">LEADERSHIP</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Demonstrated initiatives across hackathons, developer community leadership, and academic excellence.
          </p>
          <div className="w-16 h-1 bg-[#E8792A] mx-auto rounded-full mt-4" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div
                key={idx}
                className="bg-[#141414] border border-[#242424] hover:border-[#E8792A]/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#1c1c1c] border border-[#2c2c2c] group-hover:border-[#E8792A] flex items-center justify-center text-[#E8792A] group-hover:bg-[#E8792A] group-hover:text-white transition-all shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full bg-[#1e1e1e] text-gray-300 border border-[#2e2e2e]">
                      {item.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-black text-lg sm:text-xl text-white group-hover:text-[#E8792A] transition-colors uppercase leading-snug">
                      {item.title}
                    </h3>
                    <div className="text-sm font-bold text-[#E8792A] mt-1">
                      {item.organization}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E8792A]" />
                    <span>{item.period}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8792A]">
                    Acknowledged
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
