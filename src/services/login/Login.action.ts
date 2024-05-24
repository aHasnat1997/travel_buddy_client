'use server';

import { cookies } from "next/headers";

export async function LoginUser(payload: { email: string, password: string }) {
  const res = await fetch(`http://localhost:3030/api/v1/auth/login`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(payload),
    credentials: 'include'
  });
  const result = await res.json();
  // console.log(result);

  cookies().set({
    name: 'access_token',
    value: result?.data?.accessToken,
    secure: true,
    httpOnly: true
  });

  return result;
};
