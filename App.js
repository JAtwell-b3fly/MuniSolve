import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import Chathistory from './components/Chathistory';

export default function App() {
  return (
    <View style={styles.container}>
      <Chathistory/>
=======
import Login from "./components/login"
export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
>>>>>>> login
      <StatusBar style="auto" />
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
