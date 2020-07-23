import React from 'react';
import notFound from "../../assets/img/404-2.jpg";

//------------------ TYPES
interface PageNotFoundProps {
  hidden?: boolean;
}

//------------------ COMPONENT
export const PageNotFound: React.FunctionComponent<PageNotFoundProps> = props => {
  
  let hidden = props.hidden!=undefined?props.hidden:false;
  
  return (
    <React.Fragment>
      <div className='full-center text-center position-relative' hidden={hidden}>
        {/* <img src={notFound} width={250} /> */}
        Error 404<br/>Not Found
      </div>
    </React.Fragment>
  );
}