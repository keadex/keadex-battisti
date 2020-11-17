import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html className="js" lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel='mask-icon' href='/favicon.svg' color='#2C2C2C' />
          <link rel='apple-touch-icon' sizes='192x192' href='/img/keadex-logo-192x192.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />     
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          
          <link rel="manifest" href="/manifest.json" />
          <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="d12031df-a146-4c32-8276-e1d5c086b932" data-blockingmode="auto" type="text/javascript" async />
          {/* <script id="CookieDeclaration" src="https://consent.cookiebot.com/d12031df-a146-4c32-8276-e1d5c086b932/cd.js" type="text/javascript" async></script> */}
          <meta name='application-name' content='Keadex' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Keadex' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#2C2C2C' />
          <meta name='msapplication-config' content='/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2C2C2C' />
          <meta name='msapplication-tap-highlight' content='no' />
          
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://keadex.io' />
          <meta name='twitter:title' content='Keadex' />
          <meta name='twitter:description' content='An ever-evolving experimental platform, fully free and open source.' />
          {/* <meta name='twitter:image' content='https://yourdomain.com/static/icons/android-chrome-192x192.png' /> */}
          <meta name='twitter:creator' content='@ke4dex' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Keadex' />
          <meta property='og:description' content='An ever-evolving experimental platform, fully free and open source.' />
          <meta property='og:site_name' content='Keadex' />
          <meta property='og:url' content='https://keadex.io' />
          {/* <meta property='og:image' content='https://yourdomain.com/static/icons/apple-touch-icon.png' /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <script src="../../custom_template/js/classie.min.js"/> */}
          {/* <script src="../../custom_template/js/main.min.js" async/> */}
          {/* <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" /> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument