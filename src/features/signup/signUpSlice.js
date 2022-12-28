import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  message: "",
};

export const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default signUpSlice.reducer;
