import React, { useState, useRef, useEffect, useCallback, MutableRefObject } from 'react';
import { FormattedMessage } from 'react-intl';
import { Tween } from 'react-gsap';
import frontalLobe from "../../../public/img/education/frontal-lobe.png";
import occipitalLobe from "../../../public/img/education/occipital-lobe.png";
import parietalLobe from "../../../public/img/education/parietal-lobe.png";
import temporalLobe from "../../../public/img/education/temporal-lobe.png";
import cerebellum from "../../../public/img/education/cerebellum.png";
import happyHourBari from "../../../public/img/education/happy-hour-bari.png";
import sochild from "../../../public/img/education/sochild.png";
import marconi from "../../../public/img/education/marconi.png";
import brainGraph from "../../../public/img/education/brain-graph.png";
import jack from "../../../public/img/jack/jack.gif";
import styles from './education.module.scss';
import { ForceGraph } from '../../model/models';
import { useBreakpoint } from '../../core/react-breakpoint';
import { isClient } from '../../helper/generic-helper';
import NoSSR from 'react-no-ssr';

let ForceGraph2D:any = undefined;
if (isClient()){
  ForceGraph2D = require('react-force-graph').ForceGraph2D;
}

//------------------ TYPES
export interface EducationProps {
  progress: number,
  experienceGraph?: ForceGraph.Graph
}

    
//--------------- COMPONENT
export const Education : React.FunctionComponent<EducationProps> = props => {

  //ATTRS
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
  
  let brain:MutableRefObject<Map<string, HTMLImageElement>> = useRef(new Map());
  let breakpoints = useBreakpoint();
  
  // let experienceGraph : ForceGraph.Graph|undefined = {nodes: [], links: []};

  // const { data, error } = useSWR(GET_EXPERIENCE_GRAPH_API, (url)=>NetworkService.getInstance().getExperienceGraph());
  // if (!error && data && data.data && data.data.result){
  //   experienceGraph = data.data.result;
  // }


  //FUNCS

  //---------- componentDidMount
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
  function adjustProgress(idTween:number, inProgress: number):number{
    
    switch (idTween){
      case 1: return (inProgress < 0 || inProgress > 0.1)?inProgress:0;
      case 2: 
      case 3: var progress = inProgress-0.1;
              // console.log(idTween + " -- " + inProgress + " --- " + ((progress < 0 || progress > 0.25)?0:progress));
              return (progress < 0 || progress > 0.25)?0:progress;
      case 4: 
      case 5: var progress = inProgress-0.35;
              // console.log(idTween + " -- " + inProgress + " --- " + ((progress < 0 || progress > 0.25)?0:progress));
              return (progress < 0 || progress > 0.25)?0:progress;
      case 6: 
      case 7: var progress = inProgress-0.6;
              // console.log(idTween + " -- " + inProgress + " --- " + ((progress < 0 || progress > 0.25)?0:progress));
              return (progress < 0 || progress > 0.25)?0:progress;
      case 8: 
      case 9: var progress = inProgress-0.85;
              // console.log(idTween + " -- " + inProgress + " --- " + ((progress < 0 || progress > 0.25)?0:progress));
              return (progress < 0 || progress > 0.25)?0:progress;
    }
    return inProgress;
  }

  //------------ render
  let progress = props.progress;
  return (
    <React.Fragment>
      <div className="row m-0">

        {/* EDUCATION */}
        <div className="col-md-12 p-0">
          <Tween            
            from={{css: {className: "position-relative animate__animated animate__fadeIn"}}}
            to={{css: {className: "position-relative animate__animated animate__fadeOut"}}}
            progress={adjustProgress(1, progress)}
            playState="stop">
              <div>
                <div className={`${styles["education__cosmo"]}`} />
                <div className={`${styles["education__quote-container"]}`}>
                  <span id="quote">"No, I'm not interested in developing a powerful brain..."</span><br />
                  <span id="author" className="text-right">Alan Turing</span>
                </div>

                {/* SHOW INTERACTIVE BRAIN GRAPH ONLY ON DESKTOP */}
                <div className={`d-block d-lg-none text-center ${styles["education__brain-container--mobile"]} ${(adjustProgress(1, progress)!=0?"out":"")}`}>
                  <img className={`${styles["education__brain-graph"]}`} src={brainGraph} alt="Brain Graph" />
                  <div className={`${styles["education__brain-chart-banner"]}`}>
                    <div id="text"><FormattedMessage id="ABOUT_ME.EDUCATION.BRAIN_GRAPH_BANNER" /></div>
                  </div>
                </div>
                
                {/* SHOW INTERACTIVE BRAIN GRAPH ONLY ON DESKTOP */}
                <div className={`d-none d-lg-block ${styles["education__brain-container--desktop"]} ${(adjustProgress(1, progress)!=0?"out":"")} ${(progress==0?"pointer-events-none":"")}`}>
                  <NoSSR>
                    {ForceGraph2D && <ForceGraph2D ref={forceGraphRef} graphData={props.experienceGraph} linkColor={() => '#fff'} nodeAutoColorBy="group" enableNodeDrag={true} enableZoomPanInteraction={false}
                      nodeCanvasObjectMode={()=>"replace"} nodeCanvasObject={(node:any, ctx:any, globalScale:any) => {
                        
                      if (node != undefined && node.id != undefined && node.x != undefined && node.y != undefined){
                        if (node.id == "occipital-lobe" || node.id == "temporal-lobe" || node.id == "parietal-lobe" || node.id == "cerebellum" || node.id == "frontal-lobe"){
                          let percentage = 85;
                          if (breakpoints!.xs && breakpoints!.sm) percentage = 75;
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
                </div>
              </div>                
          </Tween>
        </div>

        {/* HAPPY HOUR */}
        <div className={`col-sm-12 col-md-12 text-center ${styles["education__container-element"]} ${(adjustProgress(2, progress)==0?"out":"")}`}>
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutRight"}}}
            to={{css: {className: "animate__animated animate__fadeInLeft"}}}
            progress={adjustProgress(2, progress)}
            playState="stop">
              <div><img className={`${styles["education__picture"]}`} src={happyHourBari} alt="Baresian happy hour" /></div>
          </Tween>          
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutDown"}}}
            to={{css: {className: "animate__animated animate__fadeInDown"}}}
            progress={adjustProgress(3, progress)}
            playState="stop">
              <div>
                <div className="mt-md-6 mt-5"><FormattedMessage id="ABOUT_ME.EDUCATION.HAPPY_HOUR" /></div>
              </div>
          </Tween>
        </div>
        
        {/* HIGH SCHOOL */}
        <div className={`col-sm-12 col-md-12 text-center ${styles["education__container-element"]} ${(adjustProgress(4, progress)==0?"out":"")}`}>
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutRight"}}}
            to={{css: {className: "animate__animated animate__fadeInLeft"}}}
            progress={adjustProgress(4, progress)}
            playState="stop">
              <div><img className={`${styles["education__picture"]}`} src={marconi} alt="ITIS Guglielmo Marconi Bari" /></div>
          </Tween>          
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutDown"}}}
            to={{css: {className: "animate__animated animate__fadeInDown"}}}
            progress={adjustProgress(5, progress)}
            playState="stop">
              <div>
                <div className="mt-md-6 mt-5"><FormattedMessage id="ABOUT_ME.EDUCATION.HIGH_SCHOOL" /></div>
              </div>
          </Tween>
        </div>

        {/* UNIVERSITY */}
        <div className={`col-sm-12 col-md-12 text-center ${styles["education__container-element"]} ${(adjustProgress(6, progress)==0?"out":"")}`}>
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutRight"}}}
            to={{css: {className: "animate__animated animate__fadeInLeft"}}}
            progress={adjustProgress(6, progress)}
            playState="stop">
              <div><img className={`${styles["education__picture"]}`} src={sochild} alt="SoChild" /></div>
          </Tween>          
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutDown"}}}
            to={{css: {className: "animate__animated animate__fadeInDown"}}}
            progress={adjustProgress(7, progress)}
            playState="stop">
              <div>
                <div className="mt-md-6 mt-5"><FormattedMessage id="ABOUT_ME.EDUCATION.UNIVERSITY" /></div>
              </div>
          </Tween>
        </div>


        {/* JACK */}
        <div className={`col-sm-12 col-md-12 text-center ${styles["education__container-element"]} ${(adjustProgress(8, progress)==0?"out":"")}`}>
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutRight"}}}
            to={{css: {className: "animate__animated animate__fadeInLeft"}}}
            progress={adjustProgress(8, progress)}
            playState="stop">
              <div><img className={`${styles["education__picture"]} ${styles["education__jack-avatar"]}`} src={jack} alt="Jack avatar" /></div>
          </Tween>          
          <Tween            
            from={{css: {className: "animate__animated animate__fadeOutDown"}}}
            to={{css: {className: "animate__animated animate__fadeInDown"}}}
            progress={adjustProgress(9, progress)}
            playState="stop">
              <div>
                <div className="mt-md-6 mt-5"><FormattedMessage id="ABOUT_ME.EDUCATION.JACK" /></div>
              </div>
          </Tween>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Education