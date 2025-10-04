import { IHero } from 'types';
import dynamic from 'next/dynamic';
import { LegacyRef, useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ArrowAnim = dynamic(() => import('../ArrowAnim'), { ssr: false });
const ParticleBackground = dynamic(() => import('./ParticleBackground'), { ssr: false });

type IHeroProps = {
  innerRef: LegacyRef<HTMLDivElement>;
  content: IHero;
};

// Function to add syntax highlighting to code snippets
const highlightSyntax = (code: string) => {
  if (!code) return '';
  
  // Simple syntax highlighter that uses span elements with CSS classes
  return code
    .replace(/(const|let|var|function|class|import|export|return|if|else|for|while|async|await)/g, '<span class="text-purple-500 dark:text-purple-400">$1</span>')
    .replace(/(=&gt;|\(|\)|\{|\}|\[|\]|;|,|\.)/g, '<span class="text-gray-700 dark:text-gray-400">$1</span>')
    .replace(/('.*?'|".*?"|`.*?`)/g, '<span class="text-green-600 dark:text-green-400">$1</span>')
    .replace(/(\/\/.*)/g, '<span class="text-gray-600 dark:text-gray-500">$1</span>')
    .replace(/(\w+)(?=\s*\()/g, '<span class="text-yellow-600 dark:text-yellow-400">$1</span>');
};

export default function Hero({ innerRef, content }: IHeroProps) {
  const [mounted, setMounted] = useState(false);
  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    setMounted(true);
    
    // Set up interval to cycle through snippets
    const interval = setInterval(() => {
      setActiveSnippetIndex(prev => (prev + 1) % codeSnippets.length);
    }, 5000);
    
    intervalRef.current = interval;
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Code snippets for background - Backend focused code examples
  const codeSnippets = [
    `// Redis Pub/Sub example
const redis = require('redis')

// Create publisher and subscriber clients
const publisher = redis.createClient()
const subscriber = redis.createClient()

// Subscribe to channel
subscriber.subscribe('notifications')

// Listen for messages
subscriber.on('message', (channel, message) => {
  console.log(\`Received from \${channel}: \${message}\`)
})

// Publish message
publisher.publish('notifications', JSON.stringify({ 
  event: 'deployment',
  status: 'success' 
}))`,
    
    `// Node.js Cluster for scalability
const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

if (cluster.isMaster) {
  console.log(\`Master \${process.pid} is running\`)

  // Fork workers for each CPU
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker) => {
    console.log(\`Worker \${worker.process.pid} died\`)
    // Replace the dead worker
    cluster.fork()
  })
} else {
  // Workers share the TCP connection
  http.createServer((req, res) => {
    res.writeHead(200)
    res.end('Hello from worker ' + process.pid)
  }).listen(8000)
}`,
    
    `// MongoDB Aggregation Pipeline
async function getTopAuthors() {
  return await Article.aggregate([
    // Match articles with at least 5 likes
    { $match: { likes: { $gte: 5 } } },
    
    // Group by author, calculate stats
    { $group: {
        _id: "$author",
        totalArticles: { $sum: 1 },
        avgLikes: { $avg: "$likes" },
        mostRecent: { $max: "$publishedAt" }
    }},
    
    // Sort by total articles descending
    { $sort: { totalArticles: -1, avgLikes: -1 } },
    
    // Limit to top 10
    { $limit: 10 }
  ])
}`
  ];

  // Different fixed positions for each snippet
  const positions = [
    { top: '25%', left: '25%' },
    { top: '50%', left: '75%' },
    { top: '75%', left: '35%' },
  ];

  // Add descriptive titles for code snippets
  const codeSnippetTitles = [
    "redis-pubsub.js",
    "node-cluster.js", 
    "mongo-aggregation.js"
  ];

  // Simple syntax highlighting function
  const renderHighlightedCode = (code: string) => {
    // Split the code into lines
    const lines = code.split('\n');
    
    return (
      <pre className="text-left font-mono text-xs leading-relaxed">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre">
            {/* Comments */}
            {line.includes('//') ? (
              <>
                <span className="text-gray-600 dark:text-gray-500">
                  {line}
                </span>
              </>
            ) : (
              <>
                {/* Keywords */}
                {line
                  .replace(/(const|let|var|function|class|import|export|return|if|else|for|while|async|await)/g, 
                    '<keyword>$1</keyword>')
                  .replace(/('.*?'|".*?"|`.*?`)/g, 
                    '<string>$1</string>')
                  .replace(/(\w+)(?=\s*\()/g, 
                    '<function>$1</function>')
                  .split(/<keyword>|<\/keyword>|<string>|<\/string>|<function>|<\/function>/)
                  .map((part, j) => {
                    if (j % 2 === 1 && part.startsWith('const') || part.startsWith('let') || 
                        part.startsWith('var') || part.startsWith('function') || 
                        part.startsWith('class') || part.startsWith('import') || 
                        part.startsWith('export') || part.startsWith('return') || 
                        part.startsWith('if') || part.startsWith('else') || 
                        part.startsWith('for') || part.startsWith('while') || 
                        part.startsWith('async') || part.startsWith('await')) {
                      return <span key={j} className="text-purple-500 dark:text-purple-400">{part}</span>;
                    } else if (j % 2 === 1 && (part.startsWith("'") || part.startsWith('"') || part.startsWith('`'))) {
                      return <span key={j} className="text-green-600 dark:text-green-400">{part}</span>;
                    } else if (j % 2 === 1) {
                      return <span key={j} className="text-yellow-600 dark:text-yellow-400">{part}</span>;
                    } else {
                      return <span key={j}>{part}</span>;
                    }
                  })
                }
              </>
            )}
          </div>
        ))}
      </pre>
    );
  };

  return (
    <section
      ref={innerRef}
      className="relative min-h-screen w-full overflow-hidden theme-bg-primary"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-600/5 via-transparent to-purple-600/5"></div>
        
        {/* Gradient accents */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-br from-blue-600/5 to-transparent transform rotate-12 rounded-full filter blur-[80px]"></div>
        <div className="absolute -bottom-40 -left-40 w-[60%] h-[60%] bg-gradient-to-tr from-purple-600/5 to-transparent rounded-full filter blur-[100px]"></div>
        
        {/* Code-like pattern background */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03]"></div>
        
        {/* Code structure elements - visible on medium screens and up */}
        <div className="hidden md:block absolute inset-0">
          {/* Horizontal code lines - reduced number and made more subtle */}
          {[...Array(6)].map((_, i) => (
            <motion.div 
              key={i}
              className={`absolute h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent`}
              style={{
                top: `${15 + i * 12}%`,
                left: 0,
                right: 0
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: [0, 1, 1, 0],
                opacity: [0, 0.4, 0.4, 0] 
              }}
              transition={{
                duration: 10,
                delay: i * 0.8,
                repeat: Infinity,
                repeatDelay: 8
              }}
            />
          ))}
          
          {/* Vertical server rack lines - reduced number */}
          {[...Array(4)].map((_, i) => (
            <motion.div 
              key={`rack-${i}`}
              className={`absolute w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent`}
              style={{
                left: `${20 + i * 20}%`,
                top: 0,
                bottom: 0
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ 
                scaleY: [0, 1],
                opacity: [0, 0.3] 
              }}
              transition={{
                duration: 2,
                delay: i * 0.4,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Backend system patterns - reduced number */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Database/Backend symbols */}
          {mounted && [...Array(10)].map((_, i) => {
            // Use deterministic pattern based on index
            const symbol = i % 5 === 0 ? '{ }' : (i % 5 === 1 ? '</>' : (i % 5 === 2 ? 'SELECT *' : (i % 5 === 3 ? 'async/await' : 'function()')));
            const leftPosition = `${(i * 10) % 100}%`;
            
            return (
              <motion.div 
                key={i}
                className="absolute w-max text-blue-500/10 font-mono text-xs sm:text-sm"
                style={{ 
                  left: leftPosition, 
                  top: '-20px',
                  transform: 'translateX(-50%)'
                }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ 
                  y: ['0vh', '120vh'],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 20 + (i * 2),
                  delay: i * 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
              >
                {symbol}
              </motion.div>
            );
          })}
        </div>
        
        {/* Code snippets with improved rendering */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden">
            {codeSnippets.map((snippet, index) => {
              const isActive = index === activeSnippetIndex;
              
              return (
                <motion.div
                  key={`code-${index}`}
                  className="absolute theme-card backdrop-blur-sm rounded-lg p-4 font-mono theme-text-primary text-xs leading-relaxed border theme-border cursor-pointer"
                  style={{
                    top: positions[index].top,
                    left: positions[index].left,
                    width: '340px',
                    transform: `translate(-50%, -50%) rotate(${(index % 2 === 0 ? -1 : 1) * 1}deg)`,
                    zIndex: isActive ? 2 : 1,
                    pointerEvents: "auto"
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.3,
                    scale: isActive ? 1 : 0.85,
                  }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1.05,
                    zIndex: 10,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.15)"
                  }}
                  transition={{
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 }
                  }}
                  onClick={() => setActiveSnippetIndex(index)}
                  onHoverStart={() => setActiveSnippetIndex(index)}
                >
                  {/* Terminal-like header with descriptive title */}
                  <div className="flex items-center justify-between mb-2 theme-border border-b pb-2">
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="theme-text-secondary text-xs font-medium">{codeSnippetTitles[index]}</div>
                  </div>
                  
                  {/* Code content with direct JSX rendering */}
                  <div className="relative overflow-auto max-h-60">
                    {renderHighlightedCode(snippet)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
        
        {mounted && (
          <div className="absolute inset-0 opacity-40">
            <ParticleBackground />
          </div>
        )}
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col lg:flex-row items-center justify-center py-16 lg:py-0">
        {/* Content Column */}
        <motion.div 
          className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Title with TypeWriter Effect */}
          <motion.div
            className="mb-2 inline-flex theme-text-secondary items-center rounded-full bg-blue-500/5 px-2 py-1 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-mono">full_stack_developer</span>
            <motion.span
              className="ml-1 opacity-80"
              animate={{
                opacity: [1, 0, 1]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >|</motion.span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight theme-text-primary mb-6 heading-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            dangerouslySetInnerHTML={{ __html: content.title }}
          />
          
          <motion.div
            className="theme-text-secondary text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 body-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            dangerouslySetInnerHTML={{ __html: content.subtitle }}
          />
          
          <div className="flex items-center justify-center lg:justify-start mb-8 gap-5">
            <a 
              href="https://github.com/yosefw1221" 
              target="_blank" 
              rel="noreferrer" 
              className="theme-text-secondary hover:text-blue-500 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/yosef-worku/" 
              target="_blank" 
              rel="noreferrer" 
              className="theme-text-secondary hover:text-blue-500 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            
            <a 
              href="mailto:yosefw1221@gmail.com" 
              className="theme-text-secondary hover:text-blue-500 transition-colors duration-300"
              aria-label="Email Contact"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
          </div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <motion.a
              href="#contact"
              className="relative bg-gradient-to-tr from-blue-600 to-blue-500 text-white font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-blue-500/25 overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2 font-mono">$</span>
                <span>Contact Me</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>

            <motion.a
              href="/Yosef_Worku_Resume_2025.pdf"
              download
              className="relative bg-gradient-to-tr from-green-600 to-green-500 text-white font-medium py-3 px-8 rounded-md shadow-lg hover:shadow-green-500/25 overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download CV</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 z-0"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>

            <motion.a
              href="#projects"
              className="relative bg-gradient-to-tr from-transparent to-transparent theme-text-primary border border-blue-500/30 font-medium py-3 px-8 rounded-md overflow-hidden group"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2 font-mono">./</span>
                <span>View Projects</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-blue-500/10 z-0"
                initial={{ y: "100%" }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Profile Image Column */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl shadow-blue-500/10">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
            
            {/* Profile image */}
            <Image
              src="/images/myPic.jpg"
              alt="Yosef Worku"
              layout="fill"
              objectFit="cover"
              className="z-10"
              priority
            />
            
            {/* Animated border effect */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-blue-500/40 z-20"
              animate={{ 
                boxShadow: [
                  '0 0 0 0 rgba(59, 130, 246, 0)',
                  '0 0 0 6px rgba(59, 130, 246, 0.2)',
                  '0 0 0 0 rgba(59, 130, 246, 0)'
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        <ArrowAnim />
      </motion.div>

      {/* Mouse scroll animation */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-8 h-14 border-2 border-blue-500/50 rounded-full flex justify-center p-2 mb-2"
            animate={{ boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0)", "0 0 0 10px rgba(59, 130, 246, 0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1.5 h-3 bg-blue-500 rounded-full"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />
          </motion.div>
          <motion.span 
            className="text-xs text-blue-500 font-medium uppercase tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll Down
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
