import React from 'react';
import { FormattedMessage } from 'react-intl';
import { HOME_URL, ABOUT_ME_URL, KEA_LAB_URL, WHY_KEADEX_URL, WHATS_KEADEX_URL } from '../../core/route.constants';
import logo from '../../../public/img/keadex-logo.png';
import { connect } from 'react-redux';
import { toggleMenu } from '../../core/store/reducers/app.reducer';
import { MDBIcon } from 'mdbreact';
import Link from 'next/link';
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router';
import { IStoreState } from '../../core/store/store.type';


//--------------- TYPES
interface HeaderProps extends WithRouterProps {
  toggleMenu:(menuOpen?: boolean)=>void
}


//--------------- COMPONENT
class Header extends React.Component<HeaderProps> {

  /*
    Needed to fix active class for next/Link, INCLUDING ANCHOR TAGS.
    When using SSR, anchor tags are not available on server side, but only in client side.
    If you use directly this.props.router.asPath as condition to set the active class, you will
    receive a className mismatch between client and server rendering.
    By using a combination of getSnapshotBeforeUpdate() (executed only on client side) and a local
    variable you can bypass this problem.
  */
  private currentUrl:string="";


  //------------ componentDidMount
  componentDidMount(){
    this.currentUrl=location.href;
  }


  //------------ getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(propsPrecedenti:HeaderProps, statePrecedente:any){
    this.currentUrl=location.href;
    return this.currentUrl;
  }

  //------------ componentDidUpdate
  componentDidUpdate(propsPrecedenti:HeaderProps, statePrecedente:any, snapshot:any) {
  }

  
  //------------ render
  public render() {
    return (
      <div>
        {/* navigation */}
        <nav className="pages-nav">
        <img src={logo} className="nav-logo" alt="logo" />
          <div className="pages-nav__item"><Link replace href={HOME_URL} scroll={false} ><a onClick={()=>this.props.toggleMenu(false)} className={"link link--page " + ((this.currentUrl.endsWith(HOME_URL))?"is-active":"")}><FormattedMessage id="NAVIGATION.HOME" /></a></Link></div>
          <div className="pages-nav__item"><Link replace href={WHY_KEADEX_URL} scroll={false} ><a onClick={()=>this.props.toggleMenu(false)} className={"link link--page " + ((this.currentUrl.endsWith(WHY_KEADEX_URL))?"is-active":"")}><FormattedMessage id="NAVIGATION.WHY_KEADEX" /></a></Link></div>
          <div className="pages-nav__item"><Link replace href={WHATS_KEADEX_URL} scroll={false} ><a onClick={()=>this.props.toggleMenu(false)} className={"link link--page " + ((this.currentUrl.endsWith(WHATS_KEADEX_URL))?"is-active":"")}><FormattedMessage id="NAVIGATION.WHATS_KEADEX" /></a></Link></div>
          <div className="pages-nav__item"><Link replace href={ABOUT_ME_URL}><a onClick={()=>this.props.toggleMenu(false)} className={"link link--page " + ((this.currentUrl.endsWith(ABOUT_ME_URL))?"is-active":"")}><FormattedMessage id="NAVIGATION.ABOUT_ME" /></a></Link></div>
          <div className="pages-nav__item"><Link replace href={KEA_LAB_URL}><a onClick={()=>this.props.toggleMenu(false)} className={"link link--page " 
            + (((this.currentUrl.indexOf("#")==-1)?this.currentUrl.endsWith(KEA_LAB_URL):this.currentUrl.substr(0, this.currentUrl.indexOf("#")).endsWith(KEA_LAB_URL))?"is-active":"")}><FormattedMessage id="NAVIGATION.KEA_LAB" /></a></Link></div>
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

const mapStateToProps = (state:IStoreState) => {
  return {
    menuOpen: state.app.menuOpen
  }
}
export default connect(
  mapStateToProps,
  { toggleMenu }
)(withRouter(Header))
