import { db } from "@/utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const itemsRef = collection(db, "users", userId, "items");
  const q = query(itemsRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}
