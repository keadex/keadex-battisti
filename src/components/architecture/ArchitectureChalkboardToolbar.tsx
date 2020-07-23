import React, { useState, RefObject } from 'react';
import "./Architecture.scss";
import { MDBIcon } from 'mdbreact';
import { MDBBtn } from 'mdbreact';
import { MDBBtnGroup } from 'mdbreact';
import { FormattedMessage } from 'react-intl';
import { FloatingMenu, MainButton, ChildButton } from 'react-floating-button-menu';
import { ArchitectureType } from '../../pages/kea-lab/KeaLab';
import { ArchitectureModule } from './Architecture';
import { KEA_LAB_ID } from '../../core/routing/route.constants';
import { scrollToSection } from '../../helper/generic-helper';
import { useHistory } from 'react-router-dom';


//------------------ TYPES
interface ArchitectureChalkboardToolbarProps {
  onArchitectureTypeSelection: (architectureType: ArchitectureType)=>void;
  architectureType: ArchitectureType;
  zoomPanPinchProps: any;
  modules: ArchitectureModule[];
  moduleDetailsRef: RefObject<HTMLDivElement>;
}


//------------------ COMPONENT
export const ArchitectureChalkboardToolbar : React.FunctionComponent<ArchitectureChalkboardToolbarProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

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
            // location.href = "#/"+module.id;
            history.push("#/"+module.id);
            scrollToSection(props.moduleDetailsRef, KEA_LAB_ID);
            setIsOpen(false);
          }} />);
    }))

    return buttons;
  }

  //----- render
  return (
    <React.Fragment>
      <div className="architecture__chalkboard-toolbar tools row p-0 m-0 mb-3 mb-md-0">
        <div className="col-12 col-md-6 text-center text-md-left p-0 m-0">
          <div className="architecture__chalkboard-toolbar-container">
            <MDBBtn className="btn-floating btn-sm ml-0" color="primary" onClick={props.zoomPanPinchProps.zoomIn}><MDBIcon icon="search-plus"  /></MDBBtn>
            <MDBBtn className="btn-floating btn-sm" color="primary" onClick={props.zoomPanPinchProps.zoomOut}><MDBIcon icon="search-minus"  /></MDBBtn>
            <MDBBtn className="btn-floating btn-sm" color="primary" onClick={props.zoomPanPinchProps.resetTransform}><MDBIcon icon="undo"  /></MDBBtn>
            <div className="architecture__speed-dial">
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
          <MDBBtnGroup size="sm" className="architecture__chalkboard-type">
            <MDBBtn color="primary" active={props.architectureType==ArchitectureType.application} onClick={()=>{props.onArchitectureTypeSelection(ArchitectureType.application)}}><FormattedMessage id="GENERIC.APPLICATION" /></MDBBtn>
            <MDBBtn color="primary" active={props.architectureType==ArchitectureType.infrastructure} onClick={()=>{props.onArchitectureTypeSelection(ArchitectureType.infrastructure)}}><FormattedMessage id="GENERIC.INFRASTRUCTURE" /></MDBBtn>
          </MDBBtnGroup>
        </div>                
      </div>
    </React.Fragment>
  );
}