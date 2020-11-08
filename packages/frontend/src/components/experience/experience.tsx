import React, { RefObject } from 'react';
import { FormattedMessage, WrappedComponentProps, injectIntl } from 'react-intl';
import { PlayState, Tween } from 'react-gsap';import {Experience as ExperienceModel} from '../../model/models' 
import styles from './experience.module.scss';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from 'recharts';
import HeaderSoftwareEngineer from '../header-software-engineer/header-software-engineer';
import HeaderArchitect from '../header-architect/header-architect';
import HeaderMobileDeveloper from '../header-mobile-developer/header-mobile-developer';
import { HooksBreakpointProps } from '../../core/react-breakpoint';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCard, MDBCardBody, MDBCardTitle, MDBNav, MDBNavItem, MDBNavLink, MDBIcon  } from "mdbreact";
import { generateColors } from '../../helper/colors-helper';
import OptimizedMedia from '../optimized-media/optimized-media';

//------------------ TYPES
export interface ExperienceProps extends HooksBreakpointProps, WrappedComponentProps {
  progress: number,
  experience?: ExperienceModel
}

export interface ExperienceState {
  chartKey: number,
  activeItem: number
}

//--------------- COMPONENT
class Experience extends React.Component<ExperienceProps, ExperienceState> {
  
  //ATTRS
  private refCarousel:RefObject<any>;
  private carouselInterval:number = -1;
  private carouselIntervalTime:number = 10600000;
  private colors : string[] = [];
  private jackImages : any = {
    "jack-mobile.png": "jack/jack-mobile.png",
    "jack-fullstack.png": "jack/jack-fullstack.png",
    "jack-architect.png": "jack/jack-architect.png"
  }
  private logo : any = {
    "atos-logo.png": ["logo/atos-logo.png", 1256, 410],
    "ibm-logo.png": ["logo/ibm-logo.png", 4922, 1833],
    "open-reply-logo.png": ["logo/open-reply-logo.png", 200, 56],
    "univ-liverpool-logo.png": ["logo/univ-liverpool-logo.png", 592, 137],
    "vodafone-logo.png": ["logo/vodafone-logo.png", 440, 110]
  }


  //FUNCS

  //----------- constructor
  constructor(props:ExperienceProps){
    super(props);
    this.state = {
      chartKey: 1,
      activeItem: 1
    };
    this.refCarousel = React.createRef<any>();
  }


  //----------- shouldComponentUpdate
  shouldComponentUpdate(nextProps:ExperienceProps, nextState:ExperienceState){
    return !(nextProps.progress == this.props.progress && this.props.experience != undefined && nextState.activeItem == this.state.activeItem)
  }


  //----------- componentDidMount
  componentDidMount(){
    this.startSlideshow();
  }


  //----------- componentWillUnmount
  componentWillUnmount(){
    this.stopSlideshow();
  }


  //------------ getPlayState
  public getPlayState(inProgress: number):PlayState{
    if (inProgress > 0) return PlayState.play; else return PlayState.reverse;
  }


  //------------ getHeader
  public getHeader(){
    if (this.props.experience){
      if (this.props.experience.id == "MOBILE_DEVELOPER"){
        return <HeaderMobileDeveloper progress={this.props.progress} experience={this.props.experience}></HeaderMobileDeveloper>
      } else if (this.props.experience.id == "SOFTWARE_ENGINEER"){
        return <HeaderSoftwareEngineer progress={this.props.progress} experience={this.props.experience}></HeaderSoftwareEngineer>
      } else if (this.props.experience.id == "IT_SOLUTION_ARCHITECT"){
        return <HeaderArchitect progress={this.props.progress} experience={this.props.experience}></HeaderArchitect>
      }
    }else{
      return "";
    }
  }


