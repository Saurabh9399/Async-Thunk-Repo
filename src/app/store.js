// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/userDetailsSlice";
import authReducer from "../features/authSlice";

const store = configureStore({
  reducer: {
    // add your reducer(s) here
    user:userReducer,
    auth: authReducer,
  },
});

export default store;
