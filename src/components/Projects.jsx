import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Activity, 
  GraduationCap, 
  Shirt,
  CheckCircle2,
  Clock,
  Zap,
  Globe2,
  MapPin,
  ShieldCheck,
  Users,
  Sparkles,
  ClipboardEdit,
  Play,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const GithubIcon = ({ size = 24, className = "", color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const projectsData = [
  {
    id: "nearmeds",
    name: "NearMeds",
    category: "Healthcare",
    status: "Active",
    statusColor: "text-cyan-400",
    statusBg: "bg-cyan-400",
    icon: Activity,
    tagline: "AI-driven platform connecting ambulances to ready-to-treat hospitals.",
    impact: "Reduces delays by generating AI medical reports from paramedic-entered symptoms (and ABHA health history, if available), routing ambulances directly to ready-to-treat hospitals.",
    version: "Recently Updated • Version 2.1",
    tech: ["React.js", "Node.js", "MongoDB", "Groq API", "Tailwind CSS", "Socket.io", "Leaflet"],
    features: [
      { icon: ClipboardEdit, text: "Paramedic Symptom Input" },
      { icon: ShieldCheck, text: "ABHA Health History (If Available)" },
      { icon: Sparkles, text: "AI Patient Report Generation" },
      { icon: MapPin, text: "Hospital Availability Routing" }
    ],
    github: "https://github.com/mohanteja781112/Near-Meds",
    demo: "https://near-meds.vercel.app/",
    video: "#",
    image: "/nearmeds.png",
    accent: "from-[#06B6D4] to-blue-500", // Cyan
    glowHover: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    borderActive: "border-[#06B6D4]"
  },
  {
    id: "siddhartha",
    name: "Siddhartha EduHub",
    category: "Education",
    status: "Production Ready",
    statusColor: "text-[#FFD700]",
    statusBg: "bg-[#FFD700]",
    icon: GraduationCap,
    tagline: "Comprehensive School ERP and student management system.",
    impact: "Streamlining academic and administrative workflows through role-based dashboards, centralized data management, and performance tracking. Enabling efficient communication while reducing manual administrative effort.",
    version: "Production Ready • Version 1.0",
    tech: ["React.js", "Tailwind CSS", "Supabase", "Node.js"],
    features: [
      { icon: ShieldCheck, text: "Role-Based Authentication" },
      { icon: Users, text: "Student & Staff Dashboards" },
      { icon: CheckCircle2, text: "Academic Automation" }
    ],
    github: "https://github.com/mohanteja781112/Siddhartha-EduHub",
    demo: "https://siddhartha-eduhub.vercel.app/",
    image: "/siddhartha_eduhub.png",
    accent: "from-[#FFD700] to-yellow-500", // Bright Gold
    glowHover: "hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]",
    borderActive: "border-[#FFD700]"
  },
  {
    id: "apparelfit",
    name: "Apparel Fit",
    category: "AI Fashion",
    status: "Prototype",
    statusColor: "text-purple-400",
    statusBg: "bg-purple-400",
    icon: Shirt,
    tagline: "Advanced AI-powered virtual try-on experience.",
    impact: "Revolutionizing online shopping by allowing users to visualize personalized fashion fits instantly.",
    version: "Prototype • Version 0.5",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API"],
    features: [
      { icon: Sparkles, text: "AI Virtual Try-On" },
      { icon: Users, text: "Personalized Visualization" },
      { icon: Zap, text: "AI-Assisted Shopping" }
    ],
    github: "#",
    demo: "#",
    image: "/apparel_fit.png",
    accent: "from-[#8B5CF6] to-purple-600", // Purple
    glowHover: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    borderActive: "border-[#8B5CF6]"
  }
];

const Projects = () => {
  const [activeId, setActiveId] = useState(projectsData[0].id);
  const [activeTab, setActiveTab] = useState('impact');
  const activeProject = projectsData.find(p => p.id === activeId);

  return (
    <section id="projects" className="relative w-full min-h-screen bg-[#050816] pt-16 pb-24 flex flex-col items-center overflow-hidden">
      <BackgroundEffects />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
            A collection of products built to solve real-world problems.
          </p>
          <div className="w-32 sm:w-48 h-[2px] bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent mx-auto mt-5 opacity-70 shadow-[0_0_15px_#06B6D4]"></div>
        </motion.div>

        {/* Split Dashboard Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-6 xl:gap-8 items-start">
          
          {/* LEFT SIDE: Project Navigation List */}
          <div className="w-full xl:w-72 flex-shrink-0 z-10 mb-4 sm:mb-8 xl:mb-0 flex xl:flex-col gap-4 overflow-x-auto xl:overflow-x-visible pb-4 xl:pb-0 hide-scrollbar snap-x snap-mandatory">
            {projectsData.map((project, index) => {
              const isActive = project.id === activeId;
              const Icon = project.icon;
              return (
                <button
                  key={project.id}
                  onClick={() => {
                    setActiveId(project.id);
                    setActiveTab('impact');
                  }}
                  className={`relative flex items-center gap-2.5 sm:gap-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl text-left transition-all duration-500 min-w-[200px] sm:min-w-[260px] xl:min-w-0 snap-center border
                    ${isActive ? 'border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'}
                  `}
                >
                  {/* Smooth Gliding Active Background & Border */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeProjectBg"
                      className="absolute inset-0 rounded-xl sm:rounded-2xl bg-white/10 pointer-events-none overflow-hidden"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {/* Full Border Highlight */}
                      <div className={`absolute inset-0 border ${project.borderActive} rounded-xl sm:rounded-2xl opacity-60 shadow-[0_0_15px_currentColor]`} />
                      {/* Subtle Inner Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.accent} opacity-10 blur-sm`} />
                    </motion.div>
                  )}
                  
                  <div className={`relative z-10 p-2 sm:p-2.5 rounded-lg sm:rounded-xl transition-colors duration-500 flex items-center justify-center ${isActive ? 'bg-white/10 text-white' : 'bg-black/20 text-slate-400'}`}>
                    <Icon className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]" />
                  </div>
                  
                  <div className="relative z-10 flex-1">
                    <h4 className={`text-sm sm:text-base font-bold tracking-tight transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {project.name}
                    </h4>
                    <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5">
                      <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${project.statusBg} ${isActive ? 'animate-pulse' : 'opacity-50'}`}></span>
                      <span className={`text-[9px] sm:text-[11px] font-mono tracking-wider uppercase ${isActive ? project.statusColor : 'text-slate-500'}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Active Indicator Fraction */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="relative z-10 ml-auto mr-1 flex items-center"
                    >
                      <span className="text-[9px] sm:text-[11px] font-medium font-mono text-white/80 bg-white/10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full whitespace-nowrap shadow-inner border border-white/5">
                        {index + 1} / {projectsData.length}
                      </span>
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: Project Showcase Panel (Image + Terminal Hybrid) */}
          <div className="relative w-full rounded-3xl bg-[#0a0f1c]/40 border border-white/[0.08] backdrop-blur-2xl sm:backdrop-blur-3xl p-3 sm:p-5 lg:p-8 overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] flex flex-col ring-1 ring-white/5 h-auto lg:h-[800px]">
            {/* Ambient Background Glow matching active project */}
            <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl ${activeProject.accent} opacity-15 blur-[60px] sm:blur-[120px] rounded-full pointer-events-none transition-all duration-1000`}></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col h-full w-full flex-1 gap-3 sm:gap-4"
              >
                
                {/* Top Area: Mockup Preview */}
                <motion.a 
                  href={activeProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-auto sm:h-[260px] lg:h-auto lg:flex-[4] relative rounded-2xl overflow-hidden group border border-white/[0.08] bg-[#02040a] shadow-inner flex-shrink-0 cursor-pointer block transform transition-transform duration-500"
                >
                  {/* Subtle Glowing Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeProject.accent} opacity-5 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none`} />
                  
                  {/* Image Content */}
                  <img 
                    src={activeProject.image}
                    alt={activeProject.name}
                    className="relative z-0 w-full h-auto sm:h-full object-cover sm:object-top opacity-90 group-hover:opacity-100 transition-all duration-[8s] ease-in-out sm:group-hover:object-bottom"
                  />
                  
                  {/* Interactive Hover Indicator */}
                  <div className="absolute z-10 bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 h-[36px] sm:h-[46px] min-w-[140px] sm:min-w-[180px] flex items-center justify-center overflow-hidden bg-black/80 backdrop-blur-xl border border-white/10 text-white/90 rounded-full text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-2xl lg:group-hover:scale-105 lg:group-hover:border-white/30 lg:group-hover:bg-[#050816]/95 lg:group-hover:shadow-[0_0_30px_rgba(0,0,0,0.6)]">
                    
                    {/* Mobile/Tablet: Click to Open (Always visible, no hover animations) */}
                    <div className="flex lg:hidden items-center justify-center gap-2 w-full h-full font-medium">
                      <span className={`font-bold ${activeProject.statusColor}`}>Click to open</span>
                      <ExternalLink className={`w-3.5 h-3.5 ${activeProject.statusColor}`} />
                    </div>

                    {/* Desktop: Hover to scroll -> Click to open (with animations) */}
                    <div className="hidden lg:flex flex-col w-full h-full">
                      {/* Default state */}
                      <div className="absolute inset-0 flex items-center justify-center gap-2.5 w-full h-full transition-transform duration-300 group-hover:-translate-y-full group-hover:opacity-0 font-medium">
                        <span>Hover to scroll</span>
                        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                      
                      {/* Hovered state */}
                      <div className="absolute inset-0 flex items-center justify-center gap-2.5 w-full h-full translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className={`font-bold text-[15px] ${activeProject.statusColor}`}>Click to open</span>
                        <ExternalLink className={`w-4 h-4 ${activeProject.statusColor}`} />
                      </div>
                    </div>
                  </div>
                </motion.a>

                {/* Bottom Area: Premium Developer Console (~60-65% visual weight total) */}
                <div className="flex-1 lg:flex-[6] flex flex-col rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] shadow-2xl backdrop-blur-3xl relative ring-1 ring-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  
                  {/* Console Body */}
                  <div className="flex flex-col h-full p-5 sm:p-7">
                    
                    {/* Project Identity (Persistent Header) */}
                    <div className="relative mb-5 flex-shrink-0">
                      <div className={`absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r ${activeProject.accent} opacity-20 blur-[50px] pointer-events-none`}></div>
                      
                      <div className="flex flex-col gap-3 relative z-10">
                        <div>
                          <h3 className={`text-xl sm:text-4xl font-black ${activeProject.statusColor} tracking-tight flex items-center gap-2 sm:gap-3 transition-colors duration-500`}>
                            {activeProject.name}
                            <motion.span 
                              animate={{ opacity: [1, 0] }}
                              transition={{ repeat: Infinity, duration: 0.8 }}
                              className={`inline-block w-1 h-5 sm:w-1.5 sm:h-8 ${activeProject.statusBg} ml-1 transition-colors duration-500 shadow-lg`}
                            />
                          </h3>
                          <p className="text-xs sm:text-base text-slate-400 font-medium mt-1 tracking-wide">
                            {activeProject.tagline}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex space-x-1 sm:space-x-4 border-b border-white/10 mb-3 sm:mb-5 relative z-10 overflow-x-auto hide-scrollbar pb-1 sm:pb-2 flex-shrink-0">
                      {['impact', 'features', 'tech stack'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`relative px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-sm font-bold sm:font-medium uppercase tracking-wider transition-all duration-300 whitespace-nowrap
                            ${activeTab === tab ? 'text-white' : 'text-slate-500 hover:text-slate-300'}
                          `}
                        >
                          {tab}
                          {activeTab === tab && (
                            <motion.div
                              layoutId="tabGlow"
                              className={`absolute bottom-[-9px] left-0 right-0 h-0.5 bg-gradient-to-r ${activeProject.accent}`}
                            />
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content Section (~35% of total visual weight) */}
                    <div className="flex-1 overflow-y-auto hide-scrollbar relative z-10">
                      
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTab + activeId} // ensures animation when project or tab changes
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          {activeTab === 'features' && (
                            <div className="grid grid-cols-2 gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-3 pt-1 pb-2">
                              {activeProject.features.map((f, i) => {
                                const FeatureIcon = f.icon;
                                return (
                                  <div key={i} className="flex flex-row items-center gap-2 sm:gap-3 group p-1.5 sm:p-2 rounded-xl hover:bg-white/[0.04] transition-all duration-300">
                                    <div className={`relative flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-black/40 border border-white/10 overflow-hidden group-hover:border-white/20 transition-all flex-shrink-0`}>
                                      <div className={`absolute inset-0 bg-gradient-to-br ${activeProject.accent} opacity-10 group-hover:opacity-20 transition-opacity`} />
                                      <FeatureIcon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${activeProject.statusColor}`} />
                                    </div>
                                    <span className="text-[11px] sm:text-sm text-slate-300 font-medium group-hover:text-white transition-colors leading-tight">{f.text}</span>
                                  </div>
                                );
                              })}
                            </div>
                          )}

                          {activeTab === 'tech stack' && (
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                              {activeProject.tech.map((t, i) => (
                                <div key={i} className="px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-md sm:rounded-full bg-white/5 border border-white/10 text-slate-300 text-[10px] sm:text-xs font-medium hover:bg-white/10 hover:text-white hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 cursor-default backdrop-blur-md">
                                  {t}
                                </div>
                              ))}
                            </div>
                          )}

                          {activeTab === 'impact' && (
                            <div className="pt-1 sm:pt-2">
                              <p className="text-slate-300 italic leading-relaxed text-[12px] sm:text-sm">
                                "{activeProject.impact}"
                              </p>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>

                    </div>

                    {/* Actions Section (~15% of total visual weight) */}
                    <div className="pt-3 sm:pt-5 mt-2 sm:mt-4 border-t border-white/10 flex-shrink-0 relative z-20 bg-[#0a0f1c]/20 rounded-xl p-3 sm:p-5 backdrop-blur-sm border border-white/5 shadow-inner">
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-3 w-full">
                        {activeProject.video && (
                          <a 
                            href={activeProject.video} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="col-span-1 group flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 py-1.5 sm:px-5 sm:py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg sm:rounded-xl transition-all duration-300 text-slate-300 hover:text-white font-medium text-[11px] sm:text-sm whitespace-nowrap"
                          >
                            <Play size={13} className="sm:w-[15px] sm:h-[15px] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" /> 
                            <span>Watch</span>
                          </a>
                        )}
                        <a 
                          href={activeProject.github} 
                          className={`col-span-1 group flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 py-1.5 sm:px-5 sm:py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg sm:rounded-xl transition-all duration-300 text-slate-300 hover:text-white font-medium text-[11px] sm:text-sm whitespace-nowrap`}
                        >
                          <GithubIcon size={13} className="sm:w-[15px] sm:h-[15px] group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" /> 
                          <span>GitHub</span>
                        </a>
                        <a 
                          href={activeProject.demo} 
                          className={`${activeProject.video ? 'col-span-2' : 'col-span-1'} sm:col-span-1 group relative flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-2 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r ${activeProject.accent} rounded-lg sm:rounded-xl transition-all duration-300 text-white font-bold text-[13px] sm:text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 whitespace-nowrap`}
                        >
                          <ExternalLink size={14} className="sm:w-[16px] sm:h-[16px] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" /> 
                          <span>Live Demo</span>
                        </a>
                      </motion.div>
                    </div>

                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      

      {/* Hide scrollbar styles */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {/* Scroll Indicator */}
      <motion.div
        onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}
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

export default Projects;
