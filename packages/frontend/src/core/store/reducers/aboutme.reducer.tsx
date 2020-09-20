import { createActions, handleActions } from 'redux-actions';
import { getDefaultAboutMeState, IAboutMeState } from '../store.type';
import update from 'immutability-helper';
import { Experience } from '../../../model/models';
import {HYDRATE} from 'next-redux-wrapper';
import {AnyAction} from 'redux';

// interface IAboutMeAction {
//   currentScene: number;
//   payload: string;
//   progress: number;
//   experience?: Experience[]
// }

export const { setCurrentScene, setProgress, setExperience, resetState } = createActions({
  SET_CURRENT_SCENE: (currentScene = 0, payload = undefined) => ({ currentScene: currentScene , payload : payload}),
  SET_PROGRESS: (currentScene = 0, progress = 0) => ({currentScene: currentScene, progress: progress}),
  SET_EXPERIENCE: (experience = []) => ({experience: experience}),
  RESET_STATE: () => ({})
});

export const aboutMeReducer = handleActions<IAboutMeState, AnyAction>(
  {
    [HYDRATE]: (state, action) => {
      console.debug("hydrate aboutme");
      return {...state, experience: action.payload.aboutMe.experience};
    },
    [setCurrentScene.toString()]: (state, action) => {
      return { ...state, currentScene: action.payload.currentScene, scenePayload: action.payload.payload};
    },
    [setProgress.toString()]: (state, action) => {
      let progress = update(state.progress, {[action.payload.currentScene]: {progress: {$set: action.payload.progress}}});
      return { ...state, progress: progress};
    },
    [setExperience.toString()]: (state, action) => {
      let experience = update(state.experience, {$set: action.payload.experience});
      return { ...state, experience: experience!};
    },
    [resetState.toString()]: (state) => {
      let defaultState = getDefaultAboutMeState();
      return { ...state, currentScene: defaultState.currentScene, progress: defaultState.progress, experience: defaultState.experience};
    },
  },
  getDefaultAboutMeState()
);
