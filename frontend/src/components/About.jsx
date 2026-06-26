import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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

const CompactTerminalContent = () => {
  const [history, setHistory] = useState([]);
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [currentCmdText, setCurrentCmdText] = useState("");
  const terminalRef = useRef(null);
  const inView = useInView(terminalRef, { once: true, margin: "-50px" });

  const commands = [
    { cmd: "whoami", output: "AI & ML Engineer + Full Stack Developer" },
    { cmd: "education", output: "B.Tech CSE" },
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
            if (prev.length > 0 && prev[prev.length - 1].cmd === commands[currentCmdIndex].cmd) return prev;
            return [...prev, commands[currentCmdIndex]];
          });
          setCurrentCmdText("");
          setCurrentCmdIndex((prev) => prev + 1);
        }, 400);
      }
    }, 50);

    return () => {
      clearInterval(typeInterval);
      clearTimeout(delayTimeout);
    };
  }, [inView, currentCmdIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (terminalRef.current) {
        const rect = terminalRef.current.getBoundingClientRect();
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
    <div ref={terminalRef} className="w-full h-full flex flex-col text-left font-mono text-[9px] sm:text-[11px] leading-normal sm:leading-relaxed text-slate-300">
      {/* Terminal Header */}
      <div className="flex gap-1.5 mb-2 sm:mb-4 border-b border-white/10 pb-2 sm:pb-3 relative z-10">
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
      </div>

      <div className="space-y-1.5 sm:space-y-3 relative z-10 flex-1 overflow-y-auto no-scrollbar pb-2">
        {history.map((item, i) => (
          <div key={i}>
            <div className="flex items-center">
              <span className="text-[#8B5CF6] mr-1 sm:mr-2">❯</span>
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]">{item.cmd}</span>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 5 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.4 }}
              className="pl-3 sm:pl-4 mt-0.5 sm:mt-1 text-slate-400 font-medium tracking-wide"
            >
              {item.output}
            </motion.div>
          </div>
        ))}

        {currentCmdIndex < commands.length && (
          <div className="flex items-center">
            <span className="text-[#8B5CF6] mr-1 sm:mr-2">❯</span>
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]">{currentCmdText}</span>
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }} 
              className="w-1 h-2.5 sm:w-1.5 sm:h-3.5 bg-[#06B6D4] ml-1 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            />
          </div>
        )}
        
        {currentCmdIndex >= commands.length && (
          <div className="flex items-center">
            <span className="text-[#8B5CF6] mr-1 sm:mr-2">❯</span>
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }} 
              className="w-1 h-2.5 sm:w-1.5 sm:h-3.5 bg-[#06B6D4] ml-1 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const BioCard = () => (
  <div className="w-full bg-[#050816]/40 border border-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 relative overflow-hidden group hover:border-[#8B5CF6]/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-500">
    <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gradient-to-bl from-[#8B5CF6]/10 to-transparent rounded-full blur-[80px] group-hover:from-[#8B5CF6]/20 transition-all duration-700 pointer-events-none"></div>
    <div className="relative z-10">
      <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3 lg:mb-4">
        <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-[#06B6D4] to-transparent"></div>
        <span className="text-[#06B6D4] font-bold tracking-[0.2em] text-[10px] sm:text-sm uppercase">Discover</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-2 sm:mb-4 lg:mb-5 tracking-tight leading-tight flex items-center gap-2 sm:gap-3">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#8B5CF6] bg-[length:200%_auto] animate-gradient">Me</span>
      </h2>
      <div className="border-l-[3px] sm:border-l-4 border-[#8B5CF6] pl-3 sm:pl-5 lg:pl-6 py-1 lg:py-2 mb-2 sm:mb-4 lg:mb-5 drop-shadow-[0_0_15px_rgba(139,92,246,0.2)]">
        <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-slate-200 font-medium leading-tight sm:leading-normal">
          Building Technology That Solves <span className="text-[#06B6D4]">Real Problems</span>
        </p>
      </div>
      <p className="text-slate-400 leading-snug sm:leading-relaxed max-w-2xl text-xs sm:text-sm lg:text-base xl:text-lg font-light line-clamp-4 sm:line-clamp-none">
        I specialize in architecting full-stack applications and integrating intelligent AI features to create seamless user experiences. Driven by innovation, I actively focus on building impactful real-world projects that scale and make a difference.
      </p>
    </div>
  </div>
);

const TerminalCard = () => (
  <div className="w-full h-full bg-[#050816]/40 border border-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 xl:p-8 relative overflow-hidden group hover:border-[#06B6D4]/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500 flex flex-col">
    <div className="absolute bottom-0 left-0 w-full h-[200px] sm:h-[300px] bg-gradient-to-tr from-[#06B6D4]/10 to-transparent rounded-full blur-[80px] group-hover:from-[#06B6D4]/20 transition-all duration-700 pointer-events-none"></div>
    
    <div className="relative z-10 flex-1 flex flex-col h-full">
      <div className="flex items-center gap-2.5 sm:gap-3 xl:gap-4 mb-3 sm:mb-4 xl:mb-6">
        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] p-[1px] shadow-[0_0_15px_rgba(139,92,246,0.3)] shrink-0">
          <div className="w-full h-full rounded-full bg-[#050816] flex items-center justify-center">
            <span className="text-[10px] sm:text-xs lg:text-sm font-black text-white tracking-wider">MT</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white tracking-wide">Mohan Teja Doddi</h3>
          <p className="text-[#8B5CF6] text-[8px] sm:text-[10px] lg:text-xs font-semibold tracking-widest uppercase mt-0.5">Software Engineer</p>
        </div>
      </div>

      <div className="flex-1 w-full bg-[#050816]/80 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 border border-[#06B6D4]/20 shadow-inner relative overflow-hidden group-hover:border-[#06B6D4]/40 transition-colors duration-500 min-h-[150px] sm:min-h-[200px]">
        <CompactTerminalContent />
      </div>
    </div>
  </div>
);

