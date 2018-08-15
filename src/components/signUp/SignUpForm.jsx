import React, { Component } from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import Validator from 'validator';

class SignUpForm extends Component {
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
			this.props
				.signUp(this.state.data)
				.catch((err) => this.setState({ errors: err.response.data.errors, loading: false }));
		}
	};

	validate = (data) => {
		const errors = {};
		if (!Validator.isEmail(data.email)) {
			errors.email = 'Inlegal Email';
		}
		if (!data.password) {
			errors.password = 'Password Can`t` Be Null';
		}
		return errors;
	};

	render() {
		const { data, loading, errors } = this.state;
		return (
			<div>
				<Form onSubmit={this.onSubmit} loading={loading}>
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
						{errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
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
						{errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
					</Form.Field>
					<Form.Field>
						<Checkbox label="I agree to the Terms and Conditions" />
					</Form.Field>
					<Button>Sign Up</Button>
				</Form>
			</div>
		);
	}
}

export default SignUpForm;
