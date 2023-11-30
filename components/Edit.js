import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';


const Edit = () => {
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

  return (
    <View>
      <View style={styles.top}>
        <Text style={styles.header}>Edit Profile</Text>
        <TouchableOpacity style={styles.profilepic} onPress={pickImage}>
        {image && <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 150 }} />}  
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
         style={styles.input}
         placeholder='Username'
         />
        <TextInput
         style={styles.input}
         placeholder='Email'
         />
        <TextInput
         style={styles.input}
         placeholder='Phone'
         />
        <TextInput
         style={styles.input}
         placeholder='Address'
         />
        <TextInput
         style={styles.input}
         placeholder='Date of Birth'
         />
                                             
      </View>
      <TouchableOpacity style={styles.saveBtn}>Save</TouchableOpacity>

      <TouchableOpacity style={styles.cancelBtn}>Cancel</TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    top: {
       width: "430px",
       height: "271px",
       backgroundColor: "#22719E" 
    },
    header: {
        textAlign: "center",
        color: "#fff",
        fontSize: "32px",
        fontWeight: "bold",
        marginTop: 20

    },
    profilepic: {
        width: "150px",
        height: "150px",
        borderRadius: "150px",
        backgroundColor: "#fff",
        alignSelf: "center",
        marginTop: 30,
    },
    inputContainer: {
        marginTop: 40,
    },
    input: {
        width: "321px",
        padding: "15px",
        marginBottom: "40px",
        height: "54px",
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "gray",
        color: "#837F7F",
        fontSize: "20px",
    },
    saveBtn: {
        textAlign: "center",
        paddingVertical: 10,
        width: "273px",
        height: "44px",
        color: "#fff",
        backgroundColor: "#22719E",
        alignSelf: "center",
        fontSize: "20px",
        fontWeight: "bold",

    },
    cancelBtn : {
        textAlign: "center",
        paddingVertical: 10,
        width: "273px",
        height: "44px",
        color: "#22719E",
        backgroundColor: "fff",
        alignSelf: "center",
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: 10
    }
})

export default Edit