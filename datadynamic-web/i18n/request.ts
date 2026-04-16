import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
  // Read locale from cookie or header
  const cookieStore = await cookies();
  const headerList = await headers();
  
  let locale = cookieStore.get('NEXT_LOCALE')?.value;
  
  if (!locale) {
    const acceptLanguage = headerList.get('accept-language');
    if (acceptLanguage) {
      if (acceptLanguage.startsWith('de')) locale = 'de';
      else if (acceptLanguage.startsWith('hu')) locale = 'hu';
      else locale = 'en';
    } else {
      locale = 'en';
    }
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