  //------------ onTabBtnClick
  private onTabBtnClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>|null, itemId:number){
    (event != null)?event.preventDefault():itemId=(this.refCarousel.current.state.activeItem==1?2:1);
    this.refCarousel.current.setState({activeItem: itemId});
    this.setState({activeItem: itemId});
  }


  //------------ startSlideshow
  private startSlideshow(){
    this.carouselInterval = setInterval(()=>{this.onTabBtnClick(null, -1)}, this.carouselIntervalTime);
  }


  //------------ endSlideshow
  private stopSlideshow(){
    if (this.carouselInterval != -1)
      clearInterval(this.carouselInterval);
  }


  //------------ render
  public render() {
    let progress = this.props.progress;
    
    if (this.props.experience && this.colors.length == 0) {
      this.colors = generateColors(this.props.experience.skills.length);
    }
    
    return (      
      <React.Fragment>
        { this.props.experience === undefined && (
          <React.Fragment></React.Fragment>
        )}
        { this.props.experience != undefined && (
          <React.Fragment>
            
            {/* HEADER */}
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOut w-100"}}}
              to={{css: {className: "animate__animated animate__fadeIn w-100"}}}
              progress={progress}
              playState={PlayState.stop}
              lazy>
                <div>{this.getHeader()}</div>
            </Tween>

            {/* CONTENT */}
            <Tween            
              from={{css: {className: `animate__animated animate__fadeOut ${styles["experience__body"]}`}}}
              to={{css: {className: `animate__animated animate__fadeIn ${styles["experience__body"]}`}}}
              progress={progress}
              playState={PlayState.stop}
              lazy>            
              <div className={`${styles["experience__body"]}`} onMouseOver={()=>{this.stopSlideshow()}} onMouseOut={()=>{this.startSlideshow()}} onTouchStart={()=>{this.stopSlideshow()}} onTouchEnd={()=>{this.startSlideshow()}}>
              
              {/* TAB */}
              <MDBNav tabs className="nav-justified pointer-events-all" color='indigo' role="tablist" aria-owns={`summary-${this.props.experience.id} skills-${this.props.experience.id}`}>
                <MDBNavItem>
                  <a id={`summary-${this.props.experience.id}`} className={`nav-link ${this.state.activeItem == 1?"active":""}`} role="tab" onClick={(event)=>this.onTabBtnClick(event, 1)}>
                    <MDBIcon icon="address-card" /> <FormattedMessage id={"ABOUT_ME.EXPERIENCE.SUMMARY"} />
                  </a>
                </MDBNavItem>
                <MDBNavItem>
                  <a id={`skills-${this.props.experience.id}`} className={`nav-link ${this.state.activeItem == 2?"active":""}`} role="tab" onClick={(event)=>this.onTabBtnClick(event, 2)}>
                    <MDBIcon icon="list-ul" /> <FormattedMessage id={"ABOUT_ME.EXPERIENCE.SKILLS"} />
                  </a>
                </MDBNavItem>
              </MDBNav>
              
              {/* CONTENT */}
              <MDBCarousel mobileGesture={false} activeItem={1} length={2} interval={10000000} className="z-depth-1 h-100" ref={this.refCarousel} >
                
                {/* ----------------- SUMMARY ----------------- */}
                <MDBCarouselInner>
                  <MDBCarouselItem itemId="1">
                    <MDBView className="h-100 w-100">
                      <MDBCard className="h-100 w-100">
                        <MDBCardBody className={`${styles["experience__card-body"]}`}>
                          
                          {/* POSITION */}                          
                          <MDBCardTitle className="text-center">
                            <div className={`avatar d-inline-block ${styles["experience__avatar"]}`}>
                              <OptimizedMedia src={this.jackImages[this.props.experience.avatarFilename]} alt="avatar position" width={{default: "90px", sm: "40px"}} height={{default: "90px", sm: "40px"}} srcWidth={2240} srcHeight={2240}/>
                            </div>
                            <div className={`${styles["experience__title-position"]} text-left text-md-center`}>
                              <FormattedMessage id={"POSITIONS." + this.props.experience.id} /><br />
                              <span className="font-small">{this.props.experience.from + " - " + ((this.props.experience.to)?this.props.experience.to:this.props.intl.formatMessage({id:"GENERIC.TODAY"}))}</span>
                            </div>
                          </MDBCardTitle>

                          <div className={`${styles["experience__card-content-container"]}`}>
                            {/* TASKS */}
                            <div className={"col-12 col-md-4 p-0 pl-md-2 pr-md-2 text-center order-1"}>
                              <Tween from={{ opacity: 0, x: (i:number) => (i+1) * 50}} stagger={0.1} playState={this.getPlayState(this.props.progress)} lazy>
                                <div className={`${styles["experience__section-title"]} mb-md-3`}>{"<"}<FormattedMessage id={"ABOUT_ME.EXPERIENCE.MAIN_ACTIVITIES"} />{"/>"}</div>
                                {
                                  this.props.experience.tasks.map((value, index) =>{
                                    return <div key={index} className={`${(index%2==0)?styles["experience__list-item--even"]:styles["experience__list-item--odd"]}`}>{">"} <FormattedMessage id={"TASKS."+value.id} /> </div>
                                  })
                                }
                              </Tween>
                            </div>
                            
                            {/* SECTORS */}
                            <div className={"col-12 col-md-4 p-0 pl-md-2 pr-md-2 text-center order-3"}>
                              <Tween from={{ opacity: 0, x: (i:number) => (i+1) * 50}} stagger={0.1} playState={this.getPlayState(this.props.progress)} lazy>
                                <div className={`${styles["experience__section-title"]} mb-md-3`}>{"<"}<FormattedMessage id={"ABOUT_ME.EXPERIENCE.SECTORS"} />{"/>"}</div>
                                {
                                  this.props.experience.sectors.map((value, index) =>{
                                    return <div key={index} className={`${(index%2==0)?styles["experience__list-item--even"]:styles["experience__list-item--odd"]}`}>{">"} <FormattedMessage id={"SECTORS."+value.id} /> </div>
                                  })
                                }
                              </Tween>
                            </div>

                            {/* COMPANIES */}
                            <div className={"col-12 col-md-4 p-0 pl-md-2 pr-md-2 text-center order-3 order-md-2"}>
                              <Tween from={{ opacity: 0, x: (i:number) => (i+1) * 50}} stagger={0.1} playState={this.getPlayState(this.props.progress)} lazy>
                                <div className={`${styles["experience__section-title"]} mb-md-3 mb-2`}>{"<"}<FormattedMessage id={"ABOUT_ME.EXPERIENCE.COMPANIES"} />{"/>"}</div>
                                {
                                  this.props.experience.companies.map((value, index) =>{
                                    return <div className="d-inline d-md-block mx-1 mx-md-0" key={index}><OptimizedMedia src={this.logo[value.logoFilename][0]} className={`mb-3 mb-md-4 ${styles["experience__logo-brands"]} d-inline`} alt={`${value.name}`} height={{default: "25px", md: "15px"}}
                                     srcWidth={this.logo[value.logoFilename][1]} srcHeight={this.logo[value.logoFilename][2]}/></div>
                                    // return <div className="d-inline d-md-block mx-1 mx-md-0" key={index}><img src={this.logo[value.logoFilename][0]} className={`mb-3 mb-md-4 ${styles["experience__logo-brands"]} d-inline`} alt={`${value.name}`} /></div>
                                  })
                                }
                              </Tween>
                            </div>

                            {/* CUSTOMERS */}
                            {/* {this.props.experience.customers != undefined &&
                              <div className={"p-0 pl-md-2 pr-md-2 mt-2 mt-md-0 text-center "}>
                                <Tween from={{ opacity: 0, cycle: { x: (i:number) => (i+1) * 50 }}} stagger={0.1} playState={this.getPlayState(this.props.progress)}>
                                  <div className="experience__section-title mb-md-3 mb-2">{"<"}<FormattedMessage id={"ABOUT_ME.EXPERIENCE.CUSTOMERS"} />{"/>"}</div>
                                  {
                                    this.props.experience.customers.map((value, index) =>{
                                      return <div className="w-100" key={index}><img src={require(`../../../public/img/logo/${value.logoFilename}`)} className="mb-3 mb-md-4 experience__logo-brands" alt={`${value.name}`}/></div>
                                    })
                                  }
                                </Tween>
                              </div>
                            } */}
                          </div>                          
                        </MDBCardBody>
                      </MDBCard>
                    </MDBView>
                  </MDBCarouselItem> 

                  {/* ----------------- SKILLS ----------------- */}
                  <MDBCarouselItem itemId="2">
                    <MDBView className="h-100 w-100">
                      <MDBCard className="h-100 w-100">
                        <MDBCardBody className={`pt-5 h-100 ${styles["experience__card-body-chart"]}`}>
                          <div className={`${styles["experience__skills-chart-container"]} pointer-events-all`}>
                            <ResponsiveContainer>
                              <PieChart>
                                <Pie dataKey="usagePercentage" data={this.props.experience.skills.sort((a,b)=>{return a.name.localeCompare(b.name)})} cx={'50%'} cy={'50%'} innerRadius={"20%"} outerRadius={"100%"} paddingAngle={0} stroke="#2C2C2C" strokeWidth="0.2px">
                                  {
                                    this.props.experience.skills.map((entry, index) => <Cell fill={this.colors[index]} key={index}/>)
                                  }
                                </Pie>
                                <Tooltip/>
                              </PieChart>
                            </ResponsiveContainer>
                            </div>
                            {
                              <div className={`row justify-content-center mt-2 mt-md-5 ${styles["experience__legend-container"]} pointer-events-all`}>
                                {
                                  this.props.experience.skills.map((entry, index) => {
                                    return (
                                    <div className={`col-auto ${styles["experience__legend"]}`} key={index}>
                                      <MDBIcon icon="square-full" style={{color: this.colors[index]}}/> {entry.name} ({entry.usagePercentage}%)
                                    </div>
                                    )
                                  })                                  
                                }
                              </div>
                            }
                        </MDBCardBody>
                      </MDBCard>
                    </MDBView>
                  </MDBCarouselItem>                
                </MDBCarouselInner>
              </MDBCarousel>
            </div>
            </Tween>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }

}

export default injectIntl(Experience);