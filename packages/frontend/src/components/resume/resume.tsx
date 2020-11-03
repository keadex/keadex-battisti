import React, { RefObject } from 'react';

import styles from './resume.module.scss';
import { Linear } from 'gsap';
import { FormattedMessage } from 'react-intl';
import { MDBBtn } from 'mdbreact';
import KMDCheckbox from '../kmdcheckbox/kmdcheckbox';
import { MDBIcon } from 'mdbreact';
import { FORMATTED_MESSAGE_STANDARD_HTML_VALUES } from '../../core/app.constants';
import dynamic from 'next/dynamic';
import gsap from "gsap";
import NetworkService from '../../core/network/network.service';
import { getStrapiMedia } from '../../helper/strapi-helper';
import { MediaType } from '../optimized-media/optimized-media';


const OptimizedMedia = dynamic(
  () => import('../optimized-media/optimized-media'),
  { ssr: false }
)

//--------------- TYPES
interface ResumeState{
  isAgreementChecked:boolean;
}

//--------------- COMPONENT
class Resume extends React.Component<any, ResumeState> {

  //ATTRS
  private tlDownloadResume : GSAPTimeline|undefined;
  private resumeAgreeContRef : RefObject<HTMLDivElement>;
  private resumeBinaryContRef : RefObject<HTMLDivElement>;
  private isAnimationInitialized : boolean;


  //FUNCS

  //----- constructor
  constructor(props:any){
    super(props);
    this.state = {
      isAgreementChecked: false
    }
    this.startDownload = this.startDownload.bind(this);
    this.resumeAgreeContRef = React.createRef<HTMLDivElement>();
    this.resumeBinaryContRef = React.createRef<HTMLDivElement>();
    this.isAnimationInitialized = false;
  }


  //----- componentDidMount
  componentDidMount(){
    this.tlDownloadResume = gsap.timeline();
  }
  

  //----- initTimeline
  private initTimeline(){
    this.isAnimationInitialized = true;
    let scaleFactor = 0.4;
    let top = window.innerHeight * 0.1;
    // let top = this.props.breakpoints!.sm?100:200;
    
    let agreeContainerStyle = window.getComputedStyle(this.resumeAgreeContRef.current!);
    let agreeContainerHeight = parseFloat(agreeContainerStyle!.height!.replace("px", ""));
    
    this.tlDownloadResume!.to("#resume-agree-bg", {duration: 1, opacity: `1`});
    this.tlDownloadResume!.to("#resume-agree-container", {duration: 1, top: `${top + (-1*((agreeContainerHeight*scaleFactor/2)+(agreeContainerHeight*scaleFactor/4)))}px`, scale: scaleFactor, xPercent: -50, yPercent: 0}, "-=1");
    this.tlDownloadResume!.to("#resume-binary-container", {duration: 1, top: `${top + (agreeContainerHeight*scaleFactor)}px`,  xPercent: -50, yPercent: 0}, "-=1");
    this.tlDownloadResume!.to("#resume-agree-content", {duration: 2, xPercent: 0, yPercent: 100});
    this.tlDownloadResume!.to("#resume-agree-bg", {duration: 2, xPercent: 0, yPercent: 101}, "-=2");
    this.tlDownloadResume!.to("#resume-binary-content", {duration: 3, xPercent: 0, yPercent: 100, opacity: 0, ease:Linear.easeNone}, "-=3");
    this.tlDownloadResume!.to("#resume-pdf", {duration: 2, opacity: `1`}, "-=1.5");
    
    this.tlDownloadResume!.add(()=>{
      NetworkService.getInstance().downloadFile(getStrapiMedia(process.env.NEXT_PUBLIC_RESUME_PDF_URL!)!, "resume-giacomosimmi.pdf");
    }, "-=2.5");
    
    this.tlDownloadResume!.pause();
  }


  //----- startDownload
  private startDownload(){
    if (!this.isAnimationInitialized) this.initTimeline();
    this.tlDownloadResume!.restart();    
  }


  //----- restartAnimation
  private restartAnimation(){ 
    this.tlDownloadResume!.seek(0, true);
    this.tlDownloadResume!.pause(0, true);
  }


  //------------ render
  public render() {
    // this.tlBotAndroid.progress(this.props.progress);
    return (
      <div className="h-100">
        
        {/* AGREEMENT */}
        <div id="resume-agree-container" className={`full-center ${styles["resume__agree-container"]} text-center`} ref={this.resumeAgreeContRef}>
          <div id="resume-agree-bg" className={`${styles["resume__agree-bg"]}`}></div>
          <div id="resume-agree-content" className={`${styles["resume__agree-content"]} position-relative`}>
            <div className={`${styles["resume__seriously-label"]}`}><FormattedMessage id="ABOUT_ME.RESUME.SERIOUSLY" values={FORMATTED_MESSAGE_STANDARD_HTML_VALUES}/></div>
            <MDBBtn color="primary" className="mt-5 mt-md-7" disabled={!this.state.isAgreementChecked} onClick={()=>{this.startDownload()}}>Download</MDBBtn>
            <div>
              <KMDCheckbox id="downloadResume" className="md-checkbox-inline" handleCheck={(isChecked)=>{this.setState({isAgreementChecked:isChecked});}}>
                <FormattedMessage id="ABOUT_ME.RESUME.AGREEMENT_LABEL" />
              </KMDCheckbox>
            </div>
          </div>          
        </div>

        {/* RESUME DOWNLOAD */}
        <div id="resume-binary-container" className={`full-center ${styles["resume__binary-container"]} text-center`} ref={this.resumeBinaryContRef}>
          <div id="resume-binary-content" className={`${styles["resume__binary-content"]}`} >
            <OptimizedMedia width="100%" height="100%" srcWidth={400} srcHeight={320} autoPlay loop preload="none" src={"binary-matrix"} type={MediaType.Video} />
          </div>
        </div>

        {/* PDF ICON */}
        <div id="resume-pdf" className={`full-center ${styles["resume__pdf"]} text-center w-100`}>
          <OptimizedMedia width="160px" srcWidth={300} srcHeight={204} autoPlay loop preload="none" src={"pdf-icon-glitch"} type={MediaType.Video} />
          {/* <div className="text-console">resume-giacomosimmi.pdf</div> */}
          <h4><MDBIcon icon="undo-alt" className="mt-3" style={{cursor: "pointer"}} onClick={()=>{this.restartAnimation()}}/></h4>
        </div>
        
      </div>
    );
  }

}

export default Resume;