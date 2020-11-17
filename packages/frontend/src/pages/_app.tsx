import React, { useEffect } from 'react';
import App, { AppContext } from "next/app";
import type { AppProps } from 'next/app'
import {useRouter} from 'next/router'
import { BreakpointProvider, Query } from '../core/react-breakpoint'
import { isClient } from '../helper/react-helper';
import flatten from 'flat'
import {useStore} from 'react-redux';
import dynamic from 'next/dynamic'
import '../styles/global.scss'
import { wrapper, StoreService } from '../core/store/store';
import { toggleMenu, activateSpinner, disableSpinner, setPreviousUrl, setNavigationOccurred, setIsAppInitialized, setIsGaInitialized, setQuotes } from '../core/store/reducers/app.reducer';
import Cookies from 'js-cookie';
import { initGA, logPageView } from '../core/google-analytics';
import { CookieConsent } from '../model/models';
import Modernizr from 'modernizr';
if (isClient()){
  window.Modernizr = Modernizr;
  require("../custom-template/main.min.js");
}

const Head = dynamic(() => import('next/head'));
const Spinner:any = dynamic(() => import('../components/spinner/spinner'));
const Header:any = dynamic(() => import('../components/header/header'));
const Body:any = dynamic(() => import('../components/body/body'));
const IntlProvider:any = dynamic(() => import('react-intl').then((mod:any) => mod.IntlProvider));
const DefaultSeo:any = dynamic(() => import('next-seo').then((mod:any) => mod.DefaultSeo));


//---------- Disable debug and log levels in production
if (process.env.NODE_ENV === "production"){
  console.log = ()=>{}
  console.debug = ()=>{}
}

//---------- Window object extension
export interface CustomTemplate{
  closeMenu: ()=>void;
  openPage: (id:string, skipMenu?:boolean)=>void;
}
declare global {
  interface Window { CustomTemplate: CustomTemplate; Modernizr: any }
}


//---------- react-intl configuration
if (!Intl.PluralRules) {
  // require('@formatjs/intl-pluralrules/polyfill');
  // require('@formatjs/intl-pluralrules/locale-data/en'); // Add locale data for en
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


//---------- watchForHover
function watchForHover() {
  console.debug("watch for hover");
  // lastTouchTime is used for ignoring emulated mousemove events
  let lastTouchTime = 0

  function enableHover() {
    if ((new Date()).getMilliseconds() - lastTouchTime < 500) return;
    document.body.classList.add('hasHover');
  }

  function disableHover() {
    document.body.classList.remove('hasHover');
  }

  function updateLastTouchTime() {
    lastTouchTime = (new Date()).getMilliseconds();
  }

  document.addEventListener('touchstart', updateLastTouchTime, {passive: true});
  document.addEventListener('touchstart', disableHover, {passive: true});
  document.addEventListener('mousemove', enableHover, {passive: true});

  enableHover()
}

//---------- COMPONENT
function MyApp({ Component, pageProps }: AppProps) {
  
  const store = useStore();
  StoreService.getInstance().saveStore(store);
  
  const router = useRouter();

  // Prevent Next bug when it tries to render the /strapi/[[...slug]] route
  if (router.asPath === "/strapi/[[...slug]]") {
    return null;
  }

  const onRouteChangeStart = ()=>{
    store.dispatch(activateSpinner());
    store.dispatch(setPreviousUrl(location.href));
  }

  const onRouteChangeComplete = ()=>{
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
  }

  const onHashChangeComplete = ()=>{
    if (location.href != store.getState().app.previousUrl){
      store.dispatch(setNavigationOccurred(true));
    }else{
      store.dispatch(setNavigationOccurred(false));
    }
  }
  
  //useSWR caches already done requests and doesn't resubmit the same request.
  //So it's not a problem if the following line is called multiple time: only a request is submitted
  // const quotesResp = useSWR(getStrapiMedia(GET_QUOTES_API)!, ()=>NetworkService.getInstance().__tmp_getQuotes());

  //---------- useEffect
  useEffect(() => {
    // console.debug("_app");
    if (!store.getState().app.isAppInitialized){
      watchForHover();
      store.dispatch(setIsAppInitialized(true));
    }

    //---- start to use Google Analytics only if the user has given the consensus
    let cookieConsentValue = Cookies.get('CookieConsent');    

    //fix Cookiebot "CookieConsent" cookie json string (missing quotes)
    cookieConsentValue = cookieConsentValue?.replace(/{/gi, '{"').replace(/:/gi, '":').replace(/,/gi, ',"').replace(/'/gi, '"');
    
    if (!store.getState().app.isGAInitialized && cookieConsentValue && (JSON.parse(cookieConsentValue) as CookieConsent).statistics){
      initGA()
      store.dispatch(setIsGaInitialized(true));
    }
    if (store.getState().app.isGAInitialized){
      logPageView();
    }
    //---- 

    // console.log(pageProps.quotesResp);
    if (pageProps.quotesResp && pageProps.quotesResp.data && pageProps.quotesResp.data.quotes && store.getState().app.quotes.length == 0){
      //save quotes only if not already saved
      store.dispatch(setQuotes(pageProps.quotesResp.data.quotes));
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

  // Extract the data we need
  // const { global } = pageProps;
  // if (global == null) {
  //   return <ErrorPage statusCode={404} />;
  // }
  // const { metadata } = global;

  //---------- rendering
  return (    
    <>
      {/* <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="manifest" href="/manifest.json" />
        <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="d12031df-a146-4c32-8276-e1d5c086b932" data-blockingmode="auto" type="text/javascript" async /> */}
        {/* <script id="CookieDeclaration" src="https://consent.cookiebot.com/d12031df-a146-4c32-8276-e1d5c086b932/cd.js" type="text/javascript" async></script> */}
        {/* <title>Keadex</title>
      </Head> */}

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Keadex</title>
      </Head>

      {/* Global site metadata */}
      <DefaultSeo
        description={"Keadex is an ever-evolving experimental platform, fully free and open source. The goal of Keadex is to experiment technologies (client and server side) and to integrate them in a modular platform."}
      />
      {/* <DefaultSeo
        titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title={"Page"}
        description={metadata.metaDescription}
        openGraph={{
          images: Object.values(metadata.shareImage.formats).map((image) => {
            return {
              url: getStrapiMedia(image.url),
              width: image.width,
              height: image.height,
            };
          }),
        }}
        twitter={{
          cardType: metadata.twitterCardType,
          handle: metadata.twitterUsername,
        }}
      /> */}

      <BreakpointProvider queries={queries}>
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
      </BreakpointProvider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (appCtx:AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appCtx);
  
  const NetworkService = (await import("../core/network/network.service")).default;
  const quotesResp = await NetworkService.getInstance().__tmp_getQuotes();
  // console.log(quotesResp);
  if(appCtx.ctx.pathname.indexOf("/strapi") != -1){
    // Fetch global site settings from Strapi, only for pages retrieved by Strapi
    const global = await NetworkService.getInstance().getStrapiGlobalData();
    const globalData = global.data.data?.global;
    // console.debug("Global data");
    // console.debug(globalData);
    // Pass the data to our page via props
    return { ...appProps, pageProps: { globalData, path: appCtx.ctx.pathname, quotesResp: quotesResp.data } };
  }else{
    return { ...appProps, pageProps: { quotesResp: quotesResp.data } };
  }
};


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
