import React from 'react';
import keadexBattisti from '../../../public/img/keadex-battisti.png';
import Architecture, {ArchitectureModule, ArchitectureImplProps } from './architecture';
import { ArchitectureType } from '../../pages/kealab';
import { useIntl } from 'react-intl';
import AppArchSvg from '../../../public/img/application-architecture.svg'; 


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
        <p style={{marginBottom:"300px"}}>BATTISTI <b>Keadex Battisti</b> represents the shell of Keadex, the way to describe it.</p>
      ),
      features: (
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