import React, { MutableRefObject, useCallback, useEffect, useRef } from "react";
import NoSSR from "react-no-ssr";
import { useBreakpoint } from "../../core/react-breakpoint";
import { ForceGraph } from "../../model/models";
import styles from './interactive-brain.module.scss';

import occipitalLobe from "../../../public/img/education/occipital-lobe.png";
import parietalLobe from "../../../public/img/education/parietal-lobe.png";
import temporalLobe from "../../../public/img/education/temporal-lobe.png";
import cerebellum from "../../../public/img/education/cerebellum.png";
import frontalLobe from "../../../public/img/education/frontal-lobe.png";
import { isClient } from "../../helper/react-helper";


let ForceGraph2D:any = undefined;
if (isClient()){
  ForceGraph2D = require('react-force-graph').ForceGraph2D;
}

//------------------ TYPES
export interface BrainProps {
  progress?: number,
  experienceGraph?: ForceGraph.Graph
}


//--------------- COMPONENT
const InteractiveBrain : React.FunctionComponent<BrainProps> = props => {
  //ATTRS
  let breakpoints = useBreakpoint();
  let brain:MutableRefObject<Map<string, HTMLImageElement>> = useRef(new Map());
  let forceGraphRef:any = useCallback((node:any) => {
    if (node !== null) {
      //Enlarge graph only if it is not in mobile mode
    if (!breakpoints.xs && !breakpoints.sm){
      node.d3Force('charge')
        .strength(-200)
        .distanceMax(1000);
        node.d3Force('link').distance(80)
    }else{
      node.d3Force('charge')
        .strength(-20);
        node.d3Force('link').distance(50)
    }
    }
  }, []);

  
  //FUNCS

  //---------- useEffect
  useEffect(() => {
    initBrain();
  }, []);

  //------------ initBrain
  function initBrain(){
    let frontalLobeImg = new Image();
    frontalLobeImg.src = frontalLobe;
    let occipitalLobeImg = new Image();
    occipitalLobeImg.src = occipitalLobe;
    let parietalLobeImg = new Image();
    parietalLobeImg.src = parietalLobe;
    let temporalLobeImg = new Image();
    temporalLobeImg.src = temporalLobe;
    let cerebellumImg = new Image();
    cerebellumImg.src = cerebellum;
    brain.current.set("frontal-lobe", frontalLobeImg);
    brain.current.set("occipital-lobe", occipitalLobeImg);
    brain.current.set("parietal-lobe", parietalLobeImg);
    brain.current.set("temporal-lobe", temporalLobeImg);
    brain.current.set("cerebellum", cerebellumImg);
  }
    

  //------------ render
  return (
    <>      
      {/* SHOW INTERACTIVE BRAIN GRAPH ONLY ON DESKTOP */}
      <div className={`d-none d-lg-block ${styles["brain__container--interactive"]} ${(props.progress!=0?"out":"")}`}>
        <NoSSR>
          {ForceGraph2D && <ForceGraph2D ref={forceGraphRef} graphData={props.experienceGraph} linkColor={() => '#fff'} nodeAutoColorBy="group" enableNodeDrag={true} enableZoomPanInteraction={false}
            nodeCanvasObjectMode={()=>"replace"} nodeCanvasObject={(node:any, ctx:any, globalScale:any) => {
              
            if (node != undefined && node.id != undefined && node.x != undefined && node.y != undefined){
              if (node.id == "occipital-lobe" || node.id == "temporal-lobe" || node.id == "parietal-lobe" || node.id == "cerebellum" || node.id == "frontal-lobe"){
                let percentage = 85;
                // if (breakpoints!.xs && breakpoints!.sm) percentage = 75;
                const image = brain.current.get(node.id);
                if (image){
                  const width = image.width - Math.ceil((image.width * percentage)/100);
                  const height = image.height * (width/image.width);
                  ctx.drawImage(image, node.x-width/2, node.y-height/2, width, height);
                }
              }else{
                const fontSize = 12/globalScale;
                ctx.font = `${fontSize}px \"Perfect DOS VGA 437\"`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillStyle = node.color;
                var lines = node.name.split('\n');
                var lineheight = 8;
                for (var i = 0; i<lines.length; i++)
                  ctx.fillText(lines[i], node.x, node.y + (i*lineheight));
              }
            }
          }} />}
        </NoSSR>
      </div>
    </>
  )
}

export default InteractiveBrain;