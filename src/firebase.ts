import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getPerformance } from "firebase/performance";

export const firebaseConfig = {
  apiKey: "AIzaSyCUD3UuGkBUPkYsRE3JqZTO8I85ncA_Nv0",
  authDomain: "slack-clone-47e6d.firebaseapp.com",
  projectId: "slack-clone-47e6d",
  storageBucket: "slack-clone-47e6d.appspot.com",
  messagingSenderId: "415597879765",
  appId: "1:415597879765:web:ee00082e673903d6bb9d5c",
};

initializeApp(firebaseConfig);

export const addRoom = async (roomName: string) => {
  try {
    await addDoc(collection(getFirestore(), "rooms"), {
      name: roomName,
    });
  } catch (error) {
    console.error(error);
  }
};
