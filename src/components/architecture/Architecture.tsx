import React, { useState, useEffect, useRef, RefObject } from 'react';
import AppArchSvg from '../../assets/img/application-architecture.svg'; 
import { ReactSVG } from 'react-svg'
import "./Architecture.scss";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { MDBIcon } from 'mdbreact';
import { MDBBtn } from 'mdbreact';
import { MDBBtnGroup } from 'mdbreact';
import { FormattedMessage } from 'react-intl';
import { MDBCard } from 'mdbreact';
import { MDBCardBody } from 'mdbreact';
import { Switch, Route, HashRouter, useHistory } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import { ArchitectureChalkboardToolbar } from './ArchitectureChalkboardToolbar';
import { ArchitectureType } from '../../pages/kea-lab/KeaLab';
import { KEA_LAB_ID } from '../../core/routing/route.constants';
import { scrollToSection as scrollToSectionHelper } from '../../helper/generic-helper';

//------------------ TYPES
interface ArchitectureProps{
  architectureType: ArchitectureType;
  onArchitectureTypeSelection: (architectureType: ArchitectureType)=>void;
  modules: ArchitectureModule[];
}

export interface ArchitectureModule {
  id: string;
  name: string;
  logo: string;
  description: JSX.Element;
  technologies: JSX.Element;
  roadmap: JSX.Element;
}

//------------------ COMPONENT
export const Architecture : React.FunctionComponent<ArchitectureProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const moduleDetailsRef:RefObject<HTMLDivElement> = useRef(null)
  const moduleDescriptionRef:RefObject<HTMLDivElement> = useRef(null);
  const moduleTechnologiesRef:RefObject<HTMLDivElement> = useRef(null);
  const moduleRoadmapRef:RefObject<HTMLDivElement> = useRef(null);
  let router:any = null;
  

  //----- afterInjection
  function afterInjection(error:Error|null, svg:SVGElement|undefined):void{
    if (svg && props.modules){
      props.modules.forEach((module)=>{
        // props.svgPanProps.resetTransform();
        let svgElem = svg.querySelector("#"+module.id);
        if (svgElem){
          svgElem.classList.add("architecture__module");
          svgElem.addEventListener("click", ()=>{
            navigateToModule(module.id);
            scrollToSection(moduleDetailsRef, KEA_LAB_ID);
          });
        }
      })
    }
  }


  //----- scrollToSection
  function scrollToSection(ref:RefObject<HTMLDivElement>, parentId:string):void{
    scrollToSectionHelper(ref, parentId);
    setIsOpen(false);
  }


  //----- navigateToModule
  function navigateToModule(moduleId:string):void{
    router!.history.push(moduleId)
  }


  //----- render
  return (
    <React.Fragment>
      <div className="w-100 text-center">
        <div className="architecture__chalkboard-container">
          <TransformWrapper defaultScale={1}>
            {(zoomPanPinchProps:any) => (
              <React.Fragment>
                <ArchitectureChalkboardToolbar modules={props.modules} moduleDetailsRef={moduleDetailsRef} onArchitectureTypeSelection={props.onArchitectureTypeSelection} navigateToModule={navigateToModule} architectureType={props.architectureType} zoomPanPinchProps={zoomPanPinchProps} />
                <TransformComponent>
                  <ReactSVG src={AppArchSvg} renumerateIRIElements={false} afterInjection={afterInjection} className={"architecture__chalkboard"}/>
                </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>
      </div>

      <HashRouter ref={r => router = r}>  
        <div id="module-details" ref={moduleDetailsRef}>
          <Switch>
            {
              props.modules.map(module => {
                return <Route key={module.id} path={"/"+module.id} render={() => (
                  <div>
                    <div className="mt-6 mb-4 w-100 text-center"><img className="architecture__module-logo" src={module.logo} /></div>
                    <MDBCard className="h-100 w-100 mt-5">
                      <MDBCardBody className="h-100 experience__card-body-chart pt-5">
                        <div className="architecture__module-details-toolbar architecture__speed-dial">
                          <FloatingMenu
                            slideSpeed={500}
                            direction="down"
                            spacing={8}
                            isOpen={isOpen} >
                            <MainButton
                              iconResting={<MDBIcon icon="list-ul" />}
                              iconActive={<MDBIcon icon="list-ul" />}
                              onClick={() => setIsOpen(!isOpen)}
                              size={56} />
                            <ChildButton
                              icon={<FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.DESCRIPTION" />}
                              size={40}
                              onClick={()=>{ scrollToSection(moduleDescriptionRef, KEA_LAB_ID);}} />
                            <ChildButton
                              icon={<FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.TECHNOLOGIES" />}
                              size={40} 
                              onClick={()=>{ scrollToSection(moduleTechnologiesRef, KEA_LAB_ID); }} />
                            <ChildButton
                              icon={<FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.ROADMAP" />}
                              size={40}
                              onClick={()=>{ scrollToSection(moduleRoadmapRef, KEA_LAB_ID); }} />
                            <ChildButton
                              icon={<MDBIcon fab icon="github"/>}
                              size={40}
                              onClick={()=>{setIsOpen(false); window.open("https://github.com/keadex/"+module.id, "_blank"); }} />
                          </FloatingMenu>
                        </div>
                        <div ref={moduleDescriptionRef} id="module-description">
                          <h1><FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.DESCRIPTION" /></h1>
                          {module.description}
                          {/* <p style={{marginBottom:"300px"}}><b>Keadex Battisti</b> represents the shell of Keadex, the way to describe it.</p> */}
                        </div>
                        <div className="mt-5" ref={moduleTechnologiesRef} id="module-technologies">
                          <h1><FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.TECHNOLOGIES" /></h1>
                          {module.technologies}
                          {/* <p style={{marginBottom:"600px"}}><b>Keadex Battisti</b> represents the shell of Keadex, the way to describe it.</p> */}
                        </div>
                        <div className="mt-5" ref={moduleRoadmapRef} id="module-roadmap">
                          <h1><FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.ROADMAP" /></h1>
                          {module.roadmap}
                          {/* <p style={{marginBottom:"600px"}}><b>Keadex Battisti</b> represents the shell of Keadex, the way to describe it.</p> */}
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                )} />
              })
            } 
          
          </Switch>
        </div>
      </HashRouter>
    </React.Fragment>
  );
}