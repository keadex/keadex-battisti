import React from 'react';
import './DosButton.scss';
import { useHistory } from 'react-router-dom';


//------------------ TYPES
interface DosButtonProps {
  onClick?: ()=>void;
  href?: string;
}

//------------------ COMPONENT
export const DosButton : React.FunctionComponent<DosButtonProps> = props => {
  const history = useHistory();

  //------ handleClick
  function handleClick(){
    if (props.onClick){
      props.onClick();
    }
    if (props.href){
      history.push(props.href);
    }
  }

  return (
    <div className="dos-button__root" onClick={handleClick}>
      {props.children}
    </div>
  );
}