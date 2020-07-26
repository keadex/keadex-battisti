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
        <div className="lds-ellipsis full-center position-absolute">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
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