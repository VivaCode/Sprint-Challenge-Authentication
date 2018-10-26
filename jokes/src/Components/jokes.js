import React, { Component } from 'react'
import axios from 'axios';

export default class jokes extends Component {
    state = {
        jokes: []
    };
  render() {
    return (
      <div>
          <ul>
            {this.state.jokes.map(joke => (
            <li key={joke.id}>
              <p>{joke.setup}</p>
              <p>{joke.punchline}</p>
            </li>
          ))}
        </ul>
         
      </div>
    )
  }
  componentDidMount() {
    const token = localStorage.getItem('jwt');
    const endpoint = 'http://localhost:8000/api/jokes';
    const options = {
        headers: {
            Authorization: token,
        },
    };
    axios
      .get(endpoint, options)
      .then(res => {
          console.log(res.data);
          this.setState({users:res.data});
      })
      .catch(err => {
          console.log('ERROR', err)
      });
    }   
}
