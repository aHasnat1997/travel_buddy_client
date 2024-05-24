import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { TUser } from './types';
import { ConstUserRole } from './constant';

const commonPrivateRoutes = ['/dashboard'];
const roleBasedPrivateRoutes = {
  admin: '/dashboard/admin',
  doctor: '/dashboard/doctor'
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get('access_token')?.value;
  const { role } = jwtDecode(accessToken!) as TUser;

  if (!accessToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (pathname === '/dashboard') {
    return NextResponse.redirect(new URL(`/dashboard/${role.toLocaleLowerCase()}`, request.url))

  }

  // if (role) {
  //   if (role === ConstUserRole.ADMIN) {

  //   }
  // }

  // console.info('===============>', { pathname, accessToken, role });



  // return NextResponse.redirect(new URL('/', request.url));
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
};