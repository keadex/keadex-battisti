import React, { RefObject } from 'react';

// import ScrollAnimation from 'react-animate-on-scroll';
const ScrollAnimation = dynamic(() => import('react-animate-on-scroll'));

import BasePageComponent from '../components/base-page-component/base-page-component';
import styles from './index.module.scss';
import { MorphSVGTimeline, generateMorphSVGTimelines } from '../helper/animation-helper';
import { KEA_LAB_URL, PAGE_ROOT_ID, WHY_KEADEX_ID, WHATS_KEADEX_ID } from '../core/route.constants';
import { FORMATTED_MESSAGE_STANDARD_HTML_VALUES } from '../core/app.constants';
import { disableScrollIntoView } from '../helper/generic-helper';
import { GetStaticProps } from 'next';
import { wrapper } from '../core/store/store';
import dynamic from 'next/dynamic'

const FormattedMessage:any = dynamic(() => import('react-intl').then((mod:any) => mod.FormattedMessage));
const MDBCard:any = dynamic(() => import('mdbreact').then((mod:any) => mod.MDBCard));
const MDBView:any = dynamic(() => import('mdbreact').then((mod:any) => mod.MDBView));
const MDBCardBody:any = dynamic(() => import('mdbreact').then((mod:any) => mod.MDBCardBody));
const ReactPlayer = dynamic(() => import('react-player'));
const OptimizedMedia = dynamic(
  () => import('../components/optimized-media/optimized-media'),
  { ssr: false }
)
const DosButton = dynamic(() => import('../components/dos-button/dos-button'));
const Background = dynamic(() => import('../components/background/background'));
const PageLayout = dynamic(() => import('../components/page-layout/page-layout'));
const KeadexPreview = dynamic(() => import('../components/keadex-preview/keadex-preview'));


//--------------- TYPES
interface HomeState {
  width: number,
  height: number
}

enum ListItem{
  experiment = "experiment",
  modular = "modular",
  openSource = "openSource"
}


//---------- getStaticProps
export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({store}) => {
    return {
      props:{}
    }
  }
);


//--------------- COMPONENT
class Home extends BasePageComponent<any, HomeState> {

