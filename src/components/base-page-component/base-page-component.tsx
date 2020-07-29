import React, { RefObject } from 'react';
import store from '../../core/store/store';


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
    let page = window.location.pathname.replace("/", "");
    
    if (hash && hash.length > 0 && this.anchorRefs.has(hash) && !store.getState().app.menuOpen){
      // console.log(this.anchorRefs.get(hash)!);
      document.getElementById(page)!.scrollTo({top: this.anchorRefs.get(hash)!.current.offsetTop, behavior: 'smooth'});
    }
  }
  
  
  //------------ componentDidMount
  componentDidMount(){
    this.scrollToHash();
  }


  //------------ componentDidUpdate
  componentDidUpdate(){
    this.scrollToHash();
  }

}

export default BasePageComponent;