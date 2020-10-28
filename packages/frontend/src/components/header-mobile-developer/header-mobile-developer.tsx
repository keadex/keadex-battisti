import React from 'react';
import styles from './header-mobile-developer.module.scss';
import { ExperienceProps } from '../experience/experience';
import { TimelineMax } from 'gsap';
import { injectIntl } from 'react-intl';
import OptimizedImage from '../optimized-image/optimized-image';


//------------------ TYPES


//--------------- COMPONENT
class HeaderMobileDeveloper extends React.Component<ExperienceProps> {

  //ATTRS
  private tlBotAndroid:TimelineMax|undefined;


  //FUNCS

  //----- constructor
  constructor(props:ExperienceProps){
    super(props);
  }

  //----- componentDidMount
  componentDidMount(){
    this.tlBotAndroid = new TimelineMax();
    this.initTimeline();
  }

  //----- initTimeline
  private initTimeline(){    
    this.tlBotAndroid!.to("#android-bot", 1, {left:"26%"});
    this.tlBotAndroid!.to("#apple-logo", 1, {left:"26%"}, "-=1");
    this.tlBotAndroid!.to("#android-bot", 0.5, {bottom:"90px"}, "-=0.5");
    this.tlBotAndroid!.to("#android-bot", 0.5, {bottom:"19px"});
    this.tlBotAndroid!.to("#apple-logo", 0.5, {height:"5px"}, "-=0.4");
    this.tlBotAndroid!.pause()
  }

  //------------ render
  public render() {
    this.tlBotAndroid?.progress(this.props.progress)
    return (
        <div className={`${styles["header-mobile-root"]} position-relative`}>
          {/* <h2 className="text-center text-light">{this.props.experience.from} - {this.props.experience.to}</h2> */}
          <OptimizedImage id="android-bot" className={`${styles["header-mobile-actors"]}`} src={"header-experience/android-bot.png"} alt="Android bot" height="50px" srcWidth={347} srcHeight={312} />
          <OptimizedImage id="apple-logo" className={`${styles["header-mobile-actors"]} ${styles["header-mobile-apple"]}`} src={"header-experience/apple-logo.png"} alt="Apple logo" height="45px" srcWidth={227} srcHeight={290} />
        </div>
    );
  }

}

export default injectIntl(HeaderMobileDeveloper)