  //ATTRS
  private svgPathRef:RefObject<SVGPathElement>[];
  private listRefs:Map<string, RefObject<HTMLLIElement>>;
  private experimentPath:string[] = [
    "M131,290.8c-17.2,0-34.4,0.1-51.6,0c-9-0.1-18-0.4-26.5-3.8c-7.4-3-11.1-8.5-12.1-16.3c-1.3-10.1,2.5-18.9,6.9-27.3c13.8-26.3,26.9-53,42.2-78.5c12.5-20.7,17-42.5,16.1-66c-0.3-7.3-0.9-14.7-1.4-22c-0.1-2-0.9-3.1-3-3.8c-8.2-2.7-12.8-10-11.6-17.8c1.3-8.1,7.8-13.8,16.5-13.9c16.5-0.1,33.1-0.1,49.6,0c8.2,0.1,14.8,5.8,16.1,13.3c1.3,8-2.8,15.2-10.7,18.1c-2.5,0.9-3.7,2.1-3.9,4.7c-1.9,21.3-3,42.7,3.5,63.4c2.3,7.4,6.5,14.2,10.1,21.1c14.3,26.8,28.7,53.5,43,80.3c2.1,3.9,3.4,8.1,5.2,12.1c2.5,5.6,2.6,11.5,1.9,17.4c-0.9,7.4-5,12.4-11.9,15.2c-7.4,3-15.3,3.6-23.1,3.7C167.9,290.9,149.5,290.8,131,290.8C131,290.8,131,290.8,131,290.8z",
    "M135.8,12.8c-0.8,0-1.5,0.1-2.3,0.3c0.6-1.1,0.9-2.3,0.9-3.6c0.1-4.3-3.6-8.2-8-8.3c-4.5-0.1-8.1,3.4-8.2,8c-0.1,4.7,3.2,8.1,7.9,8.2c0.4,0,0.7,0,1-0.1c-1.3,1.8-2.1,4-2,6.4c0,1.7,0.5,3.3,1.3,4.8c-0.7-0.3-1.4-0.4-2.2-0.4c-3.3,0.1-5.2,1.9-5.5,5.2c-0.3,3.1,2.2,5.7,5.4,5.8c3.1,0.1,5.8-2.4,5.8-5.5c0-0.5-0.1-1.1-0.2-1.6c1.8,1.3,4.1,2.1,6.5,2.1c5.9-0.1,10.7-5.1,10.6-10.9C146.6,17.4,141.7,12.7,135.8,12.8z",
    "M131.1,274.8c-18.1,0-36.1,0.1-54.2-0.1c-5.1-0.1-10.3-0.8-15.3-1.7c-3.8-0.6-5.1-2.1-4.7-6c0.3-3.6,0.9-7.5,2.6-10.7c9.4-18.9,19.1-37.6,28.8-56.4c1.8-3.4,3.2-7.2,7.5-8.5c2.5-0.7,4.8-1,7.2,0.2c0.4,0.2,0.9,0.3,1.3,0.6c7.6,5.3,15.7,5.1,24.1,2.2c1.4-0.5,3-0.7,4.4-1.3c9.7-4,19.3-2.6,29.2-0.4c7.2,1.6,11.7,5,14.9,11.8c8.3,17.3,17.3,34.3,25.8,51.5c1.6,3.3,2.4,7.2,2.9,10.9c0.4,3.7-1,5.4-4.6,6c-5.1,0.8-10.2,1.7-15.3,1.7C167.4,274.9,149.2,274.8,131.1,274.8z"
  ];
  private modularPath:string[] = [
    "M259.5,19.7c-0.1-3.2-1.7-4.9-4.9-5.5c-0.8-0.2-1.7-0.2-2.5-0.2c-28.8,0-57.6,0-86.4,0c-1.1,0-2.3,0.1-3.3,0.3c-2.1,0.5-3.6,1.8-4,4c-0.2,1.3-0.3,2.6-0.4,3.8c-0.1,2.6,0,5.2,0,7.8h-8.7L113,30.1h-8.5c0-2.6,0-5.1,0-7.5c0-6.8-1.7-8.5-8.4-8.5c-28.3,0-56.6,0-84.9,0c-0.6,0-1.2,0-1.9,0c-4.5,0.3-6.5,2.3-6.5,6.8c0,3.8,0,7.5,0,11.3c0,3.9-0.1,7.7,0.1,11.6c0.1,4,1.9,5.9,5.9,6.4c0.6,0.1,1.1,0.1,1.7,0.1c28.8,0,57.6,0,86.4,0c0.9,0,1.8-0.1,2.7-0.3c2.8-0.5,4.4-2.2,4.7-5c0.2-2.3,0.2-4.7,0.3-7.1c0-1.3,0-2.5,0-3.8h8.5l17.2,0v191.9l-18.8,0c-2.3,0.1-4.6,0.1-7.1,0.1c0-3.3,0-6.4,0-9.5c-0.1-4.4-1.9-6.4-6.3-6.7c-0.6,0-1.1,0-1.7,0c-20.3,0-40.6,0-61,0c-0.8,0-1.6,0-2.4,0.1c-3.7,0.4-5.7,2.3-5.8,5.9c-0.1,8-0.1,16.1,0,24.1c0.1,4.1,2.2,6,6.3,6.2c0.5,0,1,0,1.5,0c20.4,0,40.8,0,61.1,0c0.7,0,1.5,0,2.2,0c3.4-0.3,5.2-1.9,5.8-5.3c0.2-1,0.2-2.1,0.2-3.2c0-2.5,0-5,0-7.5h8.6l36.3-0.1h8.6c0,1.6,0,3.1,0,4.6c0,1.5,0,3,0,4.5c0.1,4.9,2.2,6.9,7,6.9c20.9,0,41.8,0,62.6,0c5.3,0,7.4-2.1,7.4-7.5c0-7.1,0-14.1,0-21.2c0-0.9-0.1-1.8-0.2-2.7c-0.4-2.7-2-4.3-4.7-4.7c-0.9-0.1-1.8-0.2-2.7-0.2c-20.6,0-41.2,0-61.8,0c-1,0-2,0.1-3,0.2c-2.5,0.4-3.9,1.7-4.4,4.2c-0.2,1-0.2,2-0.2,3c0,2.8,0,5.7,0,8.7H149l-17.4,0V34.2l17.8,0h8.6c0,3.1,0,6,0,8.9c0.1,5.1,2.1,7.1,7.2,7.1c29.1,0,58.3,0,87.4,0c4.9,0,6.9-2.1,7-7c0-3.6,0-7.3,0-10.9C259.6,28.1,259.7,23.9,259.5,19.7z",
    "M112.6,230.1c0,0.9,0,1.7,0,2.5c0,7.9-0.1,15.8,0.1,23.7c0.1,4.2,2.1,6,6.3,6c7.7,0.1,15.5,0.1,23.2,0c4.5,0,6.5-2.1,6.6-6.7c0.1-6.9,0-13.8,0-20.7c0-1.7,0-3.3,0-5l-0.1-4.1c0.1-2.2,0.4-4.2,0.4-6.3c0-6.6,0.1-13.2-0.1-19.9c-0.1-2.7-0.5-5.5-1.3-8.1c-1.4-5.1-3.1-10.1-4.9-15c-1.9-5.2-2-10.6-2.3-16.1c3.7,0,7.3,0.1,10.9,0c6.2-0.1,5.2,0.2,6.6-5.1c1.5-5.7,3.3-11.3,3.2-17.3c-0.1-4.4,0.2-8.9,0.2-13.3c0-11.2,0-22.4-0.2-33.7c0-1.5-0.7-3.3-1.7-4.4c-2.9-3.2-6-6.2-9.1-9.2c-2.1-2.1-4.6-3.1-7.7-2.3c-0.5,0.1-1,0.1-1.5,0.1V62.6c1.9-0.1,3.8-0.3,5.6-0.3c1.5,0,2.3-0.8,2.3-2.3c0-0.8,0-1.7,0.1-2.5c0-6.3,0-12.6,0-18.9V34l0-4.3c0-4.7,0.1-9.3,0-13.9c-0.2-5.6-3.4-9.6-8.9-10c-5.9-0.4-11.9-0.4-17.8,0c-6.5,0.5-9.4,4.2-9.5,10.8c-0.1,3.8,0,7.6,0,11.5c0,0.6,0,1.2,0,1.7l0,4.1v1.9c0,7.7,0,15.5,0,23.2c0,2.5,0.6,3.1,3.1,3.1c1.6,0,3.1,0,4.7,0v12.9c-5.9-0.5-7.7,0.3-11.7,4.7c-1.4,1.6-2.8,3.1-4.4,4.4c-3,2.4-4.1,5.4-4.1,9.1c0.1,9.9,0,19.9,0.1,29.8c0,5,0,10,0.1,15c0.1,7.2,2.5,13.9,4.2,20.7c0.3,1.3,1.5,1.4,2.5,1.4c4.1,0,8.2,0,12.3,0c0.6,0,1.2,0.1,1.8,0.1c-0.2,2.8-0.2,5.5-0.5,8.1c-0.2,1.7-0.5,3.4-1.1,4.9c-5.8,14.4-8.3,29.3-7,44.8c0.2,2.2-0.1,4.5-0.3,6.7",
    "M103.9,226c2.5,0,4.8,0.1,7.1-0.1c0.4,0,1.2-0.7,1.2-1.1c0.2-2.2,0.5-4.5,0.3-6.7c-1.2-15.5,1.2-30.4,7-44.8c0.6-1.5,0.9-3.2,1.1-4.9c0.3-2.6,0.4-5.2,0.5-8.1c-0.6,0-1.2-0.1-1.8-0.1c-4.1,0-8.2,0-12.3,0c-1.1,0-2.2-0.1-2.5-1.4c-1.8-6.8-4.1-13.5-4.2-20.7c-0.1-5-0.1-10-0.1-15c0-9.9,0-19.9-0.1-29.8c0-3.7,1.2-6.7,4.1-9.1c1.6-1.3,3-2.9,4.4-4.4c3.9-4.4,5.8-5.2,11.7-4.7c0-4.2,0-8.5,0-12.9c-1.5,0-3.1,0-4.7,0c-2.5,0-3.1-0.6-3.1-3.1c0-7.7,0-15.5,0-23.2c0-0.6,0-1.2,0-1.9c-2.8,0-5.6,0-8.5,0c0,1.2,0,2.5,0,3.8c-0.1,2.4,0,4.7-0.3,7.1c-0.3,2.8-1.9,4.4-4.7,5c-0.9,0.2-1.8,0.3-2.7,0.3c-28.8,0-57.6,0-86.4,0c-0.6,0-1.1,0-1.7-0.1c-4-0.5-5.8-2.4-5.9-6.4c-0.1-3.9-0.1-7.7-0.1-11.6c0-3.8,0-7.5,0-11.3c0.1-4.5,2-6.5,6.5-6.8c0.6,0,1.2,0,1.9,0c28.3,0,56.6,0,84.9,0c6.7,0,8.4,1.7,8.4,8.5c0,2.5,0,4.9,0,7.5c2.8,0,5.6,0,8.5,0c0-0.5,0-1.1,0-1.7c0-3.8-0.1-7.6,0-11.5c0.1-6.6,3.1-10.3,9.5-10.8c5.9-0.5,11.9-0.5,17.8,0c5.5,0.4,8.8,4.3,8.9,10c0.1,4.6,0,9.2,0,13.9c2.9,0,5.6,0,8.7,0c0-2.6,0-5.2,0-7.8c0-1.3,0.1-2.6,0.4-3.8c0.4-2.2,1.9-3.5,4-4c1.1-0.3,2.2-0.3,3.3-0.3c28.8,0,57.6,0,86.4,0c0.8,0,1.7,0.1,2.5,0.2c3.1,0.6,4.8,2.3,4.9,5.5c0.1,4.2,0.1,8.4,0.1,12.6c0,3.6,0,7.3,0,10.9c0,4.9-2.1,7-7,7c-29.1,0-58.3,0-87.4,0c-5.1,0-7.1-2-7.2-7.1c-0.1-2.9,0-5.8,0-8.9c-2.8,0-5.5,0-8.6,0c0,1.5,0,3,0,4.6c0,6.3,0,12.6,0,18.9c0,0.8,0,1.7-0.1,2.5c0,1.5-0.7,2.2-2.3,2.3c-1.8,0.1-3.7,0.2-5.6,0.3c0,4.3,0,8.5,0,12.8c0.6,0,1.1,0,1.5-0.1c3-0.8,5.5,0.2,7.7,2.3c3.1,3,6.3,6,9.1,9.2c1,1.1,1.7,2.9,1.7,4.4c0.2,11.2,0.2,22.4,0.2,33.7c0,4.4-0.3,8.9-0.2,13.3c0.1,6-1.7,11.6-3.2,17.3c-1.4,5.3-0.4,5-6.6,5.1c-3.6,0.1-7.2,0-10.9,0c0.3,5.5,0.5,10.9,2.3,16.1c1.8,5,3.4,10,4.9,15c0.7,2.6,1.2,5.4,1.3,8.1c0.2,6.6,0.1,13.2,0.1,19.9c0,2.1-0.2,4.1-0.4,6.3c3,0,5.8,0,8.7,0c0-3,0-5.8,0-8.7c0-1,0-2,0.2-3c0.5-2.5,1.9-3.8,4.4-4.2c1-0.2,2-0.2,3-0.2c20.6,0,41.2,0,61.8,0c0.9,0,1.8,0.1,2.7,0.2c2.7,0.4,4.3,2,4.7,4.7c0.1,0.9,0.2,1.8,0.2,2.7c0,7.1,0,14.1,0,21.2c0,5.3-2.1,7.5-7.4,7.5c-20.9,0-41.8,0-62.6,0c-4.9,0-6.9-2-7-6.9c0-1.5,0-3,0-4.5c0-1.5,0-3,0-4.6c-2.8,0-5.5,0-8.6,0c0,1.7,0,3.3,0,5c0,6.9,0,13.8,0,20.7c0,4.6-2,6.6-6.6,6.7c-7.7,0.1-15.5,0.1-23.2,0c-4.2,0-6.2-1.9-6.3-6c-0.2-7.9-0.1-15.8-0.1-23.7c0-0.8,0-1.6,0-2.5c-2.9,0-5.6,0-8.6,0c0,2.5,0,5,0,7.5c0,1.1,0,2.1-0.2,3.2c-0.5,3.3-2.4,5-5.8,5.3c-0.7,0.1-1.5,0-2.2,0c-20.4,0-40.8,0-61.1,0c-0.5,0-1,0-1.5,0c-4-0.2-6.2-2.1-6.3-6.2c-0.1-8-0.1-16.1,0-24.1c0.1-3.7,2.1-5.6,5.8-5.9c0.8-0.1,1.6-0.1,2.4-0.1c20.3,0,40.6,0,61,0c0.6,0,1.1,0,1.7,0c4.3,0.3,6.2,2.3,6.3,6.7C104,219.6,103.9,222.7,103.9,226z M116.5,197.3c0,20.5,0,40.9,0,61.2c4.1,0,8.1,0,12.3,0c0-0.8,0-1.4,0-2.1c0-13.8,0-27.6,0-41.4c0-1.3,0.1-2.6,0.4-3.8c0.1-0.5,0.9-1.2,1.5-1.2c0.4,0,1.1,0.8,1.2,1.3c0.3,1.3,0.4,2.7,0.4,4c0,13.8,0,27.5,0,41.3c0,0.7,0,1.3,0,2c4.3,0,8.3,0,12.4,0c0-20.5,0-40.8,0-61.2C135.3,197.3,126,197.3,116.5,197.3z M157.4,140c0-0.6,0-1.1,0-1.5c0-6.4,0-12.8,0-19.2c0-1.4-0.1-2.8-0.3-4.2c-0.3-2.2-1.6-3.4-3.7-3.7c-1.3-0.2-2.6-0.2-3.9-0.3c-3-0.2-5.1,1.1-6.3,3.9c-3.5,8.2-11.7,9.3-17.8,7.6c-2.7-0.8-4.8-2.5-6-5c-2.2-4.8-5.9-6.9-11.1-6.6c-3.4,0.2-4.6,1.4-4.6,4.8c0,7.5,0,15,0,22.5c0,0.5,0,1.1,0,1.7C121.7,140,139.4,140,157.4,140z M103.7,107.7c2.8,0,5.5-0.1,8.1,0c3,0.2,4.7-1.1,5.9-3.8c3-7,10-9.9,17.3-7.7c4.3,1.3,6.9,4.4,8.6,8.4c0.9,2.1,2.3,3.2,4.7,3.1c1.8-0.1,3.6,0,5.4,0c1.3,0,2.5,0,4,0c0-4.4-0.1-8.4,0-12.5c0.1-3.8-1.3-7-4.1-9.6c-2-1.8-3.9-3.7-6-5.4c-1-0.8-2.5-1.4-3.8-1.5c-7.8-0.3-15.7-0.3-23.6-0.5c-3.5-0.1-6.5,1.2-8.9,3.7c-2.1,2.2-4.2,4.5-6.2,6.9c-0.7,0.8-1,2-1.1,3c-0.2,2.6-0.2,5.3-0.2,7.9C103.7,102.4,103.7,105,103.7,107.7z M144.9,58.4c0-10.9,0-21.7,0-32.6c-9.5,0-19,0-28.5,0c0,10.9,0,21.7,0,32.6C125.9,58.4,135.3,58.4,144.9,58.4z M104.5,144.2c0.7,2.9,1.3,5.8,2.1,8.7c0.6,2.6,2,3.6,4.7,3.6c5.1,0,10.2,0,15.3,0c7.8,0,15.6,0,23.4,0c1.9,0,3.6-0.6,4.2-2.4c1-3.2,1.7-6.5,2.6-9.9C139.3,144.2,122.1,144.2,104.5,144.2z M143.9,193.2c-0.1-0.4-0.1-0.6-0.1-0.8c-1.8-5.7-3.5-11.3-5.3-17c-0.6-1.9-2.1-2.8-4.1-2.9c-2.4,0-4.7,0-7.1,0c-2.3,0-4,1.2-4.7,3.4c-1.3,3.9-2.6,7.9-3.8,11.8c-0.6,1.8-1,3.6-1.5,5.4C126.2,193.2,135,193.2,143.9,193.2z M116,21.6c9.9,0,19.4,0,29,0c0-2.2,0.1-4.4,0-6.5c-0.3-3.5-2.4-5.8-5.6-5.8c-5.8-0.1-11.7-0.1-17.5,0c-3,0.1-5,1.8-5.5,4.7C116,16.5,116.1,19,116,21.6z M130.6,99.1c-5.7-0.1-10.4,4.5-10.5,10.2c0,5.6,4.6,10.4,10.2,10.4c5.9,0.1,10.6-4.3,10.7-10C141.1,103.9,136.5,99.2,130.6,99.1z M79.5,213.5c0,4.2,0,8.2,0,12.3c6.9,0,13.6,0,20.4,0c0-4.1,0-8.2,0-12.3C93.1,213.5,86.4,213.5,79.5,213.5z M100,230c-6.9,0-13.7,0-20.5,0c0,4.1,0,8.1,0,12.2c6.9,0,13.6,0,20.5,0C100,238.1,100,234.1,100,230z M79.4,29.8c6.9,0,13.6,0,20.4,0c0-4.1,0-8.1,0-12.2c-6.8,0-13.6,0-20.4,0C79.4,21.7,79.4,25.6,79.4,29.8z M30.6,46.2c6.8,0,13.6,0,20.3,0C51,42,51,38,51,34c-6.8,0-13.6,0-20.3,0C30.6,38.1,30.6,42.1,30.6,46.2z M161.3,34c0,4.1,0,8.1,0,12.2c6.8,0,13.6,0,20.3,0c0-4.1,0-8.1,0-12.2C174.8,34,168.2,34,161.3,34z M51,225.8c0-4.2,0-8.2,0-12.2c-6.9,0-13.6,0-20.3,0c0,4.2,0,8.2,0,12.2C37.5,225.8,44.2,225.8,51,225.8z M161.3,225.7c6.9,0,13.6,0,20.4,0c0-4.1,0-8.1,0-12.1c-6.8,0-13.6,0-20.4,0C161.3,217.7,161.3,221.6,161.3,225.7z M181.6,242.2c0-4.1,0-8.2,0-12.2c-6.8,0-13.6,0-20.3,0c0,4.2,0,8.2,0,12.2C168.1,242.2,174.8,242.2,181.6,242.2z M210.2,229.9c0,4.2,0,8.2,0,12.3c6.9,0,13.6,0,20.4,0c0-4.1,0-8.2,0-12.3C223.7,229.9,217,229.9,210.2,229.9z M50.9,29.7c0-4.2,0-8.1,0-12.2c-6.8,0-13.5,0-20.3,0c0,4.1,0,8.1,0,12.2C37.4,29.7,44.1,29.7,50.9,29.7z M181.6,17.5c-6.8,0-13.6,0-20.3,0c0,4.1,0,8.1,0,12.2c6.8,0,13.5,0,20.3,0C181.6,25.6,181.6,21.6,181.6,17.5z M185.8,29.8c6.9,0,13.6,0,20.3,0c0-4.1,0-8.1,0-12.2c-6.8,0-13.5,0-20.3,0C185.8,21.6,185.8,25.7,185.8,29.8z M230.6,17.6c-6.9,0-13.6,0-20.4,0c0,4.1,0,8.1,0,12.1c6.9,0,13.6,0,20.4,0C230.6,25.6,230.6,21.6,230.6,17.6z M234.8,17.5c0,4.2,0,8.2,0,12.2c6.8,0,13.6,0,20.3,0c0-4.1,0-8.1,0-12.2C248.3,17.5,241.6,17.5,234.8,17.5z M55.1,46.2c6.9,0,13.6,0,20.3,0c0-4.2,0-8.2,0-12.3c-6.8,0-13.5,0-20.3,0C55.1,38,55.1,42.1,55.1,46.2z M100,34c-7,0-13.7,0-20.5,0c0,4.1,0,8,0,11.9c6.9,0,13.7,0,20.5,0C100,41.9,100,38,100,34z M55.1,17.5c0,4.1,0,8.2,0,12.2c6.8,0,13.5,0,20.2,0c0-4.1,0-8.2,0-12.2C68.5,17.5,61.8,17.5,55.1,17.5z M55.1,213.6c0,4.1,0,8.2,0,12.2c6.8,0,13.5,0,20.2,0c0-4.1,0-8.2,0-12.2C68.5,213.6,61.8,213.6,55.1,213.6z M26.4,17.7c-6.9,0-13.7,0-20.4,0c0,4.1,0,8.1,0,12.1c6.8,0,13.6,0,20.4,0C26.4,25.7,26.4,21.8,26.4,17.7z M26.3,33.9c-6.8,0-13.6,0-20.3,0C6,38,6,42,6,46c6.8,0,13.5,0,20.3,0C26.3,41.9,26.3,37.9,26.3,33.9z M255,46c0-4.2,0-8.2,0-12.1c-6.8,0-13.5,0-20.3,0c0,4.1,0,8.1,0,12.1C241.6,46,248.3,46,255,46z M210.2,46c6.9,0,13.7,0,20.4,0c0-4.1,0-8.1,0-12.1c-6.9,0-13.6,0-20.4,0C210.2,37.9,210.2,41.9,210.2,46z M185.8,225.8c6.9,0,13.7,0,20.4,0c0-4.1,0-8.1,0-12.1c-6.8,0-13.6,0-20.4,0C185.8,217.8,185.8,221.7,185.8,225.8z M230.8,225.8c0-4.1,0-8,0-12.1c-6.8,0-13.6,0-20.4,0c0,4.1,0,8,0,12.1C217.1,225.8,223.9,225.8,230.8,225.8z M30.6,242c6.9,0,13.6,0,20.4,0c0-4.1,0-8,0-12.1c-6.8,0-13.6,0-20.4,0C30.6,234,30.6,237.9,30.6,242z M55,242c6.9,0,13.7,0,20.5,0c0-4.1,0-8.1,0-12.1c-6.9,0-13.6,0-20.5,0C55,234,55,237.9,55,242z M206.2,33.8c-6.8,0-13.6,0-20.3,0c0,4.1,0,8.1,0,12.1c6.9,0,13.6,0,20.3,0C206.2,41.8,206.2,37.9,206.2,33.8z M206.2,230c-6.8,0-13.6,0-20.4,0c0,4.1,0,8.1,0,12.1c6.9,0,13.6,0,20.4,0C206.2,238,206.2,234,206.2,230z M124.5,74.6c4.2,0,8.2,0,12.2,0c0-4.2,0-8.2,0-12.3c-4.1,0-8.1,0-12.2,0C124.5,66.4,124.5,70.5,124.5,74.6z M136.8,160.6c-4.2,0-8.2,0-12.2,0c0,2.7,0,5.4,0,7.9c4.1,0,8.1,0,12.2,0C136.8,165.9,136.8,163.3,136.8,160.6z"
  ]
  private openSourcePath:string[] = [
    "M130.4,2.8c62.8,0,115.9,44.8,126.7,106.8c8.4,48.3-13.2,99.4-53.6,126.6c-8.2,5.5-17,9.6-26.5,12.3c-4.1,1.1-5.7,0.4-7.2-3.6c-9.1-23.3-18.1-46.6-27.2-69.9c-1.9-4.9-1.3-6.4,3.6-8.3c13.7-5.5,20.5-15.8,22-30.3c2.2-20.8-10.9-38.7-31-42.2c-24.8-4.3-46.6,16.3-43.5,41.3c0.6,4.5,1.4,9,3.2,13.2c3.7,9.1,10.2,15.3,19.3,18.8c4.8,1.8,5.5,3.3,3.5,8c-9.3,22.9-18.6,45.9-28,68.8c-1.9,4.6-3.1,5.3-7.9,3.9c-16.6-4.9-30.7-14.2-42.8-26.4C20.5,200.9,8.1,176,4.2,147.1C-3,94.4,23.4,42.1,71.7,17C90.1,7.5,109.7,3,130.4,2.8z",
    "M11.6,130.3C11.5,71.1,55.3,20.7,113.8,12.7c53.5-7.3,105.3,20.8,126.3,70.5c19.5,46.2,11.7,89.3-20.3,127.7c-10.3,12.4-23.3,21.7-38.5,27.5c-0.6,0.2-1.1,0.4-1.6,0.6c-2,0.9-3.2,0.4-4-1.8c-2.6-7-5.4-14-8.1-21c-5.1-13-10.1-26.1-15.2-39.1c-1-2.4-0.8-3.6,1.7-4.9c13.1-6.7,20.1-17.8,22.1-32.1c2.9-20.2-3.6-36.7-20.9-47.7c-15.8-10.1-32.6-9.9-48.6-0.2c-16,9.7-23,24.5-21.5,43.2c0.9,10.9,4.2,20.8,11.6,29.1c3.3,3.8,7.3,6.8,11.8,8.9c1.9,0.9,2.1,1.9,1.4,3.8c-8.2,20-16.3,39.9-24.3,60c-0.9,2.2-2,2.4-4,1.6c-14.8-5.5-27.1-14.5-37.7-26.1c-19.3-21.1-30.1-46.1-32.2-74.6c0-0.5-0.1-1-0.1-1.5C11.6,134.5,11.6,132.4,11.6,130.3z",
    "M11.6,130.3C11.5,71.1,55.3,20.7,113.8,12.7c53.5-7.3,105.3,20.8,126.3,70.5c19.5,46.2,11.7,89.3-20.3,127.7c-10.3,12.4-23.3,21.7-38.5,27.5c-0.6,0.2-1.1,0.4-1.6,0.6c-2,0.9-3.2,0.4-4-1.8c-2.6-7-5.4-14-8.1-21c-5.1-13-10.1-26.1-15.2-39.1c-1-2.4-0.8-3.6,1.7-4.9c13.1-6.7,20.1-17.8,22.1-32.1c2.9-20.2-3.6-36.7-20.9-47.7c-15.8-10.1-32.6-9.9-48.6-0.2c-16,9.7-23,24.5-21.5,43.2c0.9,10.9,4.2,20.8,11.6,29.1c3.3,3.8,7.3,6.8,11.8,8.9c1.9,0.9,2.1,1.9,1.4,3.8c-8.2,20-16.3,39.9-24.3,60c-0.9,2.2-2,2.4-4,1.6c-14.8-5.5-27.1-14.5-37.7-26.1c-19.3-21.1-30.1-46.1-32.2-74.6c0-0.5-0.1-1-0.1-1.5C11.6,134.5,11.6,132.4,11.6,130.3z"
  ]
  private timelines:Map<string, MorphSVGTimeline>|undefined;
  private lastSubjectId:ListItem = ListItem.experiment;
  private listInterval:number = -1;
  private listIntervalTime:number = 5000;
  private formatMessageValues:Record<string, any> = {
    span: (chunks:any) => (<span className='text-brand1'>{chunks}</span>),
    br: ()=>(<br />)
  }

