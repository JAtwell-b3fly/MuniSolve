import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BoardingPageOne from './components/BoardingPageOne';
import BoardingPageTwo from './components/BoardingPageTwo';
import BoardingPageThree from './components/BoardingPageThree';

export default function App() {
  return (
    <View style={styles.container}>
      
      <BoardingPageThree/>
    </View>
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
