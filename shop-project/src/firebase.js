import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNEP7o6E-kprQ4JdpWitM7DyXlKEb-mDM",
  authDomain: "shop-project-7d119.firebaseapp.com",
  projectId: "shop-project-7d119",
  storageBucket: "shop-project-7d119.appspot.com",
  messagingSenderId: "125120635725",
  appId: "1:125120635725:web:c0828e86bc31da0b680d04",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const firestore = firebase.firestore();
export { auth, googleAuthProvider, firestore };

export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
};
