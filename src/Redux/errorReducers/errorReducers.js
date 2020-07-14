import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: null,
  reducers: {
    getUsersError: (state, action) => action.payload,
    // deleteContactsError: (state, action) => action.payload,
    // postContactsError: (state, action) => action.payload,
  },
});
