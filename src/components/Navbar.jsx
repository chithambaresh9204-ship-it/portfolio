import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code, Sparkles, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d0d0d]/90 backdrop-blur-md border-b border-[#262626] py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="group flex items-center gap-3 text-white transition-transform hover:scale-105"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8792A] to-[#f97316] flex items-center justify-center font-heading font-black text-white text-lg shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all">
              CS
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-wider uppercase text-white group-hover:text-[#E8792A] transition-colors">
                CHITHAMBARESH S
              </span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                AI/ML Engineer & SDE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#171717]/80 backdrop-blur border border-[#262626] rounded-full px-4 py-1.5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#E8792A] text-white shadow-md shadow-orange-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#E8792A] hover:bg-[#f0893d] text-white text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-[#1c1c1c] text-gray-300 hover:text-white border border-[#2b2b2b] focus:outline-none focus:ring-2 focus:ring-[#E8792A]"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6 text-[#E8792A]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#121212] border-b border-[#262626] px-4 pt-4 pb-6 mt-3 space-y-2 shadow-2xl animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-[#E8792A] text-white'
                    : 'text-gray-300 hover:bg-[#1f1f1f] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 border-t border-[#262626]">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#E8792A] hover:bg-[#f0893d] text-white text-xs uppercase tracking-wider font-bold py-3 rounded-lg shadow-lg shadow-orange-500/25"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
