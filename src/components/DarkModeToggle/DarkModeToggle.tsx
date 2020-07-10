import * as React from 'react';
import './DarkModeToggle.css';

const DarkModeToggle: React.FunctionComponent<{ onClick: (e: any) => any }> = (props) => {
  return (
    <div id="wrapper" onClick={props.onClick}>
      <div id="nightbg"></div>
      <div className="zzz1"></div>
      <div className="zzz2"></div>
      <div className="zzz3"></div>
        <div className="planet"> 
        <div className="face">
            <div className="eye">
            <div className="eye-in"></div>
          </div>
          <div className="mouth"></div>
          <div className="eye">
            <div className="eye-in"></div>
          </div>
        </div>
      </div>
      <div className="star pos-star1 "></div>
      <div className="star pos-star2 "></div>
      <div className="star pos-star3 "></div>
    </div>
  )
};

export default DarkModeToggle;