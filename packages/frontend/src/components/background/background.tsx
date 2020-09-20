import React from "react";
import styled from "styled-components";


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
  background-attachment: fixed;
  background-image: url('${(props)=>props.img}');"
`;


//------------------ TYPES
interface BackgroundProps {
  id: string;
  img:string;
  overlayColor?:string;
  overlayOpacity?:number;
}


//------------------ COMPONENT
export function Background(props: BackgroundProps) {
  let overlayColor:string = (props.overlayColor)?props.overlayColor:"#1d1d1d";
  let overlayOpacity:number = (props.overlayOpacity)?props.overlayOpacity:0.8;
  return (
    <div id={props.id}>
      <Img img={props.img}/>
      <Overlay overlayColor={overlayColor} overlayOpacity={overlayOpacity} />
    </div>   
  );
}