import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

class Login extends Component {
	render() {
		return (
			<div>
				Login
				<Link to="/">homepage</Link>
				<LoginForm />
			</div>
		);
	}
}

export default Login;
