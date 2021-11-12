import ReactGA from 'react-ga4'

//-------- initGA
export const initGA = () => {
  //console.debug(`GA init ${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}`);
  ReactGA.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, { 'anonymize_ip': true, send_page_view: false });
}


//-------- logPageView
export const logPageView = () => {
  console.debug(`Logging pageview for ${window.location.pathname}`)
  ReactGA.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: window.location.pathname
  })
}


//-------- logEvent
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.gtag('event', action, {
      'event_category': category
    });
  }
}


//-------- logException
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.gtag('event', 'exception', {
      'description': description,
      'fatal': fatal
    });
  }
}