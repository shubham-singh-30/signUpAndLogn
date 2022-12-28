import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from '../features/signup/signUpSlice';

export const store = configureStore({
  reducer: {
    signUp: signUpSlice,
  },
});
