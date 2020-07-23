import React, { RefObject } from 'react';

import pdfIcon from "../../assets/img/pdf-icon-glitch.gif";
import './Resume.scss';
import { TimelineMax, Linear } from 'gsap';
import { FormattedMessage, FormattedMessage as FormattedHTMLMessage } from 'react-intl';
import { MDBBtn } from 'mdbreact';
import KMDCheckbox from '../kmdcheckbox/KMDCheckbox';
import { MDBIcon } from 'mdbreact';
import NetworkService from '../../core/network/network.service';


//--------------- TYPES
interface ResumeState{
  isAgreementChecked:boolean;
}

//--------------- COMPONENT
class Resume extends React.Component<any, ResumeState> {

  //ATTRS
  private tlDownloadResume : TimelineMax;
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
    this.tlDownloadResume = new TimelineMax();
    this.resumeAgreeContRef = React.createRef<HTMLDivElement>();
    this.resumeBinaryContRef = React.createRef<HTMLDivElement>();
    this.isAnimationInitialized = false;
  }

  
  //----- initTimeline
  private initTimeline(){
    this.isAnimationInitialized = true;
    let scaleFactor = 0.4;
    let top = window.innerHeight * 0.1;
    // let top = this.props.breakpoints!.sm?100:200;
    
    let agreeContainerStyle = window.getComputedStyle(this.resumeAgreeContRef.current!);
    let agreeContainerHeight = parseFloat(agreeContainerStyle!.height!.replace("px", ""));
    
    this.tlDownloadResume.to("#resume-agree-bg", 1, {opacity: `1`});
    this.tlDownloadResume.to("#resume-agree-container", 1, {top: `${top + (-1*((agreeContainerHeight*scaleFactor/2)+(agreeContainerHeight*scaleFactor/4)))}px`, transform: `translate(-50%, 0) scale(${scaleFactor})`}, "-=1");
    this.tlDownloadResume.to("#resume-binary-container", 1, {top: `${top + (agreeContainerHeight*scaleFactor)}px`,  transform: "translate(-50%, 0)"}, "-=1");
    this.tlDownloadResume.to("#resume-agree-content", 2, {transform: `translate(0, 100%)`});
    this.tlDownloadResume.to("#resume-agree-bg", 2, {transform: `translate(0, 100%)`}, "-=2");
    this.tlDownloadResume.to("#resume-binary-content", 3, {transform: `translate(0, 100%)`, opacity: 1, ease:Linear.easeNone}, "-=2");
    this.tlDownloadResume.to("#resume-pdf", 2, {opacity: `1`}, "-=2.5");
    
    this.tlDownloadResume.addCallback(()=>{
      NetworkService.getInstance().downloadFile(process.env.REACT_APP_BASE_URL! + process.env.REACT_APP_GET_RESUME_PDF_API!, "r3sum3-g14c0m0s1mm1.pdf");
    }, "-=2.5");
    
    this.tlDownloadResume.pause();
  }


  //----- startDownload
  private startDownload(){
    if (!this.isAnimationInitialized) this.initTimeline();
    this.tlDownloadResume.restart();    
  }


  //----- restartAnimation
  private restartAnimation(){ 
    this.tlDownloadResume.seek(0, true);
    this.tlDownloadResume.pause(0, true);
  }


  //------------ render
  public render() {
    // this.tlBotAndroid.progress(this.props.progress);
    return (
      <div className="h-100">
        
        {/* AGREEMENT */}
        <div id="resume-agree-container" className="full-center resume__agree-container text-center" ref={this.resumeAgreeContRef}>
          <div id="resume-agree-bg" className="resume__agree-bg"></div>
          <div id="resume-agree-content" className="resume__agree-content position-relative">
            <div className="resume__seriously-label"><FormattedHTMLMessage id="ABOUT_ME.RESUME.SERIOUSLY" /></div>
            <MDBBtn color="primary" className="mt-5 mt-md-7" disabled={!this.state.isAgreementChecked} onClick={()=>{this.startDownload()}}>Download</MDBBtn>
            <div>
              <KMDCheckbox id="downloadResume" className="md-checkbox-inline" handleCheck={(isChecked)=>{this.setState({isAgreementChecked:isChecked});}}>
                <FormattedMessage id="ABOUT_ME.RESUME.AGREEMENT_LABEL" />
              </KMDCheckbox>
            </div>
          </div>          
        </div>

        {/* RESUME DOWNLOAD */}
        <div id="resume-binary-container" className="full-center resume__binary-container text-center" ref={this.resumeBinaryContRef}>
          <div id="resume-binary-content" className="resume__binary-content">
            {/* <img src={binaryMatrix} className="resume__matrix-code" /> */}
          </div>
        </div>

        {/* PDF ICON */}
        <div id="resume-pdf" className="full-center resume__pdf text-center w-100">
          <img src={pdfIcon} width="160px" />
          {/* <div className="text-console">resume-giacomosimmi.pdf</div> */}
          <h4><MDBIcon icon="undo-alt" className="mt-3" style={{cursor: "pointer"}} onClick={()=>{this.restartAnimation()}}/></h4>
        </div>
        
      </div>
    );
  }

}

export default Resume;