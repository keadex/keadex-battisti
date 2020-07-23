import React, { Component } from 'react';
import './Spinner.scss';
import { IStoreState } from '../../core/store/store.type';
import { connect } from 'react-redux';


//--------------- TYPES
interface ISpinnerProps {
  spinnerCounter?: number
}


//--------------- COMPONENT
class Spinner extends React.Component<ISpinnerProps> {
  
  //------------ constructor
  constructor(props:ISpinnerProps){
    super(props);
    this.isSpinnerVisible = this.isSpinnerVisible.bind(this);
  }

  //------------ isSpinnerVisible
  private isSpinnerVisible() : boolean {
    return this.props.spinnerCounter?this.props.spinnerCounter > 0:false;
  }


  //------------ render
  public render() {
    return (
        <div className={this.isSpinnerVisible()?"spinner__container spinner--visible":"spinner__container spinner--hidden"} >
          {/* <div className="spinner-border text-danger spinner" role="status">
            <span className="sr-only">Loading...</span>
          </div> */}
          <div className="cssload-loading">
            <div className="cssload-finger cssload-finger-1">
              <div className="cssload-finger-item">
                <span></span><i></i>
              </div>
            </div>
            <div className="cssload-finger cssload-finger-2">
              <div className="cssload-finger-item">
                <span></span><i></i>
              </div>
            </div>
            <div className="cssload-finger cssload-finger-3">
              <div className="cssload-finger-item">
                <span></span><i></i>
              </div>
            </div>
            <div className="cssload-finger cssload-finger-4">
              <div className="cssload-finger-item">
                <span></span><i></i>
              </div>
            </div>
            <div className="cssload-last-finger">
              <div className="cssload-last-finger-item"><i></i></div>
            </div>
          </div>
        </div>        
    );
  }
}

const mapStateToProps = (state:IStoreState) => {
  return {
    spinnerCounter: state.app.spinnerCounter
  }
}

export default connect(
  mapStateToProps,
  null
)(Spinner)