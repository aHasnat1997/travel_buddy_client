'use server';

export async function FindAllAdmin() {
  const res = await fetch(`http://localhost:3030/api/v1/doctor/all`, {
    cache: 'no-store'
  });
  const result = await res.json();
  return result;
};
