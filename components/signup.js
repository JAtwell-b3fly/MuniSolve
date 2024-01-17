import React, { useState, useEffect } from "react";
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
import { addProfile } from "./ChatHistroyFirebase";

const Signup = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    name: false,
    number: false,
    password: false,
  });

  const toggleShowPassword = ({ navigation }) => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    // Trigger form validation when fields change
    validateForm();
  }, [email, password, name, number]);

  const validateForm = () => {
    let newErrors = {};

    // Validate email field only if it has been touched
    if (touchedFields.email) {
      if (!email) {
        newErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Email is invalid.";
      }
    }

    // Validate name field only if it has been touched
    if (touchedFields.name) {
      if (!name) {
        newErrors.name = "Username is required.";
      } else if (!/^[a-zA-Z0-9_-]{3,16}$/.test(name)) {
        newErrors.name =
          "Username is invalid. It should contain only letters, numbers, hyphens, or underscores and be between 3 to 16 characters long.";
      }
    }

    // Validate number field only if it has been touched
    if (touchedFields.number) {
      if (!number) {
        newErrors.number = "Phone Number is required.";
      } else if (number.length < 10) {
        newErrors.number = "Phone Number must be at least 10 characters.";
      }
    }

    // Validate password field only if it has been touched
    if (touchedFields.password) {
      if (!password) {
        newErrors.password = "Password is required.";
      } else if (password.length < 6) {
        newErrors.password = "Password must be at least 6 characters.";
      }
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  const handleInputChange = (field, value) => {
    // Mark the field as touched when typing
    setTouchedFields({ ...touchedFields, [field]: true });
    // Update the corresponding state
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    if (field === "name") setName(value);
    if (field === "number") setNumber(value);
  };

  const handleSignup = async () => {
    if (isFormValid) {
      try {
        setLoading(true);
        signUp(email, password)
          .then(() => {
            addProfile(email, name, number);
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
      <Text style={styles.appName}>MUNI-SOLVE</Text>
      <Text style={styles.appSlogan}>
        AI-powered solutions for better communities
      </Text>
      <View style={styles.signup}>
        <Text style={styles.title}>SIGN UP</Text>
        <View style={{marginTop: 90, }}>  
          <View style={styles.inputContainer}>
            <Image source={require("../assets/user.png")} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={name}
              onChangeText={(value) => handleInputChange("name", value)}
            />
          </View>
          <Text style={{ color: "red", marginLeft: 24 }}>{errors.name}</Text>
          <View style={styles.inputContainer}>
            <Image source={require("../assets/3.png")} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={(value) => handleInputChange("email", value)}
            />
          </View>
          <Text style={{ color: "red", marginLeft: 24 }}>{errors.email}</Text>
          <View style={styles.inputContainer}>
            <Image source={require("../assets/2.png")} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              value={number}
              onChangeText={(value) => handleInputChange("number", value)}
            />
          </View>
          <Text style={{ color: "red", marginLeft: 24 }}>{errors.number}</Text>
          <View style={styles.inputContainer}>
            <Image source={require("../assets/MUNI.png")} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              secureTextEntry 
              onChangeText={(value) => handleInputChange("password", value)}
            />
          </View>
          <Text style={{ color: "red", marginLeft: 24 }}>{errors.password}</Text>
          {loading ? (
            <ActivityIndicator size="large" color="#0000FF" />
          ) : (
            <TouchableOpacity>
              <Text style={styles.Loginbtn} onPress={handleSignup}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          )}
          <Toast ref={(ref) => Toast.setRef(ref)} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, color: "gray", position: 'absolute', bottom: -98 }}>
              You already have an account?{" "}
            
            <TouchableOpacity
              style={styles.login}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.login}>SignUp</Text>
            </TouchableOpacity></Text>
          </View>
        </View>
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
    position: 'absolute',
    marginBottom: 60,
    alignSelf: 'center'
  },
  appName: {
    color: "#22719E",
    textAlign: "center",
    marginTop: 20,
    fontSize: 28,

    marginBottom: 60,
    position: "absolute",
    alignSelf: "center",
    marginTop: 240,
  },
  appSlogan: {
    color: "#000",
    textAlign: "center",
    marginTop: 20,
    fontSize: 12,

    marginBottom: 60,
    position: "absolute",
    alignSelf: "center",
    marginTop: 275,
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
  Loginbtn: {
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
  },
  forgot: {
    marginTop: 10,
    fontSize: 16,
    color: "#22719E",
  },
  login: {
    marginTop: 5,
    color: "#22719E",
    paddingTop: 2
  },
});

export default Signup;
