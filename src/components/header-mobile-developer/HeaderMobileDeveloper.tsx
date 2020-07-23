import React from 'react';
import androidBot from "../../assets/img/header-experience/android-bot.png";
import appleLogo from "../../assets/img/header-experience/apple-logo.png";
import './HeaderMobileDeveloper.scss';
import { ExperienceProps } from '../experience/Experience';
import { TimelineMax } from 'gsap';
import { injectIntl } from 'react-intl';


//------------------ TYPES


//--------------- COMPONENT
class HeaderMobileDeveloper extends React.Component<ExperienceProps> {

  //ATTRS
  private tlBotAndroid:TimelineMax;


  //FUNCS

  //----- constructor
  constructor(props:ExperienceProps){
    super(props);
    this.tlBotAndroid = new TimelineMax();
  }

  //----- componentDidMount
  componentDidMount(){
    this.initTimeline();
  }

  //----- initTimeline
  private initTimeline(){    
    this.tlBotAndroid.to("#android-bot", 1, {left:"26%"});
    this.tlBotAndroid.to("#apple-logo", 1, {left:"26%"}, "-=1");
    this.tlBotAndroid.to("#android-bot", 0.5, {bottom:"90px"}, "-=0.5");
    this.tlBotAndroid.to("#android-bot", 0.5, {bottom:"19px"});
    this.tlBotAndroid.to("#apple-logo", 0.5, {height:"5px"}, "-=0.4");
    this.tlBotAndroid.pause()
  }

  //------------ render
  public render() {
    this.tlBotAndroid.progress(this.props.progress)
    return (
        <div className="header-mobile-root position-relative">
          {/* <h2 className="text-center text-light">{this.props.experience.from} - {this.props.experience.to}</h2> */}
          <img id="android-bot" className="header-mobile-actors" src={androidBot} alt="Android bot" height="50px" />
          <img id="apple-logo" className="header-mobile-actors header-mobile-apple" src={appleLogo} alt="Apple logo" height="45px" />
        </div>
    );
  }

}

export default injectIntl(HeaderMobileDeveloper)