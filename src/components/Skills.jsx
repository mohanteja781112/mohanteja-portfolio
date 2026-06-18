import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

// Minimalist Tech Icons
const ReactIcon = ({ className, style }) => <svg viewBox="0 0 24 24" className={`${className} animate-[spin_10s_linear_infinite]`} style={style} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2.5" /><ellipse cx="12" cy="12" rx="10" ry="3.5" /><ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(120 12 12)" /></svg>;
const NodeIcon = ({ className, style }) => <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 L2 7 l10 5 10-5 -10-5z M2 17 l10 5 10-5M2 12l10 5 10-5"/></svg>; 
const DatabaseIcon = ({ className, style }) => <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const ApiIcon = ({ className, style }) => <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
const PythonIcon = ({ className, style }) => <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h6a2 2 0 0 0 2-2v-2"/><path d="M6 14h1.26A8 8 0 1 0 15 4H9a2 2 0 0 0-2 2v2"/></svg>;
const BrainIcon = ({ className, style }) => <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>;
const GitIcon = ({ className, style }) => <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg>;
const CloudIcon = ({ className, style }) => <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>;

const techNodes = [
  { id: 'react', label: 'React.js', angle: 0, color: '#06B6D4', icon: ReactIcon },
  { id: 'nodejs', label: 'Node.js', angle: 45, color: '#8B5CF6', icon: NodeIcon },
  { id: 'mongodb', label: 'MongoDB', angle: 90, color: '#10B981', icon: DatabaseIcon },
  { id: 'fastapi', label: 'FastAPI', angle: 135, color: '#06B6D4', icon: ApiIcon },
  { id: 'python', label: 'Python', angle: 180, color: '#F59E0B', icon: PythonIcon },
  { id: 'genai', label: 'AI and ML', angle: 225, color: '#8B5CF6', icon: BrainIcon },
  { id: 'git', label: 'Git', angle: 270, color: '#F43F5E', icon: GitIcon },
  { id: 'aws', label: 'AWS', angle: 315, color: '#F59E0B', icon: CloudIcon },
];



const terminalStats = [
  { label: 'Languages', value: 'C++, Python'},
  { label: 'Frontend', value: 'React.js, JavaScript, HTML, CSS' },
  { label: 'Backend', value: 'Node.js, Express.js, FastAPI' },
  { label: 'Database', value: 'MongoDB, SQL' },
  { label: 'AI Layer', value: 'LLM Integration, Machine Learning, Prompt Engineering' },
  { label: 'Cloud', value: 'AWS Fundamentals' },
  { label: 'Tools', value: 'Git, GitHub, VS Code' },
];



