import React from 'react';
import dynamic from 'next/dynamic';
import styles from './why-keadex.module.scss';
import { PAGE_ROOT_ID } from '../../core/route.constants';

const ScrollAnimation = dynamic(() => import('react-animate-on-scroll'));
const FormattedMessage:any = dynamic(() => import('react-intl').then((mod:any) => mod.FormattedMessage));
const ReactPlayer = dynamic(() => import('react-player'));
const Background = dynamic(() => import('../background/background'));



//------------------ TYPES
interface WhyKeadexProps{
  formatMessageValues:Record<string, any>
}


//------------------ COMPONENT
const WhyKeadex : React.FunctionComponent<WhyKeadexProps> = props => {
  
  return (
    <>
      <Background id={`bg`} img={"graph-bg.jpg"} overlayColor="#131313"/>
      <div className={`${styles["why-keadex__section-content"]}`}>
        <div className="row m-0">
          <div className="col-12">
            <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp' offset={0} animateOnce>
              <h1 className="text-brand1-dark mt-5 mt-md-0"><FormattedMessage id="HOME.WHY_KEADEX" /></h1>
            </ScrollAnimation>
          </div>
        </div>
        <div className="row m-0 mt-5 mt-md-6">
          <div className="col-12 col-md-8">
            <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp' animateOnce>
              <FormattedMessage id="HOME.TEXT_WHAT_IS" values={props.formatMessageValues}/>
            </ScrollAnimation>
          </div>
          <div className="col-12 col-md-4 mt-5 mt-md-0">
            <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp' animateOnce>
              <ReactPlayer url='https://youtu.be/7W7hEUGtv4U' width="100%" className="mb-5 mb-md-0"/>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyKeadex;