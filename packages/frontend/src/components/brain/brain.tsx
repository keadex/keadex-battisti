import dynamic from "next/dynamic";
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useBreakpoint } from "../../core/react-breakpoint";
import { ForceGraph } from "../../model/models";
import styles from './brain.module.scss';

import { connect } from "react-redux";
import type { StoreState } from "../../core/store/store.type";

const OptimizedMedia = dynamic(
  () => import('../optimized-media/optimized-media'),
  { ssr: false }
)

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

  //------------ render
  let isCosmoVisible = (props.currentScene == 0 && props.progress == 0);
  let interactiveBrain = (<></>);
  if ((breakpoints.lg || breakpoints.xl) && isGraphVisible){
    const InteractiveBrain = dynamic(() => import('./interactive-brain'));
    interactiveBrain = (<InteractiveBrain progress={props.progress} experienceGraph={props.experienceGraph} />)
  }

  return (
    <>
      {isCosmoVisible && (<div className={`${styles["brain__cosmo"]} lazyload`} />)}
      <div className={`${styles["brain__quote-container"]}`}>
        <span id="quote">"No, I'm not interested in developing a powerful brain..."</span><br />
        <span id="author" className="text-right">Alan Turing</span>
      </div>

      {/* SHOW INTERACTIVE BRAIN GRAPH ONLY ON DESKTOP */}
      {!isGraphVisible && (<div className={`d-block text-center ${styles["brain__container--picture"]} ${(props.progress!=0?"out":"")}`}>
        <OptimizedMedia className={`${styles["brain__graph"]}`} src={"education/brain-graph.png"} alt="Brain Graph" width={{sm:"85%", md: "75%", lg: "45%", xl: "35%"}} srcWidth={852} srcHeight={751} />
        <div className={`${styles["brain__chart-banner"]}`} onClick={()=>{if (!breakpoints.xs && !breakpoints.sm && !breakpoints.md) setIsGraphVisible(true)}}>
          <div id="text">
            <span><FormattedMessage id="ABOUT_ME.EDUCATION.BRAIN_GRAPH_BANNER_1" /></span>
            <span className="d-lg-none d-xl-none"><FormattedMessage id="ABOUT_ME.EDUCATION.BRAIN_GRAPH_BANNER_2" /></span>
          </div>
        </div>
      </div>)}
      
      {/* SHOW INTERACTIVE BRAIN GRAPH ONLY ON DESKTOP */}
      {(breakpoints.lg || breakpoints.xl) && isGraphVisible && (
        interactiveBrain
      )}
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