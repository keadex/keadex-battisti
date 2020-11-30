import React from 'react';
import styles from './dos-button.module.scss';
import { useRouter } from 'next/router';


//------------------ TYPES
interface DosButtonProps {
  onClick?: ()=>void;
  href?: string;
}

//------------------ COMPONENT
const DosButton : React.FunctionComponent<DosButtonProps> = props => {
  const router = useRouter();

  //------ handleClick
  function handleClick(){
    if (props.onClick){
      props.onClick();
    }
    if (props.href){
      router.push(props.href);
    }
  }

  return (
    <div className={`${styles["dos-button__root"]}`} onClick={handleClick}>
      {props.children}
    </div>
  );
}

export default DosButton;