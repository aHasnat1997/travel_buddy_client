'use client';

import { jwtDecode } from "jwt-decode";

type TUserInfo = {
  name: string;
  email: string;
  image: string | null;
  role: string,
  iat: number,
  exp: number
};

export function storUserToken(name: string, payload: any) {
  return localStorage.setItem(name, JSON.stringify(payload));
};

export function getStoredUser(name: string): TUserInfo {
  let decodeUserData;
  if (localStorage.getItem(name)) {
    decodeUserData = jwtDecode(localStorage.getItem(name)!);
  }
  return decodeUserData as TUserInfo;
};

export function removeStoredUser(name: string) {
  return localStorage.removeItem(name);
};
