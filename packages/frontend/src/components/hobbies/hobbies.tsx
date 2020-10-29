import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PlayState, Tween } from 'react-gsap';
import styles from './hobbies.module.scss';
import OptimizedImage from '../optimized-image/optimized-image';
import { HooksBreakpointProps, Query, withHooksBreakpoint } from '../../core/react-breakpoint';


//------------------ TYPES
export interface IEducationProps extends HooksBreakpointProps{
  progress: number
}
enum TweenElement{
  Cinema, Spearfishing
}

//--------------- COMPONENT
class Education extends React.Component<IEducationProps> {

  //------------ adjustProgress
  public adjustProgress(idTween:number, inProgress: number):number{
    /* Function to calculate when to show picture and description of the hobby.
       Subtrahend is the delay compared to the progress.
       idTween semantic:
        - x: picture
        - x.y: description
    */
    var speed = 9;
    switch (idTween){
      case 1:   var progress = (inProgress-0.1)*speed
                return (progress < 0)?0:progress;
      case 1.1: var progress = (inProgress-0.1)*speed
                return (progress < 0 || progress > 1)?0:progress;
      case 2:   var progress = (inProgress-0.35)*speed
                return (progress < 0)?0:progress;
      case 2.1: var progress = (inProgress-0.35)*speed
                return (progress < 0 || progress > 1)?0:progress;
      case 3:   var progress = (inProgress-0.55)*speed
                return (progress < 0)?0:progress;
      case 3.1: var progress = (inProgress-0.55)*speed
                return (progress < 0 || progress > 1)?0:progress;
      case 4:   var progress = (inProgress-0.75)*speed
                return (progress < 0)?0:progress;
      case 4.1: var progress = (inProgress-0.75)*speed
                return (progress < 0 || progress > 1)?0:progress;
      case 5:   var progress = (inProgress-0.9)*speed
                return (progress < 0)?0:progress;
      case 5.1: var progress = (inProgress-0.9)*speed
                return (progress < 0 || progress > 1)?0:progress;
    }
    return inProgress;
  }


  //------------ getTopAnimation
  private getTopAnimation(tweenElement:TweenElement){
    if (this.props.breakpoints){
      if (tweenElement == TweenElement.Cinema){
        if (this.props.breakpoints.xs || this.props.breakpoints.sm || this.props.breakpoints.md || this.props.breakpoints.lg) return "69vh";
        else return "70vh";
      }else if (tweenElement == TweenElement.Spearfishing){
        if (this.props.breakpoints.xs || this.props.breakpoints.sm) return "69vh";
        else if (this.props.breakpoints.md) return "70vh";
        else return "71vh";
      }
    }
  }


