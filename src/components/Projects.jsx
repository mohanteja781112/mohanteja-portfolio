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
  Play
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
    impact: "Eliminates delays by generating AI medical reports from paramedic-entered symptoms (and ABHA health history, if available), routing ambulances directly to ready-to-treat hospitals.",
    version: "Recently Updated • Version 2.1",
    tech: ["React.js", "Node.js", "MongoDB", "AI API", "Socket.io", "Leaflet"],
    features: [
      { icon: ClipboardEdit, text: "Paramedic Symptom Input" },
      { icon: ShieldCheck, text: "ABHA Health History (If Available)" },
      { icon: Sparkles, text: "AI Patient Report Generation" },
      { icon: MapPin, text: "Hospital Availability Routing" }
    ],
    github: "#",
    demo: "#",
    video: "#",
    image: "/nearmeds-mockup.png",
    accent: "from-[#06B6D4] to-blue-500", // Cyan
    glowHover: "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
    borderActive: "border-[#06B6D4]"
  },
  {
    id: "siddhartha",
    name: "Siddhartha EduHub",
    category: "Education",
    status: "Production Ready",
    statusColor: "text-purple-400",
    statusBg: "bg-purple-400",
    icon: GraduationCap,
    tagline: "Comprehensive School ERP and student management system.",
    impact: "Streamlining administrative tasks and providing seamless access to academic records for thousands of students.",
    version: "Production Ready • Version 1.0",
    tech: ["React", "Vite", "Tailwind CSS", "Supabase", "Node.js"],
    features: [
      { icon: ShieldCheck, text: "Role-Based Authentication" },
      { icon: Users, text: "Student & Staff Dashboards" },
      { icon: CheckCircle2, text: "Academic Automation" }
    ],
    github: "#",
    demo: "#",
    image: "/siddhartha-mockup.png",
    accent: "from-[#8B5CF6] to-purple-600", // Purple
    glowHover: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
    borderActive: "border-[#8B5CF6]"
  },
  {
    id: "truefit",
    name: "TrueFit",
    category: "AI Fashion",
    status: "Prototype",
    statusColor: "text-pink-400",
    statusBg: "bg-pink-400",
    icon: Shirt,
    tagline: "Advanced AI-powered virtual try-on experience.",
    impact: "Revolutionizing online shopping by allowing users to visualize personalized fashion fits instantly.",
    version: "Prototype • Version 0.5",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Generative AI"],
    features: [
      { icon: Sparkles, text: "AI Virtual Try-On" },
      { icon: Users, text: "Personalized Visualization" },
      { icon: Zap, text: "AI-Assisted Shopping" }
    ],
    github: "#",
    demo: "#",
    image: "/truefit-mockup.png",
    accent: "from-[#EC4899] to-pink-500", // Pink/Magenta
    glowHover: "hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    borderActive: "border-[#EC4899]"
  }
];

