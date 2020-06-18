import React, {useState, useRef } from 'react';
import React, { Component } from 'react';
import { withContext } from '../AppContext';


class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            username: "",
            password: ""
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
        .then(() => this.props.history,push('/todos'))
    }

    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <h3>Log In</h3>
                    <input
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        type="text"
                        placeholder="username"/>
                    <input
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        type="password"
                        placeholder="password"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default withContext(LoginForm);