import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  
  if (!cookieLocale) {
    const acceptLanguage = request.headers.get('accept-language');
    let defaultLocale = 'en';
    
    if (acceptLanguage) {
      if (acceptLanguage.startsWith('de')) defaultLocale = 'de';
      else if (acceptLanguage.startsWith('hu')) defaultLocale = 'hu';
    }
    
    const response = NextResponse.next();
    response.cookies.set('NEXT_LOCALE', defaultLocale);
    return response;
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
