import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCQcxd7ssTi2Q8Dw7Qrpd0ttbeOmX7mCsc",
  authDomain: "dujjoncoo.firebaseapp.com",
  databaseURL:
    "https://dujjoncoo-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dujjoncoo",
  storageBucket: "dujjoncoo.firebasestorage.app",
  messagingSenderId: "821099930384",
  appId: "1:821099930384:web:0c143eff0671cf18bdfb95",
};

const app = initializeApp(firebaseConfig, "dujjoncoo");
const db = getDatabase(app);

export { db, ref, onValue };
