/** @type {import('next').NextConfig} */
const compose = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withTM = require('next-transpile-modules')(['react-scrollmagic', 'react-syntax-highlighter']);
const withVideos = require('next-videos')
const withPWA = require('next-pwa');
const runtimeCaching = require("next-pwa/cache");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = compose([
  {
    reactStrictMode: true,
    images: {
      disableStaticImages: true,
    }
  },
  [withVideos],
  [optimizedImages],
  [withTM],
  [withBundleAnalyzer],
  [withPWA, {
    pwa: {
      runtimeCaching,
      disable: process.env.NODE_ENV === 'development',
      dest: 'public',
      buildExcludes: [/middleware-manifest.json$/]
    }
  }]],
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
      };
      return cfg
    }
  }
)