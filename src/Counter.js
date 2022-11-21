import React, {Component} from "react";
import './Counter.css';
import Display from "./Display";

/*function Counter(props) {
    return (<div className="counter">
        Counter:
        <span className="value">
            {props.initvalue}
        </span>
    </div>);
}*/

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue
        }
        /*
        * ES5 METHOD
        * this.add = this.add.bind(this);
        * */
    }

    /*
    * ES5 METHOD
    *
    * add() {}
    * */

    //ES6
    add = () => {
        this.setState((prevState) => {
            return ({
               counterValue: prevState.counterValue + 1
            });
        })
    }

    render() {
        return (
        <div className="counter">
            Counter:
            <Display displayValue={this.state.counterValue} />
            <button onClick={this.add}>Add 1</button>
        </div>);
    }
}

export default Counter;
