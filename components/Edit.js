import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { updateProfile } from "./ChatHistroyFirebase";

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

const EditProfile = ({ navigation }) => {
  const initialUser = {
    name: "",
    phone: "",
    email: "",
    address: "",
    image: ''
  };

  
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(initialUser);


  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [number,setNumber] = useState('')
  const [address,setAddress] = useState('')
  const [profileInfo, setProfileInfo] = useState([])

  const [image, setImage] = useState(null);
 



  useEffect(() => {
    handleProfileInfo();
  }, []);

  useEffect(() => {
    console.log(profileInfo)
    if (profileInfo && profileInfo.length > 0) {
      setUser(
        {name : profileInfo.length > 0 ? profileInfo[0].Name : null, phone:  profileInfo.length > 0 ? profileInfo[0].Number:null , email: profileInfo.length > 0 ? profileInfo[0].Email: null, image :  profileInfo.length > 0 ? profileInfo[0].Imageurl : null   }
      );
      console.log(profileInfo[0].Name);
    } else {
      console.log("Profile information not available");
    } // Log the updated profileInfo
  }, [profileInfo]);

 

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  
  
  const handleInputChange = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const handleEdit = async () => {

    console.log(user)

    try {
      const authUser = getAuth().currentUser;
  
      // Update the Firestore document with the new user information
      await updateDoc(doc(db, "User" + authUser.email,  profileInfo[0].id), {
        Name: user.name,
        
        Number: user.phone,
        Imageurl: image,
      });
  
      // Update the local state with the new user information
      setProfileInfo([
        {
          ...profileInfo[0],
          Name: user.name,
          Email: user.email,
          Number: user.phone,
          
        },
      ]);
  
      setIsEditing(false);
      navigation.navigate("Profile")
    } catch (error) {
      alert('Error updating profile: ' + error.message);
      console.error("Error updating profile: ", error);
    }
  
  };


  const handleProfileInfo = async () => {
    try {
      const authUser = getAuth().currentUser;
  
      if (authUser) {
        const querySnapshot = await getDocs(collection(db, "User" + authUser.email));
  
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        setProfileInfo(newData);
       
        console.log(user)
       
      }
    } catch (error) {
      alert('error');
      console.error("Error fetching profileInfo: ", error);
    }
  };
  

  
 
  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.header}>Edit Profile</Text>

          {/* {image == null ? <TouchableOpacity onPress={pickImage} style={styles.profilepic} ><Image style={{ width: 150, height: 150, borderRadius: 150 , alignSelf: 'center'}} source={user.image } /> </TouchableOpacity>: <TouchableOpacity style={styles.profilepic} >
          {image && <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 150, alignSelf: 'center' }} />}
        </TouchableOpacity>}
        */}
        
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          value=  {user.name}
          onChangeText={(text) => handleInputChange("name", text)}
        />
        {/* <TextInput
          style={styles.input}
          placeholder='Email'
         
          onChangeText={(text) => handleInputChange("email", text)}
        /> */}
        <TextInput
          style={styles.input}
          placeholder='Phone'
          value=  {user.phone}
          onChangeText={(text) => handleInputChange("phone", text)}
        />
        <TextInput
          style={styles.input}
          placeholder='Address'
          value= {user.address}
          onChangeText={(text) => handleInputChange("address", text)}
        />
      </View>

      <TouchableOpacity style={styles.saveBtnContainer} onPress={handleEdit}>
        <Text style={styles.saveBtn}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelBtnContainer} onPress={() => navigation.navigate("Profile")}>
        <Text style={styles.cancelBtn}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    top: {
       width: 430,
       height: 271,
       backgroundColor: "#22719E" 
    },
    header: {
        textAlign: "center",
        color: "#fff",
        fontSize: 32,
        
        marginTop: 20

    },
    profilepic: {
        width: 150,
        height: 150,
        borderRadius: 150,
        backgroundColor: "#fff",
        alignSelf: "center",
        marginTop: 30,
    },
    inputContainer: {
        marginTop: 20,
    },
    input: {
        width: 321,
        padding: 15,
        marginBottom: 20,
        height: 54,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "gray",
        color: "#837F7F",
        fontSize: 20,
    },
    saveBtn: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
    },
    saveBtnContainer: {
      
        paddingVertical: 10,
        width: 273,
        height: 44,
        backgroundColor: "#22719E",
        alignSelf: "center",
    },
    cancelBtn : {
        color: "#22719E",
        fontSize: 20,
        textAlign: "center", 
    },
    cancelBtnContainer: {
      
        paddingVertical: 10,
        width: 273,
        height: 44,
        backgroundColor: "fff",
        alignSelf: "center",
        marginTop: 10
    },
})

export default EditProfile