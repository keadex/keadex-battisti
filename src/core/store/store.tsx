import { counterReducer } from "./reducers/counter.reducer";
import { botReducer } from "./reducers/bot.reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { IStoreState } from "./store.type";
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { aboutMeReducer } from "./reducers/aboutme.reducer";
import { appReducer } from "./reducers/app.reducer";

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

export default createStore(combineReducers<IStoreState>({app: appReducer, bot: botReducer, aboutMe: aboutMeReducer, counter: counterReducer} as any), composeEnhancers(applyMiddleware(thunk)));