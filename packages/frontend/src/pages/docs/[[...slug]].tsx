import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import NoSSR from 'react-no-ssr';
import PageLayout from '../../components/page-layout/page-layout';
import { wrapper } from '../../core/store/store';
import styles from './docs.module.scss';
import { isClient } from '../../helper/react-helper';
import { useRouter } from 'next/dist/client/router';

const MicroFrontend = dynamic(() => import('../../components/micro-frontend'));


// //---------- getStaticProps
// export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
//   (store => async (ctx) => {
//     return {
//       props: {}
//     }
//   })
// );


//------------------ COMPONENT
const Docs: React.FunctionComponent<any> = () => {

  //---------- isKeadexHTMLClassAttr
  const isKeadexHTMLClassAttr = (classValue: string) => {
    return (classValue.indexOf("js") != -1)
  }

  //---------- removeDocusaurusStyle
  const removeDocusaurusStyle = () => {
    const linkRel = document.querySelectorAll(`link[href='${process.env.NEXT_PUBLIC_DOCS_URL}/styles.css']`)
    if (linkRel && linkRel.length > 0){
      linkRel[0].remove()
    }
    // const script = document.querySelectorAll(`script[src='${process.env.NEXT_PUBLIC_DOCS_URL}/remoteEntry.js']`)
    // if (script && script.length > 0){
    //   script[0].remove()
    // }
  }

  // Docusaurus changes the class attribute of the "html" tag (i.e. removes js class) and this
  // breaks the Keadex style. The following is needed to revert the docusaurus behaviour.
  // In addition, since here Docusaurus has been added as a micro-frontend and not by using its
  // index.html (https://github.com/facebook/docusaurus/blob/37b70e3ab4f11e1c90cec1ca1576bdaf5054bf29/packages/docusaurus/src/webpack/templates/index.html.template.ejs)
  // the initial theme mode (dark) cannot be set (the script which does it is injected in the above template).
  // So I need also to set it here.
  useEffect(() =>{
    const htmlClassAttr = document.getElementsByTagName('html')[0].getAttribute('class')!
    const observer = new MutationObserver((mutationList, observer) => {
      if(!isKeadexHTMLClassAttr(document.getElementsByTagName('html')[0].getAttribute('class')!)){
        document.getElementsByTagName('html')[0].setAttribute('class', htmlClassAttr)
      }
      if(document.getElementsByTagName('html')[0].getAttribute('data-theme') !== 'dark'){
        document.getElementsByTagName('html')[0].setAttribute('data-theme', 'dark')
      }
    });
    observer.observe(document.getElementsByTagName("html")[0], { attributes: true });

    return () => {
      removeDocusaurusStyle();
      observer.disconnect();
    }
  })

  return (
    <PageLayout title="Keadex - Docs" description="Documentation of each Keadex module.">
      <header className={`${styles["docs__header"]} bp-header cf`}>
        <h1 className="bp-header__title text-brand1-dark"><FormattedMessage id="DOCS.TITLE" /></h1>
        <p className="bp-header__desc"><FormattedMessage id="DOCS.SUBTITLE" /></p>
      </header>
      <div className='page-body'>
        {/* <NoSSR> */}
          <MicroFrontend remoteAppInfo={{ url: `${process.env.NEXT_PUBLIC_DOCS_URL}/remoteEntry.js`, scope: "keadexdocs", module: "./App" }} 
          skeletonThreshold={500} skeleton={<div>loading</div>} id="__docusaurus" className={`${styles["docs__docusaurus-container"]}`} />
        {/* </NoSSR> */}
      </div>
    </PageLayout>
  );
}

export default React.memo(Docs, () => true);