import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { auth } from '../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage for React Native

let currentUser = null;

const getCurrentUser = () => {
  return currentUser;
};

const listenToAuthChanges = (callback) => {
  onAuthStateChanged(auth, (user) => {
    currentUser = user;
    callback(user);
  });
};

const login = async (email, password, setLoading, setError) => {
  try {
    setLoading(true);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in:", user);

    // Store user token in AsyncStorage after successful login
    await AsyncStorage.setItem('userToken', user.getIdToken());
    setLoading(false);
  } catch (error) {
    console.error("Login error:", error.code, error.message);
    setError(error.message);
    setLoading(false);
  }
};

const signUp = async (email, password, setLoading, setError) => {
  try {
    setLoading(true);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed up:", user);

    // Store user token in AsyncStorage after successful signup
    await AsyncStorage.setItem('userToken', user.getIdToken());
    setLoading(false);
  } catch (error) {
    console.error("Signup error:", error.code, error.message);
    setError(error.message);
    setLoading(false);
  }
};

const forgotPassword = async (email, setLoading, setError) => {
  try {
    setLoading(true);
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent");
    setLoading(false);
  } catch (error) {
    console.error("Forgot password error:", error.code, error.message);
    setError(error.message);
    setLoading(false);
  }
};

const logout = async () => {
  try {
    await AsyncStorage.removeItem('userToken'); // Remove user token from AsyncStorage on logout
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export { login, signUp, forgotPassword, logout, getCurrentUser, listenToAuthChanges };
