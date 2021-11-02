import React, { useEffect, useImperativeHandle, useRef } from 'react';
import { connect } from 'react-redux';
import type { StoreState } from '../../core/store/store.type';
import SplashScreen from '../splashscreen/splash-screen';
import { toggleMenu } from '../../core/store/reducers/app.reducer';
import { NextComponentType, NextPageContext } from 'next';
import { PAGE_ROOT_ID } from '../../core/route.constants';


//--------------- TYPES
export interface BodyHandle {
  pageRoot: HTMLDivElement|null;
  pageFake1: HTMLDivElement|null;
  pageFake2: HTMLDivElement|null;
}

interface BodyProps {
  menuOpen: boolean,
  navigationOccurred: boolean,
  toggleMenu:(menuOpen?: boolean)=>void,
  PageComponent: NextComponentType<NextPageContext, any, {}>;
  pageProps: any
}


//--------------- COMPONENT
const Body = React.forwardRef<BodyHandle, BodyProps>((props, forwardedRef) => {

  const pageRootRef = useRef<HTMLDivElement>(null);
  const pageFake1Ref = useRef<HTMLDivElement>(null);
  const pageFake2Ref = useRef<HTMLDivElement>(null);

  useImperativeHandle(forwardedRef, () => ({
    get pageRoot() {
      return pageRootRef.current;
    },
    get pageFake1() {
      return pageFake1Ref.current;
    },
    get pageFake2() {
      return pageFake2Ref.current;
    }
  }));

  //------------ componentDidUpdate
  useEffect(() => {
    //the following line is needed to be sure to scoll to top of the page root when you open the menu
    //(splashscreen case) and when you close the menu without changing the page (content case). The last
    //case is needed because we scroll to the top of the page root every time you change the page (see _app.tsx - useEffect())
    // console.log("SCROLL body didupdate scrolltop=0 section");
    if (props.menuOpen || !props.navigationOccurred) document.getElementById(PAGE_ROOT_ID)!.scrollTop = 0;
  });

  //------------ render
  return (
    <React.Fragment>
      <div className="page" id={PAGE_ROOT_ID} style={{zIndex: 3, opacity: 1}} ref={pageRootRef}>
        <div style={{display:props.menuOpen?'inherit':'none'}}>
          <SplashScreen/>
        </div>
        <div style={{opacity:props.menuOpen?0:1}} className={props.menuOpen?"":"animate__animated animate__fast animate__fadeIn"}>
          <props.PageComponent {...props.pageProps} />
        </div>
      </div>
      <div className="page page--inactive" id="page-fake1" style={{transform: "translate3d(0px, 100%, 0px)", zIndex: 2, opacity: 0.9}} ref={pageFake1Ref}/>
      <div className="page page--inactive" id="page-fake2" style={{transform: "translate3d(0px, 100%, 0px)", zIndex: 1, opacity: 0.8}} ref={pageFake2Ref}/>
    </React.Fragment>
  );
});

Body.displayName = "Body";

const mapStateToProps = (state:StoreState) => {
  return {
    menuOpen: state.app.menuOpen,
    navigationOccurred: state.app.navigationOccurred
  }
}

export default connect(
  mapStateToProps,
  {toggleMenu},
  null,
  {forwardRef: true}
)(Body)