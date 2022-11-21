import React from "react";
import './Counter.css';

function Counter(props) {
    let randomNumber = Math.floor(Math.random() * 108);
    return (<div className="counter">
        Counter:
        <span className="value">
            {randomNumber}
        </span>
    </div>);
}

export default Counter;
