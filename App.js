import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import HomePage from "./components/HomePage";
import Screen from "./components/screens/Screen";
import ChatHistoryPage from "./components/ChatHistoryPage";
import ProfilePage from "./components/ProfilePage";
import Chathistory from "./components/Chathistory";

<<<<<<< HEAD
import Edit from "./components/Edit";
import Profile from "./components/Profile";
=======
import Edit from './components/Edit';
import Profile from './components/Profile';
import Chathistory from './components/Chathistory';

import Edit from './components/Edit';
import Profile from './components/Profile';
>>>>>>> b866fcc86169b0335d581a21dbf8f35f319fc6b8
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
<<<<<<< HEAD
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
=======

>>>>>>> b866fcc86169b0335d581a21dbf8f35f319fc6b8

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
<<<<<<< HEAD
    // <AppStack/>
=======
>>>>>>> b866fcc86169b0335d581a21dbf8f35f319fc6b8

    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <ProfilePage {...props} />}
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            // Add your styles for the drawer here
            backgroundColor: "#F5F5F5",
<<<<<<< HEAD
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
=======
            width: 240, // Set the width of the drawer
          },
          drawerActiveTintColor: "#2e64e5", // Color of the active item in the drawer
          drawerInactiveTintColor: "#828282", // Color of the inactive items in the drawer
          drawerLabelStyle: {
            // Style for the label text in the drawer
            fontSize: 16,
          },
          drawerItemStyle: {
            // Style for each drawer item
            marginBottom: 10,
          },
          drawerContentContainerStyle: {
            // Style for the container of the drawer content
>>>>>>> b866fcc86169b0335d581a21dbf8f35f319fc6b8
            paddingVertical: 20,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
<<<<<<< HEAD
          component={AppStack}
          options={{
            drawerIcon: ({ focused, size }) => (
=======
          component={HomePage}
          options={{
            drawerIcon: ({ focused, size }) => (
              // You can use any icon library or your custom component here
              // Example with a simple icon using the Material Icons library
>>>>>>> b866fcc86169b0335d581a21dbf8f35f319fc6b8
              <AntDesign name="home" size={24} color="gray" />
            ),
          }}
        />
<<<<<<< HEAD

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
=======
        
// //         <Drawer.Screen 
//         name="Chat History" 
//         component={ChatHistoryPage}
//         options={{
//           drawerIcon: ({ focused, size}) => (
//             <FontAwesome name="history" size={24} color="gray" />
//           ),
//         }} />
//         <Drawer.Screen 
//         name="My Profile" 
//         component={ProfilePage} 
//         options={{
//           drawerIcon: ({ focused, size}) => (
//             <FontAwesome name="user-circle-o" size={24} color="gray" />
//           ),
//         }}
//         />
// //         <Drawer.Screen 
//         name="Chat History" 
//         component={ChatHistoryPage}
//         options={{
//           drawerIcon: ({ focused, size}) => (
//             <FontAwesome name="history" size={24} color="gray" />
//           ),
//         }} />
//         <Drawer.Screen 
//         name="My Profile" 
//         component={ProfilePage} 
//         options={{
//           drawerIcon: ({ focused, size}) => (
//             <FontAwesome name="user-circle-o" size={24} color="gray" />
//           ),
//         }}
//         />

// <Drawer.Screen name="Signout" component={props => (
//           <TouchableOpacity style={styles.signOutButton}>
//             <Text>Sign Out</Text>
//           </TouchableOpacity>
//         )}
//         options={{
//           drawerIcon: ({ focused, size}) => (
//             <MaterialIcons name="logout" size={24} color="gray" />
//           ),
//         }}
//         />
// <Drawer.Screen name="Signout" component={props => (
//           <TouchableOpacity style={styles.signOutButton}>
//             <Text>Sign Out</Text>
//           </TouchableOpacity>
//         )}
//         options={{
//           drawerIcon: ({ focused, size}) => (
//             <MaterialIcons name="logout" size={24} color="gray" />
//           ),
//         }}
//         />
        
//       </Drawer.Navigator>
      
//     </NavigationContainer>

>>>>>>> b866fcc86169b0335d581a21dbf8f35f319fc6b8
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
<<<<<<< HEAD
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
=======
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
   
  }
>>>>>>> b866fcc86169b0335d581a21dbf8f35f319fc6b8
});
