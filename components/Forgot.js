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

export default function Login() {
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
        <Text style={styles.paragraph}>
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password
          </Text>        
        <View style={styles.inputContainer}>
            <Image source={require("../assets/3.png")} style={styles.icon} />
            <TextInput style={styles.input} placeholder="Email" />
          </View>
          <Text style={{textAlign: 'right', fontSize: 16,}}>You remember your <TouchableOpacity style={styles.remember}>Login</TouchableOpacity></Text>
          <TouchableOpacity  ><Text style={styles.Restbtn}>Rest Password</Text></TouchableOpacity> 
                   
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
    height: 100,
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
    marginBottom:40,
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
  Restbtn:{
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
  remember:{
    
    marginTop:10,
    
    color:'#22719E',
  },
  paragraph: {
    width: 280,
    fontWeight: 500,
    color: "gray",
    marginLeft: 10,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16
  },
});
