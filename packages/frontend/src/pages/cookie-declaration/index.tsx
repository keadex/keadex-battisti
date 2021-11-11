import { GetStaticProps } from 'next';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PageLayout from '../../components/page-layout/page-layout';
import { wrapper } from '../../core/store/store';


//---------- getStaticProps
export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store => async (ctx) => {
    return {
      props: {}
    }
  })
);

//------------------ COMPONENT
const CookieDeclaration : React.FunctionComponent<any> = () => {
  return (
    <PageLayout title="Keadex - Cookie Declaration">
      <header className="bp-header cf">
        <h1 className="bp-header__title text-brand1-dark"><FormattedMessage id="COOKIE_DECLARATION.TITLE" /></h1>
      </header>
      <div className='page-body'>
        <FormattedMessage id="COOKIE_DECLARATION.TITLE" />
      </div>
    </PageLayout>
  );
}

export default CookieDeclaration;