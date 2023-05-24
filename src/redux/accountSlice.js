import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",

  // GLOBAL DATA MEMBER
  initialState: {
    balance: 1000,
    holder: "cdac",
    acnumber: "MUM00001",
  },

  // GLOBAL MEMBER FUNCN :: ACTION IN REDUX
  reducers: {
    deposit: (state) => {
      state.balance += 100;
    },
    withdraw: (state) => {
      state.balance -= 10;
    },
  },
});

export let { deposit, withdraw } = accountSlice.actions;
export default accountSlice.reducer;
