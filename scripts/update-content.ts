const { config } = require('dotenv');
const { resolve } = require('path');

// Load environment variables
config({ path: resolve(__dirname, '../.env.local') });

const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');

// Import default content
const defaultContent = require('../firebase/content/default-content').default;

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

async function updateContent() {
  try {
    console.log('📝 Updating content in Firebase...');

    const cmsCollection = doc(firestore, 'cms', 'contents');

    // Update the content document
    await setDoc(cmsCollection, defaultContent);

    console.log('✅ Content updated successfully!');
    console.log('\nUpdated sections:');
    console.log(`  - ${defaultContent.experiences.length} experiences`);
    console.log(`  - ${defaultContent.skills.length} skills`);
    console.log(`  - Navigation items: ${defaultContent.nav.length}`);
  } catch (error) {
    console.error('❌ Error updating content:', error);
    throw error;
  }
}

updateContent()
  .then(() => {
    console.log('Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Failed:', error);
    process.exit(1);
  });
