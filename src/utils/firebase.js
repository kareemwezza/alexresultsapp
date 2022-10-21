import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDprCaPcxCrs3pclX3ukgXjs_VbX0enTcQ",
  authDomain: "alex2023-a3f50.firebaseapp.com",
  projectId: "alex2023-a3f50",
  storageBucket: "alex2023-a3f50.appspot.com",
  messagingSenderId: "414285495249",
  appId: "1:414285495249:web:3c70f92a8a6a74ec313ef0",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getResults(id) {
  const q = await getDoc(doc(db, "5th-results", id));
  return q.data();
}

export async function getById(id) {
  const q = query(collection(db, "5th-results"), where("id", "==", id));
  const snapshot = await getDocs(q);
  let data = [];
  snapshot.forEach((doc) => {
    data.push(doc.data());
  });
  return data[0];
}
