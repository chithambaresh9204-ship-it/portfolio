import React, { useState } from 'react';
import { MapPin, Phone, Mail, Linkedin, Github, Copy, Check, ExternalLink, Brain, Server, Radio, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const [copied, setCopied] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2200);
  };

  const pillars = [
    {
      icon: Brain,
      title: "Explainable AI & Ensembles",
      description: "Developing heterogeneous stacking ensembles, neural sequence models (LSTM), and clinical model interpretability pipelines using SHAP, LIME, and Partial Dependence Plots."
    },
    {
      icon: Server,
      title: "Production APIs & Microservices",
      description: "Engineering resilient, low-latency RESTful services with FastAPI, PostgreSQL, TimescaleDB, and Redis, verified through exhaustive unit testing and CI/CD automation."
    },
    {
      icon: Radio,
      title: "IoT Telemetry & Ingestion",
      description: "Architecting real-time streaming architectures using MQTT brokers, ingesting soil moisture and fleet telematics for high-frequency predictive time-series inference."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#111111] border-y border-[#202020] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#2b2b2b] text-xs font-bold uppercase tracking-widest text-[#E8792A]">
            <span>Who I Am</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            ABOUT <span className="text-[#E8792A]">ME</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Bridging algorithmic intelligence and high-performance software engineering to build transparent, reliable production systems.
          </p>
          <div className="w-16 h-1 bg-[#E8792A] mx-auto rounded-full mt-4" />
        </div>

        {/* Two-Column Grid: Narrative Bio & Contact Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#171717] border border-[#262626] rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl hover:border-[#E8792A]/40 transition-all duration-300">
              <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-white flex items-center gap-2">
                <span>The Engineering Philosophy</span>
                <span className="text-[#E8792A] text-sm font-normal">///</span>
              </h3>
              
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx} className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}

              <div className="pt-2 border-t border-[#262626] flex flex-wrap gap-4 text-xs font-semibold text-gray-400">
                <span className="text-white">Domain Expertise:</span>
                <span className="text-[#E8792A]">Smart Precision Agriculture</span>
                <span>•</span>
                <span className="text-[#E8792A]">Healthcare Diagnostics</span>
                <span>•</span>
                <span className="text-[#E8792A]">Fleet Telematics Analytics</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Dossier & Quick Actions */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#171717] border border-[#262626] rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
              <h3 className="font-heading font-bold text-lg uppercase tracking-wider text-white">
                Contact Dossier
              </h3>

              <div className="space-y-3.5">
                {/* Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#111111] border border-[#242424]">
                  <div className="w-9 h-9 rounded-xl bg-[#202020] flex items-center justify-center text-[#E8792A] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate">{personalInfo.location}</div>
                  </div>
                </div>

                {/* Email with copy */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-[#111111] border border-[#242424] hover:border-[#E8792A]/40 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#202020] flex items-center justify-center text-[#E8792A] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Email Address</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-[#E8792A] truncate block">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-[#202020] text-gray-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copied === 'email' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between gap-2 p-3 rounded-2xl bg-[#111111] border border-[#242424] hover:border-[#E8792A]/40 transition-colors">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#202020] flex items-center justify-center text-[#E8792A] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Phone / WhatsApp</div>
                      <a href={`tel:${personalInfo.phoneRaw}`} className="text-xs sm:text-sm font-semibold text-white hover:text-[#E8792A]">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="p-2 rounded-lg bg-[#202020] text-gray-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copied === 'phone' ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#111111] border border-[#242424] hover:border-[#E8792A]/50 hover:bg-[#151515] transition-all group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#202020] group-hover:bg-[#E8792A] group-hover:text-white flex items-center justify-center text-[#E8792A] transition-colors shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">LinkedIn Profile</div>
                      <div className="text-xs sm:text-sm font-semibold text-white truncate">{personalInfo.linkedinHandle}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#E8792A] transition-colors" />
                </a>

                {/* GitHub */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#111111] border border-[#242424] hover:border-[#E8792A]/50 hover:bg-[#151515] transition-all group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#202020] group-hover:bg-[#E8792A] group-hover:text-white flex items-center justify-center text-[#E8792A] transition-colors shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">GitHub Repository</div>
                      <div className="text-xs sm:text-sm font-semibold text-white truncate">{personalInfo.githubHandle}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#E8792A] transition-colors" />
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* 3 Core Pillars of Engineering Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#171717] border border-[#262626] hover:border-[#E8792A]/50 rounded-3xl p-6 space-y-4 transition-all duration-300 hover:-translate-y-1.5 shadow-lg group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#202020] to-[#141414] border border-[#333333] group-hover:border-[#E8792A] flex items-center justify-center text-[#E8792A] group-hover:text-white group-hover:bg-[#E8792A] transition-all duration-300 shadow-md">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-base uppercase tracking-wider text-white group-hover:text-[#E8792A] transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
