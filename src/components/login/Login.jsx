import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Icon } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import LoginLeftLayout from './LoginLeftLayout';

class Login extends Component {
	submit = (data) => {
		return this.props.login(data).then(() => this.props.history.push('/'));
		//invoke thunk action 调用thunk .
	};

	render() {
		return (
			<div className="loginContainer">
				<div className="loginForm">
					<Segment color="blue">
						<div className="loginFormBorder">
							<h1>
								<Icon name="address card outline" /> Login
							</h1>
							<LoginForm submit={this.submit} />
							<div style={{ marginTop: '1rem' }}>
								<Link
									style={{ display: 'inlineBlock', width: '135px', paddingTop: '10px' }}
									to="/forgot_password"
								>
									Forget Password
								</Link>
								<Link style={{ float: 'right' }} to="/">
									Homepage
								</Link>
							</div>
						</div>
					</Segment>
				</div>
			</div>
		);
	}
}

export default connect(null, { login })(Login);
