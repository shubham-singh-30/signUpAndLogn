import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  message: "",
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    handleSignUp: (state, action) => {
      const saved = localStorage.getItem("userSignup");

      if (saved !== null) {
        const initialValue = JSON.parse(saved);
        let existingEmail = initialValue.find(
          (x) => x.email === action.payload.email
        );
        if (existingEmail) {
          state.message = "User already exists";
        } else {
          initialValue.push(action.payload);
          state.message = "User Created Successfully";
          localStorage.setItem("userSignup", JSON.stringify(initialValue));
        }
      } else {
        state.user.push(action.payload);
        state.message = "User Created Successfully";
        localStorage.setItem("userSignup", JSON.stringify([action.payload]));
      }
    },
  },
});

export const { handleSignUp } = signUpSlice.actions;


export default signUpSlice.reducer;
