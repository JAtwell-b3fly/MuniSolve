import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Chathistory from './components/Chathistory';
=======
import Edit from './components/Edit';
import Profile from './components/Profile';
>>>>>>> profile

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Chathistory/>
=======
import Login from "./components/login"
import Forgot from './components/Forgot';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Login/>
>>>>>>> login
=======

import Signup from './components/signup';
export default function App() {
  return (
    <View style={styles.container}>
      <Signup/>
>>>>>>> signup
=======
      <Forgot/>
>>>>>>> forgotpassword
      <StatusBar style="auto" />
=======
      <Edit/>
      
>>>>>>> profile
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
