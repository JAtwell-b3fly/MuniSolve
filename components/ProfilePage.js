import { View, Text, StyleSheet,Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { handleProfileInfo } from "./ChatHistroyFirebase";
function ProfilePage({ ...props }) {

  const [profileInfo, setProfileInfo] = useState([]);

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

    <DrawerContentScrollView {...props}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        {/* <Text style={styles.profileText}>User Profile</Text> */}
        <Image style={styles.ProfileImage} source={profileInfo.length > 0 ? profileInfo[0].Imageurl : null} />
         <Text style={styles.profileText}>{ profileInfo.length > 0 ? <View><Text style={styles.profileText}>{profileInfo[0].Name}</Text></View>: <View></View>}</Text>
         <Text style={styles.profileEmail}>{ profileInfo.length > 0 ? <View><Text style={styles.profileEmail}>{profileInfo[0].Email}</Text></View>: <View></View>}</Text>
         
      </View>


      <DrawerItemList {...props} />
      {/* Custom Drawer Items */}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor:'#22719E',
    height:200,
    marginTop:-5
   
  },
  profileText: {
    fontSize: 18,
    
    color:"white",
    textAlign:"center"
  },

  ProfileImage: {
   height:80,
   width:80,
   marginBottom:6,
  borderRadius:50,
  alignSelf:"center",
  marginTop:5
  },

  profileEmail: {
    fontSize:15,
    color:"whitesmoke",
    paddingTop:10,
    textAlign:"center"
  }
});

export default ProfilePage