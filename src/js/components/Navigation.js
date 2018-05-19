import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component{
	render(){
		return (
			<nav>
				<ul>
					<li><Link to = "/">Main page</Link></li>
					<li><Link to = "/about">About page</Link></li>
				</ul>
			</nav>
		)
	}
}

export default Navigation;