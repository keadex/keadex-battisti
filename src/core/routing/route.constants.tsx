import React from 'react';

const Home = React.lazy(() => import('../../pages/home/Home'));


export interface IArrayRoute {
  [index: string]: IRoute
}

export interface IRoute {
  id: string,
  url: string,
  component: any
}

//PAGE IDS
export const HOME_ID = "home";


//ROUTES
const BASE_URL = "/:language";
export const HOME_URL = "/home";

export const ROUTES: IArrayRoute = {};
ROUTES[HOME_URL] = {
  id: HOME_ID,
  url: HOME_URL,
  component: Home
};