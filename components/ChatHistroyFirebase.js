import { collection, addDoc, updateDoc, doc, deleteDoc, serverTimestamp, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { getAuth } from "firebase/auth";

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString();


  const addHistory = async ( chat) => {
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

  const addProfile = async (email, address, name, number) => {
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

  const updateProfile = async (user, imageUri, profileInfo) => {
    try {
      const authUser = getAuth().currentUser;
  
      // If an image is provided, upload it to your storage and get the download URL
      let imageUrl = null;
      if (imageUri) {
       
        const storageRef = ref(storage, `profileImages/${authUser.uid}`);
        const imageRef = child(storageRef, 'profileImage');
        const snapshot = await uploadString(imageRef, imageUri, 'data_url');
        imageUrl = await getDownloadURL(snapshot.ref);
      }
  
      
      await updateDoc(doc(db, "User" + authUser.email, profileInfo[0].id), {
        Name: user.name,
        Email: user.email,
        Number: user.number,
        Address: user.address,
        ImageUrl: imageUrl, 
      });
  
      setProfileInfo([
        {
          ...profileInfo[0],
          Name: user.name,
          Email: user.email,
          Number: user.number,
          Address: user.address,
          ImageUrl: imageUrl,
        },
      ]);
  
    } catch (error) {
      console.error('Error updating profile' + error.message);
      alert("Error updating");
    }
  };
  
  

  

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
  const handleProfileInfo = async () => {
    try {
      const authUser = getAuth().currentUser;
      console.log(authUser)
  
      if (authUser) {
        const querySnapshot = await getDocs(collection(db,"User"+authUser.email));
  
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        return newData ;
      }
    } catch (error) {
      alert('error');
      console.error("Error fetching profileInfo: ", error);
    }
  };
  
  


export {addHistory, addProfile, updateProfile, deleteHistory, handleProfileInfo}