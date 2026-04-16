import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/datadynamic',
  assetPrefix: '/datadynamic',
};

export default withNextIntl(nextConfig);
