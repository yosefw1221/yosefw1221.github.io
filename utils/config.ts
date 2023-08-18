export const firebaseConfig = {
  apiKey: String(process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
  projectId: String(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
  storageBucket: String(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
  appId: String(process.env.NEXT_PUBLIC_FIREBASE_APP_ID),
  measurementId: String(process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID),
};
