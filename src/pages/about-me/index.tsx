import React from 'react';
import styles from './about-me.module.scss';
import { FormattedMessage } from 'react-intl';
import { Controller, Scene } from 'react-scrollmagic';
import ProgressBar from '../../components/progressbar/progressbar';
import { connect } from 'react-redux';
import { setCurrentScene, setProgress, setExperience, resetState } from '../../core/store/reducers/aboutme.reducer';
import { getDefaultAboutMeState, IAboutMeState, IStoreState } from '../../core/store/store.type';
import Education from '../../components/education/education';
import Hobbies from '../../components/hobbies/hobbies';
import Experience from '../../components/experience/experience';
import {Experience as IExperience, ForceGraph} from '../../model/models';
import NetworkService from '../../core/network/network.service';
import Resume from '../../components/resume/resume';
import BasePageComponent from '../../components/base-page-component/base-page-component';
import { PAGE_ROOT_ID } from '../../core/route.constants';
import { GetStaticProps } from 'next';
import { wrapper } from '../../core/store/store';


//--------------- TYPES
interface AboutMeProps {
  setCurrentScene:(value:number, payload?: string)=>void
  setProgress:(currentScene:number, progress: number)=>void,
  setExperience: (experience: IExperience[])=>void,
  resetState:()=>void,
  experience: IExperience[],
  menuOpen: boolean,
  experienceGraph?: ForceGraph.Graph
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   ({store, req, res, ...etc}) => {
//     console.log("getServerSideProps aboutme before " + store.getState().app.previousUrl);
//     store.dispatch(setPreviousUrl("blaaa"));
//     console.log("getServerSideProps aboutme after " + store.getState().app.previousUrl);
//     return {
//       props: {
//         prova: store.getState().app.previousUrl
//       },
//     }
//   }
// );
export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({store}) => {
    let expResp = await NetworkService.getInstance().getExperience();
    if (expResp.data && expResp.data.results != undefined) {
      store.dispatch(setExperience(expResp.data.results));
    }
    let expGraphResp = await NetworkService.getInstance().getExperienceGraph();
    return {
      props:{
        experienceGraph: (expGraphResp.data)?expGraphResp.data.result:undefined
      },
      revalidate: 60
    }
  }
);


//--------------- COMPONENT
class AboutMe extends BasePageComponent<AboutMeProps, any> {
  
  //------ ATTRS
  private defaultState:IAboutMeState;
  private lastProgress:number=0;
  private currentPayload:string|undefined;
  

  //------ FUNCTIONS

  //---------- constructor
  constructor(props: AboutMeProps, state: any) {
    super(props, state);
    this.defaultState = getDefaultAboutMeState();
    this.onSceneEvent = this.onSceneEvent.bind(this);
  }


  //---------- componentDidMount
  componentDidMount() {
    super.componentDidMount();
    this.resetProgress();
    // let _self = this;
    // NetworkService.getInstance().getExperience()
    //   .then(function (response) {
    //     if (response.data.results != undefined) {
    //       _self.props.setExperience(response.data.results);
    //     }
    //   }
    // );
  }

  //------------ componentDidUpdate
  componentDidUpdate(prevProps:AboutMeProps, prevState:any, snapshot:any) {
    super.componentDidUpdate(prevProps, prevState, snapshot);
    if (prevProps.menuOpen && prevProps.menuOpen != this.props.menuOpen){
      this.resetProgress();
    }
  }

  //---------- resetProgress
  private resetProgress(){
    this.props.setCurrentScene(0);
    this.props.setProgress(0, 0);
  }


  //---------- onSceneProgress
  public onSceneProgress(progress: number) : number {
    this.lastProgress = progress;
    let roundProgress = Math.round(progress * 100) / 100;
    return roundProgress;
  }


  //---------- onSceneEvent
  public onSceneEvent(sceneNumber: number, progress: number, event: ScrollMagic.Event<any>, payload?: string) : number {
    // console.log("onSceneEvent: " + sceneNumber + " - " + progress + " - " + this.lastProgress + " - " + event + " - " + event.type + " - " + event.timeStamp);
    this.currentPayload = payload;
    
    if (event.type == "init" && event.target != undefined){
      // console.log("Scene: " + sceneNumber + " - " + payload);
      // console.log(event.timeStamp);
      event.target.on("progress", (event:ScrollMagic.ProgressEvent)=>{
        if (sceneNumber == -1 || (this.lastProgress == 0 && event.progress == 0)) return;
        let roundProgress =  this.onSceneProgress(event.progress);
        this.props.setCurrentScene(sceneNumber, this.currentPayload);
        this.props.setProgress(sceneNumber, roundProgress);
      })
      return progress;
    } else if (sceneNumber == -1 || (this.lastProgress == 0 && progress == 0)){
      return progress;
    } else {
      return this.onSceneProgress(progress);
    }
  }


