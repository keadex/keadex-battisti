import React from 'react';
import { FormattedMessage } from 'react-intl';



//------------------ COMPONENT
export const CookieDeclaration : React.FunctionComponent<any> = props => {
  return (
    <React.Fragment>
      <header className="bp-header cf">
        <h1 className="bp-header__title text-brand1-dark"><FormattedMessage id="COOKIE_DECLARATION.TITLE" /></h1>
      </header>
      <div className='page-body'>
        <FormattedMessage id="COOKIE_DECLARATION.TITLE" />
      </div>
    </React.Fragment>
  );
}