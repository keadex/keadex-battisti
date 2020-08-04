import React, { RefObject } from 'react';
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
import NetworkService from '../../core/network/network.service';
// import { ForceGraph2D } from 'react-force-graph';
import { withHooksBreakpoint, HooksBreakpointProps } from '../../core/react-breakpoint';
import TouchManager from '../../core/touch-manager';

//------------------ TYPES
export interface IEducationProps extends HooksBreakpointProps{
  progress: number
}
interface EducationState{
  experienceGraph: ForceGraph.Graph
}

//--------------- COMPONENT
class Education extends React.Component<IEducationProps, EducationState> {

  //ATTRS
  private _isMounted:boolean;
  private forceGraphRef:RefObject<any>;
  private brain:Map<string, HTMLImageElement> = new Map();

  //FUNCS

  //------------ constructor
  constructor(props:IEducationProps, state:EducationState){
    super(props, state);
    this.state = {
      experienceGraph: {nodes: [], links: []}
    }
    this._isMounted = false;
    this.forceGraphRef = React.createRef<any>();
    this.initBrain();    
  }


  //------------ constructor
  private initBrain(){
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
    this.brain.set("frontal-lobe", frontalLobeImg);
    this.brain.set("occipital-lobe", occipitalLobeImg);
    this.brain.set("parietal-lobe", parietalLobeImg);
    this.brain.set("temporal-lobe", temporalLobeImg);
    this.brain.set("cerebellum", cerebellumImg);
  }


  //---------- componentDidMount
  componentDidMount() {
    this._isMounted = true;
    let _self = this;
    NetworkService.getInstance().getExperienceGraph().then(function(response){
      if (_self._isMounted && response.data.result){
        _self.setState({experienceGraph: response.data.result});
      }
    });
    TouchManager.init();
    TouchManager.forceGraphInstance = this.forceGraphRef;
  }
  //---------- componentDidUpdate
  componentDidUpdate(){
    //Enlarge graph only if it is not in mobile mode
    if (!this.props.breakpoints!.xs && !this.props.breakpoints!.sm){
      this.forceGraphRef.current.d3Force('charge')
        .strength(-200)
        .distanceMax(1000);
      this.forceGraphRef.current.d3Force('link').distance(80)
    }else{
      this.forceGraphRef.current.d3Force('charge')
        .strength(-20);
      this.forceGraphRef.current.d3Force('link').distance(50)
    }
  }

  //---------- componentWillUnmount
  componentWillUnmount(){
    this._isMounted = false;
  }


