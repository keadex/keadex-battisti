import { createActions, handleActions } from 'redux-actions';
import { getDefaultAppState, IAppState } from '../store.type';

interface IAppAction {
  menuOpen: boolean;
}

export const { toggleMenu, activateSpinner, disableSpinner } = createActions({
  TOGGLE_MENU: (menuOpen) => ({menuOpen: menuOpen}),
  ACTIVATE_SPINNER: () => ({}),
  DISABLE_SPINNER: () => ({})
});

export const appReducer = handleActions<IAppState, IAppAction>(
  {
    [toggleMenu.toString()]: (state, action) => {
      // console.log(!state.menuOpen + " --- " + action.payload.menuOpen);
      let newValue = !state.menuOpen;
      if (action.payload.menuOpen != undefined)
        newValue = action.payload.menuOpen;
      return { ...state, menuOpen: newValue};
    },
    [activateSpinner.toString()]: (state, action) => {
      return { ...state, spinnerCounter: state.spinnerCounter+1};
    },
    [disableSpinner.toString()]: (state, action) => {
      return { ...state, spinnerCounter: state.spinnerCounter-1};
    }
  },
  getDefaultAppState()
);