const StatCard = ({ metric }) => (
  <div className="w-full bg-[#050816]/40 border border-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-2 sm:p-4 lg:p-5 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-1 h-[70px] sm:h-[100px] lg:h-[120px] xl:h-[140px]">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    <span className="relative z-10 text-lg sm:text-3xl lg:text-3xl xl:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-0.5 sm:mb-2 lg:mb-3 group-hover:from-[#06B6D4] group-hover:to-[#8B5CF6] transition-all duration-500 leading-tight">
      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
    </span>
    <span className="relative z-10 text-[7px] sm:text-[9px] xl:text-[11px] font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-slate-400 group-hover:text-slate-200 transition-colors duration-500 leading-tight px-1">
      {metric.label}
    </span>
  </div>
);

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const metrics = [
    { value: "10", suffix: "+", label: "Projects Built" },
    { value: "GFG", suffix: "", label: "Chapter Chair" },
    { value: "2", suffix: "", label: "Hackathon Awards" },
    { value: "GSSoC", suffix: "", label: "Open Source" },
  ];

  return (
    <section id="about" className="relative w-full min-h-[100dvh] flex items-center py-20 lg:py-0 px-4 sm:px-8 bg-[#050816] overflow-hidden">
      <BackgroundEffects />
      


      <div className="container mx-auto relative z-10 max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-6 xl:gap-8 items-stretch h-full">
          {/* Left Column: Bio + Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="col-span-12 lg:col-span-7 flex flex-col gap-3 sm:gap-6 lg:gap-6 xl:gap-8 justify-center"
          >
            {/* Main Bio Content */}
            <BioCard />

            {/* Stats Grid */}
            <div className="grid grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-4 xl:gap-6">
              {metrics.map((metric, idx) => (
                <StatCard key={idx} metric={metric} />
              ))}
            </div>
          </motion.div>

          {/* Right Column: Terminal / Identity */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="col-span-12 lg:col-span-5 min-h-[280px] sm:min-h-[360px] lg:min-h-0 lg:h-full flex flex-col"
          >
            <TerminalCard />
          </motion.div>
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: [0, 8, 0] }}
        transition={{ initial: { duration: 0.8, delay: 1.5 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        className="hidden sm:block absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-50 text-slate-400 hover:text-[#06B6D4] transition-colors"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default About;
