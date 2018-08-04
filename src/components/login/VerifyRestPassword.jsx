import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendResetToken } from '../../actions/auth';
import { Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class VerifyPassword extends Component {
	state = {
		loading: true,
		success: false,
		errors: null
	};

	componentDidMount() {
		this.props
			.sendResetToken(this.props.match.params.resetToken)
			.then(() => this.setState({ loading: false, success: true }))
			.catch(() => this.setState({ loading: false, success: false, errors: 'Something Went Wrong' }));
	}

	render() {
		const { loading, success, errors } = this.state;
		return (
			<div>
				{loading &&
				!errors && (
					<Message icon>
						<Icon name="circle notched" loading />
						<Message.Header>Validating Your Applying</Message.Header>
					</Message>
				)}
				{!loading &&
				success && (
					<Message success icon>
						<Icon name="checkmark" />
						<Message.Content>
							<Message.Header>Your password has been changed ,You can login now !</Message.Header>
							<Link to="/login" />
						</Message.Content>
					</Message>
				)}
				{!success &&
				errors && (
					<Message>
						<Message.Header>
							<Icon name="paper plane outline" /> ERROR PAGE
						</Message.Header>
					</Message>
				)}
			</div>
		);
	}
}

export default connect(null, { sendResetToken })(VerifyPassword);
