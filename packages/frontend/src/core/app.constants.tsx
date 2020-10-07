import React from 'react';

//GENERIC
export const MAX_BOT_MESSAGES = 5;
export const DEFAULT_REVALIDATE_SECONDS = 60;
export const GITHUB_MASTER_BASEURL:string = process.env.NEXT_PUBLIC_GITHUB_MASTER_BASEURL!;


export enum SceneId {
  Education = "EDUCATION",
  Hobbies = "HOBBIES",
  Mobile = "MOBILE",
  FullStack = "FULL_STACK",
  ITSolutionArchitect = "IT_SOLUTION_ARCHITECT",
  CV = "CV"
}

export const FORMATTED_MESSAGE_STANDARD_HTML_VALUES : Record<string, any> = {
  span: (chunks:any) => (<span>{chunks}</span>),
  br: ()=>(<br />),
  "&nbsp;": ()=>(<>&nbsp;</>)
}