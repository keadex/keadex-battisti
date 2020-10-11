
import 'lazysizes';
import React, { MutableRefObject, RefObject } from 'react';
import { CSSProperties } from 'react';

//------------------ TYPES
export interface ImageProps {
  src: string,
  className?: string,
  style?: CSSProperties,
  alt?: string,
  id?: string,
  width?: number | string,
  height?: number | string
};


//------------------ COMPONENT
const OptimizedImage = React.forwardRef(({ src, className, alt, id, width, height, style }:ImageProps, ref:MutableRefObject<any> | ((instance: any) => void) | null) => {
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
        <img id={id??''} data-src={dataSrc} className={"lazyload " + className??''} alt={alt??''} width={width??''} height={height??''} style={style??{}} ref={ref}/>
      </picture>
    );
  }else{
    return (
      <img id={id??''} data-src={src} className={"lazyload " + className??''} alt={alt??''} width={width??''} height={height??''} style={style??{}} ref={ref}/>
    );
  }
});

export default OptimizedImage;