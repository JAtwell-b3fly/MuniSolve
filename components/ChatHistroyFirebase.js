import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString();

const addHistory = async (chat) => {
  try {
    const authUser = getAuth().currentUser;
    if (authUser) {
      const docRef = await addDoc(
        collection(db, formattedDate + authUser.uid),
        {
          owner_uid: authUser.uid,
          messages: chat,
          timestamp: serverTimestamp(),
        }
      );

      console.log("Document written with ID: ", docRef.id);
    } else {
      console.error("User not authenticated");
    }
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const fetchHistory = async () => {
  try {
    const authUser = getAuth().currentUser;
    if (!authUser) {
      console.error("User not authenticated");
      return [];
    }

    const querySnapshot = await getDocs(
      collection(db, formattedDate + authUser.uid)
    );
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return newData;
  } catch (error) {
    console.error("Error fetching history: ", error);
    return [];
  }
};

const addProfile = async (email, name, number, ) => {
  try {
    const docRef = await addDoc(collection(db, "User" + email), {
      Email: email,

      Name: name,
      Address: "",
      Number: number,
      Imageurl: 'https://firebasestorage.googleapis.com/v0/b/muni-solve-v2.appspot.com/o/user.png?alt=media&token=0fb7cb4b-18dc-4dd2-b599-07ad2f9261f2',
    });
  } catch (e) {
    console.error("Error adding profile", e);
    alert("Error Adding Profile");
  }
};

const updateProfile = async (user, imageUri,) => {
  try {
    const authUser = getAuth().currentUser;

    // If an image is provided, upload it to your storage and get the download URL
    let imageUrl = null;
    if (imageUri) {
      const storageRef = ref(storage, `profileImages/${authUser.uid}`);
      const imageRef = child(storageRef, "profileImage");
      const snapshot = await uploadString(imageRef, imageUri, "data_url");
      imageUrl = await getDownloadURL(snapshot.ref);
    }


    const userDocRef = doc(db, "User"+authUser.email);
    console.log("error searching");
    await updateDoc(userDocRef, {
      Name: user.name,
      Email: user.email,
      Number: user.number,
      Address: user.address,
      
    });


    
    }

    
   catch (error) {
    console.error("Error updating profile" + error.message);
    alert("Error updating");
  }
};

const deleteHistory = async () => {
  try {
    const authUser = getAuth().currentUser;
    if (authUser) {
      const docRef = doc(db, formattedDate + authUser.uid); // Create a document reference
      await deleteDoc(docRef); // Delete the document
      console.log("Document deleted");
    } else {
      console.error("User not authenticated");
    }
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};
const handleProfileInfo = async () => {
  try {
    const authUser = getAuth().currentUser;

    if (authUser) {
      const querySnapshot = await getDocs(
        collection(db, "User" + authUser.email)
      );

      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return newData;
    }
  } catch (error) {
    alert("error");
    console.error("Error fetching profileInfo: ", error);
  }
};

export {
  addHistory,
  fetchHistory,
  addProfile,
  updateProfile,
  deleteHistory,
  handleProfileInfo,
};
