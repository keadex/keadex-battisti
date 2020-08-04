const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const compose = require('next-compose')
const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules')(['react-scrollmagic']);

// module.exports = withSass(withImages());

module.exports = compose([
  // [withSass],
  // [withCSS],
  // [withFonts],
  [withImages],
  [withTM],
  {
    webpack: cfg => {
      const originalEntry = cfg.entry
      cfg.entry = async () => {
        const entries = await originalEntry()

        if (
          entries['main.js'] &&
          !entries['main.js'].includes('./src/client/polyfills.ts')
        ) {
          entries['main.js'].unshift('./src/client/polyfills.ts')
        }

        return entries
      }

      return cfg
    }
  }
])