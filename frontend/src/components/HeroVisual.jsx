import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, HeartPulse, Shirt, ExternalLink } from 'lucide-react';

const HeroVisual = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const PROJECTS = [
    { title: "Siddhartha EduHub", desc: "School ERP", icon: GraduationCap, color: "#FFD700", stats: "10k+ Users", url: "https://www.siddharthaiitfoundation.com/" },
    { title: "NearMeds", desc: "Emergency Health", icon: HeartPulse, color: "#06B6D4", stats: "24/7 Access", url: "https://near-meds.vercel.app/" },
    { title: "Apparel Fit", desc: "AI Try-On", icon: Shirt, color: "#8B5CF6", stats: "99% Accuracy", url: "#" }
  ];

  return (
    <div 
      className="relative w-full max-w-[500px] aspect-square flex items-center justify-center scale-[0.50] sm:scale-75 md:scale-[0.60] lg:scale-[0.70] xl:scale-[0.85] 2xl:scale-100 transition-transform duration-500 origin-center -my-[110px] sm:-my-[60px] md:-my-[40px] lg:my-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes hero-orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes hero-orbit-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        .hero-orbit-container {
          animation: hero-orbit 40s linear infinite;
        }
        .hero-orbit-item {
          animation: hero-orbit-reverse 40s linear infinite;
        }
        .hero-orbit-container:hover,
        .hero-orbit-container:hover .hero-orbit-item {
          animation-play-state: paused;
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* Mouse Follow Glow - Hidden on mobile to save CPU */}
      <motion.div 
        className="hidden md:block absolute w-64 h-64 bg-[#06B6D4]/20 rounded-full blur-[80px] pointer-events-none"
        style={{ x: mouseX, y: mouseY }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      />

      <motion.div
        style={{ perspective: 1000, rotateX, rotateY }}
        className="relative w-full h-full flex items-center justify-center transform-gpu"
      >
        {/* Core Profile */}
        <div className="relative z-20 flex items-center justify-center">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex items-center justify-center"
          >
            {/* Multi-layer rotating glass rings */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute w-[260px] h-[260px] rounded-full border border-dashed border-[#8B5CF6]/40 pointer-events-none" />
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[300px] h-[300px] rounded-full border border-white/10 border-t-[#06B6D4]/50 border-b-[#8B5CF6]/50 pointer-events-none" />
            
            <div className="absolute inset-[-20px] rounded-full border border-white/5 bg-white/5 md:backdrop-blur-sm pointer-events-none" />
            <div className="absolute inset-[-40px] rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 md:backdrop-blur-md pointer-events-none" />
            {/* The Thick Soft Glow */}
            <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-[#06B6D4] to-[#8B5CF6] opacity-60 md:opacity-80 blur-[8px] md:blur-[12px] pointer-events-none will-change-transform" />
            
            <div className="relative z-10 w-40 h-40 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#050816]">
                <img 
                  src="/profilephoto.jpg" 
                  alt="Mohan Teja" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Orbiting Project Cards */}
        <div className="hero-orbit-container absolute w-[360px] h-[360px] rounded-full border border-white/10 z-30 pointer-events-none">
          {PROJECTS.map((project, i) => {
            const angle = (i * 360) / PROJECTS.length;
            const radius = 180; // Half of 360
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            const Icon = project.icon;

            return (
              <React.Fragment key={i}>
                {/* Particle Trails */}
                {[1, 2, 3].map(t => {
                  const trailAngle = angle - (t * 12);
                  const tx = Math.cos((trailAngle * Math.PI) / 180) * radius;
                  const ty = Math.sin((trailAngle * Math.PI) / 180) * radius;
                  return (
                    <div 
                      key={`trail-${i}-${t}`}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        top: `calc(50% + ${ty}px)`,
                        left: `calc(50% + ${tx}px)`,
                        transform: "translate(-50%, -50%)",
                        backgroundColor: project.color,
                        opacity: 0.6 - (t * 0.15),
                        boxShadow: `0 0 10px ${project.color}`,
                        filter: `blur(${t}px)`
                      }}
                    />
                  );
                })}
                <div
                  className="absolute pointer-events-auto"
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: "translate(-50%, -50%)"
                  }}
                >
                <div className="hero-orbit-item">
                  <a 
                    href={project.url}
                    target={project.url !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-2 p-2.5 rounded-[14px] border border-white/10 bg-[#050816]/80 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-white/10 hover:border-[#06B6D4]/50 transition-all duration-300 w-44 overflow-hidden cursor-pointer block"
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
                    
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${project.color}20` }}>
                      <Icon size={16} color={project.color} />
                    </div>
                    
                    <div className="flex flex-col flex-1 overflow-hidden">
                      <span className="text-white text-[11px] font-semibold truncate group-hover:text-clip">{project.title}</span>
                      <span className="text-slate-400 text-[9px] truncate">{project.desc}</span>
                      <div className="flex items-center gap-1 font-medium mt-0.5 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300" style={{ color: project.color }}>
                        <span className="text-[9px] font-bold">Click to open</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              </React.Fragment>
            );
          })}
        </div>
        
        {/* Decorative inner orbit */}
        <div className="hero-orbit-item absolute w-[280px] h-[280px] rounded-full border border-dashed border-[#06B6D4]/30 pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default HeroVisual;
