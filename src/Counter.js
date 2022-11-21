import React, {Component} from "react";
import './Counter.css';
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";

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
    changeValue = (action) => {
        let current = this.state.counterValue;

        switch (action) {
            case 'subtract': {
                current -= 1;
                break;
            }
            case 'reset': {
                current = 0;
                break;
            }
            case 'init': {
                current = this.props.initValue;
                break;
            }
            case 'add': {
                current += 1;
                break;
            }
        }

        this.setState({
            counterValue: current
        })
    }

    render() {
        return (
        <div className="counter">
            Counter:
            <Display displayValue={this.state.counterValue} />
            <ButtonsPanel buttonMethod={this.changeValue} />
        </div>);
    }
}

export default Counter;
