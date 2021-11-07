import React, { RefObject } from 'react';
import { PAGE_ROOT_ID } from '../../core/route.constants';


//--------------- COMPONENT
class BasePageComponent<K,V> extends React.Component<K,V> {
  
  //ATTRS
  public anchorRefs : Map<string, RefObject<any>>;


  //FUNCS

  //------------ constructor
  constructor(props:K){
    super(props);
    this.anchorRefs = new Map<string, RefObject<any>>();
  }

  //------------ scrollToHash
  scrollToHash(){
    let hash = window.location.hash?window.location.hash.replace("#", ""):undefined;
    if (hash && hash.length > 0 && this.anchorRefs.has(hash)){
      document.getElementById(PAGE_ROOT_ID)!.scrollTop = this.anchorRefs.get(hash)!.current.offsetTop;
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