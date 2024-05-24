export type TUser = {
  name: string
  email: string
  image: string
  role: 'SUPER_ADMIN' | 'ADMIN' | 'DOCTOR' | 'PATIENT'
  iat: number
  exp: number
};
