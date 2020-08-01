import React, { RefObject } from 'react';
import { connect } from 'react-redux';
import { IStoreState } from '../../core/store/store.type';
import SplashScreen from '../splashscreen/splash-screen';
import { toggleMenu } from '../../core/store/reducers/app.reducer';
// import store from '../../core/store/store';


//--------------- TYPES
interface IBodyProps {
  menuOpen: boolean,
  toggleMenu:(menuOpen?: boolean)=>void,
  children: React.ReactNode
}


//--------------- COMPONENT
class Body extends React.Component<IBodyProps> {
  
  private pageRef : RefObject<HTMLDivElement> = React.createRef();

  //------------ constructor
  constructor(props:IBodyProps){
    super(props);
  }


  //------------ toggleMenu
  // private toggleMenu(){
  //   if (store.getState().app.menuOpen)
  //     this.props.toggleMenu(false)
  // }

  //------------ componentDidUpdate
  componentDidUpdate(){
    this.pageRef!.current!.scrollTop = 0;
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
                <div className="page" id="page-root" data-menuopen={this.props.menuOpen} ref={this.pageRef}>
                  {/* <Switch> */}
                    {/* <Route exact path={ROUTES[key].url} render={() => (
                      <Suspense fallback={<div></div>}> */}
                        <div style={{display:this.props.menuOpen?'inherit':'none'}}>
                          <SplashScreen/>
                        </div>
                        <div style={{opacity:this.props.menuOpen?0:1}} className={this.props.menuOpen?"":"animate__animated animate__fast animate__fadeIn"}>
                          {this.props.children}
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
    menuOpen: state.app.menuOpen
  }
}

export default connect(
  mapStateToProps,
  {toggleMenu}
)(Body)