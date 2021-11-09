import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PlayState, Tween } from 'react-gsap';
import styles from './education.module.scss';
import { ForceGraph } from '../../model/models';
import { HooksBreakpointProps } from '../../core/react-breakpoint';
import dynamic from 'next/dynamic';
import { MediaType } from '../optimized-media/optimized-media';
const Brain:any = dynamic(() => import('../brain/brain'));

const OptimizedMedia = dynamic(
  () => import('../optimized-media/optimized-media'),
  { ssr: false }
)


//------------------ TYPES
export interface EducationProps extends HooksBreakpointProps {
  progress: number
}

    
//--------------- COMPONENT
export const Education : React.FunctionComponent<EducationProps> = props => {

  //ATTRS


  //FUNCS


  //------------ adjustProgress
  function adjustProgress(idTween:number, inProgress: number):number{
    
    switch (idTween){
      case 2: 
      case 3: // console.log(idTween + " -- " + inProgress + " --- " + ((progress < 0 || progress > 0.25)?0:progress));
              return (inProgress < 0 || inProgress > 0.25)?0:inProgress;
      case 4: 
      case 5: var progress = inProgress-0.35;
              // console.log(idTween + " -- " + inProgress + " --- " + ((progress < 0 || progress > 0.25)?0:progress));
              return (progress < 0 || progress > 0.25)?0:progress;
      case 6: 
      case 7: var progress = inProgress-0.6;
              // console.log(idTween + " -- " + inProgress + " --- " + ((progress < 0 || progress > 0.25)?0:progress));
              return (progress < 0 || progress > 0.25)?0:progress;
      case 8: 
      case 9: var progress = inProgress-0.85;
              // console.log(idTween + " -- " + inProgress + " --- " + ((progress < 0 || progress > 0.25)?0:progress));
              return (progress < 0 || progress > 0.25)?0:progress;
    }
    return inProgress;
  }

  //------------ render
  let progress = props.progress;
  return (
    <React.Fragment>
      <div className="row m-0">

        {/* EDUCATION */}
        {/* <div className="col-md-12 p-0"> */}
          {/* <Tween            
            from={{css: {className: "position-relative animate__animated animate__fadeIn"}}}
            to={{css: {className: "position-relative animate__animated animate__fadeOut"}}}
            progress={adjustProgress(1, progress)}
            playState={PlayState.stop}
            lazy>
              <div> */}
                {/* <Brain progress={progress} experienceGraph={props.experienceGraph} /> */}
              {/* </div>
          </Tween> */}
        {/* </div> */}

        {/* HAPPY HOUR */}
        <div className={`col-sm-12 col-md-12 text-center ${styles["education__container-element"]} ${(adjustProgress(2, progress)==0?"out":"")}`}>
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutRight"}}}
            to={{css: {className: "animate__animated animate__fadeInLeft"}}}
            progress={adjustProgress(2, progress)}
            playState={PlayState.stop}
            lazy>
              <div><OptimizedMedia className={`${styles["education__picture"]}`} src={"education/happy-hour-bari.png"} alt="Baresian happy hour" width={{default: "350px", sm: "200px"}} srcWidth={612} srcHeight={612} /></div>
          </Tween>          
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutDown"}}}
            to={{css: {className: "animate__animated animate__fadeInDown"}}}
            progress={adjustProgress(3, progress)}
            playState={PlayState.stop}
            lazy>
              <div>
                <div className="mt-md-6 mt-5"><FormattedMessage id="ABOUT_ME.EDUCATION.HAPPY_HOUR" /></div>
              </div>
          </Tween>
        </div>
        
        {/* HIGH SCHOOL */}
        <div className={`col-sm-12 col-md-12 text-center ${styles["education__container-element"]} ${(adjustProgress(4, progress)==0?"out":"")}`}>
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutRight"}}}
            to={{css: {className: "animate__animated animate__fadeInLeft"}}}
            progress={adjustProgress(4, progress)}
            playState={PlayState.stop}
            lazy>
              <div><OptimizedMedia className={`${styles["education__picture"]}`} src={"education/marconi.png"} alt="ITIS Guglielmo Marconi Bari" width={{default: "350px", sm: "200px"}} srcWidth={612} srcHeight={612} /></div>
          </Tween>          
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutDown"}}}
            to={{css: {className: "animate__animated animate__fadeInDown"}}}
            progress={adjustProgress(5, progress)}
            playState={PlayState.stop}
            lazy>
              <div>
                <div className="mt-md-6 mt-5"><FormattedMessage id="ABOUT_ME.EDUCATION.HIGH_SCHOOL" /></div>
              </div>
          </Tween>
        </div>

        {/* UNIVERSITY */}
        <div className={`col-sm-12 col-md-12 text-center ${styles["education__container-element"]} ${(adjustProgress(6, progress)==0?"out":"")}`}>
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutRight"}}}
            to={{css: {className: "animate__animated animate__fadeInLeft"}}}
            progress={adjustProgress(6, progress)}
            playState={PlayState.stop}
            lazy>
              <div><OptimizedMedia className={`${styles["education__picture"]}`} src={"education/sochild.png"} alt="SoChild" width={{default: "350px", sm: "200px"}} srcWidth={612} srcHeight={612}/></div>
          </Tween>          
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutDown"}}}
            to={{css: {className: "animate__animated animate__fadeInDown"}}}
            progress={adjustProgress(7, progress)}
            playState={PlayState.stop}
            lazy>
              <div>
                <div className="mt-md-6 mt-5"><FormattedMessage id="ABOUT_ME.EDUCATION.UNIVERSITY" /></div>
              </div>
          </Tween>
        </div>


        {/* JACK */}
        <div className={`col-sm-12 col-md-12 text-center ${styles["education__container-element"]} ${(adjustProgress(8, progress)==0?"out":"")}`}>
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutRight"}}}
            to={{css: {className: "animate__animated animate__fadeInLeft"}}}
            progress={adjustProgress(8, progress)}
            playState={PlayState.stop}
            lazy>
              <div><OptimizedMedia width={{default: "200px", sm: "130px"}} srcWidth={150} srcHeight={268} autoPlay loop className={`${styles["education__picture"]} ${styles["education__jack-avatar"]}`} preload="none" src={"jack/jack"} type={MediaType.Video} /></div>
          </Tween>          
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutDown"}}}
            to={{css: {className: "animate__animated animate__fadeInDown"}}}
            progress={adjustProgress(9, progress)}
            playState={PlayState.stop}
            lazy>
              <div>
                <div className="mt-md-6 mt-5"><FormattedMessage id="ABOUT_ME.EDUCATION.JACK" /></div>
              </div>
          </Tween>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Education