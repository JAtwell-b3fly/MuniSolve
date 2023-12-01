import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { signUp } from "../components/LoginAuth";
import Toast from "react-native-toast-message";

const Signup = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");

  const toggleShowPassword = ({ navigation }) => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    // Trigger form validation when email or password changes
    validateForm();
  }, [email, password]);

  const validateForm = () => {
    let errors = {};

    // Validate email field
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid.";
    }

    if (!name) {
      errors.name = "Username is required.";
    } else if (!/^[a-zA-Z0-9_-]{3,16}$/.test(name)) {
      errors.name = "Username is invalid. It should contain only letters, numbers, hyphens, or underscores and be between 3 to 16 characters long.";
    }
    // Validate password field
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }
    if (!number) {
      errors.number = "Phone Number is required.";
    } else if (number.length < 10) {
      errors.number = "Phone Number must be at least 10 characters.";
    }    

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSignup = async (user) => {
    setUserId(user);
    if (isFormValid) {
    try {
      setLoading(true);
      signUp(email, password)
        .then(() => {
          navigation.navigate("Profile");
          Toast.show({
            type: "success",
            position: "top",
            text1: "Signup Successful",
            visibilityTime: 3000, // 3 seconds
            autoHide: true,
          });
        })
        .catch(() => {
          Toast.show({
            type: "error",
            position: "top",
            text1: "Error in Creating account",
            visibilityTime: 3000, // 3 seconds
            autoHide: true,
          });
          setLoading(false);
        });
    } catch (error) {}
  }
  };
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
          <TextInput style={styles.input} 
          placeholder="Username" 
          value={name}
          onChangeText={setName}
          />
        </View>
        <Text style={{ color: "red", marginLeft: 24 }}>{errors.name}</Text>
        <View style={styles.inputContainer}>
          <Image source={require("../assets/3.png")} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Text style={{ color: "red", marginLeft: 24 }}>{errors.email}</Text>
        <View style={styles.inputContainer}>
          <Image source={require("../assets/2.png")} style={styles.icon} />
          <TextInput style={styles.input} 
          placeholder="Mobile Number" 
          value={number}
          onChangeText={setNumber}
          />
        </View>
        <Text style={{ color: "red", marginLeft: 24 }}>{errors.number}</Text>
        <View style={styles.inputContainer}>
          <Image source={require("../assets/MUNI.png")} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          
        </View>
        <Text style={{ color: "red", marginLeft: 24 }}>{errors.password}</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000FF" />
        ) : (
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.Signupbtn}>SIGN UP</Text>
          </TouchableOpacity>
        )}
        {/* Toast component for notifications */}
        <Toast ref={(ref) => Toast.setRef(ref)} />

        <Text style={{ textAlign: "center", fontSize: 16, color: "gray" }}>
          You already have an account ?{" "}
          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

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
    marginBottom: 60,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 7,
    marginVertical: 10,
    backgroundColor: "#ffff",
    width: 250,
    height: 40,
    marginLeft: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: "contain",
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ffff",
  },
  Signupbtn: {
    borderWidth: 1,
    width: 250,
    height: 40,
    textAlign: "center",
    paddingTop: 9,
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "#22719E",
    borderColor: "#22719E",
    color: "#ffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  btn2: {
    textAlign: "center",
    marginTop: 10,
    color: "#22719E",
    fontWeight: 700,
  },
  login: {
    marginTop: 10,

    color: "#22719E",
  },
});

export default Signup;
