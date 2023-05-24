import { configureStore, createSlice } from "@reduxjs/toolkit";
import accountSliceReducer from "./accountSlice";

// SETUP THE STORE :: STORE IS WITH ACCOUNT SLICE/INFORMATION
export default configureStore({
  reducer: {
    account: accountSliceReducer,
  },
});
