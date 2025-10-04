import { IHero } from 'types';
import { LegacyRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type IHeroProps = {
  innerRef: LegacyRef<HTMLDivElement>;
  content: IHero;
};

export default function HeroModern({ innerRef, content }: IHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Stats to display
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'App Downloads', value: '140K+' },
  ];

  return (
    <section
      ref={innerRef}
      className="relative min-h-screen w-full overflow-hidden theme-bg-primary"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.02]"></div>

        {/* Floating code symbols - simplified */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {['<>', '{}', '[]', '/>', '()'].map((symbol, i) => (
              <motion.div
                key={i}
                className="absolute text-blue-500/30 font-mono text-2xl"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${-10}%`
                }}
                animate={{
                  y: ['0vh', '110vh'],
                  opacity: [0, 0.3, 0],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 15 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 2
                }}
              >
                {symbol}
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium theme-text-secondary">Available for opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="theme-text-primary">Hi, I'm </span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Yosef Worku
                </span>
              </h1>
            </motion.div>

            {/* Subtitle with typewriter effect */}
            <motion.h2
              className="text-2xl md:text-3xl font-semibold theme-text-secondary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Mid-Senior Software Engineer
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg theme-text-secondary mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Full-Stack Developer with <strong className="theme-text-primary">5 years of experience</strong> in MERN stack and Android.
              Specialized in building scalable applications with <strong className="theme-text-primary">140K+ active users</strong>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg overflow-hidden shadow-lg shadow-blue-500/25"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Talk
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.a>

              <motion.a
                href="/resume-ats.html"
                target="_blank"
                className="group px-8 py-4 border-2 border-blue-500/30 theme-text-primary font-medium rounded-lg hover:bg-blue-500/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  View Resume
                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                  </svg>
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="text-sm theme-text-secondary font-medium">Connect with me:</span>
              <div className="flex gap-3">
                <motion.a
                  href="https://github.com/yosefw1221"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg theme-icon-bg theme-text-secondary hover:text-blue-500 hover:bg-blue-500/10 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/yosef-worku/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg theme-icon-bg theme-text-secondary hover:text-blue-500 hover:bg-blue-500/10 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="mailto:yosefworku1221@gmail.com"
                  className="w-10 h-10 flex items-center justify-center rounded-lg theme-icon-bg theme-text-secondary hover:text-blue-500 hover:bg-blue-500/10 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Profile Image with Glass Card */}
            <div className="relative">
              {/* Glass Card Background */}
              <motion.div
                className="relative mx-auto w-full max-w-md"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl p-8">
                  {/* Profile Image */}
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                    <Image
                      src="/images/myPic.jpg"
                      alt="Yosef Worku"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                      priority
                    />
                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(59, 130, 246, 0.4)',
                          '0 0 0 10px rgba(59, 130, 246, 0)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Stats Cards - Floating around image */}
              <div className="hidden lg:block">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="absolute backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4 shadow-xl"
                    style={{
                      top: index === 0 ? '10%' : index === 1 ? '50%' : '80%',
                      left: index === 0 ? '-10%' : index === 1 ? '-15%' : '5%',
                      right: index === 1 ? 'auto' : index === 2 ? '-10%' : 'auto',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm theme-text-secondary mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats for mobile */}
            <motion.div
              className="lg:hidden grid grid-cols-3 gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs theme-text-secondary mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs theme-text-secondary font-medium uppercase tracking-wider">Scroll</span>
          <svg className="w-6 h-6 theme-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
