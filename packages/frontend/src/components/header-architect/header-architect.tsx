import React from 'react';

import styles from './header-architect.module.scss';
import { ExperienceProps } from '../experience/experience';
import { TimelineMax } from 'gsap';
import { withHooksBreakpoint } from '../../core/react-breakpoint';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import OptimizedImage from '../optimized-image/optimized-image';


interface HeaderArchitectProps extends WrappedComponentProps, ExperienceProps{}

//--------------- COMPONENT
class HeaderArchitect extends React.Component<HeaderArchitectProps> {

  //ATTRS
  private tlBotAndroid:TimelineMax|undefined;
  private widthBoxShape:number = 38;


  //FUNCS

  //----- constructor
  constructor(props:HeaderArchitectProps){
    super(props);
  }

  //----- componentDidMount
  componentDidMount(){
    this.tlBotAndroid = new TimelineMax();
    this.initTimeline();
  }

  //----- initTimeline
  private initTimeline(){    
    this.tlBotAndroid!.to("#order-manager-shape", 1, {bottom: "0px"});
    this.tlBotAndroid!.to("#microservices-shape", 1, {bottom: "0px"});
    this.tlBotAndroid!.to("#cloud-ai-shape", 1, {bottom: "0px"});
    this.tlBotAndroid!.to("#devops-shape", 1, {bottom: this.widthBoxShape+"px"});
    this.tlBotAndroid!.to("#micro-frontends-shape", 1, {bottom: this.widthBoxShape+"px"});
    this.tlBotAndroid!.to("#crm-shape", 1, {bottom: this.widthBoxShape+"px"});
    this.tlBotAndroid!.to("#game-over", 1, {className: `${styles["header-architect__game-over-root"]} animate__animated animate__fadeIn`});

    this.tlBotAndroid!.pause()
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
    this.tlBotAndroid?.progress(this.props.progress);
    return (
        <div className={`${styles["header-architect__root"]} position-relative overflow-hidden`}>
          {/* <div className="text-light d-lg-none header-architect__dates"><span>Score: </span><span style={{color: "yellow"}}>{this.props.experience.from}+</span></div> */}
          <div className={`${styles["header-architect__game-container"]}`}>
            <div className={`${styles["header-architect__game-bg"]} position-absolute`}></div>
            <div className={`${styles["header-architect__tetriminos-container"]}`} style={{width:this.widthBoxShape*7}}>
              <OptimizedImage id="order-manager-shape" className={`${styles["header-architect__shape"]}`} src={"header-experience/order-manager.png"} alt="Order Manager shape" width={(this.widthBoxShape*2)+"px"} style={{left: this.getLeftShape(1)}} srcWidth={128} srcHeight={191}/>
              <OptimizedImage id="microservices-shape" className={`${styles["header-architect__shape"]}`} src={"header-experience/microservices.png"} alt="Microservices shape" width={(this.widthBoxShape*3)+"px"} style={{left: this.getLeftShape(2)}} srcWidth={191} srcHeight={65}/>
              <OptimizedImage id="cloud-ai-shape" className={`${styles["header-architect__shape"]}`} src={"header-experience/cloud-ai.png"} alt="Cloud shape" width={(this.widthBoxShape*3)+"px"} style={{left: this.getLeftShape(3)}} srcWidth={191} srcHeight={128}/>
              <OptimizedImage id="devops-shape" className={`${styles["header-architect__shape"]}`} src={"header-experience/devops.png"} alt="DevOps shape" width={(this.widthBoxShape*3)+"px"} style={{left: this.getLeftShape(4)}} srcWidth={190} srcHeight={127}/>
              <OptimizedImage id="micro-frontends-shape" className={`${styles["header-architect__shape"]}`} src={"header-experience/micro-frontends.png"} alt="Micro Frontends shape" width={(this.widthBoxShape*2)+"px"} style={{left: this.getLeftShape(5)}} srcWidth={128} srcHeight={128}/>
              <OptimizedImage id="crm-shape" className={`${styles["header-architect__shape"]}`} src={"header-experience/crm.png"} alt="Micro Frontends shape" width={(this.widthBoxShape*2)+"px"} style={{left: this.getLeftShape(6)}} srcWidth={128} srcHeight={191}/>
            </div>
          </div>
          <OptimizedImage src={"header-experience/tetris-score.png"} alt="Tetris score" className={`${styles["header-architect__tetris-score"]} d-lg-block d-none`} height="100%" srcWidth={409} srcHeight={422}/>
          <OptimizedImage src={"header-experience/tetris-help.png"} alt="Tetris help" className={`${styles["header-architect__tetris-help"]} d-lg-block d-none`} height="100%" srcWidth={409} srcHeight={422}/>
          <OptimizedImage src={"header-experience/tetris-statistics.png"} alt="Tetris statistics" className={`${styles["header-architect__tetris-statistics"]} d-lg-block d-none`} height="100%" srcWidth={791} srcHeight={423}/>
          <div id="game-over" className={`${styles["header-architect__game-over-root"]} animate__animated animate__fadeOut`}>
            <span className={`${styles["header-architect__game-over-text"]}`}>Game Over</span>
          </div>
        </div>
    );
  }

}

export default injectIntl(withHooksBreakpoint(HeaderArchitect))