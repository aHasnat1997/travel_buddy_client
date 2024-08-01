import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { TUser } from './types';

const commonPrivateRoutes = ['/dashboard'];
const roleBasedPrivateRoutes = {
  admin: ['/dashboard/admin'],
  user: ['/dashboard/user']
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = cookies().get('refreshToken')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  };

  const { role } = jwtDecode(token!) as TUser;

  if (pathname === commonPrivateRoutes.find(r => r)) {
    return NextResponse.redirect(new URL(`/dashboard/${role.toLocaleLowerCase()}`, request.url))
  }

  if (pathname.startsWith(roleBasedPrivateRoutes.admin.find(r => r)!) && role === 'USER') {
    return NextResponse.redirect(new URL(`/`, request.url))
  }

  if (pathname.startsWith(roleBasedPrivateRoutes.user.find(r => r)!) && role === 'ADMIN') {
    return NextResponse.redirect(new URL(`/`, request.url))
  }

  // return NextResponse.redirect(new URL('/', request.url));
};

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard/:path*',
};