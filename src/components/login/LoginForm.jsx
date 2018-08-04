import React, { Component } from 'react';
import { Button, Form, Message, MessageHeader } from 'semantic-ui-react';
import Validator from 'validator'; //校验邮箱

class LoginForm extends Component {
	state = {
		data: {
			email: '',
			password: ''
		},
		loading: false,
		errors: {}
	};

	onChange = (e) => {
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});
	};

	onSubmit = () => {
		const errors = this.validate(this.state.data);
		this.setState({
			errors
		});
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			this.props.submit(this.state.data).catch((err) => {
				// console.log('err', err);
				this.setState({ errors: err.response.data.errors, loading: false });
			});
		}
	};

	validate = (data) => {
		const errors = {};
		if (!Validator.isEmail(data.email)) {
			errors.email = 'Invalidate email address';
		}
		if (!data.password) errors.password = 'The password can not be null';
		return errors;
	};

	render() {
		const { data, errors, loading } = this.state;

		return (
			<div>
				<Form onSubmit={this.onSubmit} loading={loading}>
					{errors.global && (
						<Message negative>
							<MessageHeader>Sth goes wrong</MessageHeader>
							<p>Warning: {errors.global}</p>
						</Message>
					)}
					<Form.Field error={!!errors.email}>
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="expample@example.com"
							value={data.email}
							onChange={this.onChange}
						/>
						{errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
					</Form.Field>
					<Form.Field error={!!errors.password}>
						<label htmlFor="password">password</label>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Password"
							value={data.password}
							onChange={this.onChange}
						/>
						{errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
					</Form.Field>
					<Button primary>Submit</Button>
				</Form>
			</div>
		);
	}
}

export default LoginForm;
