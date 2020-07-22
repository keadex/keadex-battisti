import React, { RefObject, Suspense } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

import { HOME_URL, ROUTES} from '../../core/routing/route.constants';

//--------------- TYPES
interface IBodyProps extends RouteComponentProps{}


//--------------- COMPONENT
class Body extends React.Component<IBodyProps> {

  //------------ constructor
  constructor(props:IBodyProps){
    super(props);
  }

  //------------ render
  public render() {
    if (this.props.location.pathname !== HOME_URL) return <Redirect to={HOME_URL} />
    return (
        <React.Fragment>
          {
            Object.keys(ROUTES).map(function (key) {
              let ComponentName = ROUTES[key].component;
              return(
                <div key={key}>
                  <Route path={ROUTES[key].url} render={() => (
                    <Suspense fallback={<div></div>}>                  
                      <div className="animate__animated animate__fast animate__fadeIn">
                        <ComponentName/>
                      </div>
                    </Suspense>
                  )}/>
                </div>
              )
            })
        }
        </React.Fragment>
    );
  }

}

export default Body