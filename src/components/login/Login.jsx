import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, } from 'semantic-ui-react';
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
				<Grid>
					<Grid.Row>
						<Grid.Column width={10}>
							<LoginLeftLayout />
							<Container />
						</Grid.Column>
						<Grid.Column width={6} textAlign="left">
							<div className="loginForm">
								<Container>
									<h1>Login</h1>
									<Link to="/">Homepage</Link>
									<LoginForm submit={this.submit} />
									<Link
										style={{ display: 'block', width: '135px', marginTop: '10px' }}
										to="/forgot_password"
									>
										Forget Password
									</Link>
								</Container>
							</div>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default connect(null, { login })(Login);
