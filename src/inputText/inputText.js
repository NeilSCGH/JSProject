import React, { Component } from 'react';
class inputText extends Component {
    render() {
        return (
            <div>
                <div class="display"></div>
                <div>
                    <input type="text" name="text" onChange={this.props.change} value={this.props.chat} />
                    <button onClick={this.props.send}>Envoyer</button>
                </div>
            </div>
        );
    }
}
export default inputText; 
