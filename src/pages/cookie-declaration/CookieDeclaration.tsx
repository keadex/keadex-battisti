import React from 'react';
import { FormattedMessage, FormattedMessage as FormattedHTMLMessage } from 'react-intl';



//------------------ COMPONENT
export const CookieDeclaration : React.FunctionComponent<any> = props => {
  return (
    <React.Fragment>
      <header className="bp-header cf">
        <h1 className="bp-header__title text-brand1-dark"><FormattedMessage id="COOKIE_DECLARATION.TITLE" /></h1>
        {/* <p className="bp-header__desc"><FormattedMessage id="ABOUT_ME.SUBTITLE" /></p> */}
      </header>
      <div className='page-body'>
        <FormattedMessage id="COOKIE_DECLARATION.TITLE" />
      </div>
    </React.Fragment>
  );
}