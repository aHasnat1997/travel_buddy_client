import { TUser } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

type TInitialState = {
  token: null | string;
  user: null | TUser;
};

const initialState: TInitialState = {
  token: null,
  user: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeUserInfo: (state, action) => {
      // const decodeUserData = jwtDecode(action.payload);
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    removeUserInfo: (state) => {
      state.token = null;
      state.user = null;
    }
  }
});

export const { storeUserInfo, removeUserInfo } = authSlice.actions;
export default authSlice.reducer;