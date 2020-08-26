import { createStore, combineReducers, applyMiddleware } from "redux";
import { IStoreState } from "./store.type";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { aboutMeReducer } from "./reducers/aboutme.reducer";
import { appReducer } from "./reducers/app.reducer";
import { MakeStore, Context, createWrapper } from "next-redux-wrapper";

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const makeStore: MakeStore<IStoreState> = (context: Context) => createStore(combineReducers<IStoreState>({app: appReducer, aboutMe: aboutMeReducer} as any), composeEnhancers(applyMiddleware(thunk)));

export const wrapper = createWrapper<IStoreState>(makeStore, {debug: false});