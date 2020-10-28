import React, { RefObject } from 'react';
import { ExperienceProps } from '../experience/experience';
import { TimelineMax } from 'gsap';
import styled from 'styled-components';
import styles from './header-software-engineer.module.scss';
import { injectIntl } from 'react-intl';
import OptimizedImage from '../optimized-image/optimized-image';


const EngineerImg:any = styled(OptimizedImage)`
  left: ${(props:any)=>(props.swStackWidth)?"calc(50% - " + (props.swStackWidth/2) + "px)":"0px"}
`;


//--------------- COMPONENT
class HeaderSoftwareEngineer extends React.Component<ExperienceProps> {

  //ATTRS
  private tlBotAndroid:TimelineMax|undefined;
  private swStackRef: RefObject<any>;

  //FUNCS

  //----- constructor
  constructor(props:ExperienceProps){
    super(props);
    this.swStackRef = React.createRef<any>();
  }


  //----- componentDidMount
  componentDidMount(){
    this.tlBotAndroid = new TimelineMax();
    this.initTimeline();
  }


  //----- initTimeline
  private initTimeline(){    
    this.tlBotAndroid!.to("#sw-stack", 1, {transform: "translate(-50%, 0%)"});
    this.tlBotAndroid!.pause()
  }

  //------------ render
  public render() {
    this.tlBotAndroid?.progress(this.props.progress);
    return (
        <div className={`${styles["header-sw-eng-root--landscape"]} position-relative overflow-hidden`}>
          {/* <h2 className="text-md-right text-center text-light mr-md-5">{this.props.experience.from} - {this.props.experience.to}</h2> */}
          <OptimizedImage id="sw-stack" className={`${styles["header-sw-eng__sw-stack"]}`} src={"header-experience/sw-stack.png"} alt="Software Stack"  ref={this.swStackRef} height={{default: "90%", sm: "70%"}} srcWidth={847} srcHeight={579}/>
          <div className={`${styles["header-sw-eng-root--ground"]} position-absolute fixed-top`} />
          <EngineerImg id="engineer" className={`animate__animated animate__fadeIn ${styles["header-sw-eng__engineer"]}`} src={"header-experience/engineer.gif"} alt="Software Engineer" height="80px" swStackWidth={(this.swStackRef.current)?this.swStackRef.current.offsetWidth:"0"} srcWidth={161} srcHeight={248}/>
        </div>
    );
  }

}

export default injectIntl(HeaderSoftwareEngineer)