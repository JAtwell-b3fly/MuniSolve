import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage for React Native

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

const loginAuth = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    console.error("Login error:", error.code, error.message);
    setError(error.message);
  }
};

const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
};

const forgotPassword = async (email, ) => {
  try {
    
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent");
    alert(" Please check your email ")
  } catch (error) {
    console.error("Forgot password error:", error.code, error.message);
    
  }
};

const logout = async () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
};

const KeepuserLogin = async () =>{
  const auth = getAuth();
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  })
}
export {
  loginAuth,
  signUp,
  forgotPassword,
  logout,
  getCurrentUser,
  listenToAuthChanges,
  KeepuserLogin
};
