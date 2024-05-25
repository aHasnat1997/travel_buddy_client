'use server';

export async function FindAllTrips() {
  const res = await fetch(`http://localhost:3030/api/trips`, {
    cache: 'no-store'
  });
  const result = await res.json();
  return result;
};
