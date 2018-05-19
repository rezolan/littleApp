import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import About from './About';
import DataWrapper from './DataWrapper';

class App extends Component {
  render() {
    return (
			<div>
				<Navigation />
				<Switch>
					<Route exact path = '/' component = { DataWrapper } />
					<Route exact path = '/user-:id' component = { DataWrapper } />
					<Route exact path = '/about' component = { About } />
					<Route exact path = '/wrong' component = { () => <h1>Something went wrong</h1> } />
					<Route path = '*' component = { () => <h1>404 Page not found</h1> } />
				</Switch>
			</div>
    );
  }
}

export default App;
