import ReactGA from 'react-ga4'

//-------- initGA
export const initGA = () => {
  // console.debug(`GA init ${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}`);
  ReactGA.initialize([
    {
      trackingId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!,
      gtagOptions: { 'anonymize_ip': true, send_page_view: false }
    }
  ]);
}


//-------- logPageView
export const logPageView = () => {
  // console.debug(`Logging pageview for ${window.location.pathname}`);
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}


//-------- logEvent
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({
      category: category,
      action: action
    });
  }
}


//-------- logException
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.event({
      action: "exception",
      category: ""
    }, {
      description: description,
      fatal: fatal
    });
  }
}