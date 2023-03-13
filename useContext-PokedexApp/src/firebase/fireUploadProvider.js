import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "./config";

export const startUploadPokes = async (uid) => {
  try {
    const newPoke = {
      displaName: "",
      power: "",
      date: new Date().getTime(),
    };
    const newDoc = doc(collection(FirebaseDB, `${uid}/pokeapp/pokes`));
    await setDoc(newDoc, newPoke);
    newPoke.id = newDoc.id;
  } catch (error) {
    console.log(error);
  }
};
