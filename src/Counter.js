import React, {Component} from "react";
import './Counter.css';

/*function Counter(props) {
    return (<div className="counter">
        Counter:
        <span className="value">
            {props.initvalue}
        </span>
    </div>);
}*/

class Counter extends Component {
    render() {
        return (<div className="counter">
            Counter:
            <span className="value">
            {this.props.initValue}
        </span>
        </div>);
    }
}

export default Counter;
