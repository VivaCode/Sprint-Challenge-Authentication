import React, { Component } from 'react'
import axios from 'axios';

export default class login extends Component {
    state = {
        username:'',
        password: ''
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    
    handleSubmit = event => {
        event.preventDefault();
    
        const endpoint = 'http://localhost:8000/api/login';
        console.log(this.state);
        axios
          .post(endpoint, this.state)
          .then(res => {
            console.log(res.data);
            localStorage.setItem('jwt', res.data.token);
            this.props.history.push("/api/users");
        })
          .catch(err => {
            console.error('ERROR', err);
        });
    };
    
    signout = () => {
        localStorage.removeItem('jwt');
    };

  render() {
    return (
      
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    type="text"
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    type="password"
                />
            </div>
            <div>
                <button type="submit">Log In</button>
            </div>
      </form>
    )
  }
}

