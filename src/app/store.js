// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/userDetailsSlice";
import authReducer from "../features/authSlice";

// Check local storage for token
const persistedToken = localStorage.getItem('token');

const store = configureStore({
  reducer: {
    // add your reducer(s) here
    user:userReducer,
    auth: authReducer,
  },
  preloadedState: {
    auth: {
      isAuthenticated: Boolean(persistedToken),
      token: persistedToken,
    },
  },
});

export default store;
