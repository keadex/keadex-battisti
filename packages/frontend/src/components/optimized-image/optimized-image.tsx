
import 'lazysizes';
import React, { MutableRefObject } from 'react';
import { CSSProperties } from 'react';
import { useMeasure } from "react-use";
import { mergeRefs } from '../../helper/react-helper';
import { Query, useBreakpoint, QueryBreakpoint } from '../../core/react-breakpoint';

//------------------ TYPES
export interface ImageProps {
  src: string,
  className?: string,
  style?: CSSProperties,
  alt?: string,
  id?: string,
  srcWidth: number,
  srcHeight: number,
  width?: number | string | Query,
  height?: number | string | Query
};

enum DimensionType {
  Width="Width", Height="Height"
}

//------------------ COMPONENT
const OptimizedImage = React.forwardRef(({ src, className, alt, id, srcWidth:oldWidth, srcHeight:oldHeight, width:newWidth, height:newHeight, style }:ImageProps, fwRef:MutableRefObject<any> | ((instance: any) => void) | null) => {
  const [ref, { width:sizedImgWidth, height:sizedImgHeight }] = useMeasure();
  let breakpoints = useBreakpoint();
  let responsiveWidth = getResponsiveDimension(newWidth);
  let responsiveHeight = getResponsiveDimension(newHeight);

  //----------- getDimension
  /**
   * Calculates or returns the new width according to the aspect ration
   * aspectRatio = ( oldWidth / oldHeight )
   * newHeight = ( newWidth / aspectRatio )
   * newWidth = ( newHeight * aspectRatio )
   */
  function getDimension(dimensionTypeToRetrieve:DimensionType):string|number{
    let aspectRatio:number = oldWidth/oldHeight;
    let dimensionToRetrieve = undefined;
    let otherDimension = undefined;
    let parentOtherDimension = undefined;
    
    if (dimensionTypeToRetrieve == DimensionType.Width){
      dimensionToRetrieve = responsiveWidth;
      otherDimension = responsiveHeight;
      parentOtherDimension = sizedImgHeight;
    }else{
      dimensionToRetrieve = responsiveHeight;
      otherDimension = responsiveWidth;
      parentOtherDimension = sizedImgWidth;
    }

    if (dimensionToRetrieve && dimensionToRetrieve.toString().replace(/\s/g,'').length !== 0){
      //width is defined, so return it
      return dimensionToRetrieve;
    }else if (otherDimension && otherDimension.toString().replace(/\s/g,'').length !== 0){
      //width is not defined, so calculate it from the given height (if the height is in pixel format)
      //and from the parent height (if the height is in percentage format) 
      if (typeof otherDimension === "number" || otherDimension?.toString().toLocaleLowerCase().indexOf("px") != -1){
        //px format
        if (dimensionTypeToRetrieve == DimensionType.Width)
          return (parseFloat(otherDimension.toString().replace(/\s/g,'').replace("px","")) * aspectRatio).toFixed(2);
        else
          return (parseFloat(otherDimension.toString().replace(/\s/g,'').replace("px","")) / aspectRatio).toFixed(2);       
      }else if(typeof otherDimension === "string" && otherDimension?.toLocaleLowerCase().indexOf("%") != -1){
        //percentage format
        //calculate the px height starting from the given percentage of the parent element and 
        //calculate the new width according to the aspect ratio
        // console.log(src + " --- " + dimensionTypeToRetrieve.toString() + " --- " + parentOtherDimension + " --- " + otherDimension + " --- " + aspectRatio);
        if (dimensionTypeToRetrieve == DimensionType.Width)
          return (parentOtherDimension * aspectRatio).toFixed(2);
        else
          return (parentOtherDimension / aspectRatio).toFixed(2);
      }else{
        throw new Error("Format of the dimension not supported.")
      }
    }
    debugger;
    console.log(src + " --- " + newWidth + " --- " + newHeight);
    throw new Error("You must specify at least one dimension.");
  }


  //----- getResponsiveDimension
  function getResponsiveDimension(size?: number | string | Query) : string|number{
    let resSize : string | number = "";
    if (size){
      if (typeof size === "string" || typeof size === "number"){
        resSize = size;
      }else{
        resSize = size[QueryBreakpoint.default]??"";
        if (breakpoints.xs && size[QueryBreakpoint.xs]){
          resSize = size[QueryBreakpoint.xs]??"";
        }else if (breakpoints.sm && size[QueryBreakpoint.sm]){
          resSize = size[QueryBreakpoint.sm]??"";
        }else if (breakpoints.md && size[QueryBreakpoint.md]){
          resSize = size[QueryBreakpoint.md]??"";
        }else if (breakpoints.lg && size[QueryBreakpoint.lg]){
          resSize = size[QueryBreakpoint.lg]??"";
        }else if (breakpoints.xl && size[QueryBreakpoint.xl]){
          resSize = size[QueryBreakpoint.xl]??"";
        }
      }
    }
    return resSize;
  }

  // console.log(width + " -------- " + height);

  if (!src.startsWith("http")){
    //return webp optimized pic only for local pictures thanks to "next-optimized-images" plugin
    
    //next-optimize-images inlines small images to save HTTP requests and additional roundtrips.
    //So, before putting the require into data-srcset or data-src attributes, check if it
    //contains the inline images instead of the path
    let dataSrcset = require(`../../../public/img/${src}?webp`);
    if (!(typeof dataSrcset === "string")){
      dataSrcset = dataSrcset.default;
    }

    let dataSrc = require(`../../../public/img/${src}`);
    if (!(typeof dataSrc === "string")){
      dataSrc = dataSrc.default;
    }

    //svg files cannot be converted to WebP
    return (
      <picture>
        {!src.endsWith(".svg") && <source data-srcset={dataSrcset} type="image/webp" />}
        <img id={id??''} data-src={dataSrc} className={"lazyload " + (className??'')} alt={alt??''} width={getDimension(DimensionType.Width)} height={getDimension(DimensionType.Height)} style={style??{}} ref={mergeRefs(ref, fwRef)}/>
      </picture>
    );
  }else{
    return (
      <img id={id??''} data-src={src} className={"lazyload " + (className??'')} alt={alt??''} width={getDimension(DimensionType.Width)} height={getDimension(DimensionType.Height)} style={style??{}} ref={mergeRefs(ref, fwRef)}/>
    );
  }
  // return (<div></div>);
});

export default OptimizedImage;