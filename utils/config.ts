export const firebaseConfig = {
  apiKey: String(process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
  projectId: String(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
  storageBucket: String(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
  appId: String(process.env.NEXT_PUBLIC_FIREBASE_APP_ID),
  measurementId: String(process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID),
};

export const emailJsConfig = {
  serviceId: String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
  templateId: String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
  publicKey: String(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),
};
