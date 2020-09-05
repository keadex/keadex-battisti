import React, { useEffect } from 'react';

import type { AppProps } from 'next/app'
import {Router, useRouter} from 'next/router'
import Head from 'next/head'
import '../styles/global.scss'
import { BreakpointProvider, Query } from '../core/react-breakpoint'
import { Provider } from 'react-redux'
import { wrapper, StoreService } from '../core/store/store';
import { IntlProvider } from 'react-intl'
import flatten from 'flat'
import { toggleMenu, activateSpinner, disableSpinner, setPreviousUrl, setNavigationOccurred, setIsAppInitialized, setQuotes } from '../core/store/reducers/app.reducer';

// import 'react-app-polyfill/ie9';
// import 'react-app-polyfill/stable';
// import 'svg-classlist-polyfill'
// import smoothscroll from 'smoothscroll-polyfill';
import { watchForHover, isClient } from '../helper/generic-helper';
import Spinner from '../components/spinner/spinner';
import Header from '../components/header/header';
import Body from '../components/body/body';
import {useStore} from 'react-redux';
import useSWR from 'swr';
import NetworkService, { GET_QUOTES_API } from '../core/network/network.service';

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


//---------- COMPONENT
function MyApp({ Component, pageProps }: AppProps) {
  
  const store = useStore();
  StoreService.getInstance().saveStore(store);
  
  const router = useRouter();

  const onRouteChangeStart = ()=>{
    store.dispatch(activateSpinner());
    store.dispatch(setPreviousUrl(location.href));
    // store.dispatch(setNavigationOccurred(true));
  }

  const onRouteChangeComplete = ()=>{
    //console.log("routeChangeComplete " + location.href + " -- " + store.getState().app.previousUrl);
    store.dispatch(disableSpinner());
    if (location.href != store.getState().app.previousUrl){
      store.dispatch(setNavigationOccurred(true));
    }else{
      store.dispatch(setNavigationOccurred(false));
    }
  }

  const onRouteChangeError = ()=>{
    store.dispatch(disableSpinner());
    store.dispatch(setNavigationOccurred(false));
  }

  const onHashChangeStart = ()=>{
    store.dispatch(setPreviousUrl(location.href));
    // store.dispatch(setNavigationOccurred(true));
  }

  const onHashChangeComplete = ()=>{
    // console.log("hashChangeComplete " + location.href + " -- " + store.getState().app.previousUrl);
    // document.body.scrollTop=0;
    if (location.href != store.getState().app.previousUrl){
      //console.log("occurred");
      store.dispatch(setNavigationOccurred(true));
    }else{
      //console.log("not occurred");
      store.dispatch(setNavigationOccurred(false));
    }
  }
  
  //useSWR caches already done requests and doesn't resubmit the same request.
  //So it's not a problem if the following line is called multiple time: only a request is submitted
  const { data, error } = useSWR(GET_QUOTES_API, (url)=>NetworkService.getInstance().getQuotes());
  

  //---------- useEffect
  useEffect(() => {

    if (!store.getState().app.isAppInitialized){
      watchForHover();
      store.dispatch(setIsAppInitialized(true));
    }

    if (!error && data && data.data && data.data.results && store.getState().app.quotes.length == 0){
      //save quotes only if not already saved
      store.dispatch(setQuotes(data.data.results));
    }

    //---------- Bind router events to show loader
    console.debug("Register route events");
    router.events.on('routeChangeStart', onRouteChangeStart);
    router.events.on('routeChangeComplete', onRouteChangeComplete);
    router.events.on('routeChangeError', onRouteChangeError);
    router.events.on('hashChangeStart', onHashChangeStart);
    router.events.on('hashChangeComplete', onHashChangeComplete);

    //component unmount
    return () => {
      console.debug("Unregister route events");
      router.events.off('routeChangeStart', onRouteChangeStart);
      router.events.off('routeChangeComplete', onRouteChangeComplete);
      router.events.off('routeChangeError', onRouteChangeError);
      router.events.off('hashChangeStart', onHashChangeStart);
      router.events.off('hashChangeComplete', onHashChangeComplete);
    }
  });


  //---------- rendering
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
        {/* <Provider store={store}> */}
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
        {/* </Provider> */}
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

export default wrapper.withRedux(MyApp);
