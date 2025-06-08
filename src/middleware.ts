import { NextRequest, NextResponse } from 'next/server'
import { createClient } from './utils/supabase/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (path === '/welcome' && !session) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  console.log(path);
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    '/welcome'
  ],
}
