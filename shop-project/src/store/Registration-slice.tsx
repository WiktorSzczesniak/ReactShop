import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../firebase";

const initialState = {
  user: null,
  error: null,
};

export const registerUser = createAsyncThunk(
  "registration/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        userData.email,
        userData.password
      );

      await response.user?.updateProfile({
        displayName: `${userData.firstName} ${userData.lastName}`,
      });

      return response.user;
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        return rejectWithValue("Email address is already in use.");
      } else {
        return rejectWithValue("An error occurred during registration.");
      }
    }
  }
);

const registrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.user = null;
        state.error = action.payload;
      });
  },
});

export default registrationSlice;
