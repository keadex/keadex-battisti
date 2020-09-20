import ReactGA from 'react-ga'

//-------- initGA
export const initGA = () => {
  console.debug('GA init');
  ReactGA.initialize('UA-177879582-1');
  ReactGA.set({ anonymizeIp: true });
}


//-------- logPageView
export const logPageView = () => {
  console.debug(`Logging pageview for ${window.location.pathname}`)
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}


//-------- logEvent
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}


//-------- logException
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}