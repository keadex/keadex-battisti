import React, { useState, useEffect } from 'react';
import InfrArchSvg from '../../assets/img/infrastructure-architecture.svg'; 
import { ReactSVG } from 'react-svg'
import "./Architecture.scss";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { MDBIcon } from 'mdbreact';
import { MDBBtn } from 'mdbreact';
import { MDBBtnGroup } from 'mdbreact';
import { FormattedMessage } from 'react-intl';
import { ArchitectureChalkboardToolbar } from './ArchitectureChalkboardToolbar';
import { ArchitectureType } from '../../pages/kea-lab/KeaLab';
// import { ArchitectureType } from './Architecture';


//------------------ TYPES
interface InfrastructureArchitectureProps{
  architectureType: ArchitectureType;
  onArchitectureTypeSelection: (architectureType: ArchitectureType)=>void;
}

//------------------ COMPONENT
export const InfrastructureArchitecture : React.FunctionComponent<InfrastructureArchitectureProps> = (props:InfrastructureArchitectureProps) => {

  //----- afterInjection
  function afterInjection(error:Error|null, svg:SVGElement|undefined):void{
    if (svg){
    // props.svgPanProps.resetTransform();
    // props.svgPanProps.resetTransform();
      // let battistiModule = svg.querySelector("#battisti-module");
      // battistiModule!.classList.add("architecture__module");
      // battistiModule!.addEventListener("click", ()=>{console.log("ciao")});
    }
  }


  //----- render
  return (
    <React.Fragment>
      <div className="architecture__chalkboard-container">
        <TransformWrapper defaultScale={1}>
          {(zoomPanPinchProps:any) => (
            <React.Fragment>
              {/* <ArchitectureChalkboardToolbar modules={[]} onArchitectureTypeSelection={props.onArchitectureTypeSelection} moduleDetailsRef={React.createRef()} architectureType={props.architectureType} zoomPanPinchProps={zoomPanPinchProps} /> */}
              <TransformComponent>
                <ReactSVG src={InfrArchSvg} renumerateIRIElements={false} afterInjection={afterInjection} className={"architecture__chalkboard"}/>
              </TransformComponent>
            </React.Fragment>
          )}
        </TransformWrapper>
      </div>
    </React.Fragment>
  );
}