import React, { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Achievements'];
  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const lastDirectionChangeY = React.useRef(0);
  const lastScrollDirection = React.useRef('up');
  const isScrollingRef = React.useRef(false);
  const scrollTimeoutRef = React.useRef(null);

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);
    setActiveSection(item.toLowerCase()); // Instantly highlight target
    isScrollingRef.current = true;
    
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    
    setTimeout(() => {
      if (item.toLowerCase() === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(item.toLowerCase());
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    }, 50);

    // Re-enable scroll spy after scrolling finishes
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    const currentDirection = latest > previous ? 'down' : 'up';
    
    if (currentDirection !== lastScrollDirection.current) {
      lastDirectionChangeY.current = latest;
      lastScrollDirection.current = currentDirection;
    }

    if (latest < 100) {
      setHidden(false);
      setIsScrolled(latest > 50);
      return;
    } 
    
    setIsScrolled(true);

    const scrollDelta = Math.abs(latest - lastDirectionChangeY.current);

    // 30px threshold for showing/hiding to prevent trackpad micro-jitters
    if (scrollDelta > 30) {
      if (currentDirection === 'down' && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  useEffect(() => {
    const handleScrollSpy = () => {
      if (isScrollingRef.current) return; // Skip if navigating via click
      
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

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [menuItems]);

  return (
    <motion.nav 
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0.98 }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between ${
        isScrolled 
          ? 'py-3 sm:py-4 bg-[#050A1E]/75 backdrop-blur-[20px] shadow-[0_4px_30px_rgba(6,182,212,0.15)] border-b border-[#06B6D4]/20' 
          : 'py-3.5 sm:py-5 bg-[#050816]/50 backdrop-blur-[12px] border-b border-transparent'
      } transition-colors duration-300`}
    >
      {/* Subtle floating glow particles behind navbar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-50%] left-[20%] w-[100px] h-[100px] bg-[#8B5CF6]/20 blur-[50px] rounded-full"></div>
        <div className="absolute top-[-50%] right-[20%] w-[100px] h-[100px] bg-[#06B6D4]/20 blur-[50px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 flex items-center justify-between relative z-10">
        {/* Left side: Logo */}
        <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-xl sm:text-2xl font-bold tracking-tighter transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
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
                onClick={() => handleNavClick(item)}
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
              </span>
            );
          })}
          
          {/* Resume Button */}
          <a href="/Mohan_Teja_Doddi_Resume (Diamond).pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] text-white font-medium rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 group">
            <FileText size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-[#06B6D4] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            <div className="flex flex-col px-8 py-4 space-y-3">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className={`block w-full py-1.5 text-base font-medium tracking-wide cursor-pointer transition-colors duration-300 ${
                    activeSection === item.toLowerCase() ? 'text-[#06B6D4]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
                className="pt-3 mt-1 border-t border-white/10"
              >
                <a href="/Mohan_Teja_Doddi_Resume (Diamond).pdf" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] text-white text-sm font-medium rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.3)] active:scale-95 transition-all duration-300">
                  <FileText size={16} />
                  <span>Resume</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
