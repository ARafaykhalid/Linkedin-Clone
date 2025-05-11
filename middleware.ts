import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  // Log current path for debugging
  console.log('Middleware intercepted path:', request.nextUrl.pathname);
  
  // Check for authentication using NextAuth JWT token
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  
  const isAuthenticated = !!token;
  const isAuthPage = request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register';
  
  // Protected routes - redirect to login if not authenticated
  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/feed')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // If already authenticated and trying to access login/register pages,
  // redirect to feed
  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL('/feed', request.url));
  }
  
  // Allow all other routes to proceed normally
  return NextResponse.next();
}

// Configure middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files like robots.txt, favicon.ico, etc.
     */
    '/((?!api|_next|_static|_vercel|[\\w-]+\\.\\w+).*)',
  ],
}; 