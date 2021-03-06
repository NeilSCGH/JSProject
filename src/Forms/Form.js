import React, { Component } from 'react';

class AddCardForm extends Component {
    constructor(props) {
        super(props)
        this.state = { inputs: '' };
        this.handleSendForm = this.handleSendForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.displayInputs = this.displayInputs.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSendForm() {
        this.props.onSend(this.state);
        //this.state.inputs.map( (vida) => alert(vida));
    }

    displayInputs() {
        if (typeof this.props.inputNames != 'undefined') {
            let inputs = this.props.inputNames.map((name, i) => {
                if (name == "password") {
                    return (<>
                        <p>{this.props.inputTexts[i]} <input type="password" name={name} onChange={this.handleChange} value={this.state.inputs[name]} /></p>
                    </>);
                }
                else {
                    return (<>
                        <p>{this.props.inputTexts[i]} <input type="text" name={name} onChange={this.handleChange} value={this.state.inputs[name]} /></p>
                    </>);
                }
            });
            return (inputs);
        }
        else {
            return ("");
        }
    }

    render() {
        return (
            <div>
                {this.displayInputs()}
                <button onClick={this.handleSendForm}>{this.props.buttonText}</button>
            </div>
        );
    }
}
export default AddCardForm