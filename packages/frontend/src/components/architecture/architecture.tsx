import React, { useState, useRef, RefObject, useEffect } from 'react';
import { ReactSVG } from 'react-svg'
import styles from "./architecture.module.scss";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { MDBIcon } from 'mdbreact';
import { FormattedMessage } from 'react-intl';
import { MDBCard } from 'mdbreact';
import { MDBCardBody } from 'mdbreact';
// import { Switch, Route, HashRouter } from 'react-router-dom';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import { ArchitectureChalkboardToolbar } from './architecture-chalkboard-toolbar';
import { ArchitectureType } from '../../pages/kealab';
import { KEA_LAB_ID, PAGE_ROOT_ID } from '../../core/route.constants';
import { scrollToSection as scrollToSectionHelper, isClient, disableScrollIntoView } from '../../helper/generic-helper';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { IStoreState } from '../../core/store/store.type';

//------------------ TYPES
interface ArchitectureProps {
  architectureType: ArchitectureType;
  onArchitectureTypeSelection: (architectureType: ArchitectureType)=>void;
  modules: ArchitectureModule[];
  chalkboard: string;
  previousUrl?: string;
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
const Architecture : React.FunctionComponent<ArchitectureProps> = (props) => {
  
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  const moduleDetailsRef:RefObject<HTMLDivElement> = useRef(null)
  const moduleDescriptionRef:RefObject<HTMLDivElement> = useRef(null);
  const moduleFeaturesRef:RefObject<HTMLDivElement> = useRef(null);
  const moduleRoadmapRef:RefObject<HTMLDivElement> = useRef(null);
  // let router:any = null;
  

  //----- useEffect
  useEffect(() => {
    // console.log("useeffect " + location.href + " " + router.asPath);
    setCurrentUrl(location.href);
    // console.log("sssss " + props.navigationOccurred)
  });


  //----- afterInjection
  function afterInjection(error:Error|null, svg:SVGElement|undefined):void{
    if (svg && props.modules){
      disableScrollIntoView(props.modules.map((module)=>{return module.id}), null);
      props.modules.forEach((module)=>{
        let svgElem = svg.querySelector("#"+module.id);
        if (svgElem){
          svgElem.classList.add(styles["architecture__module"]);
          svgElem.addEventListener("click", ()=>{
            // console.log("nav");
            navigateToModule(module.id);
            // console.log("setcurrenturl " + location.origin+router.asPath+"#"+module.id)
            setCurrentUrl(router.asPath+"#"+module.id);
            // console.log("SCROLL architecture svg");
            scrollToSection(moduleDetailsRef, PAGE_ROOT_ID);
          });
        }
      })
    }
  }


  //----- scrollToSection
  function scrollToSection(ref:RefObject<HTMLDivElement>, parentId:string):void{
    // console.log("scrolltosect");
    scrollToSectionHelper(ref, parentId);
    // console.log("setisopen");
    setIsOpen(false);
  }


  //----- navigateToModule
  function navigateToModule(moduleId:string):void{
    router!.push("#"+moduleId);
  }


  //----- render
  // console.log("render " + currentUrl);
  return (
    <div>
      {/* <div>ciao:{props.navigationOccurred.toString()}</div> */}
      <div className="w-100 text-center">
        <div className={`${styles["architecture__chalkboard-container"]}`}>
          <TransformWrapper defaultScale={1}>
            {(zoomPanPinchProps:any) => (
              <React.Fragment>
                <ArchitectureChalkboardToolbar modules={props.modules} moduleDetailsRef={moduleDetailsRef} onArchitectureTypeSelection={props.onArchitectureTypeSelection} navigateToModule={navigateToModule} architectureType={props.architectureType} zoomPanPinchProps={zoomPanPinchProps} />
                <TransformComponent>
                  <ReactSVG src={props.chalkboard} renumerateIRIElements={false} afterInjection={afterInjection} className={styles["architecture__chalkboard"]}/>
                </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>
      </div>

      {/* <HashRouter ref={r => router = r}>   */}
        <div id="module-details" ref={moduleDetailsRef}>
          {/* <Switch> */}
            {
              props.modules.map(module => {
                // console.log("currenturl " + currentUrl);
                // if (currentUrl.indexOf("#"+module.id) != -1)
                // return (<div ke></div>);
                return (
                  (currentUrl.indexOf("#"+module.id) != -1)&&<div key={module.id} data-modulename={module.id} className={(currentUrl.indexOf("#"+module.id) == -1)?"d-none":""}>
                    <div className="mt-6 mb-4 w-100 text-center"><img className={`${styles["architecture__module-logo"]}`} src={module.logo} /></div>
                    <MDBCard className="h-100 w-100 mt-5">
                      <MDBCardBody className={`h-100 ${styles["experience__card-body-chart"]} pt-5 pl-4 pl-md-5 pr-4 pr-md-5`}>
                        <div className={`${styles["architecture__module-details-toolbar"]} ${styles["architecture__speed-dial"]}`}>
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
                              onClick={()=>{ scrollToSection(moduleDescriptionRef, PAGE_ROOT_ID);}} />
                            <ChildButton
                              icon={<FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.FEATURES" />}
                              size={40} 
                              onClick={()=>{ scrollToSection(moduleFeaturesRef, PAGE_ROOT_ID); }} />
                            <ChildButton
                              icon={<FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.ROADMAP" />}
                              size={40}
                              onClick={()=>{ scrollToSection(moduleRoadmapRef, PAGE_ROOT_ID); }} />
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
                )           
              })
            } 
          
          {/* </Switch> */}
        </div>
      {/* </HashRouter> */}
    </div>
  );
}

const mapStateToProps = (state:IStoreState) => {
  return {
    previousUrl: state.app.previousUrl
  }
}

export default connect(
  mapStateToProps,
  null
)(Architecture)