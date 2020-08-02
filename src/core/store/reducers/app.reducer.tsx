import { createActions, handleActions } from 'redux-actions';
import { getDefaultAppState, IAppState } from '../store.type';

interface IAppAction {
  menuOpen: boolean;
  previousUrl: string;
  navigationOccurred: boolean;
}

export const { toggleMenu, activateSpinner, disableSpinner, setPreviousUrl, setNavigationOccurred } = createActions({
  TOGGLE_MENU: (menuOpen) => ({menuOpen: menuOpen}),
  ACTIVATE_SPINNER: () => ({}),
  DISABLE_SPINNER: () => ({}),
  SET_PREVIOUS_URL: (previousUrl) => ({previousUrl: previousUrl}),
  SET_NAVIGATION_OCCURRED: (navigationOccurred) => ({navigationOccurred: navigationOccurred})
});

export const appReducer = handleActions<IAppState, IAppAction>(
  {
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
