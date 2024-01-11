import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { forgotPassword } from "./LoginAuth";
import Toast from "react-native-toast-message";

export default function Login({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Trigger form validation when email or password changes
    validateForm();
  }, [email, password]);

  const handleInputChange = (field, value) => {
    // Mark the field as touched when typing
    setTouchedFields({ ...touchedFields, [field]: true });
    // Update the corresponding state
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
  };

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

  const handleAuthStateChange = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  const handleForgot = () => {
    validateForm(); // Trigger validation before attempting to sign in

    if (isFormValid) {
    try {
      setLoading(true);
      forgotPassword(email)
        .then(() => {
          navigation.navigate("Profile");
          Toast.show({
            type: "success",
            position: "top",
            text1: "Check Your email",
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
      <Text style={styles.appSlogan}>AI-powered solutions for better communities</Text>
      <View style={styles.signup}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.paragraph}>
          Enter the email address you used when you joined and we’ll send you
          instructions to reset your password
        </Text>
        <View style={styles.inputContainer}>
            <Image source={require("../assets/3.png")} style={styles.icon} />
            <TextInput
          style={[
            styles.input,
            touchedFields.email && errors.email
              ? { borderColor: "red", borderWidth: 1 }
              : null,
          ]}
          placeholder="Email"
          value={email}
          onChangeText={(value) => handleInputChange("email", value)}
        />
          </View>
          <Text style={{ color: "red", marginLeft: 24 }}>{errors.email}</Text>
          
        <Text style={{ color: "red", marginLeft: 24 }}>{errors.email}</Text>
        <Text style={{ textAlign: "center", fontSize: 16, color: "gray" }}>
          You remember your{" "}
          <TouchableOpacity
            style={styles.remember}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </TouchableOpacity>
        </Text>

        {loading ? (
          <ActivityIndicator size="large" color="#0000FF" />
        ) : (
          <TouchableOpacity onPress={handleForgot}>
            <Text style={styles.Restbtn}>Rest Password</Text>
          </TouchableOpacity>
        )}
        {/* Toast component for notifications */}
        <Toast ref={(ref) => Toast.setRef(ref)} />
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

    height: 0,

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
    marginBottom: 40,
  },
  appName: {
    color: "#22719E",
    textAlign: "center",
    marginTop: 20,
    fontSize: 28,
    fontWeight: 700,
    marginBottom:60,
    position: "absolute",
    alignSelf: "center",
    marginTop: 240,
  },
  appSlogan: {
    color: "#000",
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    fontWeight: 700,
    marginBottom:60,
    position: "absolute",
    alignSelf: "center",
    marginTop: 270, 
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
  Restbtn: {
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
  remember: {
    marginTop: 10,

    color: "#22719E",
  },
  paragraph: {
    width: 280,
    fontWeight: 500,
    color: "gray",
    marginLeft: 10,
    marginTop: 10,
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
});
