import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import NoSSR from 'react-no-ssr';
import PageLayout from '../../components/page-layout/page-layout';
import { wrapper } from '../../core/store/store';
import styles from './docs.module.scss';
import { isClient } from '../../helper/react-helper';

const MicroFrontend = dynamic(() => import('../../components/micro-frontend'));


//---------- getStaticProps
export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store => async (ctx) => {
    return {
      props: {}
    }
  })
);

function isKeadexHTMLClassAttr(classValue: string){
  return (classValue.indexOf("js") != -1)
}

//------------------ COMPONENT
const Docs: React.FunctionComponent<any> = () => {

  // Docusaurus changes the class attribute of the "html" tag (i.e. removes js class) and this
  // breaks the Keadex style. The following is needed to revert the docusaurus behaviour.
  useEffect(() =>{
    const htmlClassAttr = document.getElementsByTagName('html')[0].getAttribute('class')!
    const observer = new MutationObserver((mutationList, observer) => {
      console.log("ci sono")
      console.log(mutationList)
      console.log(observer)
      if(!isKeadexHTMLClassAttr(document.getElementsByTagName('html')[0].getAttribute('class')!)){
        console.log("cambio")
        console.log(document.getElementsByTagName('html')[0].getAttribute('class'))
        document.getElementsByTagName('html')[0].setAttribute('class', htmlClassAttr)
        //observer.disconnect()
      }
    });
    observer.observe(document.getElementsByTagName("html")[0], { attributes: true });

    return () => {
      observer.disconnect()
    }
  })

  return (
    <PageLayout title="Keadex - Docs" description="Documentation of each Keadex module.">
      <header className="bp-header cf">
        <h1 className="bp-header__title text-brand1-dark"><FormattedMessage id="DOCS.TITLE" /></h1>
        <p className="bp-header__desc"><FormattedMessage id="DOCS.SUBTITLE" /></p>
      </header>
      <NoSSR>
        <MicroFrontend 
          remoteAppInfo={{ url: `${process.env.NEXT_PUBLIC_DOCS_URL}/remoteEntry.js`, scope: "keadexdocs", module: "./App" }} 
          skeletonThreshold={500} skeleton={<div>loading</div>} id="__docusaurus" />
      </NoSSR>
    </PageLayout>
  );
}

export default Docs;