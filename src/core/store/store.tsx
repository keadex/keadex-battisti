import { createStore, combineReducers, applyMiddleware, AnyAction, Store } from 'redux';
import { IStoreState } from "./store.type";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { aboutMeReducer } from "./reducers/aboutme.reducer";
import { appReducer } from "./reducers/app.reducer";
import { MakeStore, Context, createWrapper } from "next-redux-wrapper";
import { isClient } from '../../helper/generic-helper';


/**
 * The following singleton is used to expose the store (created with next-redux-wrapper) outside React.
 * This is not a good practice but we need it on the BaseComponent to read the "menuOpen" state without
 * connecting the pages to the store.
 * We need to reduce the use of this singleton.
 * 
 * This implementation is inspired by the solution proposed by the creator
 * of next-redux-wrapper: https://github.com/kirill-konshin/next-redux-wrapper/issues/214
 * 
 * The store is saved by the _app.
 */
export class StoreService {

  private static _INSTANCE:StoreService|null = null;
  private store: Store<any, AnyAction>|null = null;
  
  public static getInstance():StoreService{
    if (!this._INSTANCE) this._INSTANCE = new StoreService();
    return this._INSTANCE;
  }

  public saveStore(store: Store<any, AnyAction>):boolean{
    if (!isClient()){
      console.debug("You cannot use StoreService on server side");
      return false;
    }
    this.store = store;
    console.debug("Store saved on client side");
    return true;
  }

  public getStore():Store<any, AnyAction>|null{
    if (!isClient()){
      console.debug("You cannot use StoreService on server side");
      return null;
    }
    console.debug("Store found on client side!");
    return this.store;
  }
}


//STORE CREATION
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const makeStore: MakeStore<IStoreState> = (context: Context) => createStore(combineReducers<IStoreState>({app: appReducer, aboutMe: aboutMeReducer} as any), composeEnhancers(applyMiddleware(thunk)));

export const wrapper = createWrapper<IStoreState>(makeStore, {debug: false});


