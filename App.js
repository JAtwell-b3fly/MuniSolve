import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './components/signup';
import Forgot from './components/Forgot';
import Login from './components/login';
import Profile from './components/Profile';


export default function App() {
  return (
    <View style={styles.container}>
      <Profile/>
      

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
