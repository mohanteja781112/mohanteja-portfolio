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
  Sparkles
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
    tagline: "AI-powered emergency healthcare assistance platform.",
    impact: "Helping users quickly locate nearby medical assistance during emergencies, reducing response times significantly.",
    version: "Recently Updated • Version 2.1",
    tech: ["React.js", "Node.js", "MongoDB", "Gemini API", "Socket.io", "Leaflet"],
    features: [
      { icon: MapPin, text: "Real-Time Location Tracking" },
      { icon: Globe2, text: "Nearby Pharmacy Discovery" },
      { icon: Zap, text: "Emergency Healthcare Assistance" }
    ],
    github: "#",
    demo: "#",
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
    <section id="projects" className="relative w-full min-h-screen bg-[#050816] py-24 flex flex-col items-center overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <BackgroundEffects />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#06B6D4] to-[#8B5CF6] tracking-tighter uppercase mb-4 drop-shadow-lg">
            Project Command Center
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-light tracking-wide">
            A collection of products built to solve real-world problems.
          </p>
          <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-[#06B6D4] to-transparent mx-auto mt-6 opacity-70 shadow-[0_0_15px_#06B6D4]"></div>
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
                  className={`relative flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-500 min-w-[280px] xl:min-w-0 snap-center
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
                  
                  <div className={`relative z-10 p-3 rounded-xl transition-colors duration-500 ${isActive ? 'bg-white/10 text-white' : 'bg-black/20 text-slate-400'}`}>
                    <Icon size={24} />
                  </div>
                  
                  <div className="relative z-10 flex-1">
                    <h4 className={`text-lg font-bold tracking-tight transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {project.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${project.statusBg} ${isActive ? 'animate-pulse' : 'opacity-50'}`}></span>
                      <span className={`text-xs font-mono tracking-wider ${isActive ? project.statusColor : 'text-slate-500'}`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: Project Showcase Panel (Image + Terminal Hybrid) */}
          <div className="relative w-full rounded-3xl bg-[#0a0f1c]/80 border border-white/10 backdrop-blur-xl p-4 sm:p-6 lg:p-8 overflow-hidden shadow-2xl min-h-[600px]">
            {/* Ambient Background Glow matching active project */}
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl ${activeProject.accent} opacity-10 blur-[100px] rounded-full pointer-events-none transition-all duration-1000`}></div>

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
                <div className="w-full h-48 sm:h-64 lg:h-80 relative rounded-2xl overflow-hidden mb-6 group border border-white/10 bg-black/50">
                  <motion.img 
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={activeProject.image} 
                    alt={activeProject.name}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent opacity-50"></div>
                  
                  {/* Floating Status Badge on Image */}
                  <div className="absolute top-4 right-4 flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                      <CheckCircle2 size={14} className={activeProject.statusColor} />
                      <span className="text-xs font-mono text-slate-300">{activeProject.status}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Area: Premium Developer Console */}
                <div className="flex-1 flex flex-col rounded-xl overflow-hidden border border-white/10 bg-[#0a0f1c]/90 shadow-2xl backdrop-blur-xl relative">
                  {/* Console Header */}
                  <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10 backdrop-blur-md">
                    <div className="flex gap-2.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                      <Sparkles size={12} className="text-yellow-400" />
                      <span className="text-[10px] font-bold tracking-wider text-yellow-400/90 uppercase">Featured</span>
                    </div>
                  </div>

                  {/* Console Body */}
                  <div className="p-6 sm:p-8 space-y-8 overflow-y-auto hide-scrollbar">
                    
                    {/* Project Identity */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="relative">
                      <div className={`absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r ${activeProject.accent} opacity-20 blur-[50px] pointer-events-none`}></div>
                      
                      <div className="flex flex-wrap items-end justify-between gap-4 mb-3 relative z-10">
                        <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-3">
                          {activeProject.name}
                          <span className="inline-block w-3 h-8 bg-white/80 animate-pulse ml-1"></span>
                        </h3>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                          <span className={`w-2 h-2 rounded-full ${activeProject.statusBg} animate-pulse`}></span>
                          <span className="text-xs font-semibold tracking-wide text-slate-300">{activeProject.status}</span>
                        </div>
                      </div>
                      <p className="text-lg text-slate-400 font-light max-w-2xl leading-relaxed relative z-10">
                        {activeProject.tagline}
                      </p>
                    </motion.div>

                    <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

                    {/* Core Capabilities */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                      <h4 className="text-sm font-semibold tracking-wider text-slate-500 uppercase mb-5">Core Capabilities</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {activeProject.features.map((f, i) => {
                          const FeatureIcon = f.icon;
                          return (
                            <div key={i} className="flex items-start gap-3 group">
                              <div className="mt-0.5 p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                <FeatureIcon size={16} className={activeProject.statusColor} />
                              </div>
                              <span className="text-slate-300 leading-snug">{f.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>

                    <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

                    {/* Tech Stack */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                      <h4 className="text-sm font-semibold tracking-wider text-slate-500 uppercase mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {activeProject.tech.map((t, i) => (
                          <div key={i} className="px-3 py-1.5 rounded-md bg-black/40 border border-white/10 text-slate-300 text-sm font-medium hover:border-white/30 hover:text-white transition-colors cursor-default">
                            {t}
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>

                    {/* Impact & Action Links */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-8 justify-between items-start sm:items-end">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold tracking-wider text-slate-500 uppercase mb-3">Impact</h4>
                        <p className="text-slate-400 italic leading-relaxed text-sm">
                          "{activeProject.impact}"
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                        <a 
                          href={activeProject.github} 
                          className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-lg transition-all text-white font-semibold text-sm"
                        >
                          <GithubIcon size={16} /> Source
                        </a>
                        <a 
                          href={activeProject.demo} 
                          className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r ${activeProject.accent} hover:opacity-90 rounded-lg transition-all text-white font-semibold text-sm shadow-[0_0_20px_rgba(255,255,255,0.15)]`}
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
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
