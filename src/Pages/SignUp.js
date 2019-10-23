import React from 'react';
import { Route } from 'react-router-dom';
import Form from '../forms/Form.js';

export default function signup(obj) {
    return (
        <div>
            <Route exact path="/signup" component={() =>
                <>
                    Sign up page
                    <Form inputNames={["first_name", "last_name", "email", "password"]} inputTexts={["First name", "Last Name", "Email", "Password"]} buttonText={"Sign up"} onSend={obj.handleSendSignupForm} />
                </>
            } />
        </div>
    )
}