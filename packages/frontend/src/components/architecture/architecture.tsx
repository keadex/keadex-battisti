import React, { useState, useRef, RefObject, useEffect } from 'react';
import styles from "./architecture.module.scss";
import { ArchitectureType } from '../../pages/kealab';
import { PAGE_ROOT_ID } from '../../core/route.constants';
import { scrollToSection as scrollToSectionHelper, disableScrollIntoView, mySanitizeHtml } from '../../helper/generic-helper';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { StoreState } from '../../core/store/store.type';
import { ArchitectureModule } from '../../model/autogenerated-graphql-strapi';
import { getStrapiMedia } from '../../helper/strapi-helper';
import sanitizeHtml from 'sanitize-html';
import dynamic from 'next/dynamic';

const FormattedMessage:any = dynamic(() => import('react-intl').then((mod:any) => mod.FormattedMessage));
const MDBCard:any = dynamic(() => import('mdbreact').then((mod:any) => mod.MDBCard));
const MDBIcon:any = dynamic(() => import('mdbreact').then((mod:any) => mod.MDBIcon));
const MDBCardBody:any = dynamic(() => import('mdbreact').then((mod:any) => mod.MDBCardBody));
const TransformWrapper:any = dynamic(() => import('react-zoom-pan-pinch').then((mod:any) => mod.TransformWrapper));
const TransformComponent:any = dynamic(() => import('react-zoom-pan-pinch').then((mod:any) => mod.TransformComponent));
const FloatingMenu:any = dynamic(() => import('react-floating-button-menu').then((mod:any) => mod.FloatingMenu));
const MainButton:any = dynamic(() => import('react-floating-button-menu').then((mod:any) => mod.MainButton));
const ChildButton:any = dynamic(() => import('react-floating-button-menu').then((mod:any) => mod.ChildButton));
const ArchitectureChalkboardToolbar = dynamic(() => import('./architecture-chalkboard-toolbar'));
const ArchitectureModuleFeature = dynamic(() => import('../architecture-module-feature/architecture-module-feature'));

const OptimizedMedia = dynamic(
  () => import('../optimized-media/optimized-media'),
  { ssr: false }
)

//------------------ TYPES
interface ArchitectureProps {
  architectureType: ArchitectureType;
  onArchitectureTypeSelection: (architectureType: ArchitectureType)=>void;
  modules: ArchitectureModule[];
  chalkboard: string;
  previousUrl?: string;
}

export interface ArchitectureImplProps{
  modules: ArchitectureModule[];
  onArchitectureTypeSelection: (architectureType: ArchitectureType)=>void;
}


//------------------ COMPONENT
const Architecture : React.FunctionComponent<ArchitectureProps> = (props) => {
  
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const [collapseID, setCollapseID] = useState("null");

  const moduleDetailsRef:RefObject<HTMLDivElement> = useRef(null)
  const moduleDescriptionRef:RefObject<HTMLDivElement> = useRef(null);
  const moduleFeaturesRef:RefObject<HTMLDivElement> = useRef(null);
  const moduleRoadmapRef:RefObject<HTMLDivElement> = useRef(null);


  //----- useEffect
  useEffect(() => {
    setCurrentUrl(location.href);
  });


  //----- scrollToSection
  function scrollToSection(ref:RefObject<HTMLDivElement>, parentId:string):void{
    scrollToSectionHelper(ref, parentId);
    setIsOpen(false);
  }


  //----- navigateToModule
  function navigateToModule(moduleId:string):void{
    router!.push("#"+moduleId);
  }


  //----- navigateToModule
  function toggleCollapse(newCollapseID:string):void{
    setCollapseID(collapseID !== newCollapseID ? newCollapseID : "");
  }

  //----- render
  // console.log("render " + currentUrl);
  return (
    <div>
      <div className="w-100 text-center">
        <div className={`${styles["architecture__chalkboard-container"]}`}>
          <TransformWrapper defaultScale={1}>
            {(zoomPanPinchProps:any) => (
              <React.Fragment>
                <ArchitectureChalkboardToolbar modules={props.modules} moduleDetailsRef={moduleDetailsRef} onArchitectureTypeSelection={props.onArchitectureTypeSelection} navigateToModule={navigateToModule} architectureType={props.architectureType} zoomPanPinchProps={zoomPanPinchProps} />
                <TransformComponent>
                  <OptimizedMedia src={props.chalkboard} className={styles["architecture__chalkboard"]} srcWidth={1909} srcHeight={1366} width={{default: "100%"}}/>
                </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>
      </div>

      <div id="module-details" ref={moduleDetailsRef}>
        {
          props.modules.map(module => {
            return (
              (currentUrl.indexOf("#"+module.moduleId) != -1)&&<div key={module.moduleId} data-modulename={module.moduleId} className={(currentUrl.indexOf("#"+module.moduleId) == -1)?"d-none":""}>
                {module.logo && (
                  <div className="mt-6 mb-4 w-100 text-center">
                    <OptimizedMedia className={`${styles["architecture__module-logo"]}`} src={getStrapiMedia(module.logo.url)!} width={{default: "300px", sm: "200px"}} srcWidth={2274} srcHeight={408} />
                  </div>
                )}
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
                          size={module.features && module.features.length > 0?40:0} 
                          onClick={()=>{ if (module.features && module.features.length > 0) {scrollToSection(moduleFeaturesRef, PAGE_ROOT_ID);} }} />
                        <ChildButton
                          icon={<FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.ROADMAP" />}
                          size={module.roadmap && module.roadmap.length > 0?40:0}
                          onClick={()=>{ if (module.roadmap && module.roadmap.length > 0) scrollToSection(moduleRoadmapRef, PAGE_ROOT_ID); }} />
                        <ChildButton
                          icon={<MDBIcon fab icon="github"/>}
                          size={40}
                          onClick={()=>{setIsOpen(false); window.open("https://github.com/keadex/"+module.moduleId, "_blank"); }} />
                      </FloatingMenu>
                    </div>
                    <div ref={moduleDescriptionRef} id="module-description">
                      <h1><FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.DESCRIPTION" /></h1>
                      <div dangerouslySetInnerHTML={{__html: mySanitizeHtml(sanitizeHtml, sanitizeHtml.defaults, module.description)}} />
                    </div>
                    {module.features && module.features.length > 0 && (
                      <>
                        <div className="mt-5" ref={moduleFeaturesRef} id="module-features">
                          <h1><FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.FEATURES" /></h1>
                          {/* <div dangerouslySetInnerHTML={{__html: sanitizeHtml(module.features)}} /> */}
                          {module.features.map((feature, index)=>{
                            return <ArchitectureModuleFeature feature={feature!} key={feature!.id} firstItem={index==0} onAccordionClick={toggleCollapse} isOpen={collapseID==feature!.id || (collapseID == "null" && index == 0)}/>
                          })}
                        </div>
                      </>
                    )}
                    {module.roadmap && (
                      <>
                        <div className="mt-5" ref={moduleRoadmapRef} id="module-roadmap">
                          <h1><FormattedMessage id="KEALAB.MODULE_DETAILS.MENU.ROADMAP" /></h1>
                          <div dangerouslySetInnerHTML={{__html: mySanitizeHtml(sanitizeHtml, sanitizeHtml.defaults, module.roadmap)}} />
                        </div>
                      </>
                    )}
                  </MDBCardBody>
                </MDBCard>
              </div>     
            )           
          })
        }          
      </div>
    </div>
  );
}

const mapStateToProps = (state:StoreState) => {
  return {
    previousUrl: state.app.previousUrl
  }
}

export default connect(
  mapStateToProps,
  null
)(Architecture)