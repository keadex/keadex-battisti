import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { HOME_URL, ABOUT_ME_URL, KEA_LAB_URL, WHY_KEADEX_URL, WHATS_KEADEX } from '../../core/routing/route.constants';
import './Header.scss';
import logo from '../../assets/img/keadex-logo.png';
import { connect } from 'react-redux';
import { toggleMenu } from '../../core/store/reducers/app.reducer';
import { MDBIcon } from 'mdbreact';


//--------------- TYPES
interface IHeaderProps extends RouteComponentProps{
  toggleMenu:(menuOpen?: boolean)=>void
}


//--------------- COMPONENT
class Header extends React.Component<IHeaderProps> {

  //------------ render
  public render() {
    let fullpath = this.props.location.pathname + this.props.location.hash;
    return (
      <div>
        {/* navigation */}
        <nav className="pages-nav">
        <img src={logo} className="nav-logo" alt="logo" />
          <div className="pages-nav__item"><NavLink onClick={()=>this.props.toggleMenu(false)} to={HOME_URL} className={"link link--page " + ((fullpath.endsWith(HOME_URL))?"is-active":"")}><FormattedMessage id="NAVIGATION.HOME" /></NavLink></div>
          <div className="pages-nav__item"><NavLink onClick={()=>{this.props.toggleMenu(false)}} to={WHY_KEADEX_URL} className={"link link--page " + ((fullpath.endsWith(WHY_KEADEX_URL))?"is-active":"")}><FormattedMessage id="NAVIGATION.WHY_KEADEX" /></NavLink></div>
          <div className="pages-nav__item"><NavLink onClick={()=>this.props.toggleMenu(false)} to={WHATS_KEADEX} className={"link link--page " + ((fullpath.endsWith(WHATS_KEADEX))?"is-active":"")}><FormattedMessage id="NAVIGATION.WHATS_KEADEX" /></NavLink></div>
          <div className="pages-nav__item"><NavLink onClick={()=>this.props.toggleMenu(false)} activeClassName='is-active' to={ABOUT_ME_URL} className="link link--page"><FormattedMessage id="NAVIGATION.ABOUT_ME" /></NavLink></div>
          <div className="pages-nav__item"><NavLink onClick={()=>this.props.toggleMenu(false)} activeClassName='is-active' to={KEA_LAB_URL} className="link link--page"><FormattedMessage id="NAVIGATION.KEA_LAB" /></NavLink></div>
          {/* <div className="pages-nav__item"><a className="link link--page" href="#page-software">Software</a></div>
          <div className="pages-nav__item"><a className="link link--page" href="#page-custom">Customization &amp; Settings</a></div>
          <div className="pages-nav__item"><a className="link link--page" href="#page-training">Training</a></div>
          <div className="pages-nav__item pages-nav__item--small"><a className="link link--page link--faded" href="#page-buy">Where to buy</a></div>
          <div className="pages-nav__item pages-nav__item--small"><a className="link link--page link--faded" href="#page-blog">Blog &amp; News</a></div>
          <div className="pages-nav__item pages-nav__item--small"><a className="link link--page link--faded" href="#page-contact">Contact</a></div> */}
          <div className="pages-nav__item pages-nav__item--social text-center"> 
            <a className="link link--social link--faded" href="https://www.linkedin.com/in/giacomosimmi/" target="_blank"><MDBIcon fab icon='linkedin' /><span className="text-hidden">LinkedIn</span></a>
            <a className="link link--social link--faded" href="https://github.com/keadex" target="_blank"><MDBIcon fab icon='github' /><span className="text-hidden">GitHub</span></a>
            <a className="link link--social link--faded" href="http://open.spotify.com/user/jacksimmi" target="_blank"><MDBIcon fab icon='spotify' /><span className="text-hidden">Spotify</span></a>
            <a className="link link--social link--faded" href="https://www.instagram.com/jh4ck_/" target="_blank"><MDBIcon fab icon='instagram' /><span className="text-hidden">Instagram</span></a>
          </div> 
        </nav>
        {/* /navigation*/}
        {/* <FormattedMessage id="Home.dayMessage" /> */}
      </div>
    );
  }

}

export default connect(
  null,
  { toggleMenu }
)(Header)
