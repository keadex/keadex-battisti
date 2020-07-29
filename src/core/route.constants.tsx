// import React from 'react';
// import { CookieDeclaration } from '../../pages/cookie-declaration/CookieDeclaration';

// import Home from '../../components/pages/home/Home';
// import AboutMe from '../../components/pages/about_me/AboutMe';
// import KeaLab from '../../components/pages/kea_lab/KeaLab';
// import { PrivacyPolicy } from '../../pages/privacy-policy/PrivacyPolicy';
// import { TermsConditions } from '../../pages/terms-conditions/TermsConditions';
// const Home = React.lazy(() => import('../../pages/home/Home'));
// const AboutMe = React.lazy(() => import('../../pages/about-me/AboutMe'));
// const KeaLab = React.lazy(() => import('../../pages/kea-lab/KeaLab'));

export interface IArrayRoute {
  [index: string]: IRoute
}

export interface IRoute {
  id: string,
  url: string
  // component: any
}

//PAGE IDS
export const HOME_ID = "home";
export const ABOUT_ME_ID = "about-me";
export const WHY_KEADEX_ID = "why-keadex";
export const WHATS_ID = "whats-keadex";
export const KEA_LAB_ID = "kealab";
export const COOKIE_DECLARATION_ID = "cookie-declaration";
export const PRIVACY_POLICY_ID = "privacy-policy";
export const TERMS_AND_CONDITIONS_ID = "terms-conditions";


//ROUTES
const BASE_URL = "/:language";
export const HOME_URL = "/home";
export const ABOUT_ME_URL = "/about-me";
export const WHY_KEADEX_URL = "/home#why-keadex";
export const WHATS_KEADEX = "/home#whats-keadex";
export const KEA_LAB_URL = "/kealab";
export const COOKIE_DECLARATION_URL = "/cookie-declaration";
export const PRIVACY_POLICY_URL = "/privacy-policy";
export const TERMS_AND_CONDITIONS_URL = "/terms-conditions";

export const ROUTES: IArrayRoute = {};
ROUTES[HOME_URL] = {
  id: HOME_ID,
  url: HOME_URL
  // component: Home
};
ROUTES[ABOUT_ME_URL] = {
  id: ABOUT_ME_ID,
  url: ABOUT_ME_URL
  // component: AboutMe
};
ROUTES[KEA_LAB_URL] = {
  id: KEA_LAB_ID,
  url: KEA_LAB_URL
  // component: KeaLab
};
ROUTES[COOKIE_DECLARATION_URL] = {
  id: COOKIE_DECLARATION_ID,
  url: COOKIE_DECLARATION_URL
  // component: CookieDeclaration
};
ROUTES[PRIVACY_POLICY_URL] = {
  id: PRIVACY_POLICY_ID,
  url: PRIVACY_POLICY_URL
  // component: PrivacyPolicy
};
ROUTES[TERMS_AND_CONDITIONS_URL] = {
  id: TERMS_AND_CONDITIONS_ID,
  url: TERMS_AND_CONDITIONS_URL
  // component: TermsConditions
};