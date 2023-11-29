import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './components/HomePage';
import Screen from './components/screens/Screen';
import ChatHistoryPage from './components/ChatHistoryPage';
import ProfilePage from './components/ProfilePage';


import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';




export default function App() {

  const Drawer = createDrawerNavigator();


  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Screen" component={Screen} />
      <Drawer.Screen name="History" component={ChatHistoryPage} />
      <Drawer.Screen name="Profile" component={ProfilePage} />
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
});
