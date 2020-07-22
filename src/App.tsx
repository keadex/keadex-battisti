import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import Body from './components/body/Body';

//--------------- COMPONENT
class App extends React.Component {

  //---------- render
  public render() {
    const BodyRouter = withRouter(props => <Body {...props}/>);

    return (
      <Router>
        <div>
          <BodyRouter />
        </div>
      </Router>
    );
  }
}

export default App

