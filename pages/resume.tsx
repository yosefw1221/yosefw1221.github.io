import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiPhone, FiGlobe, FiGithub, FiLinkedin, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen theme-bg-primary">
      <Head>
        <title>Resume - Yosef Worku</title>
        <meta name="description" content="Full Stack Developer with 3+ years of experience in React.js, Node.js, and Android development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header with Download Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <a href="/" className="theme-text-secondary hover:text-blue-500 transition-colors">
            ← Back to Portfolio
          </a>

          <motion.a
            href="/Yosef_Worku_Resume_2025.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload />
            <span>Download PDF</span>
          </motion.a>
        </motion.div>

        {/* Resume Content */}
        <motion.div
          className="theme-card rounded-2xl shadow-2xl p-8 sm:p-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.header variants={itemVariants} className="text-center mb-12 pb-8 border-b-2 border-blue-600">
            <h1 className="text-4xl sm:text-5xl font-bold theme-text-primary mb-3">Yosef Worku</h1>
            <p className="text-xl text-blue-500 font-semibold mb-4">
              Full Stack Developer | Mobile App Developer | Open Source Contributor
            </p>

            <div className="flex flex-wrap justify-center gap-4 theme-text-secondary text-sm">
              <a href="mailto:yosefworku1221@gmail.com" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                <FiMail /> yosefworku1221@gmail.com
              </a>
              <span className="flex items-center gap-1">
                <FiPhone /> +251920005744
              </span>
              <a href="https://yosefw.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                <FiGlobe /> yosefw.vercel.app
              </a>
              <a href="https://linkedin.com/in/yosef-worku" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                <FiLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/yosefw1221" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-500 transition-colors">
                <FiGithub /> GitHub
              </a>
            </div>
          </motion.header>

          {/* Professional Summary */}
          <motion.section variants={itemVariants} className="mb-10">
            <h2 className="text-2xl font-bold theme-text-primary mb-4 flex items-center gap-2">
              Professional Summary
            </h2>
            <p className="theme-text-secondary leading-relaxed text-justify">
              Full Stack Developer with <strong className="theme-text-primary">3+ years of experience</strong> building scalable web and mobile applications.
              Specialized in <strong className="theme-text-primary">React.js</strong>, <strong className="theme-text-primary">Node.js</strong>, and <strong className="theme-text-primary">Android development</strong> with a proven track record of
              delivering production-ready applications serving <strong className="theme-text-primary">10,000+ users</strong>. Expert in implementing complex authorization systems,
              real-time communication, and database optimization. Passionate about open source development and creating developer tools
              that improve productivity.
            </p>
            <p className="theme-text-secondary text-sm mt-3">
              <strong className="theme-text-primary">Core Competencies:</strong> Attribute-Based Access Control (ABAC) • Real-time Systems • MongoDB Aggregation •
              Progressive Web Apps • Android Development • CI/CD Pipelines
            </p>
          </motion.section>

          {/* Technical Skills */}
          <motion.section variants={itemVariants} className="mb-10">
            <h2 className="text-2xl font-bold theme-text-primary mb-4">Technical Skills</h2>
            <div className="grid gap-3">
              {[
                { category: 'Frontend Development', skills: 'React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, TailwindCSS, Framer Motion' },
                { category: 'Backend Development', skills: 'Node.js, Express.js, REST API, Socket.io, WebSockets, MongoDB Aggregation, Mongoose' },
                { category: 'Mobile Development', skills: 'Android (Kotlin/Java), Flutter, SQLite, In-App Purchases, Firebase' },
                { category: 'Databases', skills: 'MongoDB, MySQL, SQLite, Firebase Firestore' },
                { category: 'DevOps & Tools', skills: 'Docker, Jenkins, CI/CD, Git, GitLab, Apache2, Linux' },
                { category: 'Specialized Skills', skills: 'ABAC/RBAC Implementation, PWA Development, Web Scraping, API Testing, Error Logging Systems' },
              ].map((item, index) => (
                <div key={index} className="grid sm:grid-cols-[200px_1fr] gap-2">
                  <div className="font-semibold theme-text-primary">{item.category}</div>
                  <div className="theme-text-secondary text-sm">{item.skills}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Work Experience */}
          <motion.section variants={itemVariants} className="mb-10">
            <h2 className="text-2xl font-bold theme-text-primary mb-6">Work Experience</h2>

            {/* Job 1 */}
            <div className="mb-8 pb-8 border-b theme-border">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold theme-text-primary">Full Stack Developer</h3>
                  <p className="text-base font-semibold theme-text-secondary flex items-center gap-2 mt-1">
                    Addis Software | <span className="flex items-center gap-1"><FiMapPin size={14} /> Addis Ababa, Ethiopia</span>
                  </p>
                </div>
                <span className="theme-text-secondary text-sm flex items-center gap-1">
                  <FiCalendar size={14} /> June 2022 - Present (3+ years)
                </span>
              </div>
              <p className="text-sm text-blue-500 font-semibold mb-3">Project: Link Builder - Web Scraping and Link Management Platform</p>

              <p className="font-semibold theme-text-primary mb-2">Key Achievements:</p>
              <ul className="list-disc list-outside ml-5 theme-text-secondary space-y-1.5 text-sm">
                <li>Architected and implemented <strong>Attribute-Based Access Control (ABAC)</strong> system with MongoDB aggregation, enabling granular permissions across 10+ user roles and resource attributes</li>
                <li>Built custom <strong>MongoDB plugin for activity logging</strong> with efficient querying and data retention strategies, tracking 100,000+ user actions</li>
                <li>Developed <strong>real-time chat system</strong> using Socket.io handling 1,000+ concurrent connections with message persistence and typing indicators</li>
                <li>Converted web application to <strong>Progressive Web App (PWA)</strong>, implementing service workers, push notifications, and caching strategies that reduced bounce rate by 25%</li>
                <li>Created custom <strong>error logging system</strong> for frontend and backend with automatic error categorization, reducing debugging time by 50%</li>
                <li>Implemented <strong>web scraping pipeline</strong> processing 10,000+ data points daily with rate limiting and proxy rotation</li>
                <li>Refactored legacy codebase reducing complexity by 30% and improving maintainability</li>
                <li>Optimized MongoDB aggregation queries improving response times by 40%</li>
              </ul>
              <p className="theme-text-secondary text-sm mt-3">
                <strong className="theme-text-primary">Technologies:</strong> Node.js, React.js, Express.js, MongoDB, Socket.io, PWA, Service Workers, Web Scraping
              </p>
            </div>

            {/* Job 2 */}
            <div className="mb-8 pb-8 border-b theme-border">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold theme-text-primary">DevOps & Android Developer</h3>
                  <p className="text-base font-semibold theme-text-secondary flex items-center gap-2 mt-1">
                    IE Network Solution | <span className="flex items-center gap-1"><FiMapPin size={14} /> Addis Ababa, Ethiopia</span>
                  </p>
                </div>
                <span className="theme-text-secondary text-sm flex items-center gap-1">
                  <FiCalendar size={14} /> January 2021 - June 2021 (6 months)
                </span>
              </div>
              <p className="text-sm text-blue-500 font-semibold mb-3">Project: Performance Enhancement Platform - ERP Systems</p>

              <p className="font-semibold theme-text-primary mb-2">Key Achievements:</p>
              <ul className="list-disc list-outside ml-5 theme-text-secondary space-y-1.5 text-sm">
                <li>Developed <strong>Fleet Management Driver's Android app</strong> deployed to 50+ drivers managing vehicle tracking, trip logging, and real-time updates</li>
                <li>Designed and implemented <strong>CI/CD pipeline</strong> using Jenkins and GitLab, reducing deployment time from 2 hours to 15 minutes</li>
                <li>Automated <strong>API endpoint testing</strong> using REST Assured and JUnit, creating 100+ test cases and reducing manual testing effort by 70%</li>
                <li>Gathered and documented requirements for CRM and Fleet Management modules serving 100+ enterprise users</li>
                <li>Set up production Apache2 servers with automated deployment scripts and monitoring</li>
              </ul>
              <p className="theme-text-secondary text-sm mt-3">
                <strong className="theme-text-primary">Technologies:</strong> Java, Android, JUnit, REST Assured, Apache2, Jenkins, GitLab, MySQL, Linux
              </p>
            </div>

            {/* Job 3 */}
            <div className="mb-6">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold theme-text-primary">Android Developer</h3>
                  <p className="text-base font-semibold theme-text-secondary flex items-center gap-2 mt-1">
                    Josystems | <span className="flex items-center gap-1"><FiMapPin size={14} /> Remote</span>
                  </p>
                </div>
                <span className="theme-text-secondary text-sm flex items-center gap-1">
                  <FiCalendar size={14} /> May 2018 - December 2021 (3+ years)
                </span>
              </div>
              <p className="text-sm text-blue-500 font-semibold mb-3">Project: University Choice Helper</p>

              <p className="font-semibold theme-text-primary mb-2">Key Achievements:</p>
              <ul className="list-disc list-outside ml-5 theme-text-secondary space-y-1.5 text-sm">
                <li>Designed and developed <strong>University Choice Helper</strong> Android app downloaded by <strong>5,000+ Ethiopian students</strong></li>
                <li>Implemented intelligent <strong>ranking algorithm</strong> considering multiple factors: climate preference, academic department, region, and university rankings</li>
                <li>Optimized SQLite database schema handling data for 100+ universities with efficient querying</li>
                <li>Created intuitive UI/UX using Material Design principles with 4.5+ star rating</li>
              </ul>
              <p className="theme-text-secondary text-sm mt-3">
                <strong className="theme-text-primary">Technologies:</strong> Kotlin, Java, SQLite, REST Assured, Glide, Material Design
              </p>
            </div>
          </motion.section>

          {/* Featured Projects */}
          <motion.section variants={itemVariants} className="mb-10">
            <h2 className="text-2xl font-bold theme-text-primary mb-6">Featured Projects</h2>

            <div className="space-y-6">
              {/* MongoDB ABAC Plugin */}
              <div className="theme-bg-secondary rounded-lg p-5 border theme-border">
                <h3 className="text-lg font-bold theme-text-primary mb-2">
                  MongoDB ABAC Plugin <span className="text-sm font-normal theme-text-secondary">(In Development)</span>
                </h3>
                <p className="theme-text-secondary text-sm mb-2">
                  Building a MongoDB plugin that applies <strong className="theme-text-primary">Attribute-Based Access Control (ABAC)</strong> directly to MongoDB aggregation pipelines and methods. Integrates seamlessly with <strong className="theme-text-primary">CASL</strong> and popular Node.js access control packages.
                </p>
                <p className="theme-text-secondary text-xs">
                  <strong className="theme-text-primary">Technologies:</strong> Node.js, MongoDB, CASL, TypeScript, Access Control
                </p>
              </div>

              {/* AI Todo */}
              <div className="theme-bg-secondary rounded-lg p-5 border theme-border">
                <h3 className="text-lg font-bold theme-text-primary mb-2">
                  AI-Powered Todo Management <span className="text-sm font-normal theme-text-secondary">(2025)</span>
                </h3>
                <a href="https://ai-todo-beta.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm hover:underline mb-2 block">
                  🔗 ai-todo-beta.vercel.app
                </a>
                <p className="theme-text-secondary text-sm mb-2">
                  Interactive todo management with <strong className="theme-text-primary">AI-powered natural language processing</strong> and <strong className="theme-text-primary">tool calling</strong>.
                </p>
                <p className="theme-text-secondary text-xs">
                  <strong className="theme-text-primary">Technologies:</strong> Next.js, TypeScript, AI/LLM Integration, Tool Calling
                </p>
              </div>

              {/* Affcollect */}
              <div className="theme-bg-secondary rounded-lg p-5 border theme-border">
                <h3 className="text-lg font-bold theme-text-primary mb-2">Affcollect</h3>
                <p className="theme-text-secondary text-sm mb-2">
                  Affiliate link management and analytics platform helping marketers track and optimize campaigns.
                </p>
                <p className="theme-text-secondary text-xs">
                  <strong className="theme-text-primary">Technologies:</strong> React.js, Node.js, MongoDB, Express.js
                </p>
              </div>

              {/* Android InApp Purchase SDK */}
              <div className="theme-bg-secondary rounded-lg p-5 border theme-border">
                <h3 className="text-lg font-bold theme-text-primary mb-2">
                  Android InApp Purchase SDK <span className="text-sm font-normal theme-text-secondary">(2023)</span>
                </h3>
                <a href="https://yosefw1221.github.io/chapa-in-app-purchase-doc/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm hover:underline mb-2 block">
                  🔗 Documentation
                </a>
                <p className="theme-text-secondary text-sm mb-2">
                  Open-source Android SDK integrating Chapa payment gateway. <strong className="theme-text-primary">Used by 10+ developers, 500+ downloads</strong>.
                </p>
                <p className="theme-text-secondary text-xs">
                  <strong className="theme-text-primary">Technologies:</strong> Kotlin, Android, Cipher, Payment Gateway Integration
                </p>
              </div>

              {/* Mezgebe Tselot */}
              <div className="theme-bg-secondary rounded-lg p-5 border theme-border">
                <h3 className="text-lg font-bold theme-text-primary mb-2">
                  Mezgebe Tselot Zetewahdo <span className="text-sm font-normal theme-text-secondary">(2022)</span>
                </h3>
                <a href="https://tinyurl.com/3k8ewjnb" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm hover:underline mb-2 block">
                  🔗 Google Play
                </a>
                <p className="theme-text-secondary text-sm mb-2">
                  Ethiopian Orthodox prayer book app. <strong className="theme-text-primary">10,000+ downloads, 4.5+ star rating</strong>.
                </p>
                <p className="theme-text-secondary text-xs">
                  <strong className="theme-text-primary">Technologies:</strong> Kotlin, Firebase Firestore, Android Studio
                </p>
              </div>

              {/* MyCollege */}
              <div className="theme-bg-secondary rounded-lg p-5 border theme-border">
                <h3 className="text-lg font-bold theme-text-primary mb-2">
                  MyCollege App <span className="text-sm font-normal theme-text-secondary">(2020)</span>
                </h3>
                <a href="https://tinyurl.com/ykttewtr" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm hover:underline mb-2 block">
                  🔗 Google Play
                </a>
                <p className="theme-text-secondary text-sm mb-2">
                  Student productivity app. <strong className="theme-text-primary">3,000+ active users</strong>.
                </p>
                <p className="theme-text-secondary text-xs">
                  <strong className="theme-text-primary">Technologies:</strong> Kotlin, Android, Room Database, QR Code
                </p>
              </div>
            </div>
          </motion.section>

          {/* Awards */}
          <motion.section variants={itemVariants} className="mb-10">
            <h2 className="text-2xl font-bold theme-text-primary mb-4 flex items-center gap-2">
              <FiAward /> Awards & Achievements
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold theme-text-primary text-base">🏆 TOP 10 Finalist - Ethiopic App Contest Competition (2021)</h3>
                <p className="theme-text-secondary text-sm ml-6">Selected from 200+ submissions nationwide</p>
              </div>
              <div>
                <h3 className="font-bold theme-text-primary text-base">🥇 1st Place Winner - Android Kotlin Study Jams Competition (2020)</h3>
                <p className="theme-text-secondary text-sm ml-6">Team Lead for "Book Sharing App"</p>
              </div>
              <div>
                <h3 className="font-bold theme-text-primary text-base">🥈 2nd Place Winner - Ethiopia Hacks v10.0 Hackathon (2020)</h3>
                <p className="theme-text-secondary text-sm ml-6">"Ethio Emergency App" - Cross-platform solution</p>
              </div>
            </div>
          </motion.section>

          {/* Education */}
          <motion.section variants={itemVariants} className="mb-10">
            <h2 className="text-2xl font-bold theme-text-primary mb-4">Education</h2>
            <div>
              <h3 className="font-bold theme-text-primary">Bachelor of Science in Electrical and Computer Engineering</h3>
              <p className="theme-text-secondary text-sm">Computer Engineering • Mizan Tepi University • Graduated: August 2021</p>
            </div>
          </motion.section>

          {/* Certifications */}
          <motion.section variants={itemVariants}>
            <h2 className="text-2xl font-bold theme-text-primary mb-4">Certifications & Training</h2>
            <ul className="list-disc list-outside ml-5 theme-text-secondary space-y-2 text-sm">
              <li><strong className="theme-text-primary">Cisco Networking CCNA 1-4 Certificate</strong> - Cisco Networking Academy</li>
              <li><strong className="theme-text-primary">Full Stack Web Development</strong> - Tech Camp Ethiopia</li>
              <li><strong className="theme-text-primary">Android Kotlin Fundamental Courses</strong> - Android Study Jams Program (Google Developers)</li>
            </ul>
          </motion.section>

          {/* Print Button for Mobile */}
          <motion.div variants={itemVariants} className="mt-12 text-center print:hidden">
            <motion.button
              onClick={() => window.print()}
              className="px-8 py-3 border-2 theme-border theme-text-primary rounded-lg hover:bg-blue-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Print Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 theme-text-secondary text-sm"
        >
          Last Updated: October 2025
        </motion.footer>
      </main>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }

          .theme-card {
            box-shadow: none !important;
            background: white !important;
            color: black !important;
          }

          .theme-text-primary {
            color: black !important;
          }

          .theme-text-secondary {
            color: #333 !important;
          }

          .theme-border {
            border-color: #e5e7eb !important;
          }

          .theme-bg-secondary {
            background: #f9fafb !important;
          }

          a {
            color: #2563eb !important;
            text-decoration: none;
          }

          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
