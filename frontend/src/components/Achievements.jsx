import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, User, Users, Medal, ExternalLink, Shield, MapPin, Building2, Calendar, CheckCircle2, ChevronDown, GitPullRequest } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    let startTime = null;
    const duration = 2000;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(Math.floor((progress / duration) * numericValue), numericValue);
      setCount(current);
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };
    requestAnimationFrame(animate);
  }, [numericValue]);

  return <span>{count}{suffix}</span>;
};

const milestones = [
  {
    id: "idea2impact",
    category: "Ideathon",
    badge: "🏆IDEATHON WINNER",
    title: "Idea2Impact Winner",
    role: "Team Lead",
    event: "National Level Ideathon",
    location: "Visakhapatnam",
    organization: "Gayatri Vidya Parishad College",
    year: "2026",
    rank: "#1",
    level: "National",
    achievement: "Secured 1st Place as Team Lead",
    story: "Led ideation, architecture decisions, team coordination and final pitching, resulting in securing 1st place in a national-level competition.",
    progression: [
      { step: "Problem", details: "Identified inefficiencies in local supply chains affecting sustainability." },
      { step: "Solution", details: "Designed an AI-driven logistics optimization platform." },
      { step: "Leadership", details: "Led a team of 4 through ideation, architecture, and pitching." },
      { step: "Impact", details: "Secured 1st place among 50+ national teams." }
    ],
    highlight: true,
    icon: Trophy,
    theme: {
      gradient: "from-yellow-400 to-amber-600",
      text: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      activeBorder: "border-yellow-400",
      shadow: "shadow-yellow-500/20"
    }
  },
  {
    id: "sushacks",
    category: "Hackathon",
    badge: "🥈Hackathon RUNNER-UP",
    title: "SUS Hacks Runner-up",
    role: "Team Lead",
    event: "Hackathon",
    location: "Visakhapatnam",
    organization: "Vignan's Institute of Information Technology",
    year: "2026",
    rank: "2nd",
    level: "National",
    achievement: "Secured Runner-Up Position as Team Lead",
    story: "Built a highly responsive user interface and integrated real-time carbon tracking APIs to promote sustainable living practices globally.",
    progression: [
      { step: "Problem", details: "Lack of tools to track individual carbon footprints accurately." },
      { step: "Solution", details: "Built a responsive UI and integrated real-time carbon tracking APIs." },
      { step: "Impact", details: "Promoted sustainable living practices globally, winning 2nd place." }
    ],
    highlight: false,
    icon: Medal,
    theme: {
      gradient: "from-emerald-400 to-teal-500",
      text: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30",
      activeBorder: "border-emerald-400",
      shadow: "shadow-emerald-500/20"
    }
  },
  {
    id: "gssoc",
    category: "Open Source",
    badge: "🌟 Open Source CONTRIBUTOR",
    title: "GSSoC Contributor",
    role: "Contributor",
    event: "GirlScript Summer of Code",
    location: "Remote",
    organization: "GirlScript Foundation",
    year: "2026",
    rank: "Top 1000",
    level: "Global",
    achievement: "Ranked among Top 1000 Contributors",
    story: "Merged 10+ Pull Requests, collaborated with international developers, and improved the stability of core open-source libraries.",
    progression: [
      { step: "Challenge", details: "Navigating complex open-source codebases and resolving critical issues." },
      { step: "Action", details: "Merged 10+ Pull Requests and collaborated with international developers." },
      { step: "Impact", details: "Improved stability of core libraries and ranked among Top 1000." }
    ],
    highlight: false,
    icon: GitPullRequest,
    theme: {
      gradient: "from-cyan-400 to-blue-500",
      text: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      activeBorder: "border-cyan-400",
      shadow: "shadow-cyan-500/20"
    }
  },
  {
    id: "gfg",
    category: "Leadership",
    badge: "👨‍💼 GFG Chapter Chair",
    title: "GFG Chapter Chair",
    role: "Chair",
    event: "GeeksforGeeks Chapter",
    location: "VIIT Campus",
    organization: "GeeksforGeeks",
    year: "2026",
    rank: "Leader",
    level: "Campus",
    achievement: "Awarded Best Emerging Chapter",
    story: "Organized over 10 technical events, spearheaded student-led initiatives, mentored peers, and cultivated a thriving local coding community.",
    progression: [
      { step: "Problem", details: "Low technical engagement and lack of coding culture on campus." },
      { step: "Action", details: "Organized 10+ technical events and spearheaded student-led initiatives." },
      { step: "Impact", details: "Cultivated a thriving local coding community." },
      { step: "Recognition", details: "Awarded Best Emerging Chapter." }
    ],
    highlight: false,
    icon: Star,
    theme: {
      gradient: "from-purple-400 to-purple-600",
      text: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      activeBorder: "border-purple-400",
      shadow: "shadow-purple-500/20"
    }
  }
];

