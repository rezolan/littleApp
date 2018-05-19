import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import Main from './MainPage';
import About from './About';
import UserDetail from './UserDetail'

class App extends Component {
  render() {
    return (
			<div>
				<Navigation />
				<Route exact path = "/" component = { Main } />
				<Route path = '/about' component = { About } />
				<Route exact path = '/user-:id' component = { UserDetail } />
			</div>
    );
  }
}

export default App;
