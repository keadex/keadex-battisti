import React, { useEffect } from 'react';

import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.scss'
import { BreakpointProvider, Query } from '../core/react-breakpoint'
import { Provider } from 'react-redux'
import store from '../core/store/store'
import { IntlProvider } from 'react-intl'
import flatten from 'flat'

// import 'react-app-polyfill/ie9';
// import 'react-app-polyfill/stable';
// import 'svg-classlist-polyfill'
// import smoothscroll from 'smoothscroll-polyfill';
import { watchForHover } from '../helper/generic-helper'

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


function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    watchForHover();
  });
  
  return (
    <>
      <Head>
        <title>ciao</title>
      </Head>
      <BreakpointProvider queries={queries}>
        <Provider store={store}>
          <IntlProvider locale={language} messages={messages[language]}>
            <Component {...pageProps} />
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
