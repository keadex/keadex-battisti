import React, { RefObject } from 'react';
import engineer from "../../../public/img/header-experience/engineer.gif";
import swStack from "../../../public/img/header-experience/sw-stack.png";
import { ExperienceProps } from '../experience/experience';
import { TimelineMax } from 'gsap';
import styled from 'styled-components';
import styles from './header-software-engineer.module.scss';
import { injectIntl } from 'react-intl';

const EngineerImg:any = styled.img<any>`
  left: ${(props)=>(props.swStackWidth)?"calc(50% - " + (props.swStackWidth/2) + "px)":"0px"}
`;


//--------------- COMPONENT
class HeaderSoftwareEngineer extends React.Component<ExperienceProps> {

  //ATTRS
  private tlBotAndroid:TimelineMax;
  private swStackRef: RefObject<HTMLImageElement>;

  //FUNCS

  //----- constructor
  constructor(props:ExperienceProps){
    super(props);
    this.tlBotAndroid = new TimelineMax();
    this.swStackRef = React.createRef<HTMLImageElement>();
  }


  //----- componentDidMount
  componentDidMount(){
    this.initTimeline();
  }


  //----- initTimeline
  private initTimeline(){    
    this.tlBotAndroid.to("#sw-stack", 1, {transform: "translate(-50%, 0%)"});
    this.tlBotAndroid.pause()
  }

  //------------ render
  public render() {
    this.tlBotAndroid.progress(this.props.progress);
    return (
        <div className={`${styles["header-sw-eng-root--landscape"]} position-relative overflow-hidden`}>
          {/* <h2 className="text-md-right text-center text-light mr-md-5">{this.props.experience.from} - {this.props.experience.to}</h2> */}
          <img id="sw-stack" className={`${styles["header-sw-eng__sw-stack"]}`} src={swStack} alt="Software Stack"  ref={this.swStackRef}/>
          <div className={`${styles["header-sw-eng-root--ground"]} position-absolute fixed-top`} />
          <EngineerImg id="engineer" className={`animate__animated animate__fadeIn ${["header-sw-eng__engineer"]}`} src={engineer} alt="Software Engineer" height="80px" swStackWidth={(this.swStackRef.current)?this.swStackRef.current.offsetWidth:"0"} />
        </div>
    );
  }

}

export default injectIntl(HeaderSoftwareEngineer)