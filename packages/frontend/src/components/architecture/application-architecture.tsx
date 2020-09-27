import React from 'react';
import { ArchitectureType } from '../../pages/kealab';
import AppArchSvg from '../../../public/img/application-architecture.svg';
import Architecture, { ArchitectureImplProps} from './architecture';


//------------------ COMPONENT
export const ApplicationArchitecture : React.FunctionComponent<ArchitectureImplProps> = (props:ArchitectureImplProps) => {
  
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