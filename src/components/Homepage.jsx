import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import PropType from 'prop-types';
import * as action from '../actions/auth';

class Homepage extends Component {
	state = {};

	render() {
		return (
			<div>
				<h1>Homepage</h1>
				{this.props.isLogin ? (
					<div>
						<Button onClick={this.props.logout}>Log out</Button>
						<div>
							<Button>
								<Link to="/dashboard">ReadMyBook</Link>
							</Button>
						</div>
					</div>
				) : (
					<div>
						<Link to="/login">Login</Link>
						<br />
						<Link to="/signup">Sigup</Link>
					</div>
				)}
			</div>
		);
	}
}

Homepage.propTypes = {
	isLogin: PropType.bool.isRequired,
	logout: PropType.func.isRequired
};

function mapStateToProps(state) {
	return { isLogin: !!state.user.token };
}

export default connect(mapStateToProps, { logout: action.logout })(Homepage);
