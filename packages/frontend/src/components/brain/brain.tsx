import dynamic from "next/dynamic";
import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";
import NoSSR from "react-no-ssr";
import { useBreakpoint } from "../../core/react-breakpoint";
import { ForceGraph } from "../../model/models";
import styles from './brain.module.scss';

import occipitalLobe from "../../../public/img/education/occipital-lobe.png";
import parietalLobe from "../../../public/img/education/parietal-lobe.png";
import temporalLobe from "../../../public/img/education/temporal-lobe.png";
import cerebellum from "../../../public/img/education/cerebellum.png";
import frontalLobe from "../../../public/img/education/frontal-lobe.png";
import { isClient } from "../../helper/react-helper";
import { connect } from "react-redux";
import type { StoreState } from "../../core/store/store.type";

const OptimizedMedia = dynamic(
  () => import('../optimized-media/optimized-media'),
  { ssr: false }
)

let ForceGraph2D:any = undefined;
if (isClient()){
  ForceGraph2D = require('react-force-graph').ForceGraph2D;
}

//------------------ TYPES
export interface BrainProps {
  progress?: number,
  currentScene?: number,
  experienceGraph?: ForceGraph.Graph
}


//--------------- COMPONENT
const Brain : React.FunctionComponent<BrainProps> = props => {

  //ATTRS
  let [isGraphVisible, setIsGraphVisible] = useState(false);
  let breakpoints = useBreakpoint();
  let brain:MutableRefObject<Map<string, HTMLImageElement>> = useRef(new Map());
  let forceGraphRef:any = useCallback((node:any) => {
    if (node !== null) {
      //Enlarge graph only if it is not in mobile mode
    if (!breakpoints!.xs && !breakpoints!.sm){
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
    
  //------------ adjustProgress
  function adjustProgress(inProgress: number):number{
    return (inProgress < 0 || inProgress > 0.1)?inProgress:0;
  }

  //------------ render
  let isCosmoVisible = (props.currentScene == 0 && props.progress == 0);
  return (
    <>
      {isCosmoVisible && (<div className={`${styles["brain__cosmo"]} lazyload`} />)}
      <div className={`${styles["brain__quote-container"]}`}>
        <span id="quote">"No, I'm not interested in developing a powerful brain..."</span><br />
        <span id="author" className="text-right">Alan Turing</span>
      </div>

      {/* SHOW INTERACTIVE BRAIN GRAPH ONLY ON DESKTOP */}
      {/* (breakpoints.xs || breakpoints.sm || breakpoints.md) */}
      {!isGraphVisible && (<div className={`d-block text-center ${styles["brain__container--picture"]} ${(adjustProgress(0.1)!=0?"out":"")}`}>
        <OptimizedMedia className={`${styles["brain__graph"]}`} src={"education/brain-graph.png"} alt="Brain Graph" width={{sm:"85%", md: "75%", lg: "45%", xl: "35%"}} srcWidth={852} srcHeight={751} />
        <div className={`${styles["brain__chart-banner"]}`} onClick={()=>{if (!breakpoints.xs && !breakpoints.sm && !breakpoints.md) setIsGraphVisible(true)}}>
          <div id="text">
            <span><FormattedMessage id="ABOUT_ME.EDUCATION.BRAIN_GRAPH_BANNER_1" /></span>
            <span className="d-lg-none d-xl-none"><FormattedMessage id="ABOUT_ME.EDUCATION.BRAIN_GRAPH_BANNER_2" /></span>
          </div>
        </div>
      </div>)}
      
      {/* SHOW INTERACTIVE BRAIN GRAPH ONLY ON DESKTOP */}
      {(breakpoints.lg || breakpoints.xl) && isGraphVisible && (<div className={`d-none d-lg-block ${styles["brain__container--interactive"]} ${(adjustProgress(0.1)!=0?"out":"")}`}>
        <NoSSR>
          {ForceGraph2D && <ForceGraph2D ref={forceGraphRef} graphData={props.experienceGraph} linkColor={() => '#fff'} nodeAutoColorBy="group" enableNodeDrag={true} enableZoomPanInteraction={false}
            nodeCanvasObjectMode={()=>"replace"} nodeCanvasObject={(node:any, ctx:any, globalScale:any) => {
              
            if (node != undefined && node.id != undefined && node.x != undefined && node.y != undefined){
              if (node.id == "occipital-lobe" || node.id == "temporal-lobe" || node.id == "parietal-lobe" || node.id == "cerebellum" || node.id == "frontal-lobe"){
                let percentage = 85;
                // if (breakpoints!.xs && breakpoints!.sm) percentage = 75;
                const image = brain.current.get(node.id);
                if (image){
                  const width = image.width - Math.ceil((image!.width * percentage)/100);
                  const height = image.height * (width/image!.width);
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
      </div>)}
    </>
  )
}

const mapStateToProps = (state:StoreState) => {
  return {
    currentScene: state.aboutMe.currentScene,
    progress: state.aboutMe.progress[0].progress
  }
}

export default connect(
  mapStateToProps,
  null
)(Brain)