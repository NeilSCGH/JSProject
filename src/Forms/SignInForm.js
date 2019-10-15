import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = { first_name: '', last_name: '', email: '', password: '' };
        this.handleSendForm = this.handleSendForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSendForm() {
        //console.log(this.state);
        this.props.onSend(this.state);
        this.setState({ first_name: '', last_name: '', email: '', password: '' });
    }

    render() {
        return (
            <div>
                <div>
                    first_name <input type="text" name="first_name" onChange={this.handleChange} value={this.state.first_name} />
                    <br />
                    last_name <input type="text" name="last_name" onChange={this.handleChange} value={this.state.last_name} />
                    <br />
                    email <input type="text" name="email" onChange={this.handleChange} value={this.state.email} />
                    <br />
                    password <input type="text" name="password" onChange={this.handleChange} value={this.state.password} />
                    <br />
                    <button onClick={this.handleSendForm}>Envoyer</button>
                </div>
            </div>
        );
    }
}
export default LoginForm