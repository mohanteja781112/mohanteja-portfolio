import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Phone, Rocket, ChevronDown } from 'lucide-react';
import HeroVisual from './HeroVisual';
import BackgroundEffects from './BackgroundEffects';

const TITLES = [
  "Full Stack Developer",
  "AI Solutions Builder",
  "Modern Web Engineer",
  "Hackathon Winner"
];

const Hero = () => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);

  // Parallax and global mouse tracking
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Premium Typewriter Effect
  useEffect(() => {
    const currentWord = TITLES[wordIndex];
    let timeout;

    if (isTyping) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, 100); // realistic typing speed
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // subtle pause after phrase
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, 50); // realistic deleting speed
      } else {
        setIsTyping(true);
        setWordIndex((prev) => (prev + 1) % TITLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, wordIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="home" className="relative w-full min-h-[calc(100vh-80px)] bg-[#050816] flex items-center overflow-hidden">
      <BackgroundEffects />

      {/* Global Mouse Follow Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-gradient-to-r from-[#8B5CF6]/10 to-[#06B6D4]/10 rounded-full blur-[120px] pointer-events-none z-0 hidden lg:block"
        style={{
          x: useTransform(mouseX, x => x - 300),
          y: useTransform(mouseY, y => y - 300),
        }}
      />



      <div className="container relative z-10 mx-auto px-6 sm:px-8 pt-8 sm:pt-16 pb-28 lg:pt-0 lg:pb-0 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Side: Text Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative z-10 lg:pr-10">
          
          {/* Left section decorative elements (Particles removed per request) */}

          {/* Animated badge above name */}
          <motion.div variants={itemVariants} className="mb-6 flex flex-wrap gap-2 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200 uppercase">
            <span>FULL STACK DEVELOPER</span>
            <span className="text-[#8B5CF6]">|</span>
            <span>AI ENGINEER</span>
            <span className="text-[#06B6D4]">|</span>
            <span>PROBLEM SOLVER</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-white text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tight mb-4 relative leading-tight">
            <span className="opacity-90">Hi, I'm</span> <br className="hidden md:block" />
            <motion.span 
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="relative inline-block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#8B5CF6] drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] bg-[length:200%_auto]"
            >
              Mohan Teja Doddi
            </motion.span>
          </motion.h1>

          <motion.div variants={itemVariants} className="h-10 mb-8 flex items-center text-[clamp(1.25rem,4vw,1.875rem)] font-medium">
            {/* Fixed-width container to prevent layout shifts */}
            <div className="min-w-[260px] sm:min-w-[320px] lg:min-w-[380px] flex items-center">
              <span className="text-[#06B6D4] drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                {text}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[3px] h-6 sm:h-7 lg:h-8 bg-[#06B6D4] ml-1.5 align-middle shadow-[0_0_8px_#06B6D4]"
              />
            </div>
          </motion.div>

          {/* Minimal Trust Indicators */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 text-xs sm:text-sm font-medium text-white/60">
            <span className="flex items-center gap-1.5 hover:text-[#06B6D4] hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300 cursor-default">
              <span>🏆</span> 2 Hackathon Awards
            </span>
            <span className="text-white/20 hidden sm:block">•</span>
            <span className="flex items-center gap-1.5 hover:text-[#06B6D4] hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300 cursor-default">
              <span>🚀</span> 3 Featured Projects
            </span>
            <span className="text-white/20 hidden sm:block">•</span>
            <span className="flex items-center gap-1.5 hover:text-[#06B6D4] hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300 cursor-default">
              <span>💻</span> Full Stack Developer
            </span>
          </motion.div>

          {/* Floating status indicator */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6 w-fit px-4 py-2 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#08CB00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#08CB00] shadow-[0_0_8px_#08CB00]"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#06B6D4] tracking-wide">Available for Opportunities</span>
          </motion.div>

          {/* CTA Redesign */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto mt-4">
            {/* Primary Button */}
            <a 
              href="https://github.com/mohanteja781112" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-xl p-[1px] w-full sm:w-auto cursor-pointer block"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-xl opacity-70 group-hover:opacity-100 group-hover:blur-md transition-all duration-300 animate-pulse"></span>
              <div className="relative flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#050816] rounded-xl group-hover:bg-opacity-0 transition-all duration-300 w-full h-full">
                <span className="text-white font-semibold relative z-10 transition-colors">View Github</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#06B6D4] group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </div>
            </a>
            
            {/* Secondary Button */}
            <button className="flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 bg-white/5 backdrop-blur-md text-slate-200 font-semibold rounded-xl border border-white/10 hover:border-[#06B6D4] hover:text-[#06B6D4] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:-translate-y-1 active:scale-95 transition-all duration-300 group w-full sm:w-auto">
              <span>Contact Me</span>
              <Phone size={18} className="transition-transform duration-300 group-hover:rotate-12 group-hover:text-[#06B6D4]" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center items-center w-full h-[280px] sm:h-[380px] lg:h-auto lg:min-h-[500px] mb-2 sm:mb-8 lg:mb-0"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
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


export default Hero;
