 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBw5WiOwVrrwBZa1nab6dJAgX23JHQRqNQ",
  authDomain: "netflix-clone-82ed0.firebaseapp.com",
  projectId: "netflix-clone-82ed0",
  storageBucket: "netflix-clone-82ed0.appspot.com",
  messagingSenderId: "446628031346",
  appId: "1:446628031346:web:1addadb84e50009e098beb",
  measurementId: "G-9CMMETWGFG"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);