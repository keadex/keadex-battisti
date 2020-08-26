import { createActions, handleActions } from 'redux-actions';
import { getDefaultAppState, IAppState } from '../store.type';
import {HYDRATE} from 'next-redux-wrapper';
import {AnyAction} from 'redux';

// interface IAppAction {
//   menuOpen: boolean;
//   previousUrl: string;
//   navigationOccurred: boolean;
// }

export const { setIsAppInitialized, toggleMenu, activateSpinner, disableSpinner, setPreviousUrl, setNavigationOccurred } = createActions({
  SET_IS_APP_INITIALIZED: (isAppInitialized) => ({isAppInitialized: isAppInitialized}),
  TOGGLE_MENU: (menuOpen) => ({menuOpen: menuOpen}),
  ACTIVATE_SPINNER: () => ({}),
  DISABLE_SPINNER: () => ({}),
  SET_PREVIOUS_URL: (previousUrl) => ({previousUrl: previousUrl}),
  SET_NAVIGATION_OCCURRED: (navigationOccurred) => ({navigationOccurred: navigationOccurred})
});

export const appReducer = handleActions<IAppState, AnyAction>(
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
    }
  },
  getDefaultAppState()
);
