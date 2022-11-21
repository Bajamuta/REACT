import React from "react";
import './ButtonsPanel.css';

function ButtonsPanel(props) {
    return (
        <div className="buttons-panel">
            <button onClick={() => {
                props.buttonMethod('subtract');
            }}>- {props.stepValue}</button>
            <button onClick={() => {
                props.buttonMethod('reset');
            }}>Reset to 0</button>
            <button onClick={() => {
                props.buttonMethod('init')
            }}>Init value</button>
            <button onClick={() => {
                props.buttonMethod('add')
            }}>+ {props.stepValue}</button>
        </div>
    );
}

export default ButtonsPanel;
