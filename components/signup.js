import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

const Signup = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = ({navigation}) => {
     setShowPassword(!showPassword);
   }
   return (
     <View>
       <ImageBackground
         style={styles.backgroundImage}
         source={require("../assets/background.png")}
       />
       <Image style={styles.logo} source={require("../assets/BotIcon.gif")} />
       <View style={styles.signup}>
         <Text style={styles.title}>SIGN IN</Text>
         <View style={styles.inputContainer}>
            <Image source={require("../assets/user.png")} style={styles.icon} />
            <TextInput
            style={styles.input}
            placeholder="Username"
             />
          </View>         
         <View style={styles.inputContainer}>
             <Image source={require("../assets/3.png")} style={styles.icon} />
             <TextInput style={styles.input} placeholder="Email" />
           </View>
           <View style={styles.inputContainer}>
            <Image source={require("../assets/2.png")} style={styles.icon} />
            <TextInput style={styles.input} placeholder="Mobile Number" />
          </View>           
           <View style={styles.inputContainer}>
             <Image source={require("../assets/MUNI.png")} style={styles.icon} />
             <TextInput
             style={styles.input}
             placeholder="Password"
             value={password}
             onChangeText={setPassword} />
           </View>
          
           <TouchableOpacity  ><Text style={styles.Signupbtn}>SIGN UP</Text></TouchableOpacity> 
          <Text style={{alignSelf: "center", textAlign: 'center', marginTop: 10}}>You already have an account ? <TouchableOpacity style={styles.login}>Login</TouchableOpacity></Text>
       </View>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   backgroundImage: {
     height: 855,
     width: 392,
   },
   logo: {
     height: 200,
     width: 200,
     position: "absolute",
     zIndex: 1,
     top: 50,
     alignSelf: "center",
   },
   signup: {
     height: 500,
     width: 300,
     backgroundColor: "#F0F1F1",
     position: "absolute",
     zIndex: 1,
     marginTop: 300,
     marginLeft: 50,
     paddingBottom: 450,
   },
   title: {
     color: "#22719E",
     textAlign: "center",
     marginTop: 20,
     fontSize: 28,
     fontWeight: 700,
     marginBottom:60
   },
 
   inputContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     borderWidth: 1,
     borderColor: '#ccc',
     paddingHorizontal: 7,
     marginVertical: 10,
     backgroundColor:'#ffff',
     width:250,
     height:40,
     marginLeft:24,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.7,
     shadowRadius: 4,
   },
   icon: {
     width: 24,
     height: 24,
     marginRight: 10,
     resizeMode: 'contain',
   },
   input: {
     flex: 1,
     height: 40,
     borderColor:'#ffff'
 
   },
   Signupbtn:{
     borderWidth:1,
     width:250,
     height:40,
     textAlign:'center',
     paddingTop:9,
     alignSelf:'center',
     marginTop:20,
     backgroundColor:'#22719E',
     borderColor:'#22719E',
     color:'#ffff',
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.7,
     shadowRadius: 4,
   },
   btn2:{
     textAlign:'center',
     marginTop:10,
     color:'#22719E',
     fontWeight:700,
   },
   login:{
     
     marginTop:10,
     
     color:'#22719E',
   }
 });
 

export default Signup