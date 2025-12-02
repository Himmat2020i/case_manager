import { createSlice } from "@reduxjs/toolkit";

export interface authState {
  user?: unknown;
  token?: string;
}

const initialState: authState = {};

const authSlice = createSlice({
  name: "auths",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    }
  }
});

export const { setToken } = authSlice.actions;

export default authSlice;
