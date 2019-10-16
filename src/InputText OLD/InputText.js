import React, { Component } from 'react';

class InputText extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '' };
        this.handleSend = this.handleSend.bind(this);
        this.displayText = this.displayText.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSend(event) {
        this.props.onSend(this.props.name, this.state.text);
        this.setState({ text: '' });
    }

    displayText() {
        let text = this.props.display.map((item) => {
            return (<p>{item}</p>);
        });
        return (<div class="display">{text}</div>);
    }


    //{this.displayText()}
    //<button onClick={this.handleSend}>Envoyer</button>
    render() {
        return (
            <div>
                <p>
                    {this.props.name}
                    <input type="text" name="text" onChange={this.handleChange} value={this.state.text} />
                    <button onClick={this.handleSend}>Envoyer</button>
                </p>
            </div>
        );
    }
}
export default InputText