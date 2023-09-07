// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDFWUAkzGXEF_vLLx6L4NaCCtqxGWtWx-A',
  authDomain: 'koshobai-learning.firebaseapp.com',
  projectId: 'koshobai-learning',
  storageBucket: 'koshobai-learning.appspot.com',
  messagingSenderId: '1020524338036',
  appId: '1:1020524338036:web:c97a14685e3380b5fb6a21',
  measurementId: 'G-MJ9R5N2S28',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
