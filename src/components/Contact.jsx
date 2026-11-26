import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle2, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Create mailto fallback link and open it
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || 'Opportunity Discussion'}`);
    const mailtoBody = encodeURIComponent(
      `Hello Chithambaresh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(''), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#111111] border-t border-[#202020] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#E8792A]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1c1c] border border-[#2b2b2b] text-xs font-bold uppercase tracking-widest text-[#E8792A]">
            <span>Start a Conversation</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
            LET'S <span className="text-[#E8792A]">TALK</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Interested in collaborating on AI/ML projects, scalable SDE roles, or tech research? Feel free to reach out.
          </p>
          <div className="w-16 h-1 bg-[#E8792A] mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#161616] border border-[#262626] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="font-heading font-black text-xl uppercase tracking-wide text-white">
                Contact Channels
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Whether you have an inquiry regarding full-time SDE roles, machine learning internships, or project collaborations, I'll respond promptly.
              </p>

              <div className="space-y-4">
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-[#0e0e0e] border border-[#222222] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] flex items-center justify-center text-[#E8792A] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Direct Email</div>
                      <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-[#E8792A] truncate block">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-2 rounded-lg bg-[#1c1c1c] text-gray-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-2xl bg-[#0e0e0e] border border-[#222222] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] flex items-center justify-center text-[#E8792A] shrink-0">
                      <Phone className="w-5 h-5" />
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
                    className="p-2 rounded-lg bg-[#1c1c1c] text-gray-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedType === 'phone' ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-[#0e0e0e] border border-[#222222] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] flex items-center justify-center text-[#E8792A] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Current Base</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-2">
                <div className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-3">
                  Connect on Socials
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#1c1c1c] border border-[#2d2d2d] hover:border-[#E8792A] hover:bg-[#222222] text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-[#E8792A]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-[#1c1c1c] border border-[#2d2d2d] hover:border-[#E8792A] hover:bg-[#222222] text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <Github className="w-4 h-4 text-[#E8792A]" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#161616] border border-[#262626] rounded-3xl p-6 sm:p-9 shadow-xl relative">
              <h3 className="font-heading font-black text-xl uppercase tracking-wide text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Fill in your details below and your email client will be pre-filled with this message.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-green-950/60 border border-green-500/40 text-green-300 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />
                  <span>Your message has been formatted and opened in your email client. Thank you!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#2b2b2b] focus:border-[#E8792A] focus:outline-none text-white text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#2b2b2b] focus:border-[#E8792A] focus:outline-none text-white text-xs sm:text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Subject / Discussion Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="AI/ML Internship, SDE Opportunity, Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#2b2b2b] focus:border-[#E8792A] focus:outline-none text-white text-xs sm:text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0f0f0f] border border-[#2b2b2b] focus:border-[#E8792A] focus:outline-none text-white text-xs sm:text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#E8792A] hover:bg-[#f0893d] text-white text-xs sm:text-sm uppercase tracking-wider font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
