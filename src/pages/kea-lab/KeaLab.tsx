import React, { Component } from 'react';
import BasePageComponent from '../../components/base-page-component/BasePageComponent';
import { FormattedMessage } from 'react-intl';
import { ApplicationArchitecture } from '../../components/architecture/ApplicationArchitecture';
import { InfrastructureArchitecture } from '../../components/architecture/InfrastructureArchitecture';

//------------------ TYPES
export enum ArchitectureType{
  application,
  infrastructure
}

interface KeaLabState {
  architectureType: ArchitectureType
}


//------------------ COMPONENT
class KeaLab extends BasePageComponent<any, KeaLabState> {
  
  //------ FUNCTIONS

  //---------- constructor
  constructor(props: any, state: KeaLabState) {
    super(props, state);
    this.state = {architectureType: ArchitectureType.application};
    this.setArchitectureType = this.setArchitectureType.bind(this);
  }

  //----- componentDidMount
  componentDidMount(){
    window.scrollTo(0,0)
  }


  //---------- setArchitectureType
  private setArchitectureType(architectureType:ArchitectureType) {
    this.setState({architectureType:architectureType})
  }


  //----- getArchitecture
  private getArchitecture(props:any){
    if (this.state.architectureType == ArchitectureType.application){
      return <ApplicationArchitecture onArchitectureTypeSelection={this.setArchitectureType}/>
    }else{
      return <InfrastructureArchitecture onArchitectureTypeSelection={this.setArchitectureType}/>
    }
  }


  //------------ render
  public render() {
    return (
      <React.Fragment>
        <header className="bp-header cf">
          <h1 className="bp-header__title text-brand1-dark"><FormattedMessage id="KEALAB.TITLE" /></h1>
          <p className="bp-header__desc"><FormattedMessage id="KEALAB.SUBTITLE" /></p>
        </header>
        <div className='page-body'>
          <div className="architecture">
            {this.getArchitecture(this.state.architectureType)}
          </div>
        </div>
      </React.Fragment>
    );
  }

}

export default KeaLab;