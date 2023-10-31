import { signInWithEmailAndPassword } from "@/firebase";
import { createSlice } from "@reduxjs/toolkit";

let logoutTimeout;
let expirationCheckInterval;
let localStorage; 


if (typeof window === "undefined") {

  const { LocalStorage } = require("node-localstorage");
  localStorage = new LocalStorage("./scratch");
} else {
  localStorage = window.localStorage;
}

const initialState = {
  user: null,
  isAuthenticated: false,
  token: localStorage.getItem("token") || null,
  tokenExpiration: localStorage.getItem("tokenExpiration")
    ? parseInt(localStorage.getItem("tokenExpiration"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = !!action.payload.user;
      state.token = action.payload.token;
      state.tokenExpiration = Date.now() + 10000; // 1-hour token expiration
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("tokenExpiration", state.tokenExpiration.toString());
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.token = null;
      state.tokenExpiration = null;
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    },
  },
});

// Check if the token has expired when the app loads
const tokenExpiration = parseInt(localStorage.getItem("tokenExpiration"));
if (tokenExpiration && Date.now() >= tokenExpiration) {
  authSlice.actions.clearUser();
}

const checkTokenExpiration = () => (dispatch, getState) => {
  const state = getState();
  if (state.auth.tokenExpiration && Date.now() >= state.auth.tokenExpiration) {
    dispatch(authSlice.actions.clearUser());
  }
};

const clearLogoutTimer = () => {
  if (logoutTimeout) {
    clearTimeout(logoutTimeout);
  }
};

export const startTokenExpirationCheck = (dispatch) => {
  expirationCheckInterval = setInterval(() => {
    dispatch(checkTokenExpiration());
  }, 1000); // Check every second, adjust as needed
};

const stopTokenExpirationCheck = () => {
  clearInterval(expirationCheckInterval);
};
export const clearUser = () => (dispatch) => {
  clearLogoutTimer();
  stopTokenExpirationCheck();
  dispatch(authSlice.actions.clearUser());
};

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const firebaseUser = await signInWithEmailAndPassword(email, password);
    const userToken = await firebaseUser?.getIdToken();
    dispatch(
      authSlice.actions.setUser({
        user: firebaseUser,
        token: userToken,
      })
    );

    const logoutTime = 10000; // 1 hour in milliseconds
    logoutTimeout = setTimeout(() => {
      dispatch(authSlice.actions.clearUser());
    }, logoutTime);

    startTokenExpirationCheck(dispatch); // Start token expiration check
  } catch (error) {
    console.error("Error signing in:", error);
  }
};



export const authActions = authSlice.actions;
export default authSlice;
