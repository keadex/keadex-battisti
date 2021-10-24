const compose = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['react-scrollmagic', 'react-syntax-highlighter']);
const withModernizr = require("next-plugin-modernizr");
const withVideos = require('next-videos')
const withPWA = require('next-pwa');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = compose([
  [withModernizr],
  [withVideos],
  [withTM],
  [withBundleAnalyzer],
  [withPWA, {
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      dest: 'public'
    }
  }]],
  {
    webpack: cfg => {
      //console.log("ccccaaaaaaa");
      //console.log(cfg);
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
)