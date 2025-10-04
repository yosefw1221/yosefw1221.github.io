const defaultContent = {
  head: {
    title: 'Yosef Worku | Mid-Senior Software Engineer',
    description: 'Software Engineer with 5 years of professional experience in MERN stack and Android development',
  },
  nav: [
    { title: 'Home', link: '/' },
    { title: 'Blogs', link: '/#blogs' },
    { title: 'About', link: '/#about' },
    { title: 'Skills', link: '/#skills' },
    { title: 'Projects', link: '/#projects' },
    { title: 'Experience', link: '/#experience' },
  ],
  hero: {
    title: `<span style=color:#98bbfa>YOSEF WORKU</span>`,
    subtitle: `<span style='color:#eee'>Mid-Senior Software Engineer with 5 Years of Experience</span>`,
    background: 'url(images/bg.jpg)',
  },
  headlines: {
    blog: 'Latest <span style=color:#3B82F6>Blogs</span>',
    about: '<span style=color:#3B82F6>About</span> Me',
    skills: 'My <span style=color:#3B82F6>Skills</span>',
    projects: '<span style=color:#3B82F6>Side</span> Projects',
    experience: `<span>Professional<br/><span style=color:#3B82F6>Experience</span></span>`,
    contact: "Let's <span style=color:#3B82F6>Talk</span>",
    findMe: 'Find Me On',
  },
  about: `<p>👋 Software Engineer with <strong>5 years of professional experience</strong> (coding since grade 9) in the MERN stack and Android development.
              Demonstrated success in optimizing performance and integrating APIs, with key achievements including a
              <strong>4x speed improvement</strong> and developing an app with over <strong>140K active downloads</strong>.</br></br>
              Expert in implementing complex authorization systems, real-time communication, and database optimization.
              I have a BSc in Computer Engineering which has provided me with a strong foundation in object-oriented programming,
              data structures, algorithms and understanding computer systems, which inspires me to give attention to performance and security.
            </p>
            <br />
            <p>
              <strong>Core Competencies:</strong> Attribute-Based Access Control (ABAC), Real-time Systems, MongoDB Aggregation,
              Progressive Web Apps, Android Development, CI/CD Pipelines, Web Scraping, RESTful Services
            </p>
            <br />
            Here are a few technologies with which I&apos;ve been working recently:
            <div style='gap:74px' class='flex ml-8 mt-2'>
              <ol class='list-disc'>
                <li>Node.js</li>
                <li>React.js / Next.js</li>
                <li>MongoDB</li>
                <li>TypeScript</li>
                <li>Socket.io</li>
                <li>Docker</li>
              </ol>
              <ol class='list-disc'>
                <li>PWA / Service Workers</li>
                <li>Android (Kotlin/Java)</li>
                <li>Redux / Redux-saga</li>
                <li>AI Integration</li>
                <li>CI/CD (Jenkins/GitLab)</li>
                <li>Firebase</li>
              </ol>
            </div>`,
  skills: [
    {
      title: `
          <p style='text-decoration:underline; text-decoration-thickness: 8px;text-decoration-color: #5533e4'>
            FullStack
          </p>
          <p class='mt-2'>Development</p>`,

      icon: '/icons/faDesktop.svg',
      description: `<p>
      I have hands-on experience in developing and maintaining web applications using the MERN stack.
              </p>`,
      stacks: [
        { name: 'Node.js', icon: '/icons/nodejs.svg' },
        { name: 'Express.js', icon: '/icons/expressjs.svg' },
        { name: 'React', icon: '/icons/react.svg' },
        { name: 'Next.js', icon: '/icons/react.svg' },
        { name: 'TS', icon: '/icons/typescript.svg' },
        { name: 'JS', icon: '/icons/javascript.svg' },
        { name: 'Redux', icon: '/icons/react.svg' },
        { name: 'Docker', icon: '/icons/docker.svg' },
        { name: 'Git', icon: '/icons/git.svg' },
        { name: 'Jenkins', icon: '/icons/jenkins.svg' },
        { name: 'PWA', icon: '/icons/pwa.svg' },
        { name: 'MongoDB', icon: '/icons/mongodb.svg' },
        { name: 'MySQL', icon: '/icons/mysql.svg' },
        { name: 'Socket.io', icon: '/icons/socketio.svg' },
        { name: 'Puppeteer', icon: '/icons/nodejs.svg' },
      ],
    },
    {
      title: `
          <p style='text-decoration:underline; text-decoration-thickness: 8px;text-decoration-color: #ffaa44;'>
            Android
          </p>
          <p class='mt-2'>Development</p>`,

      icon: '/icons/faAndroid.svg',
      description: `<p>
                Experienced Android app developer building libraries and apps from scratch with 140K+ active downloads.
              </p>`,
      stacks: [
        { name: 'Java', icon: '/icons/java.svg' },
        { name: 'Kotlin', icon: '/icons/kotlin.svg' },
        { name: 'React Native', icon: '/icons/react.svg' },
        { name: 'SQLite', icon: '/icons/sqlite.svg' },
        { name: 'Firebase', icon: '/icons/firebase.svg' },
        { name: 'Flutter', icon: '/icons/firebase.svg' },
      ],
    },
  ],
  experiences: [
    {
      company: 'Addis Software (Acquired by Nordic)',
      location: 'Addis Ababa, Ethiopia',
      active: true,
      position: 'Lead Software Engineer',
      link: 'https://addissoftware.com/',
      duration: 'November 2023 - Present',
      description: `<ul class='selection:text-white pl-4 list-disc pt-2'>
<li class='pt-1'>Led the development of the "Affcollect" platform as a Lead Developer and spearheaded the technical side of the Nordic acquisition</li>
<li class='pt-1'>Led the technical due diligence and integration process during Nordic's acquisition of Addis Software, ensuring seamless transition of systems and processes</li>
<li class='pt-1'>Achieved a <strong>4x improvement in scraping speed</strong> through efficient use of a clustered approach and code optimization</li>
<li class='pt-1'>Increased platform coverage by <strong>110%</strong> through the integration of 20+ affiliate systems</li>
<li class='pt-1'>Integrated third-party APIs and services, including 1Password, to expand system capabilities and enhance security features</li>
<li class='pt-1'>Improved product stability by enhancing the error logging system, leading to faster issue identification and resolution</li>
<li class='pt-1'>Developed external REST APIs to enable third-party system integration</li>
      </ul>`,
      skills: ['Node.js', 'React.js', 'Express.js', 'MongoDB', 'Puppeteer', '1Password', 'REST API', 'Web Scraping'],
    },
    {
      company: 'Addis Software',
      location: 'Addis Ababa, Ethiopia',
      position: 'Software Engineer',
      link: 'https://addissoftware.com/',
      duration: 'June 2022 - November 2023',
      description: `<ul class='selection:text-white pl-4 list-disc pt-2'>
<li class='pt-1'>Contributed to the "LinkBuilders" platform as a Full-Stack Developer</li>
<li class='pt-1'>Architected and implemented Attribute-Based Access Control (ABAC) system with MongoDB aggregation, enabling granular permissions across multiple user roles and resource attributes</li>
<li class='pt-1'>Built custom MongoDB plugin for activity logging with efficient querying and data retention strategies, enabling tracking and reverting of user actions</li>
<li class='pt-1'>Developed real-time chat system using Socket.io with message persistence and typing indicators</li>
<li class='pt-1'>Converted the platform into a Progressive Web App (PWA), implementing service workers, push notifications, and caching strategies</li>
<li class='pt-1'>Created custom error logging system for frontend and backend with automatic error categorization</li>
<li class='pt-1'>Refactored and maintained existing codebase, improving performance and code quality</li>
      </ul>`,
      skills: ['Node.js', 'React.js', 'Express.js', 'MongoDB', 'Socket.io', 'PWA', 'Redux', 'Redux-saga', 'Service Workers', 'Web Scraping'],
    },
    {
      company: 'IE Network Solutions',
      location: 'Addis Ababa, Ethiopia',
      position: 'DevOps | Android Developer',
      link: 'https://www.ienetworksolution.com/',
      duration: 'January 2022 - June 2022',
      description: `<ul class='pl-4 list-disc pt-2'>
<li class='pt-1'>Streamlined software delivery: Implemented CI/CD pipelines using GitLab, Jenkins, and Apache2 server to automate and optimize the build, test, and deployment process</li>
<li class='pt-1'>Developed Fleet Management Driver's Android app deployed to drivers for vehicle tracking, trip logging, and real-time updates</li>
<li class='pt-1'>API testing: Automated API endpoint testing using RestAssured and JUnit4, enabling thorough and reliable testing of API functionality</li>
<li class='pt-1'>Collaborated on ERP system development: Actively engaged in requirements gathering for CRM and Fleet Management system modules, working closely with stakeholders to translate business needs into technical specifications</li>
</ul>`,
      skills: ['Java', 'Android', 'JUnit4', 'RestAssured', 'Apache2', 'Jenkins', 'GitLab', 'MySQL', 'Linux'],
    },
  ],

  findMeOn: [
    {
      name: 'Email',
      link: 'mailto:yosefw1221@gmail.com',
      icon: '/icons/google.svg',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/yosef-worku/',
      icon: '/icons/linkedin.svg',
    },
    {
      name: 'Github',
      link: 'https://github.com/yosefw1221',
      icon: '/icons/github.svg',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/yosefw1221',
      icon: '/icons/telegram.svg',
    },
  ],
};

export default defaultContent;