  //------------ adjustProgress
  public adjustProgress(idTween:number, inProgress: number):number{
    
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
  public render() {
    let progress = this.props.progress;
    return (
      <React.Fragment>
        <div className="row m-0">

          {/* EDUCATION */}
          <div className="col-md-12 p-0">
            <Tween            
              from={{css: {className: "position-relative animate__animated animate__fadeIn"}}}
              to={{css: {className: "position-relative animate__animated animate__fadeOut"}}}
              progress={this.adjustProgress(1, progress)}
              playState="stop">
                <div>
                  <div className={`${styles["education__cosmo"]}`} />
                  <div className={`${styles["education__quote-container"]}`}>
                    <span id="quote">"No, I'm not interested in developing a powerful brain..."</span><br />
                    <span id="author" className="text-right">Alan Turing</span>
                  </div>

                  {/* SHOW INTERACTIVE BRAIN GRAPH ONLY ON DESKTOP */}
                  <div className={`d-block d-lg-none text-center ${styles["education__brain-container--mobile"]} ${(this.adjustProgress(1, progress)!=0?"out":"")}`}>
                    <img className={`${styles["education__brain-graph"]}`} src={brainGraph} alt="Brain Graph" />
                    <div className={`${styles["education__brain-chart-banner"]}`}>
                      <div id="text"><FormattedMessage id="ABOUT_ME.EDUCATION.BRAIN_GRAPH_BANNER" /></div>
                    </div>
                  </div>
                  
                  {/* SHOW INTERACTIVE BRAIN GRAPH ONLY ON DESKTOP */}
                  <div className={`d-none d-lg-block ${styles["education__brain-container--desktop"]} ${(this.adjustProgress(1, progress)!=0?"out":"")} ${(progress==0?"pointer-events-none":"")}`}>
                    {/* <ForceGraph2D ref={this.forceGraphRef} graphData={this.state.experienceGraph} linkColor={() => '#fff'} nodeAutoColorBy="group" enableNodeDrag={true} enableZoomPanInteraction={false}
                      nodeCanvasObjectMode={()=>"replace"} nodeCanvasObject={(node:any, ctx, globalScale) => {
                        if (node != undefined && node.id != undefined && node.x != undefined && node.y != undefined){
                          if (node.id == "occipital-lobe" || node.id == "temporal-lobe" || node.id == "parietal-lobe" || node.id == "cerebellum" || node.id == "frontal-lobe"){
                            let percentage = 85;
                            if (!this.props.breakpoints!.xs && !this.props.breakpoints!.sm) percentage = 75;
                            const image = this.brain.get(node.id);
                            const width = image!.width - Math.ceil((image!.width * percentage)/100);
                            const height = image!.height * (width/image!.width);
                            ctx.drawImage(image!, node.x-width/2, node.y-height/2, width, height);
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
                      }} /> */}
                    </div>
                </div>                
            </Tween>
          </div>

          {/* HAPPY HOUR */}
          <div className={`col-sm-12 col-md-12 text-center ${styles["education__container-element"]} ${(this.adjustProgress(2, progress)==0?"out":"")}`}>
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOutRight"}}}
              to={{css: {className: "animate__animated animate__fadeInLeft"}}}
              progress={this.adjustProgress(2, progress)}
              playState="stop">
                <div><img className={`${styles["education__picture"]}`} src={happyHourBari} alt="Baresian happy hour" /></div>
            </Tween>          
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOutDown"}}}
              to={{css: {className: "animate__animated animate__fadeInDown"}}}
              progress={this.adjustProgress(3, progress)}
              playState="stop">
                <div>
                  <div className="mt-md-6 mt-5"><FormattedMessage id="ABOUT_ME.EDUCATION.HAPPY_HOUR" /></div>
                </div>
            </Tween>
          </div>
          
          {/* HIGH SCHOOL */}
          <div className={`col-sm-12 col-md-12 text-center ${styles["education__container-element"]} ${(this.adjustProgress(4, progress)==0?"out":"")}`}>
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOutRight"}}}
              to={{css: {className: "animate__animated animate__fadeInLeft"}}}
              progress={this.adjustProgress(4, progress)}
              playState="stop">
                <div><img className={`${styles["education__picture"]}`} src={marconi} alt="ITIS Guglielmo Marconi Bari" /></div>
            </Tween>          
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOutDown"}}}
              to={{css: {className: "animate__animated animate__fadeInDown"}}}
              progress={this.adjustProgress(5, progress)}
              playState="stop">
                <div>
                  <div className="mt-md-6 mt-5"><FormattedMessage id="ABOUT_ME.EDUCATION.HIGH_SCHOOL" /></div>
                </div>
            </Tween>
          </div>

          {/* UNIVERSITY */}
          <div className={`col-sm-12 col-md-12 text-center ${styles["education__container-element"]} ${(this.adjustProgress(6, progress)==0?"out":"")}`}>
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOutRight"}}}
              to={{css: {className: "animate__animated animate__fadeInLeft"}}}
              progress={this.adjustProgress(6, progress)}
              playState="stop">
                <div><img className={`${styles["education__picture"]}`} src={sochild} alt="SoChild" /></div>
            </Tween>          
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOutDown"}}}
              to={{css: {className: "animate__animated animate__fadeInDown"}}}
              progress={this.adjustProgress(7, progress)}
              playState="stop">
                <div>
                  <div className="mt-md-6 mt-5"><FormattedMessage id="ABOUT_ME.EDUCATION.UNIVERSITY" /></div>
                </div>
            </Tween>
          </div>


          {/* JACK */}
          <div className={`col-sm-12 col-md-12 text-center ${styles["education__container-element"]} ${(this.adjustProgress(8, progress)==0?"out":"")}`}>
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOutRight"}}}
              to={{css: {className: "animate__animated animate__fadeInLeft"}}}
              progress={this.adjustProgress(8, progress)}
              playState="stop">
                <div><img className={`${styles["education__picture"]} ${styles["education__jack-avatar"]}`} src={jack} alt="Jack avatar" /></div>
            </Tween>          
            <Tween            
              from={{css: {className: "animate__animated animate__fadeOutDown"}}}
              to={{css: {className: "animate__animated animate__fadeInDown"}}}
              progress={this.adjustProgress(9, progress)}
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

}

export default withHooksBreakpoint(Education)