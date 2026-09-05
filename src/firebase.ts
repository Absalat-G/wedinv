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
   apiKey: "AIzaSyBVEpMfMIEBNmfe7zIaSKGGUdMC5aCV_Lw",
  authDomain: "yehasab-absalat.firebaseapp.com",
  projectId: "yehasab-absalat",
  storageBucket: "yehasab-absalat.firebasestorage.app",
  messagingSenderId: "58813934771",
  appId: "1:58813934771:web:171584651ceae5dd2294c6",
  measurementId: "G-EPDQPNG6RG"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
