import React from 'react';
import './ProgressBar.scss';
import { WrappedComponentProps, injectIntl } from 'react-intl';
import { IStoreState } from '../../core/store/store.type';
import { connect } from 'react-redux';
import { SceneId } from '../../core/app.constants';

//------------------ TYPES
export interface IProgress{
  id: SceneId,
  scene: number,
  progress: number,
  duration: number,
  title: string|undefined
}

interface IProgressBarProps extends WrappedComponentProps {
  currentScene?: number,
  scenePayload?: string,
  progress?: IProgress[]
}


//------------------ COMPONENT

class ProgressBar extends React.Component<IProgressBarProps, any> {
  
  //ATTRS
  private percentage:number = 0;
  

  //FUNCS
  //----------- getTitle
  private getTitle(){
    let title = undefined;
    if (this.props.progress != undefined && this.props.currentScene != undefined){
      if (this.props.progress[this.props.currentScene].title != undefined)
        title = this.props.intl.formatMessage({ id: this.props.progress[this.props.currentScene].title! });
      if (this.props.scenePayload != undefined)
        title = this.props.intl.formatMessage({ id: "POSITIONS." + this.props.scenePayload })
    }
    return title;
  }

  //------------ render
  public render() {
    if (this.props.progress == undefined || this.props.currentScene == undefined)
      return (<div></div>)
    this.percentage = Math.round(this.props.progress[this.props.currentScene].progress * 100);
    return (
      <div className="progressbar">
        <span className="d-inline-block float-left">Progress:</span>
        
        <div className="progressbar__container d-inline-block">
          <div className="progress-bar__section-title text-truncate">{this.getTitle()}</div>
          <div className="progressbar__bar" style={{ width: this.percentage+'%' }}></div>
        </div>
        <span className="d-inline-block float-right">{this.percentage}%</span>
        {/* <span>Scene: {this.props.currentScene} Progress: {Math.round(this.props.progress[this.props.currentScene].progress * 10) / 10} Duration {this.props.progress[this.props.currentScene].duration}</span> */}
      </div>
    );
  }

}



const mapStateToProps = (state:IStoreState) => {
  return {
    currentScene: state.aboutMe.currentScene,
    scenePayload: state.aboutMe.scenePayload,
    progress: state.aboutMe.progress
  }
}

export default connect(
  mapStateToProps,
  null
)(injectIntl(ProgressBar))