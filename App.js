
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import HomePage from "./components/HomePage";
import Screen from "./components/screens/Screen";
import ChatHistoryPage from "./components/ChatHistoryPage";
import ProfilePage from "./components/ProfilePage";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Drawer = createDrawerNavigator();

 return(
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <ProfilePage {...props} />}
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            // Add your styles for the drawer here
            backgroundColor: "#F5F5F5",
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
            paddingVertical: 20,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomePage}
          options={{
            drawerIcon: ({ focused, size }) => (
              // You can use any icon library or your custom component here
              // Example with a simple icon using the Material Icons library
              <AntDesign name="home" size={24} color="gray" />
            ),
          }}
        />
        
        <Drawer.Screen 
        name="Chat History" 
        component={ChatHistoryPage}
        options={{
          drawerIcon: ({ focused, size}) => (
            <FontAwesome name="history" size={24} color="gray" />
          ),
        }} />
        <Drawer.Screen 
        name="My Profile" 
        component={ProfilePage} 
        options={{
          drawerIcon: ({ focused, size}) => (
            <FontAwesome name="user-circle-o" size={24} color="gray" />
          ),
        }}
        />

<Drawer.Screen name="Signout" component={props => (
          <TouchableOpacity style={styles.signOutButton}>
            <Text>Sign Out</Text>
          </TouchableOpacity>
        )}
        options={{
          drawerIcon: ({ focused, size}) => (
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // height:5,
    // width:50,
    // backgroundColor:'blue',
    // borderRadius:15,
  }
});
