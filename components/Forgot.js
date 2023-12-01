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
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
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

    // Validate password field
    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
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
      <View style={styles.signup}>
        <Text style={styles.title}>SIGN IN</Text>
        <Text style={styles.paragraph}>
          Enter the email address you used when you joined and we’ll send you
          instructions to reset your password
        </Text>
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
    paddingBottom: 400,
  },
  title: {
    color: "#22719E",
    textAlign: "center",
    marginTop: 20,
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 40,
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
