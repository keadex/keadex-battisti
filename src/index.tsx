import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'svg-classlist-polyfill'
import smoothscroll from 'smoothscroll-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import './assets/styles/scss/mdb.scss';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './core/store/store';
import {IntlProvider} from 'react-intl';
import { flatten } from 'flat';
import { Query, BreakpointProvider } from './core/react-breakpoint';
import { watchForHover } from './helper/generic-helper';

smoothscroll.polyfill();
watchForHover();

if (!Intl.PluralRules) {
    require('@formatjs/intl-pluralrules/polyfill');
    require('@formatjs/intl-pluralrules/locale-data/en'); // Add locale data for en
}

// if (!Intl.RelativeTimeFormat) {
//     require('@formatjs/intl-relativetimeformat/polyfill');
//     require('@formatjs/intl-relativetimeformat/locale-data/en'); // Add locale data for en
// }

var messages_en:any = flatten(require('./translations/en.json'));
const messages = {
    'en': messages_en
};
const language = 'en'; //navigator.language.split(/[-_]/)[0];  // language without region code

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

export interface CustomTemplate{
    closeMenu: ()=>void;
    openPage: (id:string, skipMenu?:boolean)=>void;
}
declare global {
    interface Window { CustomTemplate: CustomTemplate; }
}

window.CustomTemplate = window.CustomTemplate || {};

ReactDOM.render(
    <BreakpointProvider queries={queries}>
        <Provider store={store}>
            <IntlProvider locale={language} messages={messages[language]}>
                <App />
            </IntlProvider>
        </Provider>
    </BreakpointProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();