  //FUNCS

  //------------ constructor
  constructor(props:any, state:HomeState){
    super(props, state);
    this.anchorRefs.set(WHY_KEADEX_ID, React.createRef<any>());
    this.anchorRefs.set(WHATS_KEADEX_ID, React.createRef<any>());
    this.svgPathRef = [
      React.createRef<SVGPathElement>(),
      React.createRef<SVGPathElement>(),
      React.createRef<SVGPathElement>(),
      React.createRef<SVGPathElement>()
    ];
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.listRefs = new Map<string, RefObject<HTMLLIElement>>();
    this.listRefs.set(ListItem.experiment, React.createRef<HTMLLIElement>());
    this.listRefs.set(ListItem.modular, React.createRef<HTMLLIElement>());
    this.listRefs.set(ListItem.openSource, React.createRef<HTMLLIElement>());
  }



  //------------ componentDidMount
  componentDidMount(){
    super.componentDidMount();
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    this.startWhatsKeadexLoop();
    
    /**
     * The following line is needed because when there is an hash change, Next.js scrolls the body to target
     * element identified by the hash by using "scrollIntoView()".
     * See:
     *    - next.js/packages/next/client/index.tsx
     *    - next.js/packages/next/next-server/lib/router/router.js
     * 
     * This causes an issue on our side because instead of the body, we've a custome root scrollable element (the page)
    */
    // console.log("SCROLL disable scroll")
    disableScrollIntoView([WHY_KEADEX_ID, WHATS_KEADEX_ID], null);
  }

  
  //------------ componentDidUpdate
  componentDidUpdate(prevProps:any, prevState:HomeState, snapshot:any){
    super.componentDidUpdate(prevProps, prevState, snapshot);
  }


