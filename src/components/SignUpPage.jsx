import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { signUp } from '../actions/user';

class SignUpPage extends Component {
	state = {};

	signUp = (user) => this.props.signUp(user).then(() => this.props.history.push('./dashboard'));

	render() {
		return (
			<div>
				<h1>Sign up page</h1>
				<SignUpForm signUp={this.signUp} />
			</div>
		);
	}
}

export default connect(null, { signUp })(SignUpPage);
