import React from 'react';
import { injectIntl, WrappedComponentProps, FormattedMessage } from 'react-intl';
import NetworkService from '../../core/network/network.service';
import {Quote} from '../../model/models';
import './SplashScreen.scss';
import { COOKIE_DECLARATION_URL, PRIVACY_POLICY_URL, TERMS_AND_CONDITIONS_URL, COOKIE_DECLARATION_ID, PRIVACY_POLICY_ID, TERMS_AND_CONDITIONS_ID } from '../../core/routing/route.constants';
import store from '../../core/store/store';
import { toggleMenu } from '../../core/store/reducers/app.reducer';
import { Link } from 'react-router-dom';

//------------------ COMPONENT
interface ISplashScreenProps extends WrappedComponentProps {

}

//------------------ COMPONENT
class SplashScreen extends React.Component<ISplashScreenProps> {
  
  //ATTRS
  private quotes: Quote[] = [];
  private lastTimeQuote: number;
  private countQuote: number;


  //FUNCS

  //------------ constructor
  constructor(props: any) {
    super(props);
    this.lastTimeQuote = -1;
    this.countQuote = 0;
    let _self = this;
    NetworkService.getInstance().getQuotes()
      .then(function (response) {
        if (response.data.results != undefined) {
          _self.quotes = response.data.results;
        }
      }
    );
  }


  //------------ generateQuote
  private generateQuote(): Quote {
    let indexQuote = 0;
    let quote: Quote = {
      author: this.props.intl.formatMessage({ id: "QUOTES.NO_QUOTES_AUTHOR" }),
      quote: this.props.intl.formatMessage({ id: "QUOTES.NO_QUOTES" }),
    };
    if ((new Date().getTime() - this.lastTimeQuote < 3000) && (this.countQuote == 2)) {
      this.countQuote = 0;
      return {
        author: this.props.intl.formatMessage({ id: "QUOTES.TIP_QUOTE_AUTHOR" }),
        quote: this.props.intl.formatMessage({ id: "QUOTES.TIP_QUOTE" }),
      }
    } else if (this.countQuote > 2) {
      this.countQuote = 0;
    }
    if (this.quotes != undefined && this.quotes.length > 0) {
      indexQuote = Math.floor(Math.random() * this.quotes.length);
      quote = this.quotes[indexQuote];
      quote.author = quote.author.replace(/ /g, "-");
      quote.quote = quote.quote.replace(/(\n).*/g, "");
      this.countQuote++;
      this.lastTimeQuote = new Date().getTime();
    }
    return quote;
  }


  //------------ close
  private close(){
    store.dispatch(toggleMenu());
    window.CustomTemplate.closeMenu();
  }

  //------------ close
  private openLink(pageId: string){
    store.dispatch(toggleMenu());
    window.CustomTemplate.openPage(pageId, false);
  }

  //------------ render
  public render() {
    let quote: Quote = this.generateQuote();
    return (
      <div className="splash-screen">
        <div className="splash-screen__topbar-tools">
          {/* <img src={windowToolImg} className="splash-screen__window-tool" alt="window-tool" /> */}
          <h5>- [] <span id="close" onClick={()=>{this.close()}}>X</span></h5>
        </div>
        <div className="splash-screen__quote animate__animated animate__fast animate__fadeIn">
          {/* <span className="splash-screen__title">
            &nbsp;_&nbsp;<br />
            |&nbsp;|_&nbsp;___&nbsp;_&nbsp;_<br />
            |&nbsp;&nbsp;&nbsp;|&nbsp;-_|&nbsp;|&nbsp;|_&nbsp;_&nbsp;_&nbsp;<br />
            |_|_|___|_&nbsp;&nbsp;|_|_|_|<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|___|<br /><br />
          </span> */}
          <div className="splash-screen__content">
            <div className="w-100 text-center">
              <span>Keadex ©2020. Code licensed under an MIT-style License.</span><br/>
              <Link onClick={()=>{this.openLink(COOKIE_DECLARATION_ID)}} to={COOKIE_DECLARATION_URL}><FormattedMessage id="COOKIE_DECLARATION.TITLE" /></Link>&nbsp;|&nbsp;
              <Link onClick={()=>{this.openLink(PRIVACY_POLICY_ID)}} to={PRIVACY_POLICY_URL}><FormattedMessage id="PRIVACY_POLICY.TITLE" /></Link>&nbsp;|&nbsp;
              <Link onClick={()=>{this.openLink(TERMS_AND_CONDITIONS_ID)}} to={TERMS_AND_CONDITIONS_URL}><FormattedMessage id="TERMS_CONDITIONS.TITLE" /></Link>
            </div>
            <div className="d-none d-md-block mt-5">
              {quote.author}@keadex&gt;print-quote.sh<br />
              {quote.author}@keadex&gt;{quote.quote}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default injectIntl(SplashScreen)