  //------------ componentWillUnmount
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    this.stoptWhatsKeadexLoop();
  }


  //------------ startWhatsKeadexLoop
  private startWhatsKeadexLoop(){
    this.listInterval = setInterval(()=>{
      var nextListItem:string = Object.keys(ListItem)[(Object.keys(ListItem).indexOf(this.lastSubjectId) + 1) % Object.keys(ListItem).length];
      this.animateWhatsKeadex(ListItem[nextListItem as keyof typeof ListItem])
    }, this.listIntervalTime);
  }


  //------------ stoptWhatsKeadexLoop
  private stoptWhatsKeadexLoop(){
    if (this.listInterval != -1) clearInterval(this.listInterval);    
  }


  //------------ initTimeline
  private async initTimeline(){
    let subjects = [
      {
        fromSvgPath: {id: "experiment", path: this.experimentPath},
        toSvgPath: {id: "modular", path: this.modularPath}
      },
      {
        fromSvgPath: {id: "experiment", path: this.experimentPath},
        toSvgPath: {id: "openSource", path: this.openSourcePath}
      },
      {
        fromSvgPath: {id: "modular", path: this.modularPath},
        toSvgPath: {id: "experiment", path: this.experimentPath}
      },
      {
        fromSvgPath: {id: "modular", path: this.modularPath},
        toSvgPath: {id: "openSource", path: this.openSourcePath}
      },
      {
        fromSvgPath: {id: "openSource", path: this.openSourcePath},
        toSvgPath: {id: "experiment", path: this.experimentPath}
      },
      {
        fromSvgPath: {id: "openSource", path: this.openSourcePath},
        toSvgPath: {id: "modular", path: this.modularPath}
      }
    ]
    this.timelines = generateMorphSVGTimelines(this.svgPathRef, subjects);
  }


  //------------ animateWhatsKeadex
  private animateWhatsKeadex(toSubjectId:ListItem){
    if (this.timelines == undefined) this.initTimeline();
    if (toSubjectId !== this.lastSubjectId){
      var subjects:string = this.lastSubjectId + "_" + toSubjectId;
      this.listRefs.get(this.lastSubjectId)!.current!.className="";
      this.listRefs.get(toSubjectId)!.current!.className=styles["active"];
      this.lastSubjectId = toSubjectId;
      this.timelines!.get(subjects)!.timeline.restart();
    }
  }


  //------------ onWhatsKeadexHover
  private onWhatsKeadexHover(toSubjectId:ListItem){
    this.stoptWhatsKeadexLoop();
    this.animateWhatsKeadex(toSubjectId)
  }


  //------------ updateWindowDimensions
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  //------------ render
  public render() {
    
    return (
      <PageLayout>
        
        <div className='page-body p-0'>
          {/* COVER */}
          <div className={`${styles["home__section"]} ${styles["home__cover"]} animate__animated animate__fadeIn animate__slow`} id="home-section">
            <KeadexPreview />
          </div>

          {/* WHY KEADEX */}
          <div id="why-keadex" ref={this.anchorRefs.get("why-keadex")} className={`${styles["home__section"]} ${styles["home__why-keadex"]}`}>
            <Background id={`bg`} img={"graph-bg.jpg"} overlayColor="#131313"/>
            <div className={`${styles["home__section-content"]}`}>
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
                    <FormattedMessage id="HOME.TEXT_WHAT_IS" values={this.formatMessageValues}/>
                  </ScrollAnimation>
                </div>
                <div className="col-12 col-md-4 mt-5 mt-md-0">
                  <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp' animateOnce>
                    <ReactPlayer url='https://youtu.be/7W7hEUGtv4U' width="100%" className="mb-5 mb-md-0"/>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>

          {/* WHAT IS KEADEX */}
          <div id="whats-keadex" ref={this.anchorRefs.get("whats-keadex")} className={`${styles["home__section"]} ${styles["home__whats-keadex"]} mt-3 mt-md-6`}>
            {/* <Background id="bg" img={bgWhat}/> */}
            {/* <Background id="bg" img={code} overlayColor="#131313"/> */}
            <div className="row m-0">
              <div className="col-12">
                <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp' offset={0} animateOnce>
                  <h1 className="text-brand1-dark mt-5 mt-md-0"><FormattedMessage id="HOME.WHAT_IS_KEADEX" /></h1>
                </ScrollAnimation>
              </div>
            </div>
            <div className="row m-0 mt-5 mt-md-6">
              <div className="col-12 col-md-3 text-center">
                <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp' animateOnce>
                  <svg id="svg" height="100%" viewBox="0 0 260 300" >
                    <defs>                      
                      <filter id="shadow-6dp" x="-50%" y="-100%" width="200%" height="300%">
                        <feOffset in="SourceAlpha" result="offA" dy="6" />
                        <feOffset in="SourceAlpha" result="offB" dy="1" />
                        <feOffset in="SourceAlpha" result="offC" dy="3" />
                        <feMorphology in="offC" result="spreadC" operator="erode" radius="1" />
                        <feGaussianBlur in="offA" result="blurA" stdDeviation="5" />
                        <feGaussianBlur in="offB" result="blurB" stdDeviation="9" />
                        <feGaussianBlur in="spreadC" result="blurC" stdDeviation="2.5" />
                        <feFlood floodOpacity="0.14" result="opA" />
                        <feFlood floodOpacity="0.12" result="opB" />
                        <feFlood floodOpacity="0.40" result="opC" />
                        <feComposite in="opA" in2="blurA" result="shA" operator="in" />
                        <feComposite in="opB" in2="blurB" result="shB" operator="in" />
                        <feComposite in="opC" in2="blurC" result="shC" operator="in" />
                        <feMerge>
                          <feMergeNode in="shA" />
                          <feMergeNode in="shB" />
                          <feMergeNode in="shC" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    <path filter="url(#shadow-6dp)" ref={this.svgPathRef[0]} id="target1" d={this.experimentPath[0]}></path>
                    <path filter="url(#shadow-6dp)" ref={this.svgPathRef[1]} id="target2" d={this.experimentPath[1]}></path>
                    <path filter="url(#shadow-6dp)" ref={this.svgPathRef[2]} id="target3" d={this.experimentPath[2]}></path>
                  </svg>
                </ScrollAnimation>
              </div>
              <div className="col-12 col-md-9 mt-5 mt-md-0 pl-0 pl-md-5">
                <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp' animateOnce>
                  <FormattedMessage id="HOME.TEXT_WHY" values={this.formatMessageValues}/>
                </ScrollAnimation>
                <ul>
                  <li className={`${styles["active"]}`} ref={this.listRefs.get(ListItem.experiment)} onClick={()=>{this.onWhatsKeadexHover(ListItem.experiment)}} onMouseOver={()=>{this.onWhatsKeadexHover(ListItem.experiment)}} onMouseLeave={()=>{this.startWhatsKeadexLoop()}}>
                    <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp' animateOnce>
                      <FormattedMessage id="HOME.EXPERIMENT" />
                    </ScrollAnimation>
                  </li>
                  <li ref={this.listRefs.get(ListItem.modular)} onClick={()=>{this.onWhatsKeadexHover(ListItem.modular)}} onMouseOver={()=>{this.onWhatsKeadexHover(ListItem.modular)}} onMouseLeave={()=>{this.startWhatsKeadexLoop()}}>
                    <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp' animateOnce>
                      <FormattedMessage id="HOME.MODULAR" />
                    </ScrollAnimation>
                  </li>
                  <li ref={this.listRefs.get(ListItem.openSource)} onClick={()=>{this.onWhatsKeadexHover(ListItem.openSource)}} onMouseOver={()=>{this.onWhatsKeadexHover(ListItem.openSource)}} onMouseLeave={()=>{this.startWhatsKeadexLoop()}}>
                    <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp' animateOnce>
                      <FormattedMessage id="HOME.OPEN_SOURCE" />
                    </ScrollAnimation>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row m-0 mt-5 mt-md-6">
              <div className="col-12 text-center">
                <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp' animateOnce>
                  <h2 className="text-primary-light"><FormattedMessage id="HOME.SO_KEADEX" /></h2>
                </ScrollAnimation>
              </div>
            </div>
            <div className="row m-0 mt-3 mt-md-4 text-center">
                <div className="col-12 col-lg-4">
                  <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp h-100' animateOnce>
                    <MDBView className="h-100 w-100">
                      <MDBCard className="h-100 w-100">
                        <MDBCardBody>
                          <h4 className="text-brand1"><FormattedMessage id="HOME.TITLE_NOT_WEBSITE" /></h4>
                          <OptimizedMedia className="mt-4 mb-4" src={"not-website.png"} width="150px" srcWidth={925} srcHeight={701} />
                          <div><FormattedMessage id="HOME.TEXT_NOT_WEBSITE" values={FORMATTED_MESSAGE_STANDARD_HTML_VALUES}/></div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBView>
                  </ScrollAnimation>
                </div>
                <div className="col-12 col-lg-4 mt-3 mt-lg-0">
                  <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp h-100' delay={350} animateOnce>
                    <MDBView className="h-100 w-100">
                      <MDBCard className="h-100 w-100">
                        <MDBCardBody>
                          <h4 className="text-brand1"><FormattedMessage id="HOME.TITLE_KNOW" /></h4>
                          <OptimizedMedia className="mt-4 mb-4" src={"knwoledge.png"} width="150px" srcWidth={925} srcHeight={710} />
                          <div><FormattedMessage id="HOME.TEXT_KNOW" values={FORMATTED_MESSAGE_STANDARD_HTML_VALUES}/></div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBView>
                  </ScrollAnimation>
                </div>
                <div className="col-12 col-lg-4 mt-3 mt-lg-0">
                  <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp h-100' delay={700} animateOnce>
                    <MDBView className="h-100 w-100">
                      <MDBCard className="h-100 w-100">
                        <MDBCardBody>
                          <h4 className="text-brand1"><FormattedMessage id="HOME.TITLE_WILL_KNOW" /></h4>
                          <OptimizedMedia className="mt-4 mb-4" src={"learn.png"} width="150px" srcWidth={925} srcHeight={723} />
                          <div><FormattedMessage id="HOME.TEXT_WILL_KNOW" values={FORMATTED_MESSAGE_STANDARD_HTML_VALUES}/></div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBView>
                  </ScrollAnimation>
                </div>
              </div>
            <ScrollAnimation scrollableParentSelector={"#"+PAGE_ROOT_ID} animateIn='animate__fadeInUp' animateOnce>
              <div className={`m-0 mt-6 mt-md-7 text-center ${styles["home__kealab"]}`}>
                <div className={`${styles["home__kealab-title"]}`}>
                  $$\&nbsp;&nbsp;&nbsp;$$\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>$$&nbsp;|&nbsp;$$&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>$$&nbsp;|$$&nbsp;&nbsp;/&nbsp;$$$$$$\&nbsp;&nbsp;&nbsp;$$$$$$\&nbsp;&nbsp;$$&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$$$$$\&nbsp;&nbsp;$$$$$$$\&nbsp;&nbsp;<br/>$$$$$&nbsp;&nbsp;/&nbsp;$$&nbsp;&nbsp;__$$\&nbsp;&nbsp;\____$$\&nbsp;$$&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\____$$\&nbsp;$$&nbsp;&nbsp;__$$\&nbsp;<br/>$$&nbsp;&nbsp;$$&lt;&nbsp;&nbsp;$$$$$$$$&nbsp;|&nbsp;$$$$$$$&nbsp;|$$&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$$$$$$&nbsp;|$$&nbsp;|&nbsp;&nbsp;$$&nbsp;|<br/>$$&nbsp;|\$$\&nbsp;$$&nbsp;&nbsp;&nbsp;____|$$&nbsp;&nbsp;__$$&nbsp;|$$&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$$&nbsp;&nbsp;__$$&nbsp;|$$&nbsp;|&nbsp;&nbsp;$$&nbsp;|<br/>$$&nbsp;|&nbsp;\$$\\$$$$$$$\&nbsp;\$$$$$$$&nbsp;|$$$$$$$$\\$$$$$$$&nbsp;|$$$$$$$&nbsp;&nbsp;|<br/>\__|&nbsp;&nbsp;\__|\_______|&nbsp;\_______|\________|\_______|\_______/&nbsp;                </div>
                <div className={`${styles["home__kealab-content"]}`}><FormattedMessage id="HOME.TEXT_KEALAB" values={this.formatMessageValues}/></div>
                <DosButton onClick={()=>{window.CustomTemplate.openPage(PAGE_ROOT_ID, true)}} href={KEA_LAB_URL}><FormattedMessage id="HOME.SHOW_KEALAB" /></DosButton>
              </div>
            </ScrollAnimation>
          </div>          
        </div>
      </PageLayout>
    );
  }
}

export default Home;