const Projects = () => {
  const [activeId, setActiveId] = useState(projectsData[0].id);
  const activeProject = projectsData.find(p => p.id === activeId);

  return (
    <section id="projects" className="relative w-full min-h-screen bg-[#050816] py-16 flex flex-col items-center overflow-hidden">
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#06B6D4] to-[#8B5CF6] uppercase tracking-tight mb-3 drop-shadow-lg">
            Project Command Center
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-normal">
            A collection of products built to solve real-world problems.
          </p>
          <div className="w-32 sm:w-48 h-[2px] bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent mx-auto mt-5 opacity-70 shadow-[0_0_15px_#06B6D4]"></div>
        </motion.div>

        {/* Split Dashboard Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-8 xl:gap-12 items-start">
          
          {/* LEFT SIDE: Project Navigator */}
          <div className="flex xl:flex-col gap-4 overflow-x-auto xl:overflow-x-visible pb-4 xl:pb-0 hide-scrollbar snap-x snap-mandatory">
            {projectsData.map((project) => {
              const isActive = project.id === activeId;
              const Icon = project.icon;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveId(project.id)}
                  className={`relative flex items-center gap-3 p-3 rounded-2xl border text-left transition-all duration-500 min-w-[260px] xl:min-w-0 snap-center
                    ${isActive 
                      ? `bg-white/10 border-l-4 ${project.borderActive} border-t-white/10 border-r-white/10 border-b-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]` 
                      : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                    }
                  `}
                >
                  {/* Glowing active indicator */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeGlow"
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.accent} opacity-10 blur-md rounded-2xl`} />
                    </motion.div>
                  )}
                  
                  <div className={`relative z-10 p-2.5 rounded-xl transition-colors duration-500 ${isActive ? 'bg-white/10 text-white' : 'bg-black/20 text-slate-400'}`}>
                    <Icon size={20} />
                  </div>
                  
                  <div className="relative z-10 flex-1">
                    <h4 className={`text-base font-bold tracking-tight transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {project.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${project.statusBg} ${isActive ? 'animate-pulse' : 'opacity-50'}`}></span>
                      <span className={`text-[11px] font-mono tracking-wider uppercase ${isActive ? project.statusColor : 'text-slate-500'}`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: Project Showcase Panel (Image + Terminal Hybrid) */}
          <div className="relative w-full rounded-3xl bg-[#0a0f1c]/40 border border-white/[0.08] backdrop-blur-3xl p-4 sm:p-6 lg:p-8 overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] min-h-[600px] ring-1 ring-white/5">
            {/* Ambient Background Glow matching active project */}
            <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl ${activeProject.accent} opacity-15 blur-[120px] rounded-full pointer-events-none transition-all duration-1000`}></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col h-full"
              >
                
                {/* Top Area: Mockup Preview */}
                <div className="w-full h-48 sm:h-64 lg:h-80 relative rounded-2xl overflow-hidden mb-6 group border border-white/[0.08] bg-black/50 shadow-inner">
                  <motion.img 
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={activeProject.image} 
                    alt={activeProject.name}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent opacity-80"></div>
                  

                </div>

                {/* Bottom Area: Premium Developer Console */}
                <div className="flex-1 flex flex-col rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] shadow-2xl backdrop-blur-3xl relative ring-1 ring-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                  


                  {/* Console Body */}
                  <div className="p-5 sm:p-7 space-y-6 overflow-y-auto hide-scrollbar">
                    
                    {/* Project Identity */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="relative">
                      <div className={`absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r ${activeProject.accent} opacity-20 blur-[50px] pointer-events-none`}></div>
                      
                      <div className="flex flex-wrap items-end justify-between gap-4 mb-2 relative z-10">
                        <h3 className={`text-2xl sm:text-4xl font-black ${activeProject.statusColor} tracking-tight flex items-center gap-3 transition-colors duration-500`}>
                          {activeProject.name}
                          <motion.span 
                            animate={{ opacity: [1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className={`inline-block w-1.5 h-6 sm:h-8 ${activeProject.statusBg} ml-1 transition-colors duration-500 shadow-lg`}
                          />
                        </h3>

                      </div>
                      <p className="text-base text-slate-400 font-normal max-w-2xl leading-relaxed relative z-10">
                        {activeProject.tagline}
                      </p>
                    </motion.div>

                    <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

                    {/* Core Capabilities */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
                      <h4 className="text-xs font-semibold tracking-[0.2em] text-slate-500/80 uppercase mb-4">Core Capabilities</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
                        {activeProject.features.map((f, i) => {
                          const FeatureIcon = f.icon;
                          return (
                            <div key={i} className="flex items-center gap-3 group p-2 -ml-2 rounded-xl hover:bg-white/[0.04] transition-all duration-300">
                              <div className={`relative flex items-center justify-center w-9 h-9 rounded-lg bg-black/40 border border-white/10 overflow-hidden group-hover:border-white/20 transition-all`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${activeProject.accent} opacity-10 group-hover:opacity-20 transition-opacity`} />
                                <FeatureIcon size={16} className={activeProject.statusColor} />
                              </div>
                              <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">{f.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>

                    <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

                    {/* Tech Stack */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
                      <h4 className="text-xs font-semibold tracking-[0.2em] text-slate-500/80 uppercase mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tech.map((t, i) => (
                          <div key={i} className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium hover:bg-white/10 hover:text-white hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 cursor-default backdrop-blur-md">
                            {t}
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

                    {/* Impact & Action Links */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-end">
                      <div className="flex-1">
                        <h4 className="text-xs font-semibold tracking-[0.2em] text-slate-500/80 uppercase mb-3">Impact</h4>
                        <p className="text-slate-400 italic leading-relaxed text-sm">
                          "{activeProject.impact}"
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-3 w-full sm:w-auto mt-2 sm:mt-0">
                        {activeProject.video && (
                          <a 
                            href={activeProject.video} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 text-slate-300 hover:text-white font-medium text-sm"
                          >
                            <Play size={16} className="group-hover:scale-110 transition-transform duration-300" /> Watch Demo
                          </a>
                        )}
                        <div className="flex flex-row gap-3 w-full">
                          <a 
                            href={activeProject.github} 
                            className="group flex-1 flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 text-slate-300 hover:text-white font-medium text-sm whitespace-nowrap"
                          >
                            <GithubIcon size={16} className="group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" /> 
                            <span></span>
                          </a>
                          <a 
                            href={activeProject.demo} 
                            className={`group relative flex-1 flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 bg-gradient-to-r ${activeProject.accent} rounded-xl transition-all duration-300 text-white font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 whitespace-nowrap`}
                          >
                            <ExternalLink size={16} className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0" /> 
                            <span>Live Demo</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>

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
    </section>
  );
};

export default Projects;
