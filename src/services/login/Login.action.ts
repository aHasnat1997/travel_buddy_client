'use server';

import { cookies } from "next/headers";

export async function LoginUser(payload: { email: string, password: string }) {
  // const res = await fetch(`https://travelbuddyserver-ahasnat1997s-projects.vercel.app/api/auth/login`, {
  const res = await fetch(`http://localhost:3030/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(payload),
    credentials: 'include'
  });
  const result = await res.json();

  return result;
};
