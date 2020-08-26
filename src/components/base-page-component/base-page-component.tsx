import React, { RefObject } from 'react';
// import store from '../../core/store/store';
import { PAGE_ROOT_ID } from '../../core/route.constants';


//--------------- COMPONENT
class BasePageComponent<K,V> extends React.Component<K,V> {
  
  //ATTRS
  public anchorRefs : Map<string, RefObject<any>>;


  //FUNCS

  //------------ constructor
  constructor(props:K, state:V){
    super(props, state);
    this.anchorRefs = new Map<string, RefObject<any>>();
  }

  //------------ scrollToHash
  scrollToHash(){
    let hash = window.location.hash?window.location.hash.replace("#", ""):undefined;
    // let page = window.location.pathname.replace("/", "");
    // console.log(hash + " -- " + page);
    if (hash && hash.length > 0 && this.anchorRefs.has(hash)){ //TODO && !store.getState().app.menuOpen){
      // console.log(this.anchorRefs.get(hash)!);
      // console.log(PAGE_ROOT_ID);
      // document.getElementById(PAGE_ROOT_ID)!.scrollTo({top: this.anchorRefs.get(hash)!.current.offsetTop, behavior: 'smooth'});
      document.getElementById(PAGE_ROOT_ID)!.scrollTop = this.anchorRefs.get(hash)!.current.offsetTop;
      // console.log("scrolled");
    }
  }
  
  
  //------------ componentDidMount
  componentDidMount(){
    this.scrollToHash();
  }


  //------------ componentDidUpdate
  componentDidUpdate(prevProps:K, prevState:V, snapshot:any) {
    this.scrollToHash();
  }

}


export default BasePageComponent;