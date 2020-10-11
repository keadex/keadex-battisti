import React from "react";
import styled from "styled-components";
import { isClient } from "../../helper/generic-helper";

if (isClient()){
  require('lazysizes/plugins/unveilhooks/ls.unveilhooks');
}

const Overlay:any = styled.div<any>`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${(props)=>props.overlayColor};
  opacity: ${(props)=>props.overlayOpacity};
`;


const Img:any = styled.div<any>`
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;"
`;


//------------------ TYPES
interface BackgroundProps {
  id: string;
  img:string;
  overlayColor?:string;
  overlayOpacity?:number;
}


//------------------ COMPONENT
const Background : React.FunctionComponent<BackgroundProps> = props => {
  let overlayColor:string = (props.overlayColor)?props.overlayColor:"#1d1d1d";
  let overlayOpacity:number = (props.overlayOpacity)?props.overlayOpacity:0.8;
  return (
    <div id={props.id}>
      <Img img={props.img} data-bg={"../../img/"+props.img} className="lazyload"/>
      <Overlay overlayColor={overlayColor} overlayOpacity={overlayOpacity} />
    </div>   
  );
}

export default Background;