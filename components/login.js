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
      <Image style={styles.logo} source={require("../assets/MUNI-SOLVE (2).png")} />
      <View style={styles.signup}>
        <Text style={styles.title}>SIGN IN</Text>
        <View style={styles.inputContainer}>
            <Image source={require("../assets/3.png")} style={styles.icon} />
            <TextInput style={styles.input} placeholder="Email" />
          </View>
          <View style={styles.inputContainer}>
            <Image source={require("../assets/MUNI.png")} style={styles.icon} />
            <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword} />
          </View>
          <TouchableOpacity  style={styles.forgot}>FORGOT PASSWORD</TouchableOpacity>
          <TouchableOpacity  ><Text style={styles.Loginbtn}>SIGN IN</Text></TouchableOpacity> 
          <TouchableOpacity style={styles.btn2} >SIGN UP</TouchableOpacity>                   
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
    height: 250,
    width: 250,
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
  Loginbtn:{
    borderWidth:1,
    width:250,
    height:40,
    textAlign:'center',
    paddingTop:9,
    alignSelf:'center',
    marginTop:40,
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
  forgot:{
    marginLeft:120,
    marginTop:10,
    fontWeight:700,
    color:'#22719E',
  }
});
