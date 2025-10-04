const { config } = require('dotenv');
const { resolve } = require('path');

// Load environment variables
config({ path: resolve(__dirname, '../.env.local') });

const { initializeApp } = require('firebase/app');
const {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
} = require('firebase/firestore');

export {}; // Make this file a module

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const projects = [
  {
    title: 'Affcollect Platform',
    description:
      '<ul class="list-disc pl-5 space-y-1"><li>4x scraping speed improvement via clustered approach</li><li>110% coverage increase through 20+ affiliate system integrations</li><li>Third-party API integration (1Password, security features)</li><li>External REST APIs for third-party systems</li></ul>',
    tags: [
      'Node.js',
      'React.js',
      'MongoDB',
      'Puppeteer',
      '1Password',
      'Web Scraping',
      'REST API',
    ],
    thumbnail: '/images/projects/affcollect.jpg',
    link: '#',
    linkText: 'Private Platform',
    published: 'true',
    createdAt: new Date('2025-08-01').toISOString(),
    order: 1,
  },
  {
    title: 'GREMS Mobile App',
    description:
      '<ul class="list-disc pl-5 space-y-1"><li>Cross-platform wireless controller configuration app</li><li>BLUFI protocol implementation for device setup</li><li>Seamless Bluetooth sensor and device pairing</li><li>Reliable and secure connectivity</li></ul>',
    tags: ['React Native', 'Objective C', 'Java', 'BLUFI', 'Bluetooth', 'IoT'],
    thumbnail: '/images/projects/grems.jpg',
    link: '#',
    linkText: 'Client Project',
    published: 'true',
    createdAt: new Date('2025-07-01').toISOString(),
    order: 2,
  },
  {
    title: 'Android InApp Purchase SDK',
    description:
      '<ul class="list-disc pl-5 space-y-1"><li>Open-source SDK for Chapa payment gateway integration</li><li>Subscription management with trial period support</li><li>AES encryption for secure payment data</li><li>Simple integration API for developers</li></ul>',
    tags: ['Kotlin', 'Java', 'AES Encryption', 'Chapa API', 'Payment'],
    thumbnail: '/images/projects/chapa-sdk.jpg',
    link: 'https://yosefw1221.github.io/chapa-in-app-purchase-doc/',
    linkText: 'View Docs',
    published: 'true',
    createdAt: new Date('2025-06-01').toISOString(),
    order: 3,
  },
  {
    title: 'Mezgebe Tselot',
    description:
      '<ul class="list-disc pl-5 space-y-1"><li>Ethiopian Orthodox prayer book with 140K active downloads, 4.7⭐ rating</li><li>Comprehensive prayers and liturgies with offline access</li><li>Firebase Firestore sync for content updates</li><li>Auto do-not-disturb during prayer times</li><li>Ge\'ez text support with customizable UI</li></ul>',
    tags: ['Kotlin', 'Firebase', 'Android', 'SQLite', 'Figma'],
    thumbnail: '/images/projects/mezgebe-tselot.jpg',
    link: 'https://play.google.com/store/apps/details?id=com.yosef.ethiopian.orthodox.mezgebe.teselot',
    linkText: 'Google Play Store',
    published: 'true',
    createdAt: new Date('2025-05-01').toISOString(),
    order: 4,
  },
  {
    title: 'MongoDB ABAC Plugin',
    description:
      '<ul class="list-disc pl-5 space-y-1"><li>Applies ABAC directly to MongoDB aggregation pipelines</li><li>Seamless integration with CASL and Node.js access control packages</li><li>Fine-grained permission enforcement at database layer</li><li>Open-source tool for developers</li></ul>',
    tags: ['Node.js', 'MongoDB', 'CASL', 'TypeScript', 'Access Control'],
    thumbnail: '/images/projects/mongodb-abac.jpg',
    link: 'https://github.com/yosefw1221/mongodb-abac-plugin',
    linkText: 'View on GitHub',
    published: 'true',
    createdAt: new Date('2025-04-01').toISOString(),
    order: 5,
  },
  {
    title: 'AI-Powered Todo Management',
    description:
      '<ul class="list-disc pl-5 space-y-1"><li>Conversational task management using natural language processing</li><li>AI-powered categorization and prioritization</li><li>Function calling for CRUD operations</li><li>Real-time updates and smart suggestions</li></ul>',
    tags: ['Next.js', 'TypeScript', 'AI/LLM', 'Tool Calling', 'Vercel'],
    thumbnail: '/images/projects/ai-todo.jpg',
    link: 'https://ai-todo-beta.vercel.app',
    linkText: 'View Demo',
    published: 'true',
    createdAt: new Date('2025-03-01').toISOString(),
    order: 6,
  },
  {
    title: 'LinkBuilders Platform',
    description:
      '<ul class="list-disc pl-5 space-y-1"><li>SEO and link building platform with ABAC authorization</li><li>Custom MongoDB plugin for activity logging and user action tracking</li><li>Real-time chat with Socket.io, message persistence, typing indicators</li><li>Progressive Web App with service workers and push notifications</li></ul>',
    tags: [
      'Node.js',
      'React.js',
      'MongoDB',
      'Socket.io',
      'PWA',
      'ABAC',
      'Redux-saga',
    ],
    thumbnail: '/images/projects/linkbuilders.jpg',
    link: 'https://linkbuilders.com',
    linkText: 'Visit Platform',
    published: 'true',
    createdAt: new Date('2025-02-01').toISOString(),
    order: 7,
  },
  {
    title: 'MyCollege App',
    description:
      '<ul class="list-disc pl-5 space-y-1"><li>Timetable management with QR code sharing</li><li>Automatic phone silencing during classes</li><li>Exam and task reminders with smart notifications</li><li>Grade tracking and GPA calculator</li></ul>',
    tags: ['Kotlin', 'Android', 'Room Database', 'QR Code', 'WorkManager'],
    thumbnail: '/images/projects/mycollege.jpg',
    link: 'https://tinyurl.com/ykttewtr',
    linkText: 'Google Play Store',
    published: 'true',
    createdAt: new Date('2025-01-01').toISOString(),
    order: 8,
  },
];

async function clearAndSeed() {
  try {
    console.log('🗑️  Clearing old projects...');

    const projectsCollection = collection(firestore, 'projects');
    const snapshot = await getDocs(projectsCollection);

    // Delete all existing projects
    const deletePromises = snapshot.docs.map((doc: any) => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    console.log(`✅ Deleted ${snapshot.size} old projects`);

    console.log('🌱 Seeding new projects...');

    // Add each project
    for (const project of projects) {
      await addDoc(projectsCollection, project);
      console.log(`✅ Added: ${project.title}`);
    }

    console.log('🎉 Successfully cleared and seeded all projects!');
  } catch (error) {
    console.error('❌ Error clearing and seeding projects:', error);
    throw error;
  }
}

clearAndSeed()
  .then(() => {
    console.log('Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Failed:', error);
    process.exit(1);
  });
