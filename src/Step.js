import React from "react";
import './Step.css';

function Step(props) {
    return(
        <div className="input-panel">
            <label>Step:</label>
            <input type="number" id="step" name="step" defaultValue={1} min={1}/>
        </div>
    );
}

export default Step;
