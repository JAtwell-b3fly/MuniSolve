import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./components/HomePage";
import ChatHistoryPage from "./components/ChatHistoryPage";
import ProfilePage from "./components/ProfilePage";
import AppStack from "./sceensStacks/Stack";
import Chat from "./components/HomePage"
export default function App() {
  const Drawer = createDrawerNavigator();

  // Uncomment and implement Firebase authentication
  // const [authenticated, setAuthenticated] = useState(false);

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

  // Uncomment and implement navigation based on authentication
  // useEffect(() => {
  //   if (authenticated) {
  //     navigation.navigate('Profile');
  //   } else {
  //     navigation.navigate('Login');
  //   }
  // }, [authenticated, navigation]);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <ProfilePage {...props} />}
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
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
          component={Chat}
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
  signOutButton: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
