import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Tween } from 'react-gsap';
import box from "../../../public/img/hobbies/box.png";
import sport from "../../../public/img/hobbies/sport.png";
import martialArts from "../../../public/img/hobbies/martial-arts.png";
import music from "../../../public/img/hobbies/music.png";
import spearfishing from "../../../public/img/hobbies/spearfishing.png";
import cinema from "../../../public/img/hobbies/cinema.png";
import styles from './hobbies.module.scss';

//------------------ TYPES
export interface IEducationProps{
  progress: number
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
            playState="stop">
              <img className={`${styles["hobbies__box"]}`} src={box} alt="Hobbies box" />
          </Tween>

          {/* SPORT */}
          <Tween            
            from={{ rotation: 80, y: 0, opacity: 0 }}
            to={{ rotation:0, top: "70vh", opacity: 1 }}
            progress={this.adjustProgress(1, progress)}
            playState="stop">
              <img className={`${styles["hobbies__hobby"]}`} src={sport} alt="Sport hobby" />
          </Tween>
          <div className={`${styles["hobbies__hobby-description"]} ${(this.adjustProgress(1.1, progress)==0?"out":"")}`}>
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOut out"}}}
              to={{css: {className: "animate__animated animate__fadeIn"}}}
              progress={this.adjustProgress(1.1, progress)}
              playState="stop">
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
            playState="stop">
              <img className={`${styles["hobbies__hobby"]} ${["hobbies__hobby-martial-arts"]}`} src={martialArts} alt="Martial Arts hobby" />
          </Tween>
          <div className={`${styles["hobbies__hobby-description"]} ${(this.adjustProgress(2.1, progress)==0?"out":"")}`}>
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOut"}}}
              to={{css: {className: "animate__animated animate__fadeIn"}}}
              progress={this.adjustProgress(2.1, progress)}
              playState="stop">
                <div>
                  <h1><FormattedMessage id="ABOUT_ME.HOBBIES.TITLE_MARTIAL_ARTS" /></h1>
                  <div>
                    <FormattedMessage
                      id="ABOUT_ME.HOBBIES.DESCRIPTION_MARTIAL_ARTS"
                      values={{
                        a: (chunks:any) => (<a href='http://www.kyohansimmi.it' target='_blank'>{chunks}</a>)
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
            playState="stop">
              <img className={`${styles["hobbies__hobby"]} ${["hobbies__hobby-martial-arts"]}`} src={music} alt="Music hobby" />
          </Tween>
          <div className={`${styles["hobbies__hobby-description"]} ${(this.adjustProgress(3.1, progress)==0?"out":"")}`}>
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOut"}}}
              to={{css: {className: "animate__animated animate__fadeIn"}}}
              progress={this.adjustProgress(3.1, progress)}
              playState="stop">
                <div>
                  <h1><FormattedMessage id="ABOUT_ME.HOBBIES.TITLE_MUSIC" /></h1>
                  <FormattedMessage id="ABOUT_ME.HOBBIES.DESCRIPTION_MUSIC" />
                </div>
            </Tween>
          </div>

          {/* SPEARFISHING */}
          <Tween            
            from={{ rotation: -90, y: 0, opacity: 0 }}
            to={{ rotation:10, left:"10%", opacity: 1, className: `${styles["hobbies__hobby"]} ${styles["hobbies__hobby-spearfishing"]} ${styles["hobbies__hobby-spearfishing-end"]}` }}
            progress={this.adjustProgress(4, progress)}
            playState="stop">
              <img className={`${styles["hobbies__hobby"]} ${styles["hobbies__hobby-spearfishing"]}`} src={spearfishing} alt="Spearfishing hobby" />
          </Tween>
          <div className={`${styles["hobbies__hobby-description"]} ${(this.adjustProgress(4.1, progress)==0?"out":"")}`}>
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOut"}}}
              to={{css: {className: "animate__animated animate__fadeIn d-block"}}}
              progress={this.adjustProgress(4.1, progress)}
              playState="stop">
                <div>
                  <h1><FormattedMessage id="ABOUT_ME.HOBBIES.TITLE_SPEARFISHING" /></h1>
                  <FormattedMessage id="ABOUT_ME.HOBBIES.DESCRIPTION_SPEARFISHING" />
                </div>
            </Tween>
          </div>

          {/* CINEMA */}
          <Tween            
            from={{ rotation: 90, y: 0, opacity: 0 }}
            to={{ rotation:-10, left:"-10%", opacity: 1, className: `${styles["hobbies__hobby"]} ${styles["hobbies__hobby-cinema"]} ${styles["hobbies__hobby-cinema-end"]}` }}
            progress={this.adjustProgress(5, progress)}
            playState="stop">
              <img className={`${styles["hobbies__hobby"]} ${styles["hobbies__hobby-cinema"]}`} src={cinema} alt="Cinema hobby" />
          </Tween>
          <div className={`${styles["hobbies__hobby-description"]} ${(this.adjustProgress(5.1, progress)==0?"out":"")}`}>
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOut"}}}
              to={{css: {className: "animate__animated animate__fadeIn"}}}
              progress={this.adjustProgress(5.1, progress)}
              playState="stop">
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

export default Education