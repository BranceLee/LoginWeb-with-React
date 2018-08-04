import React, { Component } from 'react';
import Validator from 'validator';
import { Form, Button } from 'semantic-ui-react';

class ForgotPasswordForm extends Component {
	state = {
		data: { email: '' },
		errors: {},
		loading: false
	};

	onChange = (e) => {
		this.setState({ data: { email: e.target.value } });
	};

	onSubmit = () => {
		const { data, errors } = this.state;
		this.validate(data.email);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.setState({ loading: true });
			console.log(this.state.data);
			this.props
				.submit(this.state.data)
				.catch((err) => this.setState({ errors: err.response.data.errors, loading: false }));
		}
	};

	validate = (email) => {
		const errors = {};
		if (!Validator.isEmail(email)) {
			errors.email = 'Invalid email';
		}
		return errors;
	};

	render() {
		return (
			<div>
				<Form onSubmit={this.onSubmit}>
					<Form.Field>
						<label htmlFor="email">
							<input
								type="email"
								id="email"
								name="email"
								value={this.state.data.email}
								onChange={(e) => this.onChange(e)}
							/>
						</label>
					</Form.Field>
					<Button>Send Email </Button>
				</Form>
			</div>
		);
	}
}

export default ForgotPasswordForm;
