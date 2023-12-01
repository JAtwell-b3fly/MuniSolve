import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import HomePage from "./components/HomePage";
import Screen from "./components/screens/Screen";
import ChatHistoryPage from "./components/ChatHistoryPage";
import ProfilePage from "./components/ProfilePage";
import Chathistory from "./components/Chathistory";

import Edit from "./components/Edit";
import Profile from "./components/Profile";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import AppStack from "./sceensStacks/Stack";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./config/firebase";
export default function App({ navigation }) {
  const [authenticated, setAuthenticated] = useState(false);
  const Drawer = createDrawerNavigator();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     console.log(user);
  //     if (user) {
  //       console.log("User is logged in");
  //       setAuthenticated(true);
  //     } else {
  //       console.log("User is not logged in");
  //       setAuthenticated(false);
  //     }
  //   });

  //   // Clean up the subscription when the component unmounts
  //   return () => unsubscribe();
  // }, []);

  // useEffect(()=>{
  //   if(authenticated){
  //     navigation.navigate('Profile')

  //   }else {
  //     navigation.navigate('Login')
  //   }
  // }, [authenticated, navigation])

  return (
    // <AppStack/>

    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <ProfilePage {...props} />}
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            // Add your styles for the drawer here
            backgroundColor: "#F5F5F5",
            width: 240,
          },
          drawerActiveTintColor: "#2e64e5",
          drawerInactiveTintColor: "#828282",
          drawerLabelStyle: {
            fontSize: 16,
          },
          drawerItemStyle: {
            marginBottom: 10,
          },
          drawerContentContainerStyle: {
            paddingVertical: 20,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={AppStack}
          options={{
            drawerIcon: ({ focused, size }) => (
              <AntDesign name="home" size={24} color="gray" />
            ),
          }}
        />

        <Drawer.Screen
          name="Chat History"
          component={ChatHistoryPage}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome name="history" size={24} color="gray" />
            ),
          }}
        />
        <Drawer.Screen
          name="My Profile"
          component={ProfilePage}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome name="user-circle-o" size={24} color="gray" />
            ),
          }}
        />

        <Drawer.Screen
          name="Signout"
          component={(props) => (
            <TouchableOpacity style={styles.signOutButton}>
              <Text>Sign Out</Text>
            </TouchableOpacity>
          )}
          options={{
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons name="logout" size={24} color="gray" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  signOutButton: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
