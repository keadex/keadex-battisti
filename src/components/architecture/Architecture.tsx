import React, { useState, useRef, RefObject } from 'react';
import { ReactSVG } from 'react-svg'
import "./Architecture.scss";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { MDBIcon } from 'mdbreact';
import { FormattedMessage } from 'react-intl';
import { MDBCard } from 'mdbreact';
import { MDBCardBody } from 'mdbreact';
import { Switch, Route, HashRouter } from 'react-router-dom';
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
  chalkboard: string;
}

export interface ArchitectureImplProps{
  onArchitectureTypeSelection: (architectureType: ArchitectureType)=>void;
}

export interface ArchitectureModule {
  id: string;
  name: string;
  logo: string;
  description: JSX.Element;
  features: JSX.Element;
  roadmap: JSX.Element;
}

//------------------ COMPONENT
export const Architecture : React.FunctionComponent<ArchitectureProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const moduleDetailsRef:RefObject<HTMLDivElement> = useRef(null)
  const moduleDescriptionRef:RefObject<HTMLDivElement> = useRef(null);
  const moduleFeaturesRef:RefObject<HTMLDivElement> = useRef(null);
  const moduleRoadmapRef:RefObject<HTMLDivElement> = useRef(null);
  let router:any = null;
  

  //----- afterInjection
  function afterInjection(error:Error|null, svg:SVGElement|undefined):void{
    if (svg && props.modules){
      props.modules.forEach((module)=>{
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
                  <ReactSVG src={props.chalkboard} renumerateIRIElements={false} afterInjection={afterInjection} className={"architecture__chalkboard"}/>
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
                      <MDBCardBody className="h-100 experience__card-body-chart pt-5 pl-4 pl-md-5 pr-4 pr-md-5">
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
                              icon={<FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.FEATURES" />}
                              size={40} 
                              onClick={()=>{ scrollToSection(moduleFeaturesRef, KEA_LAB_ID); }} />
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
                        </div>
                        <div className="mt-5" ref={moduleFeaturesRef} id="module-features">
                          <h1><FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.FEATURES" /></h1>
                          {module.features}
                        </div>
                        <div className="mt-5" ref={moduleRoadmapRef} id="module-roadmap">
                          <h1><FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.ROADMAP" /></h1>
                          {module.roadmap}
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