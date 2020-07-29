import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./KeadexPreview.scss";
import { TimelineMax, Sine, Elastic, Linear } from 'gsap';
import { generateMorphSVGTimelines, MorphSVGTimeline, MorphSVGSubject, MATERIAL_ENTRANCE_SPEED, MATERIAL_EXIT_SPEED } from '../../helper/animation-helper';
import { shuffle } from '../../helper/array-helper';
import { MDBIcon } from 'mdbreact';


//------------------ COMPONENT
export const KeadexPreview : React.FunctionComponent = React.memo((props) => {
  // const windowDimensions = useWindowDimensions();
  
  let isAnimationInitialized = false;
  let timeline = new TimelineMax();
  let morphTimelines:Map<string, MorphSVGTimeline>;
  
  let keaPath = [
    "M166.06,43.94c14.93-3.73,23.29-5.35,80.85-5.35H740V.09H327v0H279.5C209.44.06,165,.06,130.07,10.75,67.09,30,61.92,84.28,61.92,84.28L62.23.06H0V197H61.92V124.37H177.1c49.1,0,69.42,10.32,91.34,34.38C285.31,177.25,300.21,197,300.21,197h59.42s-30.29-44.38-58.5-72.59C281,104.27,268.62,97.94,252.87,92.48c-14.17-4.91-36.59-8.2-62.89-8.2H119.65S123.49,54.58,166.06,43.94Z",
    "M379.64,121H740V80.88H379.64Z",
    "M817.2,0c-40.55,0-58.83,33.68-58.83,49V158.37l-378.79-.27v38.82H758.37v0h40.55V70.17c0-15.23,5.14-32,28-32h270V84.44H839.46V125h257.48v72h40V0Z"
  ];
  let circlePath = [
    "M172.18,124.33c-15.6,0-27.15-11.46-27.15-27s11.53-27,27.1-27,26.92,11.6,26.9,27.23C199,112.77,187.43,124.32,172.18,124.33Z",
    "M565.18,125.33c-15.6,0-27.15-11.46-27.15-27s11.53-27,27.1-27,26.92,11.6,26.9,27.23C592,113.77,580.43,125.32,565.18,125.33Z",
    "M961.18,125.33c-15.6,0-27.15-11.46-27.15-27s11.53-27,27.1-27,26.92,11.6,26.9,27.23C988,113.77,976.43,125.32,961.18,125.33Z"
  ];

  let svgBoundingClientRect:DOMRect|ClientRect;
  let svgPath1BoundingClientRect:DOMRect|ClientRect;
  let svgPath2BoundingClientRect:DOMRect|ClientRect;
  let svgPath3BoundingClientRect:DOMRect|ClientRect;

  let svgPathRef = [
    React.createRef<SVGPathElement>(),
    React.createRef<SVGPathElement>(),
    React.createRef<SVGPathElement>()
  ]
  let svgRef = React.createRef<SVGSVGElement>();

  let techLabels = [
    "Micro Frontends", "Microservices", "Artificial\nIntelligence",
    "IoT", "Security", "Analytics", "DevOps", "SEO\nOptimization",
    "Performance\nOptimization", "Video Game\nDevelopment", "UX/UI", "And bugs."
  ]

  //animation params
  let baseBubbleScaleFactor:number=1.2;
  let bubbleIncreaseScaleFactor:number=0.4;
  let logoAnimationDuration:number=5; //seconds
  
  

  //----- initMorphTimelines
  function initMorphTimelines(){
    let subjects:MorphSVGSubject[] = [
      {
        fromSvgPath: {id: "circle", path: circlePath},
        toSvgPath: {id: "kea", path: keaPath}
      }
    ]
    morphTimelines = generateMorphSVGTimelines(svgPathRef, subjects, {duration: logoAnimationDuration});
  }

  
  //----- initTimeline
  function initTimeline(){
    isAnimationInitialized = true;
    svgBoundingClientRect = svgRef.current!.getBoundingClientRect();
    svgPath1BoundingClientRect = svgPathRef[0].current!.getBoundingClientRect();
    svgPath2BoundingClientRect = svgPathRef[1].current!.getBoundingClientRect();
    svgPath3BoundingClientRect = svgPathRef[2].current!.getBoundingClientRect();

    //animate "loader label"
    timeline.to("#keadex-preview-load", 2, {opacity: `0`});
    timeline.to("#keadex-preview-load", 0.1, {visibility:'hidden'});
    
    //animate tech labels
    let bubbleIndexes:number[] = [];
    for (let i=1; i<=(techLabels.length); i++){
      bubbleIndexes.push(i);
    }
    let shuffledBubbleIndexes:number[] = shuffle(bubbleIndexes);
    let bucket = [0,0,0];
    let nextBubbleId;
    for (let i=0; i<techLabels.length; i++){
      nextBubbleId = (shuffledBubbleIndexes[i]%3)+1;
      bucket[nextBubbleId-1]+=1;   
      animateTechLabel(nextBubbleId, baseBubbleScaleFactor+(bubbleIncreaseScaleFactor*bucket[nextBubbleId-1]), i);
    }

    //reset scale svg paths and morph logo
    timeline.to("#target1", 2, {scale: 1, transformOrigin:"50% 50%", ease: Linear.easeOut});
    timeline.to("#target2", 2, {scale: 1, transformOrigin:"50% 50%", ease: Linear.easeOut}, "-=2");
    timeline.to("#target3", 2, {scale: 1, transformOrigin:"50% 50%", ease: Linear.easeOut, onComplete: ()=>{
      timeline.to("#DEX", logoAnimationDuration, {opacity: 1, ease: Linear.easeOut}, "+=1");
      timeline.to("#slogan", 2, {opacity: 1, ease: Linear.easeOut}, "-=1");
      timeline.to("#alpha-launch", 2, {opacity:1, scale: 1, transformOrigin:"50% 50%", ease: Elastic.easeOut});
    animateLogo();
    }}, "-=2");
    
    timeline.pause();
  }

  //----- animateLogo
  function animateLogo(){
    morphTimelines.forEach((value: MorphSVGTimeline, key: string) => {
      value.timeline.restart();
    });
  }


  //----- animateTechLabel
  function animateTechLabel(bubbleId: number, bubbleScaleFactor:number, techLabelId: number){
    let bubbleSelector:string = "";
    let bubbleLeft:number = 0;
    let bubbleTop:number = 0;
    let bubbleWidth:number = 0;
    let bubbleHeight:number = 0;
    switch(bubbleId){
      case 1:
        bubbleSelector = "#target1";
        bubbleLeft = svgPath1BoundingClientRect.left;
        bubbleTop = svgPath1BoundingClientRect.top;
        bubbleWidth = svgPath1BoundingClientRect.width;
        bubbleHeight = svgPath1BoundingClientRect.height;
        break;
      case 2:
        bubbleSelector = "#target2";
        bubbleLeft = svgPath2BoundingClientRect.left;
        bubbleTop = svgPath2BoundingClientRect.top;
        bubbleWidth = svgPath2BoundingClientRect.width;
        bubbleHeight = svgPath2BoundingClientRect.height;
        break;
      case 3:
        bubbleSelector = "#target3";
        bubbleLeft = svgPath3BoundingClientRect.left;
        bubbleTop = svgPath3BoundingClientRect.top;
        bubbleWidth = svgPath3BoundingClientRect.width;
        bubbleHeight = svgPath3BoundingClientRect.height;
        break;
    }
    
    timeline.to("#techlabel-"+techLabelId, MATERIAL_ENTRANCE_SPEED/1000, {opacity: 1, top: -100, fontSize: "2rem", ease: Sine.easeOut});
    timeline.to("#techlabel-"+techLabelId, MATERIAL_EXIT_SPEED/1000, {top: bubbleTop-svgBoundingClientRect.top+(bubbleHeight/2), left: bubbleLeft-svgBoundingClientRect.left+(bubbleWidth/2), transform: "translate(-50%, -50%) scale(0)", ease: Sine.easeIn}, "+=0.5");
    timeline.to(bubbleSelector, 1, {opacity: 1, scale: bubbleScaleFactor, transformOrigin:"50% 50%", ease: Elastic.easeOut});
  }


  //----- startAnimation
  function startAnimation(){
    if (!isAnimationInitialized){
      initTimeline();
      initMorphTimelines();
    }
    timeline.restart();
  }
  

  //----- getTechLabels
  function getTechLabels():JSX.Element[]{
    let divs:JSX.Element[] = [];
    for (let i=0; i<techLabels.length; i++){
      divs.push(
        <div className="text-center keadex-preview__tech-label" id={"techlabel-"+i} key={"techlabel-"+i}>
          {
            techLabels[i].split('\n').map((item, i) => {
              return <p key={i}>{item}</p>;
            })
          }
        </div>
      )
    }
    return divs;
  }


  //----- render
  return (
    <React.Fragment>
      <div className="keadex-preview__section keadex-preview__cover" id="keadex-preview-logo-container">
        <div className="full-center position-absolute text-center">
          <div className="position-relative d-inline-block">
          {
            getTechLabels()
          }
          <svg id="svg" width="300px" viewBox="0 0 1145 205" height="60px" ref={svgRef} className="keadex-preview__logo">
            <g id="DEX" style={{opacity: "0"}}>
              <text className="cls-1" transform="translate(872.4 191.51) scale(1.75 1)">DE</text>
              <text className="cls-2" transform="translate(979.69 174.72) scale(2.85 1)">V</text>
              <text className="cls-2" transform="translate(1032.13 175.37) rotate(180) scale(2.85 1)">V</text>
            </g>
            <path id="target1" d={circlePath[0]} ref={svgPathRef[0]} style={{opacity: "0"}}></path>
            <path id="target2" d={circlePath[1]} ref={svgPathRef[1]} style={{opacity: "0"}}></path>
            <path id="target3" d={circlePath[2]} ref={svgPathRef[2]} style={{opacity: "0"}}></path>
          </svg>
          </div>
          <div className="keadex-preview__slogan" id="slogan"><FormattedMessage id="HOME.SLOGAN"/></div>         
        </div>
      </div>

      <div className="keadex-preview__section" id="keadex-preview-load">
        <div className="full-center text-center position-absolute w-100" >
          <a onClick={(e)=>{e.preventDefault(); startAnimation();}}><FormattedMessage id="KEADEX_PREVIEW.LOAD"/></a>
        </div>
      </div>

      <div className="keadex-preview__alpha-launch" id="alpha-launch">
        <a href="https://github.com/keadex" target="_blank" >
          <FormattedMessage id="HOME.ALPHA_LAUNCH"/><br/>
          <MDBIcon fab icon="github" className="mt-1" />
        </a>
      </div>
    </React.Fragment>
  );
})