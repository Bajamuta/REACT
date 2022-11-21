import React from "react";
import './Display.css';

function Display(props) {
    return(
        <span className={`value ${(props.displayValue <= 5 ? 'red' : 'green') }`}>
                {props.displayValue}
         </span>
    );
}

export default Display;
