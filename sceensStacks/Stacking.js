import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '../components/Profile'

import EditProfile from '../components/Edit'
import Chathistory from '../components/Chathistory';


const Stack = createNativeStackNavigator();

const StackingApp = () => {
    return (

        <Stack.Navigator initialRouteName="Board1" screenOptions={{ headerShown: false }} >

          <Stack.Screen name="Profile" component={Profile} />

          <Stack.Screen name="EditProfileScreen" component={EditProfile} />
          <Stack.Screen name="Chathistory" component={Chathistory} />

        </Stack.Navigator>

    );
  };
  
  export default StackingApp;