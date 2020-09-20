import React from 'react';
import Architecture, {ArchitectureModule, ArchitectureImplProps } from './architecture';
import { ArchitectureType } from '../../pages/kealab';
import { useIntl } from 'react-intl';
import InfrArchSvg from '../../../public/img/infrastructure-architecture.svg'; 


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