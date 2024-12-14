import React from 'react';
import ReactDOM from 'react-dom/client';

export default class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: props.toggle
        };
    }
    render() {
        const toggle = this.state.toggle;
        const buttonText = (toggle === true) ? "On" : "Off";
        return (
            <div className="toggleButton">
                <button
                    className="btn btn-dark btn-lg"
                    onClick={() => this.setState({toggle: !toggle })}>{buttonText}</button>
            </div>
        )
    }
}