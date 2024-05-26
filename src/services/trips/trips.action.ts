'use server';

export async function FindAllTrips() {
  const res = await fetch(`https://travelbuddyserver-ahasnat1997s-projects.vercel.app/api/trips`, {
    cache: 'no-store'
  });
  const result = await res.json();
  return result;
};
