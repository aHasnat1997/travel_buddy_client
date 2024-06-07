export type TUser = {
  id: string
  name: string
  email: string
  role: 'SUPER_ADMIN' | 'ADMIN' | 'USER'
};

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};