import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/emtech-admin') && !request.nextUrl.pathname.startsWith('/emtech-admin/login')) {
    const hasAuth = request.cookies.has('emtech_admin_auth');
    if (!hasAuth) {
      return NextResponse.redirect(new URL('/emtech-admin/login', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/emtech-admin/:path*'],
};
