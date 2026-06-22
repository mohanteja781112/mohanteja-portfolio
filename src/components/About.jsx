import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const AnimatedCounter = ({ value, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const target = parseInt(value);
      if (isNaN(target)) {
        setCount(value);
        return;
      }
      let start = 0;
      const increment = target / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

const CompactTerminal = () => {
  const [history, setHistory] = useState([]);
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [currentCmdText, setCurrentCmdText] = useState("");
  const terminalRef = useRef(null);
  const inView = useInView(terminalRef, { once: true, margin: "-50px" });

  const commands = [
    { cmd: "whoami", output: "AI + Full Stack Developer" },
    { cmd: "education", output: "B.Tech Computer Science and Engineering" },
    { cmd: "college", output: "Vignan's Institute of Information Technology" },
    { cmd: "graduation", output: "2027" },
    { cmd: "location", output: "Anakapalle, Andhra Pradesh, India" }
  ];

  useEffect(() => {
    if (!inView) return;
    
    if (currentCmdIndex >= commands.length) return;

    const cmd = commands[currentCmdIndex].cmd;
    let charIndex = 0;
    let delayTimeout;
    
    const typeInterval = setInterval(() => {
      setCurrentCmdText(cmd.substring(0, charIndex + 1));
      charIndex++;
      
      if (charIndex === cmd.length) {
        clearInterval(typeInterval);
        
        delayTimeout = setTimeout(() => {
          setHistory((prev) => {
            // Extra safety to prevent duplicates
            if (prev.length > 0 && prev[prev.length - 1].cmd === commands[currentCmdIndex].cmd) return prev;
            return [...prev, commands[currentCmdIndex]];
          });
          setCurrentCmdText("");
          setCurrentCmdIndex((prev) => prev + 1);
        }, 400); // delay before showing output and next command
      }
    }, 50); // typing speed

    return () => {
      clearInterval(typeInterval);
      clearTimeout(delayTimeout);
    };
  }, [inView, currentCmdIndex]);

  // Instantly finish animation if user scrolls past the section
  useEffect(() => {
    const handleScroll = () => {
      if (terminalRef.current) {
        const rect = terminalRef.current.getBoundingClientRect();
        // If terminal is scrolled out of view ABOVE the screen, finish immediately
        if (rect.bottom < 0 && currentCmdIndex < commands.length) {
          setHistory(commands);
          setCurrentCmdIndex(commands.length);
          setCurrentCmdText("");
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentCmdIndex]);

  return (
    <div ref={terminalRef} className="w-full text-left font-mono text-[10px] sm:text-[11px] leading-normal sm:leading-relaxed text-slate-300 bg-[#050816]/80 rounded-xl p-3 sm:p-5 border border-white/5 shadow-inner mt-4 sm:mt-8">
      {/* Terminal Header */}
      <div className="flex gap-1.5 mb-4 border-b border-white/5 pb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
      </div>

      <div className="space-y-3">
        {history.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 2 }} 
            animate={{ opacity: 1, y: 0 }} 
          >
            <div className="flex items-center text-[#06B6D4]">
              <span className="text-[#8B5CF6] mr-2">❯</span>
              <span className="font-semibold">{item.cmd}</span>
            </div>
            <div className="pl-4 mt-1 text-slate-400 font-medium">
              {item.output}
            </div>
          </motion.div>
        ))}

        {currentCmdIndex < commands.length && (
          <div className="flex items-center text-[#06B6D4]">
            <span className="text-[#8B5CF6] mr-2">❯</span>
            <span className="font-semibold">{currentCmdText}</span>
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }} 
              className="w-1.5 h-3.5 bg-[#06B6D4] ml-1 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            />
          </div>
        )}
        
        {currentCmdIndex >= commands.length && (
          <div className="flex items-center text-[#06B6D4]">
            <span className="text-[#8B5CF6] mr-2">❯</span>
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }} 
              className="w-1.5 h-3.5 bg-[#06B6D4] ml-1 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const IdentityCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 backdrop-blur-sm lg:backdrop-blur-2xl p-5 sm:p-8 hover:border-[#06B6D4]/40 transition-colors duration-500 group shadow-[0_0_40px_rgba(6,182,212,0.05)]"
    >
      {/* Floating particles background inside the card */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-[10%] left-[10%] w-2 h-2 bg-[#06B6D4] rounded-full blur-[2px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-3 h-3 bg-[#8B5CF6] rounded-full blur-[2px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[50%] right-[25%] w-1.5 h-1.5 bg-white rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#06B6D4] group-hover:to-[#8B5CF6] transition-all duration-500">Mohan Teja Doddi</h3>
        
        {/* Compact Terminal */}
        <CompactTerminal />

      </div>
    </motion.div>
  );
};

const HeaderSection = () => (
  <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
    <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight">
      About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]">Me</span>
    </h2>
    <p className="text-base sm:text-xl text-slate-300 font-light mb-4 sm:mb-6 border-l-2 border-[#06B6D4] pl-3 sm:pl-4 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
      Building Technology That Solves Real Problems
    </p>
    <p className="text-slate-400 leading-relaxed max-w-2xl text-sm sm:text-base font-light">
      I specialize in architecting full-stack applications and integrating intelligent AI features to create seamless user experiences. Driven by innovation, I actively focus on building impactful real-world projects that scale and make a difference.
    </p>
  </motion.div>
);

const ImpactSection = () => {
  const metrics = [
    { value: "10", suffix: "+", label: "Projects Built" },
    { value: "GFG", suffix: "", label: "Chapter Chair" },
    { value: "2", suffix: "", label: "Hackathon Awards" },
    { value: "GSSoC", suffix: "", label: "Open Source Contributor" },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="grid grid-cols-2 gap-3 sm:gap-6">
        {metrics.map((metric, idx) => (
          <div 
            key={idx} 
            className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-md flex flex-col items-center text-center group hover:bg-white/[0.06] hover:border-[#06B6D4]/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-500 relative overflow-hidden"
          >
            {/* Subtle glow effect behind numbers */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#06B6D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <span className="text-2xl sm:text-5xl font-bold text-white mb-1 sm:mb-2 group-hover:text-[#06B6D4] group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-500 relative z-10">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
            </span>
            <span className="text-[10px] sm:text-sm text-slate-400 font-medium tracking-wider sm:tracking-widest uppercase group-hover:text-slate-300 transition-colors relative z-10">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen flex items-center pt-12 pb-16 lg:py-16 px-6 sm:px-8 bg-[#050816] overflow-hidden">
      <BackgroundEffects />
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.5fr] gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Identity Card */}
          <div className="relative w-full">
            <IdentityCard />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col space-y-8 lg:space-y-12">
            <HeaderSection />
            <ImpactSection />
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: [0, 8, 0] }}
        transition={{ initial: { duration: 0.8, delay: 1.5 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        className="absolute bottom-2 sm:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-50 text-slate-400 hover:text-[#06B6D4] transition-colors"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default About;
