import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Chathistory from './components/Chathistory';
import Edit from './components/Edit';
import Profile from './components/Profile';


e
  


import Login from "./components/login"
import Forgot from './components/Forgot';

export default function App() {
  return (
    <View style={styles.container}>

      <Chathistory/>



      <Edit/>
      

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
