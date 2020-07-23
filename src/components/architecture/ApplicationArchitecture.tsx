import React from 'react';
import keadexBattisti from '../../assets/img/keadex-battisti.png'; 
import "./Architecture.scss";
import { Architecture, ArchitectureModule } from './Architecture';
import { ArchitectureType } from '../../pages/kea-lab/KeaLab';
import { useIntl } from 'react-intl';


//------------------ TYPES
interface ApplicationArchitectureProps{
  onArchitectureTypeSelection: (architectureType: ArchitectureType)=>void;
}


//------------------ COMPONENT
export const ApplicationArchitecture : React.FunctionComponent<ApplicationArchitectureProps> = (props:ApplicationArchitectureProps) => {
  
  const intl = useIntl();
  
  let modules : ArchitectureModule[] = [
    {
      id: "keadex-battisti",
      name: intl.formatMessage({id: "KEADEX_MODULES.KEADEX_BATTISTI"}),
      logo: keadexBattisti,
      githubUrl: "https://github.com/keadex",
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


  // //----- afterInjection <--- si può generalizzare mettendolo in Architecture.tsx, iterando sui module
  // function afterInjection(error:Error|null, svg:SVGElement|undefined):void{
  //   if (svg){
  //   // props.svgPanProps.resetTransform();
  //   let battistiModule = svg.querySelector("#battisti-module");
  //     battistiModule!.classList.add("architecture__module");
  //     battistiModule!.addEventListener("click", ()=>{
  //       console.log("ciao")
  //       // goToSection(moduleDetailsRef!.current!);
  //     });
  //   }
  // }


  //----- render
  return (
    <React.Fragment>
      <Architecture 
        architectureType={ArchitectureType.application} 
        onArchitectureTypeSelection={props.onArchitectureTypeSelection}
        modules={modules} />
    </React.Fragment>
  );
}