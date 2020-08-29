import React, { RefObject, cloneElement } from 'react';
import { connect } from 'react-redux';
import { IStoreState } from '../../core/store/store.type';
import SplashScreen from '../splashscreen/splash-screen';
import { toggleMenu } from '../../core/store/reducers/app.reducer';
import { NextComponentType, NextPageContext } from 'next';
import { PAGE_ROOT_ID } from '../../core/route.constants';
// import store from '../../core/store/store';


//--------------- TYPES
interface IBodyProps {
  menuOpen: boolean,
  navigationOccurred: boolean,
  toggleMenu:(menuOpen?: boolean)=>void,
  PageComponent: NextComponentType<NextPageContext, any, {}>;
  pageProps: any
}


//--------------- COMPONENT
class Body extends React.Component<IBodyProps> {

  //------------ constructor
  constructor(props:IBodyProps){
    super(props);
  }


  //------------ toggleMenu
  // private toggleMenu(){
  //   if (store.getState().app.menuOpen)
  //     this.props.toggleMenu(false)
  // }

  //------------ componentDidMount
  componentDidMount(){
    document.body.scrollTop=0;
  }


  //------------ componentDidUpdate
  componentDidUpdate(){
    //the following line is needed to be sure to scoll to the top the page root when you open the menu
    //(splashscreen case) and when you close the menu without changing the page (content case). The last
    //case id needed because we scroll to the top the page root every time you change the page (see _app.tsx - useEffect())
    if (this.props.menuOpen || !this.props.navigationOccurred) document.getElementById(PAGE_ROOT_ID)!.scrollTop = 0;
    document.body.scrollTop=0;
  }

  //------------ render
  public render() {
    // let _self = this;
    //TODO if (this.props.location.pathname === "/") return <Redirect to={HOME_URL} />
    return (
        <React.Fragment>
          {/* {
            Object.keys(ROUTES).map(function (key) {
              // let ComponentName = ROUTES[key].component;
              return ( */}
                <div className="page" id="page-root" data-menuopen={this.props.menuOpen}>
                  {/* <Switch> */}
                    {/* <Route exact path={ROUTES[key].url} render={() => (
                      <Suspense fallback={<div></div>}> */}
                        <div style={{display:this.props.menuOpen?'inherit':'none'}}>
                          <SplashScreen/>
                        </div>
                        <div style={{opacity:this.props.menuOpen?0:1}} className={this.props.menuOpen?"":"animate__animated animate__fast animate__fadeIn"}>
                          {/* {cloneElement(this.props.children)} */}
                          {/* {this.props.children} */}
                          <this.props.PageComponent {...this.props.pageProps} />
                        </div>
                      {/* </Suspense> */}
                    {/* )}/> */}
                    {/* <Route render={() => (
                      <div className="h-100">
                        <div style={{display:_self.props.menuOpen?'inherit':'none'}}>
                          <SplashScreen/>
                        </div>
                        <div style={{display:_self.props.menuOpen?'none':'inherit'}} className="h-100">
                          <PageNotFound />
                        </div>
                      </div>
                    )}/> */}
                  {/* </Switch> */}
                </div>
                <div className="page" id="page-fake1" />
                <div className="page" id="page-fake2" />
              {/* )
            })
        } */}
        </React.Fragment>
    );
  }

}

const mapStateToProps = (state:IStoreState) => {
  return {
    menuOpen: state.app.menuOpen,
    navigationOccurred: state.app.navigationOccurred
  }
}

export default connect(
  mapStateToProps,
  {toggleMenu}
)(Body)