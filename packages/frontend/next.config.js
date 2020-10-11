// const withSass = require('@zeit/next-sass');
// const withCSS = require('@zeit/next-css');
// const withImages = require('next-images');
const compose = require('next-compose')
// const withFonts = require('next-fonts');
const optimizedImages = require('next-optimized-images');
const withTM = require('next-transpile-modules')(['react-scrollmagic', 'react-syntax-highlighter']);

// module.exports = withSass(withImages());

module.exports = compose([
  // [withSass],
  // [withCSS],
  // [withFonts],
  // [withImages],
  [optimizedImages],
  [withTM],
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