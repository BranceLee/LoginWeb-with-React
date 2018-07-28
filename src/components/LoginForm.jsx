import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Validator from 'validator';

class LoginForm extends Component {
	state = {
		data: {
			email: '',
			password: ''
		}, //记录信息
		lodding: false,
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
	};

	validate = (data) => {
		const errors = {}; //清空先前状态
		if (!Validator.isEmail(data.email)) {
			errors.email = 'Invalidate email address';
		}
		if (!data.password) errors.password = 'The password can not be null';
		return errors;
	};

	render() {
		const { data, errors } = this.state;
		console.log(this.state.errors);

		return (
			<div>
				<Form onSubmit={this.onSubmit}>
					<Form.Field>
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
					<Form.Field>
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
					<Button primary>Submit</Button>
				</Form>
			</div>
		);
	}
}

export default LoginForm;
