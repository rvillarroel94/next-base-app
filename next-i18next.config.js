/** @type {import('next-i18next').UserConfig} */
module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  localePath: typeof window === 'undefined' ?
    require('path').resolve('./public/locales') : '/locales',
  defaultNS: 'common',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  react: { useSuspense: true },//this line
}
