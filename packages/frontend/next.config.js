// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');
const compose = require('next-compose')
const optimizedImages = require('next-optimized-images');
const withTM = require('next-transpile-modules')(['react-scrollmagic', 'react-syntax-highlighter']);
const withModernizr = require("next-plugin-modernizr");

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = compose([
  [withModernizr],
  [optimizedImages],
  [withTM],
  [withBundleAnalyzer],
  {
    webpack: cfg => {
      const originalEntry = cfg.entry
      cfg.entry = async () => {
        const entries = await originalEntry()

        if (
          entries['main.js'] &&
          !entries['main.js'].includes('./src/core/polyfills.ts')
        ) {
          entries['main.js'].unshift('./src/core/polyfills.ts')
        }

        return entries
      }

      return cfg
    }
  }
])