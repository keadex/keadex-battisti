import React from 'react';
import styles from './spinner.module.scss';
import type { StoreState } from '../../core/store/store.type';
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
      <div className={this.isSpinnerVisible()?`${styles["spinner__container"]} ${styles["spinner--visible"]}`:`${styles["spinner__container"]} ${styles["spinner--hidden"]}`} >
        <div className={`${styles["lds-ellipsis"]} full-center position-absolute`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>        
    );
  }
}

const mapStateToProps = (state:StoreState) => {
  return {
    spinnerCounter: state.app.spinnerCounter
  }
}

export default connect(
  mapStateToProps,
  null
)(Spinner)