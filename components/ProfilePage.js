import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

function ProfilePage({ ...props }) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        {/* <Text style={styles.profileText}>User Profile</Text> */}
        <Image style={styles.ProfileImage} source={require("../assets/close-up-portrait-attractive-man-with-afro-hairstyle-stubble-wears-orange-anorak_273609-8595.jpg")} />
         <Text style={styles.profileText}>Kabelo </Text>
         <Text style={styles.profileEmail}>kabelo@gmail.com</Text>
         
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
    fontWeight: 'bold',
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