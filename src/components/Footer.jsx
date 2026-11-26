import React from 'react';
import { ArrowUp, Heart, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#080808] border-t border-[#1f1f1f] py-14 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#1b1b1b]">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#E8792A] flex items-center justify-center font-heading font-black text-white text-sm shadow-md">
                CS
              </div>
              <span className="font-heading font-black text-lg uppercase tracking-wider text-white">
                CHITHAMBARESH S
              </span>
            </div>
            <p className="text-gray-400 text-xs max-w-sm">
              Aspiring AI/ML Engineer & SDE • Specializing in Explainable AI, Ensemble Architectures & High-Performance Production Systems.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#E8792A] hover:bg-[#E8792A] text-gray-300 hover:text-white flex items-center justify-center transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#E8792A] hover:bg-[#E8792A] text-gray-300 hover:text-white flex items-center justify-center transition-all"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#E8792A] hover:bg-[#E8792A] text-gray-300 hover:text-white flex items-center justify-center transition-all"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${personalInfo.phoneRaw}`}
              className="w-10 h-10 rounded-xl bg-[#141414] border border-[#262626] hover:border-[#E8792A] hover:bg-[#E8792A] text-gray-300 hover:text-white flex items-center justify-center transition-all"
              title="Call / WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-[#E8792A] hover:bg-[#f0893d] text-white flex items-center justify-center transition-all shadow-md shadow-orange-500/20"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Navigation Quick Links */}
        <div className="py-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-[#E8792A] uppercase tracking-wider font-semibold text-[11px] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-[#181818] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-gray-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">CHITHAMBARESH S</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with passion for AI/ML & Scalable Software Engineering</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
