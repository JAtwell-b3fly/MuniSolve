import { collection, addDoc, updateDoc, doc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import { getAuth } from "firebase/auth";

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString();


  const addDocument = async () => {
    try {
      const authUser = getAuth().currentUser;
      if (authUser) {
        const docRef = await addDoc(collection(db, formattedDate + authUser.uid), {
          owner_uid: authUser.uid,
          messages: chat,
          timestamp: serverTimestamp(),
        });

        console.log('Document written with ID: ', docRef.id);
      
      } else {
        console.error('User not authenticated');
      }
    } catch (e) {
      console.error('Error adding document: ', e);
    };
    
  };

  const addProfile = async () => {
    try {
      const docRef = await addDoc(collection(db, "User"+ email), {
        Email: email,
        Address: address,
        Name: name,
        
        Number: number,
      })
    } catch (e) {
      console.error("Error adding profile", e);
      alert("Error Adding Profile")
    }
  }

  const updateProfile = async () => {
    try {
       const authUser = getAuth().currentUser;
       
       await updateDoc(doc(db, "User"+ authUser.email, profileInfo[0].id), {
        Name: user.name,
        Email: user.email,
        Number: user.phone,
        Address: user.address,
       });

       setProfileInfo([
        {
          ...profileInfo[0],
          Name: user.name,
          Email: user.email,
          Number: user.phone,
          Address: user.address,
        
        }
       ])
       setIsEditing(false);
    } catch (error) {
      console.log('Error updating profile' +error.messages);
      alert("Error updating")
    }
  }

  const deleteHistory = async () => {
    try {
      const authUser = getAuth().currentUser;
      if (authUser) {
        const docRef = doc(db, formattedDate + authUser.uid); // Create a document reference
        await deleteDoc(docRef); // Delete the document
        console.log('Document deleted');
       
      } else {
        console.error('User not authenticated');
      }
    } catch (e) {
      console.error('Error deleting document: ', e);
    }
  };
  


export {addDocument, addProfile, updateProfile, deleteHistory}