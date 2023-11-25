import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCqG-tdvvJ0Lf_bg9IDpAou8uVa4QVmyrE",
  authDomain: "fines-shop.firebaseapp.com",
  projectId: "fines-shop",
  storageBucket: "fines-shop.appspot.com",
  messagingSenderId: "487660493125",
  appId: "1:487660493125:web:b2d5e9ad51ccdc2957862c",
  measurementId: "G-HPEF4XNGQJ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
