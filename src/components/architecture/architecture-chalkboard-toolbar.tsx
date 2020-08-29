import React, { useState, RefObject, useEffect } from 'react';
import styles from "./architecture.module.scss";
import { MDBIcon } from 'mdbreact';
import { MDBBtn } from 'mdbreact';
import { MDBBtnGroup } from 'mdbreact';
import { FormattedMessage } from 'react-intl';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import { ArchitectureType } from '../../pages/kealab';
import { ArchitectureModule } from './architecture';
import { KEA_LAB_ID, PAGE_ROOT_ID } from '../../core/route.constants';
import { scrollToSection } from '../../helper/generic-helper';
import { useHistory } from 'react-router-dom';


//------------------ TYPES
interface ArchitectureChalkboardToolbarProps {
  onArchitectureTypeSelection: (architectureType: ArchitectureType) => void;
  navigateToModule: (moduleId:string) => void;
  architectureType: ArchitectureType;
  zoomPanPinchProps: any;
  modules: ArchitectureModule[];
  moduleDetailsRef: RefObject<HTMLDivElement>;
}


//------------------ COMPONENT
export const ArchitectureChalkboardToolbar : React.FunctionComponent<ArchitectureChalkboardToolbarProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModuleSelected, setIsModuleSelected] = useState(false);
  const history = useHistory();

  useEffect(() => {
    /*
      Check if a module has been selected and you need to scroll to the modules details.
      You need to do it here, because the module details HTML is outside this component and to get its correct
      position you need to wait this component to be rendered.
    */
   if (isModuleSelected){
      console.log("SCROLL chalkboard toolbar menu");
      setTimeout(()=>scrollToSection(props.moduleDetailsRef, PAGE_ROOT_ID), 0);
      setIsModuleSelected(false);
    }
  });
  
  //---------- getModuleButtons
  function getModuleButtons(){
    let buttons:JSX.Element[] = [];

    //menu button
    buttons.push(
      <MainButton
        iconResting={<MDBIcon fab icon="buffer" />}
        iconActive={<MDBIcon fab icon="buffer" />}
        onClick={() => setIsOpen(!isOpen)}
        size={56} />);
    
    //modules button
    props.modules.forEach((module=>{
      buttons.push(
        <ChildButton
          key={module.id}
          icon={<span>{module.name}</span>}
          size={40}
          onClick={() => {
            props.navigateToModule(module.id);
            setIsModuleSelected(true);
            setIsOpen(false);
          }} />);
    }))
    return buttons;
  }
  
  //----- render
  return (
    <React.Fragment>
      <div className={`${styles["architecture__chalkboard-toolbar"]} tools row p-0 m-0 mb-3 mb-md-0`}>
        <div className="col-12 col-md-6 text-center text-md-left p-0 m-0">
          <div className={`${styles["architecture__chalkboard-toolbar-container"]}`}>
            <MDBBtn className="btn-floating btn-sm ml-0" color="primary" onClick={props.zoomPanPinchProps.zoomIn}><MDBIcon icon="search-plus"  /></MDBBtn>
            <MDBBtn className="btn-floating btn-sm" color="primary" onClick={props.zoomPanPinchProps.zoomOut}><MDBIcon icon="search-minus"  /></MDBBtn>
            <MDBBtn className={`btn-floating btn-sm ${styles["architecture__chalkboard-toolbar-reset"]}`} color="primary" onClick={props.zoomPanPinchProps.resetTransform}><MDBIcon icon="undo"  /></MDBBtn>
            <div className={`${styles["architecture__speed-dial"]}`}>
              <FloatingMenu
                  slideSpeed={500}
                  direction="down"
                  spacing={8}
                  isOpen={isOpen}
                  children={getModuleButtons()} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 text-center text-md-right p-0 m-0">
          <MDBBtnGroup size="sm" className={`${styles["architecture__chalkboard-type"]}`}>
            <MDBBtn color="primary" active={props.architectureType==ArchitectureType.application} onClick={()=>{props.onArchitectureTypeSelection(ArchitectureType.application)}}><FormattedMessage id="GENERIC.APPLICATION" /></MDBBtn>
            <MDBBtn color="primary" active={props.architectureType==ArchitectureType.infrastructure} onClick={()=>{props.onArchitectureTypeSelection(ArchitectureType.infrastructure)}}><FormattedMessage id="GENERIC.INFRASTRUCTURE" /></MDBBtn>
          </MDBBtnGroup>
        </div>                
      </div>
    </React.Fragment>
  );
}