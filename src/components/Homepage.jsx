import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
	state = {};
	render() {
		return (
			<div>
				<h1>Homepage</h1>
				<Link to="/login">Login</Link>
			</div>
		);
	}
}

export default Homepage;
