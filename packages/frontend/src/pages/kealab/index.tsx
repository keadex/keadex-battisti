import React from 'react';
import BasePageComponent from '../../components/base-page-component/base-page-component';
import { FormattedMessage } from 'react-intl';
import { ApplicationArchitecture } from '../../components/architecture/application-architecture';
import { InfrastructureArchitecture } from '../../components/architecture/infrastructure-architecture';
import PageLayout from '../../components/page-layout/page-layout';
import { GetStaticProps } from 'next';
import { wrapper } from '../../core/store/store';
import { ArchitectureModule, ArchitectureModuleType } from '../../model/autogenerated-graphql-strapi';
import NetworkService from '../../core/network/network.service';
import { DEFAULT_REVALIDATE_SECONDS } from '../../core/app.constants';

//------------------ TYPES
export enum ArchitectureType{
  application,
  infrastructure
}

interface KeaLabProps {
  modules: ArchitectureModule[]
}

interface KeaLabState {
  architectureType: ArchitectureType
}


//---------- getStaticProps
export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  async ({store}) => {
    let modules = await NetworkService.getInstance().getArchitectureModules([ArchitectureModuleType.ApplicationArchitecture, ArchitectureModuleType.InfrastructureArchitecture])
    return {
      props:{
        modules: modules.data.data?.architectureModules
      },
      revalidate: DEFAULT_REVALIDATE_SECONDS
    }
  }
);


//------------------ COMPONENT
class KeaLab extends BasePageComponent<KeaLabProps, KeaLabState> {
  
  //------ ATTRS
  private applicationArchModules:ArchitectureModule[] = [];
  private infrastructureArchModules:ArchitectureModule[] = [];

  
  //------ FUNCTIONS

  //---------- constructor
  constructor(props: any, state: KeaLabState) {
    super(props, state);
    this.state = {architectureType: ArchitectureType.application};
    this.setArchitectureType = this.setArchitectureType.bind(this);
  }


  //----- componentDidMount
  componentDidMount(){
    super.componentDidMount();
    window.scrollTo(0,0);
  }


  //---------- setArchitectureType
  private setArchitectureType(architectureType:ArchitectureType) {
    this.setState({architectureType:architectureType})
  }


  //----- getArchitecture
  private getArchitecture(props:any){
    if (this.state.architectureType == ArchitectureType.application){
      return <ApplicationArchitecture onArchitectureTypeSelection={this.setArchitectureType} modules={this.applicationArchModules}/>
    }else{
      return <InfrastructureArchitecture onArchitectureTypeSelection={this.setArchitectureType} modules={this.infrastructureArchModules}/>
    }
  }


  //----- reloadModules
  private reloadModules(){
    if (this.props.modules){
      this.applicationArchModules = [];
      this.infrastructureArchModules = [];
      this.props.modules.forEach((module)=>{
        if (module.type == ArchitectureModuleType.ApplicationArchitecture) this.applicationArchModules.push(module)
        else this.infrastructureArchModules.push(module)
      })
    }
  }


  //------------ render
  public render() {
    this.reloadModules();
    return (
      <PageLayout title="Keadex - KeaLab">
        <header className="bp-header cf">
          <h1 className="bp-header__title text-brand1-dark"><FormattedMessage id="KEALAB.TITLE" /></h1>
          <p className="bp-header__desc"><FormattedMessage id="KEALAB.SUBTITLE" /></p>
        </header>
        <div className='page-body'>
          <>
            {this.getArchitecture(this.state.architectureType)}
          </>
        </div>
      </PageLayout>
    );
  }

}

export default KeaLab;