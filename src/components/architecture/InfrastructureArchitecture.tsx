import React from 'react';
import "./Architecture.scss";
import { Architecture, ArchitectureModule, ArchitectureImplProps } from './Architecture';
import { ArchitectureType } from '../../pages/kea-lab/KeaLab';
import { useIntl } from 'react-intl';
import InfrArchSvg from '../../assets/img/infrastructure-architecture.svg'; 


//------------------ TYPES


//------------------ COMPONENT
export const InfrastructureArchitecture : React.FunctionComponent<ArchitectureImplProps> = (props:ArchitectureImplProps) => {
  
  const intl = useIntl();
  
  let modules : ArchitectureModule[] = []


  //----- render
  return (
    <React.Fragment>
      <Architecture 
        architectureType={ArchitectureType.infrastructure} 
        onArchitectureTypeSelection={props.onArchitectureTypeSelection}
        modules={modules}
        chalkboard={InfrArchSvg} />
    </React.Fragment>
  );
}