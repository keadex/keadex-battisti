import React from 'react';
import { ArchitectureType } from '../../pages/kealab';
import type { ArchitectureImplProps } from './architecture';
import dynamic from 'next/dynamic';

const Architecture = dynamic(() => import('../../components/architecture/architecture'));


//------------------ COMPONENT
const InfrastructureArchitecture : React.FunctionComponent<ArchitectureImplProps> = (props:ArchitectureImplProps) => {
  
  //----- render
  return (
    <React.Fragment>
      <Architecture 
        architectureType={ArchitectureType.infrastructure} 
        onArchitectureTypeSelection={props.onArchitectureTypeSelection}
        modules={props.modules}
        chalkboard={"infrastructure-architecture.png"} />
    </React.Fragment>
  );
}

export default InfrastructureArchitecture;