import React from 'react';
import keadexBattisti from '../../assets/img/keadex-battisti.png'; 
import "./Architecture.scss";
import { Architecture, ArchitectureModule, ArchitectureImplProps } from './Architecture';
import { ArchitectureType } from '../../pages/kea-lab/KeaLab';
import { useIntl } from 'react-intl';
import AppArchSvg from '../../assets/img/application-architecture.svg'; 


//------------------ TYPES


//------------------ COMPONENT
export const ApplicationArchitecture : React.FunctionComponent<ArchitectureImplProps> = (props:ArchitectureImplProps) => {
  
  const intl = useIntl();
  
  //TODO Retrieve this data from the CMS
  let modules : ArchitectureModule[] = [
    {
      id: "keadex-battisti",
      name: intl.formatMessage({id: "KEADEX_MODULES.KEADEX_BATTISTI"}),
      logo: keadexBattisti,
      description: (
        <p style={{marginBottom:"300px"}}><b>Keadex Battisti</b> represents the shell of Keadex, the way to describe it.</p>
      ),
      technologies: (
        <p style={{marginBottom:"300px"}}><b>Keadex Battisti</b> represents the shell of Keadex, the way to describe it.</p>
      ),
      roadmap: (
        <p style={{marginBottom:"300px"}}><b>Keadex Battisti</b> represents the shell of Keadex, the way to describe it.</p>
      )
    }
  ]


  //----- render
  return (
    <React.Fragment>
      <Architecture 
        architectureType={ArchitectureType.application} 
        onArchitectureTypeSelection={props.onArchitectureTypeSelection}
        modules={modules}
        chalkboard={AppArchSvg} />
    </React.Fragment>
  );
}