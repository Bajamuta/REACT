import React, {Component} from "react";
import './Step.css';

class Step extends Component{
    _inputStep;

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className="input-panel">
                <label>Step:</label>
                <input type="number"
                       onChange={() => this.props.stepMethod(parseInt(this._inputStep.value))}
                       defaultValue={1} min={1}
                       ref={(data) => { this._inputStep = data} }/>
            </div>
        );
    }
}

export default Step;
