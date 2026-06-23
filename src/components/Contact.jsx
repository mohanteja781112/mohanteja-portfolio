import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ExternalLink, ArrowRight, Home, FileText, Terminal, Briefcase, GitPullRequest, Clock, BrainCircuit } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const LinkedinIcon = ({ className, style }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const nodes = [
  { 
    id: 'email', 
    icon: Mail, 
    label: 'doddimohanteja711@gmail.com', 
    href: 'mailto:doddimohanteja711@gmail.com', 
    x: 15, 
    y: 20, 
    color: 'from-[#06B6D4] to-blue-500', 
    glow: 'shadow-[#06B6D4]',
    textColor: 'text-[#06B6D4]'
  },
  { 
    id: 'linkedin', 
    icon: LinkedinIcon, 
    label: 'linkedin.com/in/mohan-teja-doddi', 
    href: 'https://www.linkedin.com/in/mohan-teja-doddi/', 
    x: 85, 
    y: 20, 
    color: 'from-blue-400 to-blue-600', 
    glow: 'shadow-blue-500',
    textColor: 'text-blue-400'
  },
  { 
    id: 'phone', 
    icon: Phone, 
    label: '+91 76718 27229', 
    href: 'tel:+917671827229', 
    x: 49.9, 
    y: 95, 
    color: 'from-[#8B5CF6] to-purple-600', 
    glow: 'shadow-[#8B5CF6]',
    textColor: 'text-[#8B5CF6]'
  }
];

const Contact = () => {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <section id="contact" className="relative w-full min-h-screen bg-[#050816] py-8 lg:py-16 flex flex-col justify-center overflow-hidden">
      <BackgroundEffects />

      {/* Additional Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#8B5CF6]/5 blur-[50px] lg:blur-[100px] rounded-full sm:mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#06B6D4]/5 blur-[50px] lg:blur-[100px] rounded-full sm:mix-blend-screen" />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-30" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-7xl flex flex-col items-center">
        
        {/* 1. Cinematic Hero Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-6 lg:mb-10 relative w-full"
        >
          {/* Subtle glow behind title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 bg-[#8B5CF6]/10 blur-[50px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-slate-300 tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(255,255,255,0.03)] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
            Available For Opportunities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
            Let's Build The <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]">Future Together</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
            Open to internships, software engineering opportunities, open-source collaborations, and innovative projects.
          </p>
        </motion.div>

        {/* Desktop 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-center">
          
          {/* Left Column: Availability Status Panel */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative p-4 sm:p-6 rounded-3xl bg-[#050A1E]/60 backdrop-blur-xl border border-white/5 overflow-hidden group hover:border-white/10 transition-colors duration-500 flex flex-col h-full justify-center shadow-[0_0_30px_rgba(0,0,0,0.3)]"
          >
            {/* Animated Scanning Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06B6D4]/5 to-transparent h-[200%] -top-[100%] animate-[scan_6s_linear_infinite] pointer-events-none" />
            
            <h3 className="text-xs font-bold text-slate-300 tracking-wider uppercase mb-5 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#8B5CF6]" /> Current Status
            </h3>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs font-medium">Availability</span>
                <span className="flex items-center gap-1.5 text-white text-[11px] font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
                  Available Now
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs font-medium">Response Time</span>
                <span className="flex items-center gap-1 text-slate-200 text-xs font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#06B6D4]" /> &lt; 24 Hours
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs font-medium">Location</span>
                <span className="flex items-center gap-1 text-slate-200 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" /> India
                </span>
              </div>
              
              <div className="pt-4 border-t border-white/5">
                <span className="text-slate-400 text-xs font-medium mb-2 block">Focus Areas</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 text-[10px] font-medium text-slate-300 border border-white/5">
                    <Briefcase className="w-3 h-3 text-blue-400" /> Full Stack
                  </span>
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 text-[10px] font-medium text-slate-300 border border-white/5">
                    <BrainCircuit className="w-3 h-3 text-purple-400" /> AI Applications
                  </span>
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 text-[10px] font-medium text-slate-300 border border-white/5">
                    <GitPullRequest className="w-3 h-3 text-emerald-400" /> Open Source
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Middle Column: Interactive Connection Hub */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative w-full h-[220px] sm:h-[300px] rounded-3xl"
          >
            {/* SVG Connecting Lines Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              {nodes.map(node => {
                const isHovered = hoveredNode === node.id;
                return (
                  <motion.line 
                    key={`line-${node.id}`}
                    x1="50%" y1="50%" 
                    x2={`${node.x}%`} y2={`${node.y}%`}
                    stroke={isHovered ? "url(#line-gradient)" : "rgba(255,255,255,0.05)"}
                    strokeWidth={isHovered ? 2 : 1}
                    strokeDasharray={isHovered ? "none" : "4 4"}
                    className="transition-all duration-500"
                  />
                );
              })}
            </svg>

            {/* Central Profile Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20 pointer-events-none">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-full border border-[#06B6D4]/20 border-t-[#06B6D4]/60 animate-[spin_4s_linear_infinite]" />
                <div className="absolute -inset-6 rounded-full border border-[#8B5CF6]/10 border-b-[#8B5CF6]/50 animate-[spin_6s_linear_infinite_reverse]" />
                
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#050A1E] border-2 border-white/10 shadow-[0_0_20px_rgba(139,92,246,0.2)] flex items-center justify-center overflow-hidden relative backdrop-blur-xl group-hover:border-white/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/10 to-[#8B5CF6]/10" />
                  <span className="text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">MT</span>
                </div>
              </div>
            </div>

            {/* Orbiting Connection Nodes */}
            {nodes.map(node => {
              const isHovered = hoveredNode === node.id;
              return (
                <a 
                  key={node.id}
                  href={node.href}
                  target={node.href.startsWith('http') ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 group flex flex-col items-center gap-2 transition-transform duration-500 ${node.id === 'email' ? 'left-[15%]' : node.id === 'linkedin' ? 'left-[85%]' : 'left-[50%]'}`}
                  style={{ top: `${node.y}%` }}
                >
                  <div className={`relative p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-[#050A1E]/80 backdrop-blur-xl border ${isHovered ? 'border-white/30 scale-110 ' + node.glow + '/40 shadow-[0_0_15px]' : 'border-white/10'} transition-all duration-500`}>
                    <node.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isHovered ? 'text-white' : 'text-slate-400'} transition-colors duration-500`} />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${node.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  </div>

                  {/* Expanding Label */}
                  <div className={`absolute bottom-full mb-2 sm:mb-3 flex items-center justify-center ${node.id === 'email' ? '-left-4 sm:left-1/2 sm:-translate-x-1/2 lg:left-0 lg:translate-x-0' : node.id === 'linkedin' ? '-right-4 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0' : 'left-1/2 -translate-x-1/2'} px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg bg-white/5 backdrop-blur-md border border-white/10 whitespace-nowrap pointer-events-none transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    <span className={`text-[8px] sm:text-xs font-semibold tracking-wide leading-none ${node.textColor}`}>{node.label}</span>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Right Column: Premium CTA Area */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative p-4 sm:p-6 rounded-3xl bg-[#050A1E]/60 backdrop-blur-xl border border-white/5 overflow-hidden flex flex-col justify-center items-center text-center group shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-white/10 transition-all duration-500 h-full"
          >
            {/* Animated Scanning Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8B5CF6]/5 to-transparent h-[200%] -top-[100%] animate-[scan_6s_linear_infinite] pointer-events-none" />

            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#06B6D4]/10 via-[#8B5CF6]/5 to-transparent blur-[30px] pointer-events-none" />

            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 relative z-10">Ready to Collaborate?</h3>
            <p className="text-slate-400 text-xs font-medium mb-6 max-w-sm relative z-10">
              Have an idea, project, internship, or opportunity? Let's discuss how I can bring value to your team.
            </p>

            <div className="flex flex-row flex-wrap justify-center items-center gap-3 w-full relative z-10">
              <a 
                href="mailto:doddimohanteja711@gmail.com"
                className="relative group/btn flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs text-white overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] transition-transform duration-500 group-hover/btn:scale-110" />
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Start a Conversation</span>
                <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              </a>

              <a href="/Mohan_Teja_Doddi_Resume (Diamond).pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 hover:-translate-y-1">
                <FileText className="w-3.5 h-3.5" /> Resume
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>


    </section>
  );
};

export default Contact;
