import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import React from 'react'

import { logout } from "./LoginAuth";


const Signout = ({navigation}) => {
    const handleSignout = () => {
        logout();
      };

      
  return (
    <View style={styles.mainContainer}>
        <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/background.png")}
      >
         <View style={styles.smallContainer} >
         <Image style={styles.logo}  />
           <View>
              <Text style={{ fontSize: 18, color: "#9A8E8E", marginLeft: 23, width: 300}}>Are you sure you want to Signout</Text>
           </View>
           <View style={styles.btnContainer}>
           <TouchableOpacity style={{backgroundColor: "#fff", width: 'auto', padding: 2}}  onPress={handleSignout}>
            <Text style={{color: "#22719E"}} >Yes, Log out</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: "#fff"}} onPress={() => navigation.navigate("Home")}>
            <Text style={{color: "#E74C3C"}}>Cancel</Text>
            </TouchableOpacity>
           </View>
        </View>
        </ImageBackground>       
   </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'start',
        alignContent: 'center',
       
    },
    backgroundImage: {
        
        flex: 1
      },
    logo: {
      height: 200,
      width: 260,
  
      alignSelf: "center",
      marginBottom: 20
    },
    btnContainer: {
        flexDirection: "row",
        marginLeft: 6,
        width: 200,
        justifyContent: 'space-around',
        marginTop: 20
    },
    smallContainer: {
        width: 305,
        textAlign: 'center',
        alignSelf: "center",
        paddingVertical: 80,
    }
 
  });
  

export default Signout