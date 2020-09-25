import React from 'react';
import keadexBattisti from '../../../public/img/keadex-battisti.png';
import { ArchitectureType } from '../../pages/kealab';
import { useIntl } from 'react-intl';
import AppArchSvg from '../../../public/img/application-architecture.svg';
import Architecture, { ArchitectureImplProps, ArchitectureModule } from './architecture';


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
        <div style={{marginBottom:"300px"}}>
          <ul>
            <li>Typescript</li>
            <li>Bootstrap + MDB React (Material Design for Bootstrap)</li>
            <li>Styled Components</li>
            <li>Next.js</li>
            <li>Redux (react-redux, redux-actions)</li>
            <li>Redux Thunk</li>
            <li>Redux Wrapper for Next.js</li>
            <li>Internationalization (react-intl)</li>
            <li>Recharts</li>
            <li>Force directed graph (react-force-graph</li>
            <li>CSS Animation (animate.css)</li>
            <li>GreenSock Animation Platform (react-gsap)</li>
            <li>Animation on scroll (react-scrollmagic, react-animate-on-scroll)</li>
            <li>SVG Shape Animation (flubber)</li>
            <li>SVG Interaction (react-svg)</li>
            <li>Video Player (react-player)</li>
            <li>----</li>
            <li>Lerna</li>
            <li>GraphQL</li>
            <li>GraphQL Tools (mock)</li>
            <li>Apollo Server Express</li>
            <li>useSWR</li>
            <li>Strapi (headless CMS)</li>
            <li>Dynamic page generation from Strapi (https://github.com/strapi/strapi-starter-next-corporate). Check the example: http://keadex.io/strapi/pricing</li>
            <li>GraphQL Codegen</li>
          
          </ul>
        </div>
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