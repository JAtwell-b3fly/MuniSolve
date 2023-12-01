import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../components/login"
import Profile from '../components/Profile'
import Signup from '../components/signup'
import Edit from '../components/Edit'
import Chathistory from '../components/Chathistory';
import Forgot from '../components/Forgot'
import BoardingPageOne from '../Boarding/BoardingPageOne'
import BoardingPageTwo from '../Boarding/BoardingPageTwo'
import BoardingPageThree from '../Boarding/BoardingPageThree'

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (

        <Stack.Navigator initialRouteName="Board1" screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Edit" component={Edit} />
          <Stack.Screen name="Chathistory" component={Chathistory} />
          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="Board1" component={BoardingPageOne} />
          <Stack.Screen name="Board2" component={BoardingPageTwo} />
          <Stack.Screen name="Board3" component={BoardingPageThree} />
        </Stack.Navigator>

    );
  };
  
  export default AppStack;