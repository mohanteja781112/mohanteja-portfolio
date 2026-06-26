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
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, 50);
      } else {
        setIsTyping(true);
        setWordIndex((prev) => (prev + 1) % TITLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isTyping, wordIndex]);

  return (
    <section id="home" className="relative w-full min-h-[100dvh] bg-[#050816] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 lg:pt-[80px]">
      <BackgroundEffects />

      {/* Global Mouse Follow Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-[#8B5CF6]/10 to-[#06B6D4]/10 rounded-full blur-[120px] pointer-events-none z-0 hidden lg:block"
        style={{
          x: useTransform(mouseX, x => x - 300),
          y: useTransform(mouseY, y => y - 300),
        }}
      />



      <div className="container relative z-10 mx-auto px-4 sm:px-8 flex flex-col items-center justify-center w-full h-full">
        
        {/* Visual Element Wrapper */}
        <div className="relative flex justify-center items-center w-full mt-8 lg:mt-0">
          
          {/* HUGE BACKGROUND TEXT */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none z-0 whitespace-nowrap -mt-2 md:-mt-3 lg:mt-8 xl:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className="text-[16vw] sm:text-[6.5rem] md:text-[7.5rem] lg:text-[9rem] xl:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white/[0.06] to-transparent leading-[0.8] select-none tracking-tighter mix-blend-screen">
              MOHAN TEJA
            </h1>
            <h1 className="text-[16vw] sm:text-[6.5rem] md:text-[7.5rem] lg:text-[9rem] xl:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-t from-white/[0.06] to-transparent leading-[0.8] select-none tracking-tighter mix-blend-screen -mt-1 sm:-mt-4 md:-mt-5 lg:-mt-6 xl:-mt-8">
              DODDI
            </h1>
          </motion.div>

          {/* Centered Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="relative z-20 flex justify-center items-center w-full h-[240px] sm:h-[400px] lg:h-[350px] xl:h-[450px] 2xl:h-[550px]"
          >
            <div className="mt-0 lg:mt-8 xl:mt-12 flex items-center justify-center">
              <HeroVisual />
            </div>

            {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none w-full h-full flex items-center justify-center">
            {/* Floating "Hi, I'm Mohan" badge */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-[-110px] sm:top-[-20px] lg:top-[20px] xl:top-[10px] left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-3 backdrop-blur-md bg-[#050816]/60 sm:bg-white/5 px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] pointer-events-auto whitespace-nowrap z-30"
            >
              <span className="text-white/80 text-[10px] sm:text-sm font-medium">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] font-bold text-xs sm:text-lg">Mohan Teja Doddi</span>
            </motion.div>

            {/* Floating tags */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-[-15%] sm:top-[5%] md:top-[0%] lg:top-[-5%] xl:top-[5%] 2xl:top-[15%] left-0 sm:left-[-10px] xl:left-[5%] -translate-y-1/2 flex flex-col items-end gap-1.5 sm:gap-2 lg:gap-3 z-30"
            >
              <div className="backdrop-blur-md bg-[#050816]/80 border border-white/10 px-2 sm:px-4 lg:px-5 py-1 sm:py-2 lg:py-2.5 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.15)] text-[6.5px] sm:text-[8.5px] lg:text-[10px] xl:text-xs font-bold tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] text-slate-300 uppercase transition-transform hover:scale-105 pointer-events-auto">
                Competitive Programmer
              </div>
              <div className="backdrop-blur-md bg-[#050816]/80 border border-white/10 px-2 sm:px-4 lg:px-5 py-1 sm:py-2 lg:py-2.5 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.15)] text-[6.5px] sm:text-[8.5px] lg:text-[10px] xl:text-xs font-bold tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] text-slate-300 uppercase transition-transform hover:scale-105 pointer-events-auto">
                Full Stack Developer
              </div>
              <div className="backdrop-blur-md bg-[#050816]/80 border border-white/10 px-2 sm:px-4 lg:px-5 py-1 sm:py-2 lg:py-2.5 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.15)] text-[6.5px] sm:text-[8.5px] lg:text-[10px] xl:text-xs font-bold tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] text-slate-300 uppercase transition-transform hover:scale-105 pointer-events-auto">
                AI & ML Engineer
              </div>
            </motion.div>

            {/* Floating Typewriter */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-[-5%] sm:bottom-[15%] xl:bottom-[25%] right-0 sm:right-[-10px] xl:right-[5%] translate-y-1/2 backdrop-blur-md bg-[#050816]/80 border border-[#06B6D4]/30 px-3 sm:px-6 lg:px-8 py-1.5 sm:py-2.5 lg:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.2)] pointer-events-auto"
            >
              <div className="text-[10px] sm:text-base lg:text-xl xl:text-2xl font-medium flex items-center min-w-[100px] sm:min-w-[160px] lg:min-w-[200px] justify-center">
                <span className="text-[#06B6D4] drop-shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                  {text}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-[1.5px] sm:w-[2px] lg:w-[3px] h-3 sm:h-5 lg:h-6 xl:h-7 bg-[#06B6D4] ml-1 sm:ml-1.5 lg:ml-2 shadow-[0_0_8px_#06B6D4]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
        </div>

        {/* CTAs */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 z-30 relative mt-14 sm:mt-12 md:mt-0 lg:-mt-12 xl:-mt-4 w-full max-w-[280px] sm:max-w-[400px] lg:flex lg:w-auto lg:max-w-none md:mb-12 lg:mb-16"
        >
          {/* Primary Button */}
          <a 
            href="https://github.com/mohanteja781112" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-xl p-[1px] cursor-pointer block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-xl opacity-70 group-hover:opacity-100 group-hover:blur-md transition-all duration-300 animate-pulse"></span>
            <div className="relative flex items-center justify-center gap-2 sm:gap-2 px-5 sm:px-8 py-3 sm:py-3.5 bg-[#050816] rounded-xl group-hover:bg-opacity-0 transition-all duration-300 h-full">
              <span className="text-sm sm:text-base text-white font-semibold relative z-10 transition-colors">View Github</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] text-[#06B6D4] group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </div>
          </a>
          
          {/* Secondary Button */}
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 sm:gap-2 px-5 sm:px-8 py-3 sm:py-3.5 bg-white/5 backdrop-blur-md text-slate-200 text-sm sm:text-base font-semibold rounded-xl border border-white/10 hover:border-[#06B6D4] hover:text-[#06B6D4] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:-translate-y-1 active:scale-95 transition-all duration-300 group"
          >
            <span>Contact Me</span>
            <Phone className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] transition-transform duration-300 group-hover:rotate-12 group-hover:text-[#06B6D4]" />
          </button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
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

export default Hero;
