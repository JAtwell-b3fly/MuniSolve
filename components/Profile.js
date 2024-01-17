import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, {useEffect, useState} from "react";
import { handleProfileInfo } from "./ChatHistroyFirebase";
import { useNavigation } from '@react-navigation/native';
const Profile = ({navigation}) => {


  const [profileInfo, setProfileInfo] = useState('');




  useEffect(() =>{
    handleProfileInfo().then ((data) =>{
      console.log(data)
      setProfileInfo(data);

    })
  }, [])

  useEffect(() => {
    console.log(profileInfo)
    if (profileInfo && profileInfo.length > 0) {
      console.log(profileInfo[0].Name);
    } else {
      console.log("Profile information not available");
    } // Log the updated profileInfo
  }, [profileInfo]);





  return (
    <View style={{ backgroundColor: "#F5F2F2", flex: 1 }}>
      <View style={styles.top}>
        <Text style={{color: "#fff", fontSize: 32, marginTop: 30,  textAlign: 'center'}}>Profile</Text>
      </View>
      <View style={styles.profilecontainer}>
      <Image
             source={profileInfo.length > 0 ? profileInfo[0].Imageurl : null} 
             style={styles.profilePic}
             />
       <Text style={styles.name}>
  {profileInfo.length > 0 ? profileInfo[0].Name : null}
</Text>
<Text style={styles.email}>
  {profileInfo.length > 0 ? profileInfo[0].Email : null}
</Text>
      
      </View>
      <View   >
        <Text style={styles.general}>GENERAL</Text>
      </View> 
      <TouchableOpacity onPress={() => navigation.navigate("EditProfileScreen", {data : profileInfo[0]})}>
        <View style={styles.infoContainer}  >
          <View style={styles.smallcontainer}>
            <Image
              source={require("../assets/Rectangle98.png")}
              style={styles.icons}
            />
            <View>
              <Text style={styles.subheading}>Edit</Text>
              <Text style={styles.infotext}>Update and modify your profile</Text>
            </View>
            <Image
               source={require("../assets/Rectangle92.png")}
               style={styles.icon}
               />
          </View>
        </View>
      </TouchableOpacity>

      {/* <View style={styles.infoContainer}>
        <View style={styles.smallcontainer}>
          <Image
            source={require("../assets/Rectangle 95.png")}
            style={styles.icons}
          />
          <View>
            <Text style={styles.subheading}>Privacy</Text>
            <Text style={styles.infotext}>Change your password</Text>
          </View>
          <Image
             source={require("../assets/Rectangle 92.png")}
             style={styles.icon}
             />
        </View>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    width: 430,
    height: 307,
    backgroundColor: "#22719E",
    justifyContent: "flex-start",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profilecontainer: {
    width: 354,
    height: 320,
    borderRadius: 25,
    backgroundColor: "#fff",
    alignSelf: "center",
    position: "absolute",
    marginTop: 130,
  },
  infoContainer: {
    width: 378,
    height: 70,
    borderRadius: 15,
    alignSelf: "center",
    backgroundColor: "#fff",
    marginVertical: 10,
    paddingTop: 10,
    paddingHorizontal: 10,

  },
  smallcontainer: {
    flexDirection: "row",
    
    justifyContent: "space-between"
  },
  icons: {
    width: 50,
    height: 50,
  },
  icon: {
    width: 40,
    height: 40,
    marginTop: 7
  },
  general: {
    color: "#B4B2B2",
    fontSize: 20,
    width: 104,
    height: 21,
    marginBottom: 30,
    marginTop: 180,
    marginLeft: 27,
    fontWeight: "bold"

  },
  subheading: {
    color: "#22719E",
    fontSize: 24,
    
  },
  infotext: {
    color: "#958E8E",
    fontSize: 16,
  },
  profilePic: {
    alignSelf: "center",
    width: 120,
    height: 120,
    marginTop: 30,
  },
  name: {
    textAlign: 'center',
    color: "#686666",
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20
  },
  email: {
    textAlign: 'center',
    color: "#686666",
    fontSize: 20
  }
});

export default Profile;
