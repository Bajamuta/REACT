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
            counterValue: this.props.initValue,
            stepValue: 1
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
        this.setState((prevState, prevProps) => {
            let current = prevState.counterValue;

            switch (action) {
                case 'subtract': {
                    current -= prevState.stepValue;
                    break;
                }
                case 'reset': {
                    current = 0;
                    break;
                }
                case 'init': {
                    current = prevProps.initValue;
                    break;
                }
                case 'add': {
                    current += prevState.stepValue;
                    break;
                }
                default: {
                    current = prevProps.initValue;
                }
            }
            return ({
                counterValue: current
            });
        })
    }

    updateStep = (value) => {
        this.setState({
            stepValue: value
        })
    }

    render() {
        return (
        <div className="counter">
            Counter:
            <Display displayValue={this.state.counterValue} />
            <ButtonsPanel buttonMethod={this.changeValue}
                          stepChange={this.updateStep}
                          stepValue={this.state.stepValue}/>
        </div>);
    }
}

export default Counter;
