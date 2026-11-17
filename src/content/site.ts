/** Dilden bağımsız site ayarları */
export const siteConfig = {
  name: 'Test',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  email: 'merhaba@test.example',
  social: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
  },
};
