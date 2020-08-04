import React from 'react';

import orderManagerShape from "../../../public/img/header-experience/order-manager.png";
import devOpsShape from "../../../public/img/header-experience/devops.png";
import cloudAIShape from "../../../public/img/header-experience/cloud-ai.png";
import microservicesShape from "../../../public/img/header-experience/microservices.png";
import microfrontendShape from "../../../public/img/header-experience/micro-frontends.png";
import crmShape from "../../../public/img/header-experience/crm.png";
import tetrisStatistics from "../../../public/img/header-experience/tetris-statistics.png";
import tetrisScore from "../../../public/img/header-experience/tetris-score.png";
import tetrisHelp from "../../../public/img/header-experience/tetris-help.png";
import styles from './header-architect.module.scss';
import { ExperienceProps } from '../experience/experience';
import { TimelineMax } from 'gsap';
import { withHooksBreakpoint } from '../../core/react-breakpoint';
import { injectIntl, WrappedComponentProps } from 'react-intl';


interface HeaderArchitectProps extends WrappedComponentProps, ExperienceProps{}

//--------------- COMPONENT
class HeaderArchitect extends React.Component<HeaderArchitectProps> {

  //ATTRS
  private tlBotAndroid:TimelineMax;
  private widthBoxShape:number = 38;


  //FUNCS

  //----- constructor
  constructor(props:HeaderArchitectProps){
    super(props);
    this.tlBotAndroid = new TimelineMax();
  }

  //----- componentDidMount
  componentDidMount(){
    this.initTimeline();
  }

  //----- initTimeline
  private initTimeline(){    
    this.tlBotAndroid.to("#order-manager-shape", 1, {bottom: "0px"});
    this.tlBotAndroid.to("#microservices-shape", 1, {bottom: "0px"});
    this.tlBotAndroid.to("#cloud-ai-shape", 1, {bottom: "0px"});
    this.tlBotAndroid.to("#devops-shape", 1, {bottom: this.widthBoxShape+"px"});
    this.tlBotAndroid.to("#micro-frontends-shape", 1, {bottom: this.widthBoxShape+"px"});
    this.tlBotAndroid.to("#crm-shape", 1, {bottom: this.widthBoxShape+"px"});
    this.tlBotAndroid.to("#game-over", 1, {className: `${styles["header-architect__game-over-root"]} animate__animated animate__fadeIn`});

    this.tlBotAndroid.pause()
  }


  //----- getLeftShape
  private getLeftShape(shapeNumber:number) {
    switch(shapeNumber){
      case 1: return 0; //order manager shape
      case 2: return (this.widthBoxShape*4)-1; //microservices shape
      case 3: return this.widthBoxShape; //cloud & AI shape
      case 4: return this.widthBoxShape; //devops shape
      case 5: return (this.widthBoxShape*4)-1; //micro frontends shape
      case 6: return this.widthBoxShape*5; //CRM shape
    }
    return 0;
  }


  //------------ render
  public render() {
    this.tlBotAndroid.progress(this.props.progress);
    return (
        <div className={`${styles["header-architect__root"]} position-relative overflow-hidden`}>
          {/* <div className="text-light d-lg-none header-architect__dates"><span>Score: </span><span style={{color: "yellow"}}>{this.props.experience.from}+</span></div> */}
          <div className={`${styles["header-architect__game-container"]}`}>
            <div className={`${styles["header-architect__game-bg"]} position-absolute`}></div>
            <div className={`${styles["header-architect__tetriminos-container"]}`} style={{width:this.widthBoxShape*7}}>
              <img id="order-manager-shape" className={`${styles["header-architect__shape"]}`} src={orderManagerShape} alt="Order Manager shape" width={(this.widthBoxShape*2)+"px"} style={{left: this.getLeftShape(1)}}/>
              <img id="microservices-shape" className={`${styles["header-architect__shape"]}`} src={microservicesShape} alt="Microservices shape" width={(this.widthBoxShape*3)+"px"} style={{left: this.getLeftShape(2)}}/>
              <img id="cloud-ai-shape" className={`${styles["header-architect__shape"]}`} src={cloudAIShape} alt="Cloud shape" width={(this.widthBoxShape*3)+"px"} style={{left: this.getLeftShape(3)}}/>
              <img id="devops-shape" className={`${styles["header-architect__shape"]}`} src={devOpsShape} alt="DevOps shape" width={(this.widthBoxShape*3)+"px"} style={{left: this.getLeftShape(4)}}/>
              <img id="micro-frontends-shape" className={`${styles["header-architect__shape"]}`} src={microfrontendShape} alt="Micro Frontends shape" width={(this.widthBoxShape*2)+"px"} style={{left: this.getLeftShape(5)}}/>
              <img id="crm-shape" className={`${styles["header-architect__shape"]}`} src={crmShape} alt="Micro Frontends shape" width={(this.widthBoxShape*2)+"px"} style={{left: this.getLeftShape(6)}}/>
            </div>
          </div>
          <img src={tetrisScore} alt="Tetris score" className={`${styles["header-architect__tetris-score"]} d-lg-block d-none`}/>
          <img src={tetrisHelp} alt="Tetris help" className={`${styles["header-architect__tetris-help"]} d-lg-block d-none`}/>
          <img src={tetrisStatistics} alt="Tetris statistics" className={`${styles["header-architect__tetris-statistics"]} d-lg-block d-none`}/>
          <div id="game-over" className={`${styles["header-architect__game-over-root"]} animate__animated animate__fadeOut`}>
            <span className={`${styles["header-architect__game-over-text"]}`}>Game Over</span>
          </div>
        </div>
    );
  }

}

export default injectIntl(withHooksBreakpoint(HeaderArchitect))