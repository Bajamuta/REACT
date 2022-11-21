import React from "react";
import './ButtonsPanel.css';

function ButtonsPanel(props) {
    return (
        <div className="buttons-panel">
            <button onClick={() => {
                props.buttonMethod('substract');
            }}>-</button>
            <button onClick={() => {
                props.buttonMethod('reset');
            }}>Reset to 0</button>
            <button onClick={() => {
                props.buttonMethod('init')
            }}>Init value</button>
            <button onClick={() => {
                props.buttonMethod('add')
            }}>+</button>
        </div>
    );
}

export default ButtonsPanel;
