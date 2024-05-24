import { TUser } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

type TInitialState = {
  token: null | string;
  userInfo: null | TUser;
};

const initialState: TInitialState = {
  token: null,
  userInfo: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    storeUserInfo: (state, action) => {
      const decodeUserData = jwtDecode(action.payload);
      state.token = action.payload;
      state.userInfo = decodeUserData as TUser;
    },
    removeUserInfo: (state) => {
      state.token = null;
      state.userInfo = null;
    }
  }
});

export const { storeUserInfo, removeUserInfo } = authSlice.actions;
export default authSlice.reducer;