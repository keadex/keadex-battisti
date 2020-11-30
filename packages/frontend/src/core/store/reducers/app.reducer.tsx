import { createActions, handleActions } from 'redux-actions';
import { getDefaultAppState, AppState } from '../store.type';
import {HYDRATE} from 'next-redux-wrapper';
import type {AnyAction} from 'redux';
import update from 'immutability-helper';

// interface IAppAction {
//   menuOpen: boolean;
//   previousUrl: string;
//   navigationOccurred: boolean;
// }

export const { setIsAppInitialized, setIsGaInitialized, toggleMenu, activateSpinner, disableSpinner, setPreviousUrl, setNavigationOccurred, setQuotes } = createActions({
  SET_IS_APP_INITIALIZED: (isAppInitialized) => ({isAppInitialized: isAppInitialized}),
  SET_IS_GA_INITIALIZED: (isGAInitialized) => ({isGAInitialized: isGAInitialized}),
  TOGGLE_MENU: (menuOpen) => ({menuOpen: menuOpen}),
  ACTIVATE_SPINNER: () => ({}), 
  DISABLE_SPINNER: () => ({}),
  SET_PREVIOUS_URL: (previousUrl) => ({previousUrl: previousUrl}),
  SET_NAVIGATION_OCCURRED: (navigationOccurred) => ({navigationOccurred: navigationOccurred}),
  SET_QUOTES: (quotes) => ({quotes: quotes})
});

export const appReducer = handleActions<AppState, AnyAction>(
  {
    [HYDRATE]: (state) => {
      console.debug("hydrate app");
      //for now give the priority to the client side state since the are no server side state management
      //https://github.com/kirill-konshin/next-redux-wrapper#state-reconciliation-during-hydration
      return {...state};
      // return { ...state, previousUrl: (action.payload.app.previousUrl ?? state.previousUrl)};
    },
    [setIsAppInitialized.toString()]: (state, action) => {
      return { ...state, isAppInitialized: action.payload.isAppInitialized};
    },
    [setIsGaInitialized.toString()]: (state, action) => {
      return { ...state, isGAInitialized: action.payload.isGAInitialized};
    },
    [toggleMenu.toString()]: (state, action) => {
      // console.log(!state.menuOpen + " --- " + action.payload.menuOpen);
      let newMenuOPen = !state.menuOpen;
      let newNavigationOccorred = state.navigationOccurred;
      if (action.payload.menuOpen != undefined)
      newMenuOPen = action.payload.menuOpen;
      if (!newMenuOPen){
        newNavigationOccorred = false; //set to false only if you close the menu
      }
      return { ...state, menuOpen: newMenuOPen, navigationOccurred: newNavigationOccorred};
    },
    [activateSpinner.toString()]: (state) => {
      return { ...state, spinnerCounter: state.spinnerCounter+1};
    },
    [disableSpinner.toString()]: (state) => {
      return { ...state, spinnerCounter: state.spinnerCounter-1};
    },
    [setPreviousUrl.toString()]: (state, action) => {
      return { ...state, previousUrl: action.payload.previousUrl};
    },
    [setNavigationOccurred.toString()]: (state, action) => {
      return { ...state, navigationOccurred: action.payload.navigationOccurred};
    },
    [setQuotes.toString()]: (state, action) => {
      let quotes = update(state.quotes, {$set: action.payload.quotes});
      return { ...state, quotes: quotes!};
    }
  },
  getDefaultAppState()
);
