'use server';

export async function FindAllTrips() {
  // const res = await fetch(`https://travelbuddyserver-ahasnat1997s-projects.vercel.app/api/trips`, {
  const res = await fetch(`http://localhost:3030/api/trips?limit=15`, {
    cache: 'no-store'
  });
  const result = await res.json();
  return result;
};
