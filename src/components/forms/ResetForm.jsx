import React, { Component } from 'react';
import { Button, Form, Message, MessageHeader, MessageContent, Icon } from 'semantic-ui-react';
import Validator from 'validator';

class ResetForm extends Component {
	state = {
		loading: false,
		success: false,
		data: {
			email: this.props.params.email,
			password: '',
			confirmPassword: '',
			token: this.props.params.token
		},
		errors: {}
	};

	onChange = (e) =>
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});

	resetPassword = () => {
		const { data } = this.state;
		const errors = this.validate(data);
		this.setState({ errors: errors });
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props
				.submitResetPassword(data)
				.catch((err) => this.setState({ errors: err.response.data.errors, loading: false }));
		}
	};

	validate = (data) => {
		const errors = {};
		if (!Validator.isEmail(data.email)) {
			errors.email = 'Invalid Email';
		}
		if (data.password === '') {
			errors.password = 'The Password Can Not Be Null';
		}
		if (data.confirmPassword !== data.password) {
			errors.password = 'Password must be match';
		}
		return errors;
	};

	render() {
		const { loading, data: { email, confirmPassword, password }, errors } = this.state;
		return (
			<div>
				<div className="forgotPasswordContainer">
					<div className="forgotPasswordForm">
						<div className="forgotPasswordBorder">
							<h1>
								<Icon name="address card outline" /> Reset Password
							</h1>
							<Form onSubmit={this.resetPassword} loading={loading}>
								{errors.global && (
									<Message negative>
										<MessageHeader>Somthing goes Wrong</MessageHeader>
										<MessageContent>{errors.global}</MessageContent>
									</Message>
								)}
								<Form.Field>
									<label>Email</label>
									<input
										type="email"
										value={email}
										name="email"
										id="email"
										readOnly="readOnly"
										onChange={(e) => this.onChange(e)}
									/>
								</Form.Field>
								{errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
								<Form.Field>
									<label>Password</label>
									<input
										type="password"
										value={password}
										name="password"
										id="password"
										onChange={(e) => this.onChange(e)}
									/>
								</Form.Field>
								{errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
								<Form.Field>
									<label>confirmPassword</label>
									<input
										type="password"
										value={confirmPassword}
										name="confirmPassword"
										id="confirmPassword"
										onChange={(e) => this.onChange(e)}
									/>
								</Form.Field>
								{errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
								<Button primary>ResetPassword</Button>
							</Form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ResetForm;
