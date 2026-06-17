import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const menuItems = ['About', 'Skills', 'Projects', 'Achievements'];
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Shrink and darken on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy logic
      const sections = menuItems.map(item => document.getElementById(item.toLowerCase()));
      let current = '';
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            current = section.id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);

  return (
    <nav 
      className={`sticky top-0 z-50 w-full flex items-center justify-between transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#050816]/90 backdrop-blur-[20px] shadow-[0_4px_30px_rgba(6,182,212,0.1)] border-b border-[#06B6D4]/20' 
          : 'py-5 bg-[#050816]/75 backdrop-blur-[16px] border-b border-[#06B6D4]/12'
      }`}
    >
      {/* Subtle floating glow particles behind navbar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-50%] left-[20%] w-[100px] h-[100px] bg-[#8B5CF6]/20 blur-[50px] rounded-full"></div>
        <div className="absolute top-[-50%] right-[20%] w-[100px] h-[100px] bg-[#06B6D4]/20 blur-[50px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-8 flex items-center justify-between relative z-10">
        {/* Left side: Logo */}
        <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-2xl font-bold tracking-tighter transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <span className="text-white">Mohan</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4]">Teja</span>
          </span>
        </div>

        {/* Right side: Menu Items (Desktop) */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <span
                key={item}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`relative text-sm font-medium tracking-wide cursor-pointer transition-colors duration-300 hover:text-[#06B6D4] group ${
                  isActive ? 'text-[#06B6D4]' : 'text-white/80'
                }`}
              >
                {item}
                {/* Animated underline expanding from center */}
                <span className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-[2px] bg-[#06B6D4] shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
                
                {/* Small glowing indicator beneath active section */}
                {isActive && (
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#06B6D4] shadow-[0_0_10px_rgba(6,182,212,1)]"></span>
                )}
              </span>
            );
          })}
          
          {/* Resume Button */}
          <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] text-white font-medium rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 group">
            <Download size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-[#06B6D4] transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#050816]/95 backdrop-blur-2xl border-b border-[#06B6D4]/20 lg:hidden overflow-hidden"
          >
            <div className="flex flex-col px-8 py-6 space-y-6">
              {menuItems.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-lg font-medium tracking-wide cursor-pointer transition-colors duration-300 ${
                    activeSection === item.toLowerCase() ? 'text-[#06B6D4]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item}
                </motion.span>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
                className="pt-4 mt-2 border-t border-white/10"
              >
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] text-white font-medium rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.3)] active:scale-95 transition-all duration-300">
                  <Download size={20} />
                  <span>Resume</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
