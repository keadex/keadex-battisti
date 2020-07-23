import React, { Component } from 'react';
import logo from './logo.svg';
import prova from './assets/img/prova.png';

import './App.scss';
//import { store } from './core/store/store';
import { toggleMenu } from './core/store/reducers/app.reducer';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';
import Spinner from './components/spinner/Spinner';

//library.add(faFacebook, faLinkedin, faInstagram, faGithub, faMedium, faSpotify)

//--------------- TYPES
interface IAppProps{
  toggleMenu:(menuOpen?: boolean)=>void
}


//--------------- COMPONENT
class App extends React.Component<IAppProps> {

  //---------- componentDidMount
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "./custom_template/js/classie.min.js";
    script.async = true;
    document.body.appendChild(script);
    const script2 = document.createElement("script");
    script2.src = "./custom_template/js/main.min.js";
    script2.async = true;
    document.body.appendChild(script2);
    const script3 = document.createElement("script");
    script3.src = "https://code.jquery.com/jquery-3.4.0.min.js";
    script3.async = false;
    document.body.appendChild(script3);
    // const script4 = document.createElement("script");
    // script4.src = "./patch/scrollmagic-patch.js";
    // script4.async = false;
    // document.body.appendChild(script4);
  }


  //---------- render
  public render() {
    const BodyRouter = withRouter(props => <Body {...props}/>);
    const HeaderRouter = withRouter(props => <Header {...props}/>);

    return (
      <Router>
        <div>
          <Spinner />
          <div>
            <HeaderRouter />

            {/* pages stack */}
            {/* I need to leave page-stack div outside the body because the javascript of
            the template cannot wait the rendering of body component since it calculates
            the number of the pages of the stack*/}
            <div className="pages-stack">
              <BodyRouter />
            </div>
            
            <button className="menu-button" onClick={()=>this.props.toggleMenu()}><span>Menu</span></button>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { toggleMenu }
)(App)

