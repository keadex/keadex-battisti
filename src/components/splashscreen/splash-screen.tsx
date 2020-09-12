import React, { useRef, MutableRefObject, useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {Quote} from '../../model/models';
import styles from './splash-screen.module.scss';
import { COOKIE_DECLARATION_URL, PRIVACY_POLICY_URL, TERMS_AND_CONDITIONS_URL, PAGE_ROOT_ID } from '../../core/route.constants';
import { toggleMenu } from '../../core/store/reducers/app.reducer';
import Link from 'next/link';
import { connect } from 'react-redux';
import { IStoreState } from '../../core/store/store.type';

//------------------ TYPES
interface SplashScreenProps {
  toggleMenu:(menuOpen?: boolean)=>void;
  menuOpen: boolean;
  quotes: Quote[];
}


//------------------ COMPONENT
export const SplashScreen : React.FunctionComponent<SplashScreenProps> = props => {

  //ATTRS
  const intl = useIntl();
  let lastTimeQuote: MutableRefObject<number> = useRef(-1);
  let countQuote: MutableRefObject<number> = useRef(0);

  let quote: MutableRefObject<Quote> = useRef(generateQuote());


  //FUNCS

  //---------- useEffect
  useEffect(() => {
    quote.current = generateQuote();
  });


  //------------ generateQuote
  function generateQuote(): Quote {
    let indexQuote = 0;
    let quote: Quote = {
      author: intl.formatMessage({ id: "QUOTES.NO_QUOTES_AUTHOR" }),
      quote: intl.formatMessage({ id: "QUOTES.NO_QUOTES" }),
    };
    if ((new Date().getTime() - lastTimeQuote.current < 3000) && (countQuote.current == 2)) {
      countQuote.current = 0;
      return {
        author: intl.formatMessage({ id: "QUOTES.TIP_QUOTE_AUTHOR" }),
        quote: intl.formatMessage({ id: "QUOTES.TIP_QUOTE" }),
      }
    } else if (countQuote.current > 2) {
      countQuote.current= 0;
    }
    if (props.quotes != undefined && props.quotes.length > 0) {
      indexQuote = Math.floor(Math.random() * props.quotes.length);
      quote = props.quotes[indexQuote];
      quote.author = quote.author.replace(/ /g, "-");
      quote.quote = quote.quote.replace(/(\n).*/g, "");
      countQuote.current++;
      lastTimeQuote.current = new Date().getTime();
    }
    return quote;
  }


  //------------ close
  function close(){
    props.toggleMenu();
    window.CustomTemplate.closeMenu();
  }

  //------------ close
  function openLink(pageId: string){
    props.toggleMenu();
    window.CustomTemplate.openPage(pageId, false);
  }


  return (
    <div className={`${styles["splash-screen"]}`}>
      <div className={`${styles["splash-screen__topbar-tools"]}`}>
        {/* <img src={windowToolImg} className="splash-screen__window-tool" alt="window-tool" /> */}
        <h5>- [] <span id="close" onClick={()=>{close()}}>X</span></h5>
      </div>
      <div className={`${styles["splash-screen__quote"]} animate__animated animate__fast animate__fadeIn`}>
        {/* <span className="splash-screen__title">
          &nbsp;_&nbsp;<br />
          |&nbsp;|_&nbsp;___&nbsp;_&nbsp;_<br />
          |&nbsp;&nbsp;&nbsp;|&nbsp;-_|&nbsp;|&nbsp;|_&nbsp;_&nbsp;_&nbsp;<br />
          |_|_|___|_&nbsp;&nbsp;|_|_|_|<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|___|<br /><br />
        </span> */}
        <div className={`${styles["splash-screen__content"]}`}>
          <div className="w-100 text-center">
            <span>Keadex ©2020. <span className="d-block d-md-none" />Code licensed under an MIT-style License.</span><br/>
            {/* <Link href={COOKIE_DECLARATION_URL}><a onClick={()=>{openLink(PAGE_ROOT_ID)}} ><FormattedMessage id="COOKIE_DECLARATION.TITLE" /></a></Link>&nbsp;|&nbsp; */}
            <Link href={PRIVACY_POLICY_URL}><a onClick={()=>{openLink(PAGE_ROOT_ID)}}><FormattedMessage id="PRIVACY_POLICY.TITLE" /></a></Link>&nbsp;|&nbsp;
            <Link href={TERMS_AND_CONDITIONS_URL}><a onClick={()=>{openLink(PAGE_ROOT_ID)}}><FormattedMessage id="TERMS_CONDITIONS.TITLE" /></a></Link>
          </div>
          <div className="d-none d-md-block mt-5">
            {quote.current.author}@keadex&gt;print-quote.sh<br />
            {quote.current.quote}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state:IStoreState) => {
  return {
    menuOpen: state.app.menuOpen,
    quotes: state.app.quotes
  }
}

export default connect(
  mapStateToProps,
  { toggleMenu }
)(SplashScreen)
