import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCW4CsXx1Zi7M0ZhYDwmgM2QE5iHe77OpM",
  authDomain: "filmyverse2.firebaseapp.com",
  projectId: "filmyverse2",
  storageBucket: "filmyverse2.appspot.com",
  messagingSenderId: "1097057006607",
  appId: "1:1097057006607:web:5c1bda5e0a4dbd8df45f7a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const moviesRef = collection(db , "movies")
export const reviewsRef = collection(db , "reviews")


export default app;