import React, { Component, Suspense, RefObject } from 'react';
import { Route, Redirect, RouteComponentProps, Switch } from 'react-router-dom';
// import Home from '../pages/home/Home';
// import AboutMe from '../pages/about_me/AboutMe';
// import KeaLab from '../pages/kea_lab/KeaLab';
import { HOME_URL, ABOUT_ME_URL, KEA_LAB_URL, ROUTES, IRoute, HOME_ID, ABOUT_ME_ID, KEA_LAB_ID } from '../../core/routing/route.constants';
import { connect } from 'react-redux';
import { IStoreState } from '../../core/store/store.type';
import { red } from '@material-ui/core/colors';
import SplashScreen from '../splashscreen/SplashScreen';
import { toggleMenu } from '../../core/store/reducers/app.reducer';
import store from '../../core/store/store';
import BasePageComponent from '../base-page-component/BasePageComponent';
import { PageNotFound } from '../../pages/page-not-found/PageNotFound';


//--------------- TYPES
interface IBodyProps extends RouteComponentProps{
  menuOpen: boolean,
  toggleMenu:(menuOpen?: boolean)=>void
}


//--------------- COMPONENT
class Body extends React.Component<IBodyProps> {
  
  private pagesRef : Map<string, RefObject<HTMLDivElement>> = new Map<string, RefObject<HTMLDivElement>>();

  //------------ constructor
  constructor(props:IBodyProps){
    super(props);
    for (let key in ROUTES) {
      this.pagesRef.set(ROUTES[key].id, React.createRef());
    }
  }


  //------------ toggleMenu
  private toggleMenu(){
    if (store.getState().app.menuOpen)
      this.props.toggleMenu(false)
  }

  //------------ componentDidUpdate
  componentDidUpdate(){
    for (let key in ROUTES) {
      this.pagesRef.get(ROUTES[key].id)!.current!.scrollTop = 0;
    }
  }

  //------------ render
  public render() {
    let _self = this;
    if (this.props.location.pathname === "/") return <Redirect to={HOME_URL} />
    return (
        <React.Fragment>
          {
            Object.keys(ROUTES).map(function (key) {
              let ComponentName = ROUTES[key].component;
              return (
                <div className="page" key={ROUTES[key].id} id={ROUTES[key].id} data-menuopen={_self.props.menuOpen} ref={_self.pagesRef.get(ROUTES[key].id)}>
                  <Switch>
                    <Route exact path={ROUTES[key].url} render={() => (
                      <Suspense fallback={<div></div>}>
                        <div style={{display:_self.props.menuOpen?'inherit':'none'}}>
                          <SplashScreen/>
                        </div>
                        <div style={{opacity:_self.props.menuOpen?0:1}} className={_self.props.menuOpen?"":"animate__animated animate__fast animate__fadeIn"}>
                          <ComponentName/>
                        </div>
                      </Suspense>
                    )}/>
                    <Route render={() => (
                      <div className="h-100">
                        <div style={{display:_self.props.menuOpen?'inherit':'none'}}>
                          <SplashScreen/>
                        </div>
                        <div style={{display:_self.props.menuOpen?'none':'inherit'}} className="h-100">
                          <PageNotFound />
                        </div>
                      </div>
                    )}/>
                  </Switch>
                </div>
              )
            })
        }
        </React.Fragment>
    );
  }

}

const mapStateToProps = (state:IStoreState) => {
  return {
    menuOpen: state.app.menuOpen
  }
}

export default connect(
  mapStateToProps,
  {toggleMenu}
)(Body)