const metrics = [
  { label: "Hackathon Awards", value: "2", icon: Trophy },
  { label: "Open Source Programs", value: "1", icon: Star },
  { label: "Leadership Roles", value: "1", icon: User },
  { label: "Teams Competed Against", value: "100+", icon: Users }
];

const constellationNodes = [
  { id: 'idea2impact', x: 50, y: 20, isMilestone: true },
  { id: 'sushacks', x: 80, y: 20, isMilestone: true },
  { id: 'dummy1', x: 50, y: 50, isMilestone: false },
  { id: 'gssoc', x: 80, y: 50, isMilestone: true },
  { id: 'dummy2', x: 95, y: 50, isMilestone: false },
  { id: 'gfg', x: 80, y: 68, isMilestone: true }
];

const constellationLines = [
  { from: 'idea2impact', to: 'sushacks' },
  { from: 'idea2impact', to: 'dummy1' },
  { from: 'dummy1', to: 'gssoc' },
  { from: 'sushacks', to: 'gssoc' },
  { from: 'gssoc', to: 'dummy2' },
  { from: 'gssoc', to: 'gfg' }
];

const Achievements = () => {
  const [selectedId, setSelectedId] = useState(milestones[0].id);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const selectedMilestone = milestones.find(m => m.id === selectedId);

  return (
    <section id="achievements" className="relative pt-8 pb-20 lg:pt-16 lg:pb-24 bg-[#050816] overflow-hidden">
      <BackgroundEffects />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 lg:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2"
          >
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]">Leadership</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-slate-300 font-light max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]"
          >
            A visual journey of growth, impact, leadership, and recognition.
          </motion.p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 lg:mb-20 max-w-5xl mx-auto">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                className="group p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors backdrop-blur-md"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-[#06B6D4]/10 text-[#06B6D4] group-hover:bg-[#06B6D4]/20 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    <AnimatedCounter value={metric.value} />
                  </h3>
                </div>
                <p className="text-[9px] sm:text-[10px] text-gray-500 font-semibold tracking-wider uppercase">{metric.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Milestone Dashboard */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-8 md:gap-6 lg:gap-16 relative">
          
          {/* Left Side: Timeline Navigation */}
          <div className="lg:col-span-4 relative z-20 flex flex-row lg:flex-col justify-between lg:justify-start items-center lg:items-stretch py-2 lg:py-4 overflow-x-auto lg:overflow-x-visible lg:max-h-[600px] lg:pr-2 hide-scrollbar mb-2 lg:mb-0 px-2 sm:px-8 lg:px-0">
            {/* The vertical track (Desktop only) */}
            <div className="hidden lg:block absolute left-[31px] top-8 bottom-8 w-px bg-white/10 z-0"></div>
            
            {/* Horizontal track (Mobile only) */}
            <div className="lg:hidden absolute top-[32px] left-10 right-10 h-px bg-white/10 z-0"></div>

            {milestones.map((milestone) => {
              const isSelected = selectedId === milestone.id;
              const Icon = milestone.icon;
              return (
                <div 
                  key={milestone.id}
                  className="relative group cursor-pointer flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-4 lg:py-6 flex-shrink-0 z-10 lg:w-full"
                  onClick={() => setSelectedId(milestone.id)}
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0 lg:mt-1">
                    <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border transition-all duration-700
                      ${isSelected 
                        ? `${milestone.theme.bg} border-transparent shadow-[0_0_30px_rgba(255,255,255,0.05)] scale-110 lg:scale-100` 
                        : 'bg-[#050816] border-white/10 group-hover:border-white/20'
                      }
                    `}>
                      <Icon className={`w-5 h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-colors duration-700 ${isSelected ? milestone.theme.text : 'text-gray-600 group-hover:text-gray-300'}`} />
                    </div>
                  </div>

                    {/* Timeline Content */}
                    <div className={`flex flex-col items-center lg:items-start transition-all duration-700 ${isSelected ? 'lg:translate-x-2' : ''}`}>
                      <p className={`text-[10px] font-bold tracking-widest uppercase transition-colors duration-700 ${isSelected ? milestone.theme.text : 'text-gray-600'}`}>
                        {milestone.year}
                      </p>
                      
                      {/* Only show title on desktop navigation */}
                      <div className="hidden lg:block mt-1.5">
                      <h4 className={`text-xl font-bold transition-colors duration-700 ${isSelected ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                        {milestone.title}
                      </h4>
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-gray-500 mt-2 font-medium">
                              {milestone.category} <span className="mx-2 text-white/10">•</span> {milestone.level}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Detail Panel */}
          <div 
            className="lg:col-span-8 relative h-full min-h-0 lg:min-h-[450px] rounded-[2rem] bg-white/[0.01] border border-white/[0.05] backdrop-blur-sm lg:backdrop-blur-2xl overflow-hidden shadow-2xl flex flex-col p-6 sm:p-8 lg:p-8 group/panel"
            onMouseMove={(e) => {
              if (window.innerWidth < 1024) return;
              const rect = e.currentTarget.getBoundingClientRect();
              setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Spotlight Effect */}
            <div
              className="pointer-events-none absolute -inset-px rounded-[2rem] transition duration-300 opacity-0 group-hover/panel:opacity-100 z-0"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.05), transparent 40%)`,
              }}
            />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMilestone.id}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(10px)' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-full z-10 relative flex flex-col"
              >
                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 rounded-full ${selectedMilestone.theme.bg.replace('/10', '')}`}
                      initial={{
                        x: Math.random() * 100 + "%",
                        y: "100%",
                        opacity: Math.random() * 0.5 + 0.2
                      }}
                      animate={{
                        y: "-20%",
                        opacity: [0, 0.5, 0]
                      }}
                      transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                      }}
                    />
                  ))}
                </div>

                {/* Minimal Achievement Constellation Background */}
                <div className="absolute inset-0 translate-x-[5px] md:translate-x-[9px] lg:translate-x-[20px] -translate-y-4 pointer-events-none select-none z-0 opacity-40 mix-blend-normal lg:mix-blend-screen flex items-center justify-center scale-[1.2] sm:scale-[1.5]">
                  <svg className="w-full h-full">
                    {/* Lines */}
                    {constellationLines.map((line, i) => {
                      const fromNode = constellationNodes.find(n => n.id === line.from);
                      const toNode = constellationNodes.find(n => n.id === line.to);
                      const isActive = selectedMilestone.id === line.from || selectedMilestone.id === line.to;
                      return (
                        <motion.line
                          key={`line-${i}`}
                          x1={`${fromNode.x}%`}
                          y1={`${fromNode.y}%`}
                          x2={`${toNode.x}%`}
                          y2={`${toNode.y}%`}
                          stroke={isActive ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'}
                          strokeWidth={isActive ? 1.5 : 1}
                          strokeDasharray={isActive ? "none" : "4 4"}
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                      );
                    })}

                    {/* Nodes */}
                    {constellationNodes.map((node, i) => {
                      const isActive = selectedMilestone.id === node.id;
                      return (
                        <g key={`node-${i}`}>
                          <motion.circle
                            cx={`${node.x}%`}
                            cy={`${node.y}%`}
                            r={isActive ? "4" : (node.isMilestone ? "2" : "1")}
                            className={isActive ? `fill-current ${selectedMilestone.theme.text}` : 'fill-white/20'}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                          />
                          {isActive && (
                            <motion.circle
                              cx={`${node.x}%`}
                              cy={`${node.y}%`}
                              r="12"
                              className={`fill-current ${selectedMilestone.theme.text} opacity-10`}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>

                <div className="h-full flex flex-col relative z-10">
                  

                  {/* Main Title & Subtitle */}
                  <div className="mb-4 sm:mb-10 relative">
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2 sm:mb-3 tracking-tight leading-tight"
                    >
                      {selectedMilestone.title}
                    </motion.h3>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className={`text-xs sm:text-base lg:text-lg font-bold flex items-center gap-2 sm:gap-3`}
                    >
                      <div className={`w-6 sm:w-8 h-px bg-gradient-to-r ${selectedMilestone.theme.gradient}`} />
                      <span className={`bg-clip-text text-transparent bg-gradient-to-r ${selectedMilestone.theme.gradient}`}>
                        {selectedMilestone.achievement}
                      </span>
                    </motion.div>
                  </div>

                  {/* Snapshot Metric Cards */}
                  <div className="hidden sm:grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-8">
                    {[
                      { label: "Rank", value: selectedMilestone.rank },
                      { label: "Role", value: selectedMilestone.role },
                      { label: "Level", value: selectedMilestone.level }
                    ].map((stat, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + (i * 0.1), duration: 0.4, type: "spring", stiffness: 100 }}
                        key={i} 
                        className="group relative p-2 sm:p-3 lg:p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm overflow-hidden shadow-lg lg:hover:shadow-xl lg:hover:-translate-y-1 lg:hover:scale-[1.02] transition-all duration-300"
                      >
                        {/* Hover Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${selectedMilestone.theme.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                        
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 skew-x-12" />
                        
                        <p className="text-[7px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5 sm:mb-1 relative z-10 break-words">{stat.label}</p>
                        <p className="text-xs sm:text-lg lg:text-xl font-bold text-white relative z-10 break-words">{stat.value}</p>
                        
                        {/* Bottom Glow Line */}
                        <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${selectedMilestone.theme.gradient} transition-all duration-500`} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Achievement Story */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="mb-4 sm:mb-8"
                  >
                    <p className="text-sm sm:text-base lg:text-[15px] text-gray-300 leading-relaxed font-medium">
                      {selectedMilestone.story}
                    </p>
                  </motion.div>

                  {/* Proof Section */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                    className="flex flex-col sm:flex-row flex-wrap sm:items-center gap-3 sm:gap-5 mb-3 lg:mb-8 py-3 sm:py-4 border-y border-white/5 relative"
                  >
                    <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-default">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-xs sm:text-sm font-medium">{selectedMilestone.location}</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600"></div>
                    <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-default">
                      <Building2 className="w-3.5 h-3.5 text-purple-400" />
                      <span className="text-xs sm:text-sm font-medium">{selectedMilestone.organization}</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600"></div>
                    <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-default">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-xs sm:text-sm font-medium">{selectedMilestone.event}</span>
                    </div>
                  </motion.div>

                  {/* Certificate Area */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    className={`mt-3 lg:mt-auto flex flex-col sm:flex-row items-center justify-between sm:p-4 rounded-xl sm:border backdrop-blur-sm relative overflow-hidden
                      sm:bg-gradient-to-r sm:from-white/[0.03] sm:to-transparent sm:border-white/5 transition-colors
                    `}
                  >
                    {/* Inner glowing pulse */}
                    <div className={`hidden sm:block absolute top-0 right-0 w-32 h-32 ${selectedMilestone.theme.bg} blur-[50px] opacity-20 pointer-events-none animate-pulse`} />

                    <div className="hidden sm:flex items-center gap-3 sm:gap-4 mb-3 sm:mb-0 w-full sm:w-auto relative z-10">
                      <div className={`p-1.5 sm:p-2 rounded-full ${selectedMilestone.theme.bg} ${selectedMilestone.theme.text} ring-1 ring-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]`}>
                        <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-xs sm:text-sm tracking-wide">Verified Credential</p>
                        <p className="text-gray-500 text-[10px] sm:text-xs mt-0.5">Authentic achievement record</p>
                      </div>
                    </div>
                    
                    <a 
                      href={selectedMilestone.id === 'idea2impact' ? "/Idea2Impact(Winner)_Certificate.jpeg" : selectedMilestone.id === 'sushacks' ? "/Vignan_Hackathon_win.jpeg" : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative overflow-hidden flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 w-full sm:w-auto z-10 hover:scale-105 bg-gradient-to-r ${selectedMilestone.theme.gradient} ${selectedMilestone.id === 'idea2impact' ? 'text-black' : 'text-white'}`}
                    >
                      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 skew-x-12" />
                      <span className="relative z-10 flex items-center gap-2">
                        {selectedMilestone.id === 'sushacks' ? 'View Award Photo' : 'View Certificate'} <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </a>
                  </motion.div>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
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

export default Achievements;