const Skills = () => {
  return (
    <section id="skills" className="relative w-full min-h-screen lg:h-screen bg-[#050816] py-16 lg:py-0 flex flex-col justify-center overflow-hidden">
      <BackgroundEffects />
      
      <style>{`
        @keyframes skills-orbit-spin {
          from { rotate: 0deg; }
          to { rotate: 360deg; }
        }
        @keyframes skills-orbit-spin-reverse {
          from { rotate: 0deg; }
          to { rotate: -360deg; }
        }
        .skills-orbit-container {
          animation: skills-orbit-spin 100s linear infinite;
        }
        .skills-orbit-item {
          animation: skills-orbit-spin-reverse 100s linear infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes flow {
          to { stroke-dashoffset: -14; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      
      <div className="container relative z-10 mx-auto px-6 sm:px-8 flex flex-col">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]">Skills</span>
          </h2>
        </motion.div>

        {/* Main Neural Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center flex-1">
          
          {/* Orbital Neural Network */}
          <div className="relative w-full flex justify-center items-center min-h-[400px] sm:min-h-[500px]">
            
            {/* The Rotating Container */}
            <div className="skills-orbit-container absolute top-1/2 left-1/2 w-[240px] h-[240px] sm:w-[480px] sm:h-[480px] -translate-x-1/2 -translate-y-1/2">
              


              {/* Orbiting Premium Technology Chips */}
              {techNodes.map((node) => {
                const Icon = node.icon;
                return (
                  <div 
                    key={node.id}
                    className="absolute"
                    style={{ 
                      left: `${50 + 50 * Math.cos(node.angle * Math.PI / 180)}%`,
                      top: `${50 + 50 * Math.sin(node.angle * Math.PI / 180)}%`
                    }}
                  >
                    <div className="skills-orbit-item absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {/* Premium Glowing Chip */}
                      <div className="relative group flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border bg-[#050816]/90 backdrop-blur-xl shadow-xl transition-all duration-300 cursor-default border-white/10 hover:border-[#06B6D4]/50 hover:bg-[#06B6D4]/5 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:scale-110 whitespace-nowrap z-20 hover:z-50">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" style={{ color: node.color }} />
                        <span className="text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                          {node.label}
                        </span>
                        {/* Subtle background glow on hover */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central SKILL_ENGINE Core (Untouched logic, preserved dominance) */}
            <div className="absolute top-1/2 left-1/2 z-20" style={{ transform: 'translate(-50%, -50%)' }}>
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 flex items-center justify-center cursor-crosshair">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#06B6D4] opacity-50 blur-[30px]"></div>
                  
                  {/* Rotating Energy Layers */}
                  <div className="absolute inset-[-10px] rounded-full border-[3px] border-t-[#06B6D4] border-r-transparent border-b-[#8B5CF6] border-l-transparent animate-[spin_4s_linear_infinite]"></div>
                  <div className="absolute inset-[-20px] rounded-full border-[2px] border-t-transparent border-r-[#06B6D4] border-b-transparent border-l-[#8B5CF6] animate-[spin_6s_linear_infinite_reverse]"></div>
                  
                  {/* Core physical boundary */}
                  <div className="absolute inset-2 rounded-full border-2 border-[#06B6D4]/50 bg-[#050816]/95 flex items-center justify-center backdrop-blur-2xl shadow-[0_0_50px_rgba(139,92,246,0.5)] overflow-hidden">
                    <div className="text-center relative z-10 px-2">
                      <span className="block text-[8px] sm:text-xs font-bold text-[#8B5CF6] tracking-widest leading-tight mb-1">MOHAN'S</span>
                      <span className="block text-[10px] sm:text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-white tracking-widest leading-tight">SKILL_ENGINE</span>
                    </div>
                  </div>
                  
                  {/* Multiple glowing rings */}
                  <div className="absolute inset-[-25px] sm:inset-[-40px] rounded-full border border-dashed border-[#06B6D4]/40 animate-[spin_15s_linear_infinite]"></div>
                  <div className="absolute inset-[-40px] sm:inset-[-60px] rounded-full border border-[#8B5CF6]/30 animate-[spin_25s_linear_infinite_reverse]"></div>
                  <div className="absolute inset-[-55px] sm:inset-[-80px] rounded-full border border-dotted border-white/20 animate-[spin_40s_linear_infinite]"></div>
                </div>
              </div>

          </div>

          {/* Premium Skill Diagnostic Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center w-full max-w-2xl mx-auto lg:mx-0 mt-8 lg:mt-0"
          >
            <div className="w-full bg-[#050816]/90 rounded-2xl border border-[#06B6D4]/20 shadow-[0_0_50px_rgba(6,182,212,0.1)] backdrop-blur-2xl overflow-hidden relative">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#06B6D4]/20 bg-[#06B6D4]/5">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_10px_#10B981]"></div>
                  <span className="text-[11px] sm:text-xs font-mono text-white font-semibold uppercase tracking-widest">Skill Diagnostic Panel</span>
                </div>
                <div className="text-[10px] font-mono text-[#06B6D4] font-semibold tracking-wider">STATUS: ACTIVE</div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm relative h-full">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#06B6D4_1px,transparent_1px),linear-gradient(to_bottom,#06B6D4_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.03] pointer-events-none" />

                <div className="space-y-4 sm:space-y-5 relative z-10">
                  {terminalStats.map((stat, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 group cursor-default"
                    >
                      <span className="text-[#8B5CF6] font-semibold tracking-wider uppercase sm:min-w-[100px] text-[10px] sm:text-xs">{stat.label}:</span>
                      <span className="text-slate-300 group-hover:text-white transition-colors">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex items-center text-[#06B6D4] mt-8 relative z-10 pt-6 border-t border-white/5">
                  <span className="text-[#8B5CF6] mr-3 font-bold">❯</span>
                  <span className="text-slate-400 mr-2 uppercase text-[10px] sm:text-xs tracking-widest">Ecosystem perfectly aligned</span>
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} 
                    className="w-2.5 h-4 bg-[#06B6D4] inline-block shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: [0, 8, 0] }}
        transition={{ initial: { duration: 0.8, delay: 1.5 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-50 text-slate-400 hover:text-[#06B6D4] transition-colors"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Skills;
