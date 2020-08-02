import React, { useEffect } from 'react';

import type { AppProps } from 'next/app'
import {Router} from 'next/router'
import Head from 'next/head'
import '../styles/global.scss'
import { BreakpointProvider, Query } from '../core/react-breakpoint'
import { Provider } from 'react-redux'
import store from '../core/store/store'
import { IntlProvider } from 'react-intl'
import flatten from 'flat'
import { toggleMenu, activateSpinner, disableSpinner, setPreviousUrl, setNavigationOccurred } from '../core/store/reducers/app.reducer';

// import 'react-app-polyfill/ie9';
// import 'react-app-polyfill/stable';
// import 'svg-classlist-polyfill'
// import smoothscroll from 'smoothscroll-polyfill';
import { watchForHover } from '../helper/generic-helper'
import Spinner from '../components/spinner/spinner';
import Header from '../components/header/header';
import Body from '../components/body/body';

// smoothscroll.polyfill();

//---------- Window object extension
export interface CustomTemplate{
  closeMenu: ()=>void;
  openPage: (id:string, skipMenu?:boolean)=>void;
}
declare global {
  interface Window { CustomTemplate: CustomTemplate; }
}


//---------- react-intl configuration
if (!Intl.PluralRules) {
    require('@formatjs/intl-pluralrules/polyfill');
    require('@formatjs/intl-pluralrules/locale-data/en'); // Add locale data for en
}

var messages_en:any = flatten(require('../translations/en.json'));
const messages = {
    'en': messages_en
};
const language = 'en'; //navigator.language.split(/[-_]/)[0];  // language without region code


//---------- React Breakpoint configuration
const queries : Query = {
  xs: '(max-width: 575.98px)',
  sm: '(max-width: 767.98px)',
  md: '(max-width: 991.98px)',
  lg: '(max-width: 1199.98px)',
  xl: '(min-width: 1199.99px)',
  upXs: '(min-width: 0px)',
  upSm: '(min-width: 576px)',
  upMd: '(min-width: 768px)',
  upLg: '(min-width: 992px)',
  upXl: '(min-width: 1200px)'
}

//---------- Bind router events to show loader
Router.events.on('routeChangeStart', () => {store.dispatch(activateSpinner()); store.dispatch(setPreviousUrl(location.href)); store.dispatch(setNavigationOccurred(true));});
Router.events.on('routeChangeComplete', () => store.dispatch(disableSpinner()));
Router.events.on('routeChangeError', () => store.dispatch(disableSpinner()));
Router.events.on('hashChangeStart', () => {store.dispatch(setPreviousUrl(location.href)); store.dispatch(setNavigationOccurred(true));});

//I need to handle the following event because by default Next.js, whene there is an hash change, scrolls the body
//to the target element (https://github.com/vercel/next.js/blob/1b033423dcc43b51752013cb8807051e66917d58/packages/next/client/index.js)
//This causes an issue on my side because instead of the body, I've a custome root scrollable element (the page)
Router.events.on('hashChangeComplete', () => {document.body.scrollTop=0;});


//---------- COMPONENT
function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    watchForHover();
  });
  
  return (    
    <>
      <Head>
        {/* <link rel="stylesheet" type="text/css" href="../../custom_template/css/demo.css" /> */}
        {/* <link rel="stylesheet" type="text/css" href="../../custom_template/css/component.css" /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /><script src="../../custom_template/js/modernizr-custom.min.js" />
        <link rel="manifest" href="/manifest.json" />
        <link href="https://fonts.googleapis.com/css?family=Inconsolata:400,700&amp;display=swap" rel="stylesheet" />
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="d12031df-a146-4c32-8276-e1d5c086b932" data-blockingmode="auto" type="text/javascript"></script>
        <title>Keadex</title>
      </Head>
      <BreakpointProvider queries={queries}>
        <Provider store={store}>
          <IntlProvider locale={language} messages={messages[language]}>
            <div>
              <Spinner />
              <div>
                <Header />

                {/* pages stack */}
                {/* I need to leave page-stack div outside the body because the javascript of
                the template cannot wait the rendering of body component since it calculates
                the number of the pages of the stack*/}
                <div className="pages-stack">
                  <Body PageComponent={Component} pageProps={pageProps} />
                    {/* <Component {...pageProps} />
                  </Body> */}
                </div>
                
                <button className="menu-button" onClick={()=>store.dispatch(toggleMenu())}><span>Menu</span></button>
              </div>
            </div>
          </IntlProvider>
        </Provider>
      </BreakpointProvider>
    </>
  )
}


// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App
