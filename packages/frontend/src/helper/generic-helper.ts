import type { RefObject } from "react";
import type sanitize from 'sanitize-html';


//----- scrollToSection
export function scrollToSection(ref:RefObject<HTMLDivElement>, parentId:string):void{
  let pageElem : HTMLElement = document.getElementById(parentId)!;
  // console.log(ref);
  // console.log(parentId);
  // console.log(ref.current!.getBoundingClientRect().top+pageElem.scrollTop);
  pageElem.scrollTo({top: ref.current!.getBoundingClientRect().top+pageElem.scrollTop, behavior: 'smooth'});
}


//----- scrollToSectionById
export function scrollToSectionById(targetElementId:string, parentId:string):void{
  let pageElem : HTMLElement = document.getElementById(parentId)!;
  let targetElement : HTMLElement|null = document.getElementById(targetElementId);
  if (targetElement)
    pageElem.scrollTo({top: targetElement.getBoundingClientRect().top+pageElem.scrollTop, behavior: 'smooth'});
}


//----- disableScrollIntoView
export function disableScrollIntoView(elementIds:string[]|null, elementNames:string[]|null):void{
  if (elementIds){
    elementIds.forEach((elementId)=>{
      // console.debug("Disabling scrollIntoView() of element " + elementId);
      let element = document.getElementById(elementId);
      if (element != null){
        // console.debug("scrollIntoView() of element " + elementId + " DISABLED!");
        element.scrollIntoView = (arg?: boolean | ScrollIntoViewOptions | undefined)=>{};
      }else{
        // console.debug("Element " + elementId + " not found!");
      }
    })
  }
}


//----- mySanitizeHtml
export function mySanitizeHtml(sanitizeHtml:(dirty: string, options?: sanitize.IOptions)=> string, defaults:sanitize.IDefaults, dirty:string):string{
  let allowedAttributes = defaults.allowedAttributes;
  allowedAttributes["*"] = ["class"];
  return sanitizeHtml(dirty, {allowedAttributes: allowedAttributes});
}