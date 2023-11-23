// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/userDetailsSlice"

const store = configureStore({
  reducer: {
    // add your reducer(s) here
    user:userReducer
  },
});

export default store;