  //------------ render
  public render() {
    let progress = this.props.progress;
    return (
      <React.Fragment>
        {/* BOX */}
        <div className="text-center">
          <Tween            
            from={{ rotation: 0 }}
            to={{ rotation:135 }}
            progress={progress*5}
            playState={PlayState.stop} >
              <OptimizedImage className={`${styles["hobbies__box"]}`} src={"hobbies/box.png"} alt="Hobbies box" width={{default: "7%", sm: "25%", lg: "12%"}} srcWidth={318} srcHeight={343} />
          </Tween>

          {/* SPORT */}
          <Tween            
            from={{ rotation: 80, y: 0, opacity: 0 }}
            to={{ rotation:0, top: "70vh", opacity: 1 }}
            progress={this.adjustProgress(1, progress)}
            playState={PlayState.stop}>
              <OptimizedImage className={`${styles["hobbies__hobby"]}`} src={"hobbies/sport.png"} alt="Sport hobby" width={{default: "10%", sm: "30%", lg: "20%"}} srcWidth={1024} srcHeight={473}/>
          </Tween>
          <div className={`${styles["hobbies__hobby-description"]} ${(this.adjustProgress(1.1, progress)==0?"out":"")}`}>
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOut out"}}}
              to={{css: {className: "animate__animated animate__fadeIn"}}}
              progress={this.adjustProgress(1.1, progress)}
              playState={PlayState.stop}>
                <div>
                  <h1><FormattedMessage id="ABOUT_ME.HOBBIES.TITLE_SPORT" /></h1>
                  <FormattedMessage id="ABOUT_ME.HOBBIES.DESCRIPTION_SPORT" />
                </div>
            </Tween>
          </div>

          {/* MARTIAL ARTS */}
          <Tween            
            from={{ rotation: 0, y: 0, opacity: 0 }}
            to={{ rotation:-80, left:"-20%", top: "65vh", opacity: 1 }}
            progress={this.adjustProgress(2, progress)}
            playState={PlayState.stop}>
              <OptimizedImage className={`${styles["hobbies__hobby"]} ${styles["hobbies__hobby-martial-arts"]}`} src={"hobbies/martial-arts.png"} alt="Martial Arts hobby" width={{default: "6%", sm: "20%", lg: "12%"}} srcWidth={512} srcHeight={714}/>
          </Tween>
          <div className={`${styles["hobbies__hobby-description"]} ${(this.adjustProgress(2.1, progress)==0?"out":"")}`}>
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOut"}}}
              to={{css: {className: "animate__animated animate__fadeIn"}}}
              progress={this.adjustProgress(2.1, progress)}
              playState={PlayState.stop}>
                <div>
                  <h1><FormattedMessage id="ABOUT_ME.HOBBIES.TITLE_MARTIAL_ARTS" /></h1>
                  <div>
                    <FormattedMessage
                      id="ABOUT_ME.HOBBIES.DESCRIPTION_MARTIAL_ARTS"
                      values={{
                        a: (chunks:any) => (<a href='http://www.kyohansimmi.it' target='_blank' rel="noopener">{chunks}</a>)
                      }
                    }/>
                  </div>
                </div>
            </Tween>
          </div>

          {/* MUSIC */}
          <Tween            
            from={{ rotation: 0, y: 0, opacity: 0 }}
            to={{ rotation:80, left:"20%", top: "68vh", opacity: 1 }}
            progress={this.adjustProgress(3, progress)}
            playState={PlayState.stop}>
              <OptimizedImage className={`${styles["hobbies__hobby"]} ${styles["hobbies__hobby-martial-arts"]}`} src={"hobbies/music.png"} alt="Music hobby" width={{default: "6%", sm: "20%", lg: "12%"}} srcWidth={1410} srcHeight={1341} />
          </Tween>
          <div className={`${styles["hobbies__hobby-description"]} ${(this.adjustProgress(3.1, progress)==0?"out":"")}`}>
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOut"}}}
              to={{css: {className: "animate__animated animate__fadeIn"}}}
              progress={this.adjustProgress(3.1, progress)}
              playState={PlayState.stop}>
                <div>
                  <h1><FormattedMessage id="ABOUT_ME.HOBBIES.TITLE_MUSIC" /></h1>
                  <FormattedMessage id="ABOUT_ME.HOBBIES.DESCRIPTION_MUSIC" />
                </div>
            </Tween>
          </div>

          {/* SPEARFISHING */}
          <Tween            
            from={{ rotation: -90, y: 0, opacity: 0, top: "0vh" }}
            to={{ rotation:10, left:"10%", opacity: 1, top: this.getTopAnimation(TweenElement.Spearfishing) }}
            progress={this.adjustProgress(4, progress)}
            playState={PlayState.stop}>
              <OptimizedImage className={`${styles["hobbies__hobby"]} ${styles["hobbies__hobby-spearfishing"]}`} src={"hobbies/spearfishing.png"} alt="Spearfishing hobby" width={{default: "8%", sm: "34%", lg: "18%"}} srcWidth={1819} srcHeight={815} />
          </Tween>
          <div className={`${styles["hobbies__hobby-description"]} ${(this.adjustProgress(4.1, progress)==0?"out":"")}`}>
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOut"}}}
              to={{css: {className: "animate__animated animate__fadeIn d-block"}}}
              progress={this.adjustProgress(4.1, progress)}
              playState={PlayState.stop}>
                <div>
                  <h1><FormattedMessage id="ABOUT_ME.HOBBIES.TITLE_SPEARFISHING" /></h1>
                  <FormattedMessage id="ABOUT_ME.HOBBIES.DESCRIPTION_SPEARFISHING" />
                </div>
            </Tween>
          </div>

          {/* CINEMA */}
          <Tween            
            from={{ rotation: 90, y: 0, opacity: 0, top: "0vh" }}
            to={{ rotation:-10, left:"-10%", opacity: 1, top: this.getTopAnimation(TweenElement.Cinema) }}
            progress={this.adjustProgress(5, progress)}
            playState={PlayState.stop}>
              <OptimizedImage className={`${styles["hobbies__hobby"]} ${styles["hobbies__hobby-cinema"]}`} src={"hobbies/cinema.png"} alt="Cinema hobby" width={{default: "8%", sm: "30%", lg: "18%"}} srcWidth={1177} srcHeight={734} />
          </Tween>
          <div className={`${styles["hobbies__hobby-description"]} ${(this.adjustProgress(5.1, progress)==0?"out":"")}`}>
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOut"}}}
              to={{css: {className: "animate__animated animate__fadeIn"}}}
              progress={this.adjustProgress(5.1, progress)}
              playState={PlayState.stop}>
                <div>
                  <h1><FormattedMessage id="ABOUT_ME.HOBBIES.TITLE_CINEMA" /></h1>
                  <FormattedMessage id="ABOUT_ME.HOBBIES.DESCRIPTION_CINEMA" />
                </div>
            </Tween>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

export default withHooksBreakpoint(Education)