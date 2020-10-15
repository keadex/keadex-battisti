import React from 'react';
import Architecture, {ArchitectureImplProps } from './architecture';
import { ArchitectureType } from '../../pages/kealab';
import InfrArchSvg from '../../../public/img/infrastructure-architecture.svg'; 


//------------------ COMPONENT
const InfrastructureArchitecture : React.FunctionComponent<ArchitectureImplProps> = (props:ArchitectureImplProps) => {
  
  //----- render
  return (
    <React.Fragment>
      <Architecture 
        architectureType={ArchitectureType.infrastructure} 
        onArchitectureTypeSelection={props.onArchitectureTypeSelection}
        modules={props.modules}
        chalkboard={InfrArchSvg} />
    </React.Fragment>
  );
}

export default InfrastructureArchitecture;