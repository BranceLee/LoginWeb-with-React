import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import * as action from '../actions/auth';

class Homepage extends Component {
	state = {};

	render() {
		return (
			<div>
				<h1>Homepage</h1>
				{this.props.isLogin ? (
					<Button onClick={() => this.props.logout()}>Log out</Button>
				) : (
					<Link to="/login">Login</Link>
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { isLogin: !!state.user.token };
}

export default connect(mapStateToProps, { logout: action.logout })(Homepage);
