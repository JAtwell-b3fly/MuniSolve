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


  const handleEditProfile = () => {
    // Navigate to the EditProfileScreen
    navigation.navigate('EditProfileScreen');
  };


  return (
    <View style={{ backgroundColor: "#F5F2F2", flex: 1 }}>
      <View style={styles.top}>
        <Text style={{color: "#fff", fontSize: "32px", marginTop: "30px", marginLeft: "30px"}}>Profile</Text>
      </View>
      <View style={styles.profilecontainer}>
      <Image
             source={require("../assets/user.png")}
             style={styles.profilePic}
             />
       <Text style={styles.name}>{ profileInfo.length > 0 ? <View>{profileInfo[0].Name}</View>: <View></View>}</Text>
       <Text style={styles.email}>{ profileInfo.length > 0 ? <View>{profileInfo[0].Email}</View>: <View></View>}</Text>       
      </View>
      <View   >
        <Text style={styles.general}>GENERAL</Text>
      </View> 
      <TouchableOpacity      onPress={handleEditProfile}>
        <View style={styles.infoContainer}  >
          <View style={styles.smallcontainer}>
            <Image
              source={require("../assets/Rectangle 98.png")}
              style={styles.icons}
            />
            <View>
              <Text style={styles.subheading}>Edit</Text>
              <Text style={styles.infotext}>Update and modify your profile</Text>
            </View>
            <Image
               source={require("../assets/Rectangle 92.png")}
               style={styles.icon}
               />
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    width: "430px",
    height: "307px",
    backgroundColor: "#22719E",
    justifyContent: "flex-start",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profilecontainer: {
    width: "354px",
    height: "320px",
    borderRadius: "25px",
    backgroundColor: "#fff",
    alignSelf: "center",
    position: "absolute",
    marginTop: "130px",
  },
  infoContainer: {
    width: "378px",
    height: "70px",
    borderRadius: "15px",
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
    width: "50px",
    height: "50px",
  },
  icon: {
    width: 40,
    height: 40,
    marginTop: 7
  },
  general: {
    color: "#B4B2B2",
    fontSize: "20px",
    width: "104px",
    height: "21px",
    marginBottom: 30,
    marginTop: 180,
    marginLeft: 27,
    fontWeight: "bold"

  },
  subheading: {
    color: "#22719E",
    fontSize: "24px",
    
  },
  infotext: {
    color: "#958E8E",
    fontSize: "16px",
  },
  profilePic: {
    alignSelf: "center",
    width: "120px",
    height: "120px",
    marginTop: 30,
  },
  name: {
    textAlign: 'center',
    color: "#686666",
    fontSize: "24px",
    marginBottom: 20,
    marginTop: 20
  },
  email: {
    textAlign: 'center',
    color: "#686666",
    fontSize: "20px"
  }
});

export default Profile;
