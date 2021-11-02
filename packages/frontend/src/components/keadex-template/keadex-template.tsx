import { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import React, { useRef, useEffect } from 'react';
import { connect, useStore } from "react-redux";
import { BodyHandle } from '../body/body';
import { toggleMenu as globalToggleMenu } from '../../core/store/reducers/app.reducer';
import { StoreState } from '../../core/store/store.type';
import Body from '../body/body';

const Spinner:any = dynamic(() => import('../spinner/spinner'));
const Header:any = dynamic(() => import('../header/header'));
// const Body:any = dynamic(() => import('../../components/body/body'));


//--------------- TYPES
interface CustomTemplateProps {
  Component: NextComponentType<NextPageContext<any>, any, {}>;
  pageProps: any;
  menuOpen: boolean;
  // navigationOccurred: boolean;
}


//--------------- COMPONENT
const KeadexTemplate : React.FunctionComponent<CustomTemplateProps> = props => {

  //ATTRS
  const store = useStore();
  const bodyRef = React.useRef<BodyHandle>(null);
  const stackPages = ["pageRoot", ];
  
  //FUNCS

  //---------- useEffect
  useEffect(()=>{
    const zPercentage = Math.ceil((window.innerHeight	 * 15)/100); //15% of window height
    const pages = [
      bodyRef.current?.pageRoot,
      bodyRef.current?.pageFake1,
      bodyRef.current?.pageFake2
    ]
    if( props.menuOpen ) {
      openMenu(pages, zPercentage);
		}	else {
			closeMenu(pages, zPercentage);
		}
  })

  //---------- openMenu
  function openMenu(pages: (HTMLDivElement | null | undefined)[], zPercentage: number) {
    pages.forEach((page, i)=>{
      if (page) page.style.transform = `translate3d(0, 75%, ${(-1 * 100 - zPercentage*i)}px)`;
    })
	}


  //---------- closeMenu
  function closeMenu(pages: (HTMLDivElement | null | undefined)[], zPercentage: number) {
    pages.forEach((page, i)=>{
      if (page){
        page.style.transform = (i == 0)?"translate3d(0, 0%, 0)":`translate3d(0, 100%, 0)`;
      } 
    })
  }


  //------------ render
  //TODO if (this.props.location.pathname === "/") return <Redirect to={HOME_URL} />
  return (
    <div>
      <Spinner />
      <div>
        <Header />
        <div className={`pages-stack ${props.menuOpen?"pages-stack--open":"pages-stack--close"}`}>
          <Body PageComponent={props.Component} pageProps={props.pageProps} ref={bodyRef} />
        </div>
        <button className={`menu-button ${props.menuOpen?"menu-button--open":""}`} onClick={()=>{store.dispatch(globalToggleMenu())}}><span>Menu</span></button>
      </div>
    </div>
  );
}

const mapStateToProps = (state:StoreState) => {
  return {
    menuOpen: state.app.menuOpen,
    // navigationOccurred: state.app.navigationOccurred
  }
}

export default connect(
  mapStateToProps,
  {globalToggleMenu}
)(KeadexTemplate)