export type TUser = {
  id: string,
  name: string,
  email: string,
  role: 'SUPER_ADMIN' | 'ADMIN' | 'USER',
};

export type IMeta = {
  page: number,
  limit: number,
  total: number,
};

export type TCardProps = {
  id: string,
  title: string,
  image: string,
  price: number,
  destination: string,
  places: string,
  duration: string,
};