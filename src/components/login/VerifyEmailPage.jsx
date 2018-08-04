import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Message, Icon } from 'semantic-ui-react';
import { confirm } from '../../actions/auth';

class VerifyEmailPage extends Component {
	state = {
		loading: true,
		success: false,
		errors: null
	};

	componentDidMount() {
		this.props
			.confirm(this.props.match.params.confirmationToken)
			.then(() => this.setState({ success: true, loading: false, errors: null }))
			.catch(() => this.setState({ errors: 'SomeWrong' }));
	}

	render() {
		const { loading, success, errors } = this.state;
		return (
			<div>
				{loading &&
				!errors && (
					<Message icon>
						<Icon name="circle notched" loading />
						<Message.Header>Validating your email</Message.Header>
					</Message>
				)}
				{!loading &&
				success && (
					<Message success icon>
						<Icon name="checkmark" />
						<Message.Content>
							<Message.Header>Thank you .Your account has been verified</Message.Header>
							<Link to="/dashboard">Go to dashboard</Link>
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

// function mapStateToProps(state) {
// 	return { confirmToken: state.user.confirmToken };
// }
export default connect(null, { confirm })(VerifyEmailPage);
