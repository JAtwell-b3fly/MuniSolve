import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./components/HomePage";
import ChatHistoryPage from "./components/ChatHistoryPage";
import ProfilePage from "./components/ProfilePage";
import AppStack from "./sceensStacks/Stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import Chat from "./components/HomePage"
import { logout } from "./components/LoginAuth";
import Chathistory from "./components/Chathistory";
import Profile from "./components/Profile";

/////////
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/////
export default function App() {
  const Drawer = createDrawerNavigator();
  const [authenticated, setAuthenticated] = useState(false)

  const handleSignout = () =>{
    logout()
  }

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      console.log("User is logged in");
      setAuthenticated(true);
      //navigation.navigate('Profile');
    } else {
      console.log("User is not logged in");
      setAuthenticated(false);
      //navigation.navigate('Login');
    }
  });

  // Clean up the subscription when the component unmounts
  //return () => unsubscribe();
}, []);

const nav = () => {
  if (navigation && navigation.navigate) {
    navigation.navigate('Home'); // Replace 'Home' with the actual screen name
  }
};


return (
  <NavigationContainer>
    {authenticated ? (
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
          component={Chathistory}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome name="history" size={24} color="gray" />
            ),
          }}
        />
        <Drawer.Screen
          name="My Profile"
          component={Profile}
          options={{
            drawerIcon: ({ focused, size }) => (
              <FontAwesome name="user-circle-o" size={24} color="gray" />
            ),
          }}
        />

<Drawer.Screen
  name="Signout"
  component={(props) => (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: 305 }}>
        <CardMedia sx={{ height: 100 }} image="/assets/BotIcon.gif" title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MuniSolve
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Are you sure you want to Signout
          </Typography>
        </CardContent>
        <CardActions>
          <TouchableOpacity size="small" onPress={logout}>
            <Text>Yes, Log out</Text>
          </TouchableOpacity>
          <TouchableOpacity size="small" onPress={nav}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </CardActions>
      </Card>
    </View>
  )}
  options={{
    drawerIcon: ({ focused, size }) => (
      <MaterialIcons name="logout" size={24} color="gray" />
    ),
  }}
/>

      </Drawer.Navigator>
    ) : (
     <AppStack/>
    )}
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
