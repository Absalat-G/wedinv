// src/firebase.ts
// ⚠️ SETUP REQUIRED: Replace these values with your actual Firebase project config.
// Steps:
//   1. Go to https://console.firebase.google.com
//   2. Create a new project (e.g. "yehasab-absalat-wedding")
//   3. Click "Web" app icon </> to register a web app
//   4. Copy the firebaseConfig values here
//   5. In the Firebase Console, go to Firestore Database → Create database → Start in TEST MODE
//   6. Done!

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
