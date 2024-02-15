import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtMkn6WYKhR2P0-ufuIK5aLkwpHS8Hodg",
  authDomain: "udemy-vue-firebase-edbd4.firebaseapp.com",
  projectId: "udemy-vue-firebase-edbd4",
  storageBucket: "udemy-vue-firebase-edbd4.appspot.com",
  messagingSenderId: "659659449578",
  appId: "1:659659449578:web:a35793d2b09d997ac6a393",
  measurementId: "G-7D5B83FSSL"
};

const app = initializeApp(firebaseConfig)  // 使用imported initializeApp
const analytics = getAnalytics(app)  // 如果你需要Analytics的话

const projectFirestore = getFirestore(app)  // 使用getFirestore初始化Firestore
const timestamp = serverTimestamp

// export firestore
export { projectFirestore, timestamp }

