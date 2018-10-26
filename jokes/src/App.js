import React, { Component } from 'react';
import {NavLink, Route} from 'react-router-dom';
import KCCO from './keep-calm-you-are-not-authorized.png';
import Jokes from './Components/jokes';
import Login from './Components/login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink exact to='/'>Home</NavLink>
            &nbsp;|&nbsp;
            <NavLink exact to='/api/jokes'>
              Jokes
            </NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/api/login">Login</NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.logout}>Signout</button>
          </nav>
        <main>
          <Route exact path = '/' component= {Home}></Route>
          <Route path = '/api/jokes' component= {Jokes}></Route>
          <Route path="/api/login" component={Login} />
        </main>
        </header>
      </div>
    );
  }
}

const Home = props => {
  return (
    <div>
      <h1>You must login to view this page</h1>
      <img src={KCCO} alt = 'Keep Calm' />
    </div>
  )
}

export default App;
