import { TimelineMax, Power1, Sine, Ease } from 'gsap';
import { RefObject } from 'react';
import { interpolateAll } from 'flubber';

export interface MorphSVGSubject {
  fromSvgPath: SVGPath;
  toSvgPath: SVGPath;
}

export interface MorphSVGTimeline {
  subject: MorphSVGSubject;
  interpolator: ((t:number)=>string)[];
  timeline: TimelineMax;
}

export interface SVGPath {
  id: string;
  path: string[];
  // className: string[];
}

export interface MorphSVGOptions{
  duration?: number
  ease?: Ease
}

export const MATERIAL_ENTRANCE_SPEED:number = 300; //ms
export const MATERIAL_EXIT_SPEED:number = 500; //ms

/**
 * Generates the timelines to morph the provided svg paths.
 * 
 * @returns {MorphSVGTimeline} A map where the key is in the form "FROM-SVG-PATH-ID_TO-SVG-PATH-ID" and the value containes the GSAP timelines
 */
export function generateMorphSVGTimelines(svgPathRef:RefObject<SVGPathElement>[], subjects:MorphSVGSubject[], options?:MorphSVGOptions) : Map<string, MorphSVGTimeline> {
  let result : Map<string, MorphSVGTimeline> = new Map<string, MorphSVGTimeline>();
  let duration = (options && options.duration)?options.duration:0.7;
  let ease = (options && options.ease)?options.ease:Sine.easeInOut;

  for (let subject of subjects){
    //svgPath2 -> svgPath1
    let interpolator:((t:number)=>string)[] = interpolateAll(subject.fromSvgPath.path, subject.toSvgPath.path, { maxSegmentLength: 25 });
    let obj = { t: 0 };
    let timeline = new TimelineMax();
    timeline.to(obj, duration, {
      t: 1,
      ease: ease,
      yoyo: true,
      onUpdate: function() {
        for (var i=0; i<interpolator.length; i++){
          if (svgPathRef[i].current != null){
            svgPathRef[i].current!.setAttribute("d", interpolator[i](obj.t));
          }
        }
      }
    });
    timeline.pause();
    result.set(subject.fromSvgPath.id + "_" + subject.toSvgPath.id, {subject: subject, interpolator: interpolator, timeline: timeline});
  }
  return result;
}