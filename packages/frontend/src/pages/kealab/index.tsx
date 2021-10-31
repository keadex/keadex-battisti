import React from 'react';
import BasePageComponent from '../../components/base-page-component/base-page-component';
import PageLayout from '../../components/page-layout/page-layout';
import { GetStaticProps } from 'next';
import { wrapper } from '../../core/store/store';
import { ArchitectureModule, ArchitectureModuleType } from '../../model/autogenerated-graphql-strapi';
import { DEFAULT_REVALIDATE_SECONDS } from '../../core/app.constants';
import dynamic from 'next/dynamic';

const FormattedMessage:any = dynamic(() => import('react-intl').then((mod:any) => mod.FormattedMessage));
const ApplicationArchitecture = dynamic(() => import('../../components/architecture/application-architecture'));
const InfrastructureArchitecture = dynamic(() => import('../../components/architecture/infrastructure-architecture'));


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
  (store) => async (ctx) => {
    const NetworkService = (await import("../../core/network/network.service")).default;
    let modules = await NetworkService.getInstance().getArchitectureModules([ArchitectureModuleType.ApplicationArchitecture, ArchitectureModuleType.InfrastructureArchitecture])
    return {
      props:{
        modules: modules.data.data?.architectureModules
      }
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
  constructor(props: any) {
    super(props);
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
    //reset the hash when the user selects another architecture type in order
    //to avoid to keep in the url the selected module of the previous architecture type
    if (window.location.href.indexOf('#') != -1){
      window.location.href = window.location.href.split('#')[0]+"#"
    }

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
      <PageLayout title="Keadex - KeaLab" description="Check the Keadex architecture and the modules which compose it. Here you will find the technical details of each module.">
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