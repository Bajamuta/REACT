import React from "react";

function Display(props) {
    return(
        <span className="value">
                {props.displayValue}
            </span>
    );
}

export default Display;
