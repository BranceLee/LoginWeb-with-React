import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class Login extends Component {
	submit = (data) => {
		return this.props.login(data).then(() => this.props.history.push('/'));
		//invoke thunk action 调用thunk .
	};

	render() {
		return (
			<div>
				<h1>Login</h1>
				<Link to="/">homepage</Link>
				<LoginForm submit={this.submit} />
				<Link to="/forgot_password">Forget Password</Link>
			</div>
		);
	}
}

export default connect(null, { login })(Login);