  //------------ render
  public render() {
    return (
      <React.Fragment>
        <header className="bp-header cf">
          <h1 className="bp-header__title text-brand1-dark">
            <FormattedMessage id="ABOUT_ME.TITLE" values={{
              span: (chunks:any) => (<span className='d-sm-none'>{chunks}</span>),
              br: (chunk:any)=>(<br />)
            }}/>
          </h1>
          <p className="bp-header__desc"><FormattedMessage id="ABOUT_ME.SUBTITLE" /></p>
        </header>
        <div className='page-body'>
         
            <Controller container={"#"+PAGE_ROOT_ID} globalSceneOptions={{ triggerHook: 0 }}>
              
              {/* PROGRESS BAR */}
              <Scene duration={0} pin enabled={true}>
                {(progress: any, event: any) => {
                  progress = this.onSceneEvent(-1, progress, event);
                  return ( 
                    <div className={`${styles["about-me__progress-bar"]}`}><ProgressBar /></div>
                  )
                }}
              </Scene>

              {/* EDUCATION */}
              <Scene pin duration={this.defaultState.progress[0].duration} indicators={false}>
                {(progress: any, event: any) => {
                  progress = this.onSceneEvent(0, progress, event);
                  // console.log(event);
                  return (
                    <div className={`${styles["about-me__panel"]}`}>
                      <Education progress={progress} experienceGraph={this.props.experienceGraph}/>
                    </div>
                  )
                }}
              </Scene>

              {/* HOBBIES */}
              <Scene pin duration={this.defaultState.progress[1].duration} indicators={false}>
                {(progress: any, event: any) => {
                  progress = this.onSceneEvent(1, progress, event);
                  return (
                    <div className={`${styles["about-me__panel"]}`}>
                      <Hobbies progress={progress}/>
                    </div>
                  )
                }}
              </Scene>
              
              {/* EXPERIENCE: MOBILE */}
              <Scene pin duration={this.defaultState.progress[2].duration} indicators={false}>
                {(progress: any, event: any) => {
                  progress = this.onSceneEvent(2, progress, event, (this.props.experience[0] != undefined)?this.props.experience[0].id:undefined);
                  return (
                    <div className={`${styles["about-me__panel"]}`}>
                      <Experience progress={progress} experience={this.props.experience[0]}/>
                    </div>
                  )
                }}
              </Scene>

              {/* EXPERIENCE: FULL STACK */}
              <Scene pin duration={this.defaultState.progress[3].duration} indicators={false}>
                {(progress: any, event: any) => {
                  progress = this.onSceneEvent(3, progress, event, (this.props.experience[1] != undefined)?this.props.experience[1].id:undefined);
                  return (
                    <div className={`${styles["about-me__panel"]}`}>
                      <Experience progress={progress} experience={this.props.experience[1]}/>
                    </div>
                  )
                }}
              </Scene>

              {/* EXPERIENCE: IT SOLUTION ARCHITECT */}
              <Scene pin duration={this.defaultState.progress[4].duration} indicators={false}>
                {(progress: any, event: any) => {
                  progress = this.onSceneEvent(4, progress, event, (this.props.experience[2] != undefined)?this.props.experience[2].id:undefined);
                  return (
                    <div className={`${styles["about-me__panel"]}`}>
                      <Experience progress={progress} experience={this.props.experience[2]}/>
                    </div>
                  )
                }}
              </Scene>

              {/* RESUME */}
              <Scene pin duration={this.defaultState.progress[5].duration}>
                {(progress: any, event: any) => {
                  progress = this.onSceneEvent(5, progress, event);
                  return (
                    <div className={`${styles["about-me__panel"]}`}>
                      <Resume />
                    </div>
                  )
                }}
              </Scene>
            </Controller>
        </div>
      </React.Fragment>
    );
  }

}

const mapStateToProps = (state:IStoreState) => {
  return {
    experience: state.aboutMe.experience,
    menuOpen: state.app.menuOpen
  }
}

export default connect(
  mapStateToProps,
  { setCurrentScene, setProgress, setExperience, resetState }
)(AboutMe)