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
  getDoc,
  getDocs,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getPerformance } from "firebase/performance";
import { Message } from "./features/currentRoomSlice";

export const firebaseConfig = {
  apiKey: "AIzaSyCUD3UuGkBUPkYsRE3JqZTO8I85ncA_Nv0",
  authDomain: "slack-clone-47e6d.firebaseapp.com",
  projectId: "slack-clone-47e6d",
  storageBucket: "slack-clone-47e6d.appspot.com",
  messagingSenderId: "415597879765",
  appId: "1:415597879765:web:ee00082e673903d6bb9d5c",
};

initializeApp(firebaseConfig);

export const addRoomToFirebase = (roomName: string) => {
  return addDoc(collection(getFirestore(), "rooms"), {
    name: roomName,
  });
};

export const fetchRoomsFromFirebase = () => {
  return getDocs(collection(getFirestore(), "rooms"));
};

export const addMessageToFirebase = (message: Message, roomId: string) => {
  return addDoc(collection(getFirestore(), "rooms", roomId, "messages"), {
    ...message,
  });
};

export const signInWithFirebase = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider).catch((err: Error) => {
    alert(err.message);
  });
};

export const signOutWithFirebase = () => {
  signOut(getAuth());
};
