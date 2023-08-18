const defaultContent = {
  head: {
    title: 'Yosefw | FullStack Developer',
    description: 'FullStack web and mobile app developer based in Addis Ababa',
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
    subtitle: `<span style='color:#eee'>Android & Full Stack Developer</span>`,
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
  about: `<p>👋 I&apos;m a passionate and dedicated Android and Fullstack (MERN)
              developer who specializes in backend development.</br>
              I have a Bsc in Computer Engineering which is provided me with
               a strong foundation in object-oriented programming, data structures,
               algorithm  and understanding computer system,
                which inspire me to give attention to performance and security.
            </p>
            <br />
            <p>
              I am a quick learner who enjoys solving complex
              problems. and I have a strong passion for writing clean code and optimizing performance.
              <br />
            </p>
            <br />
            Here are a few technologies with which I&apos;ve been working recently:
            <div style='gap:74px' class='flex ml-8 mt-2'>
              <ol class='list-disc'>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Socket.io</li>
              </ol>
              <ol class='list-disc'>
                <li>Progressive WebApp(PWA)</li>
                <li>React</li>
                <li>Redux</li>
                <li>Java</li>
                <li>Kotlin</li>
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
        { name: 'TS', icon: '/icons/typescript.svg' },
        { name: 'JS', icon: '/icons/javascript.svg' },
        { name: 'Docker', icon: '/icons/docker.svg' },
        { name: 'Git', icon: '/icons/git.svg' },
        { name: 'Jenkins', icon: '/icons/jenkins.svg' },
        { name: 'PWA', icon: '/icons/pwa.svg' },
        { name: 'MongoDB', icon: '/icons/mongodb.svg' },
        { name: 'MySql', icon: '/icons/mysql.svg' },
        { name: 'Socket.io', icon: '/icons/socketio.svg' },
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
                Experienced Android app developer building libraries and apps from scratch.
              </p>`,
      stacks: [
        { name: 'Java', icon: '/icons/java.svg' },
        { name: 'Kotlin', icon: '/icons/kotlin.svg' },
        { name: 'Sqlite', icon: '/icons/sqlite.svg' },
        { name: 'Firebase', icon: '/icons/firebase.svg' },
      ],
    },
  ],
  experiences: [
    {
      company: 'Addis Software ',
      active: true,
      position: 'FullStack Developer',
      link: 'https://addissoftware.com/',
      duration: 'Jun 2022 - Present',
      description: `<ul class='selection:text-white pl-4 list-disc pt-2'>

<li class='pt-1'>Refactored and improved the Role-Based Access Control module, incorporating attribute-level access control and refactor MongoDB aggregation to support it.</li>
<li class='pt-1'>Developed and integrated the activityLog module to track user activities and system events.</li>
<li class='pt-1'>Conducted codebase refactoring and maintenance of existing features to improve performance and code quality.</li>
<li class='pt-1'>Implemented a chat system utilizing socket.io to enable real-time communication between users.</li>
<li class='pt-1'>Created a custom error logging system for both frontend and backend to streamline error tracking and debugging processes.</li>
<li class='pt-1'>Transformed the web application into a Progressive Web App (PWA), integrating push notification functionality and implementing an efficient caching strategy.</li>
      <li>Integration of third-party APIs and services to enhance system functionality.</li>
      </ul>`,
    },
    {
      company: 'IE Network Solution ',
      position: 'Junior Software Developer',
      link: 'https://www.ienetworksolution.com/',
      duration: 'Jan 2022 - Jun 2022',
      description: `
<ul class='pl-4 list-disc pt-2'>
<li class='pt-1'>Set up CI/CD pipelines using GitLab, Jenkins, and Apache2 server, ensuring streamlined and efficient software delivery. </li>
<li class='pt-1'>Automated API endpoint testing using RestAssured and JUnit4, enabling thorough and reliable testing of API functionality. </li>
<li class='pt-1'>Actively engaged in requirements gathering for ERP systems, working closely with stakeholders to understand business needs and translate them into technical specifications. </li>              
<li class='pt-1'> Actively contributed to the development of a mobile app for fleet drivers.</li>
</ul>`,
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
      link: 'https://t.me/josefworku',
      icon: '/icons/telegram.svg',
    },
  ],
};

export default defaultContent;
