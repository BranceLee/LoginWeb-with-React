import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { Icon, Segment } from 'semantic-ui-react';
import { signUp } from '../../actions/user';

class SignUpPage extends Component {
	state = {};

	signUp = (user) => this.props.signUp(user).then(() => this.props.history.push('/'));

	render() {
		return (
			<div className="signUpContainer">
				<div className="signUpForm">
					<Segment color="blue">
						<div className="signUpFormBorder">
							<h1>
								<Icon name="users" /> SignUp
							</h1>
							<SignUpForm signUp={this.signUp} />
						</div>
					</Segment>
				</div>
			</div>
		);
	}
}

export default connect(null, { signUp })(SignUpPage);
