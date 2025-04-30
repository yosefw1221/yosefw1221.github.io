import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Profile() {
  const [mounted, setMounted] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [visibleCode, setVisibleCode] = useState<string[]>([]);
  
  // Terminal code content
  const codeLines = [
    "$ whoami",
    "yosef_worku",
    "$ cat about.js",
    "const developerProfile = {",
    "  name: 'Yosef Worku',",
    "  role: 'Senior Backend Developer',",
    "  skills: ['Node.js', 'Express', 'MongoDB', 'AWS', 'Docker'],",
    "  experience: '5+ years',",
    "  passion: 'Building scalable backend solutions'",
    "};",
    "",
    "$ node experience.js",
    "Loading experience data...",
    "✓ Successfully loaded experience",
    "✓ Projects analyzed",
    "✓ Skills evaluated",
    "",
    "$ git status",
    "On branch main",
    "Your branch is up to date with 'origin/main'.",
    "Nothing to commit, working tree clean"
  ];

  // Typing effect
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    if (currentLineIndex < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleCode(prev => [...prev, codeLines[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      }, Math.random() * 200 + 80); // Random typing speed for realism
      
      return () => clearTimeout(timer);
    }
    
    // Restart the animation after a pause when completed
    if (currentLineIndex === codeLines.length) {
      const resetTimer = setTimeout(() => {
        setVisibleCode([]);
        setCurrentLineIndex(0);
      }, 5000);
      
      return () => clearTimeout(resetTimer);
    }
  }, [currentLineIndex, mounted]);

  return (
    <div className="flex justify-center items-center">
      {/* Fixed width terminal container */}
      <motion.div 
        className="w-full md:w-[500px] h-[450px] bg-gray-900 rounded-lg shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Terminal header */}
        <div className="bg-gray-800 p-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto text-gray-400 text-sm font-mono">yosef-terminal</div>
        </div>
        
        {/* Terminal content */}
        <div className="p-4 font-mono text-sm text-green-400 h-[400px] overflow-auto bg-opacity-90" style={{ backgroundColor: '#0d1117' }}>
          {visibleCode.map((line, index) => (
            <div key={index} className="mb-1">
              {line.startsWith('$') ? (
                <div className="flex">
                  <span className="text-blue-400 mr-2">$</span>
                  <span className="text-gray-300">{line.substring(2)}</span>
                </div>
              ) : line.startsWith('const') || line.startsWith('};') ? (
                <div className="text-yellow-300">{line}</div>
              ) : line.startsWith('  ') ? (
                <div>
                  <span className="text-gray-400">{line.substring(0, 2)}</span>
                  <span className="text-purple-400">{line.substring(2).split(':')[0]}</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-green-300">{line.substring(2).split(':')[1]}</span>
                </div>
              ) : line.startsWith('✓') ? (
                <div className="text-green-500">{line}</div>
              ) : line.startsWith('Loading') ? (
                <div className="text-yellow-400">{line}</div>
              ) : line.startsWith('On branch') ? (
                <div className="text-blue-300">{line}</div>
              ) : (
                <div className="text-gray-300">{line}</div>
              )}
            </div>
          ))}
          <motion.span 
            className="inline-block w-2 h-4 bg-green-400 ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </motion.div>
      
      {/* Code particles decoration - with limited scope for cleaner look */}
      <div className="absolute -z-10 w-full max-w-[550px] h-[500px] overflow-hidden">
        {mounted && [...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute text-blue-500/5 font-mono text-xs"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: [-20, 20]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
          >
            {Math.random() > 0.5 ? "{}" : "</>"}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
