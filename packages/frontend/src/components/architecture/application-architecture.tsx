import React from 'react';
import { ArchitectureType } from '../../pages/kealab';
import type { ArchitectureImplProps } from './architecture';
import AppArchSvg from '../../../public/img/application-architecture.svg';
import dynamic from 'next/dynamic';

const Architecture = dynamic(() => import('../../components/architecture/architecture'));


//------------------ COMPONENT
const ApplicationArchitecture : React.FunctionComponent<ArchitectureImplProps> = (props:ArchitectureImplProps) => {
  
  //----- render
  return (
    <React.Fragment>
      <Architecture 
        architectureType={ArchitectureType.application} 
        onArchitectureTypeSelection={props.onArchitectureTypeSelection}
        modules={props.modules}
        chalkboard={AppArchSvg} />
    </React.Fragment>
  );
}

export default ApplicationArchitecture;