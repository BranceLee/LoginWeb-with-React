import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResetForm from '../forms/ResetForm';
import { validateToken, resetPassword } from '../../actions/auth';
import { Message } from '../../../node_modules/semantic-ui-react';

class ResetPasswordPage extends Component {
	state = {
		loading: true,
		success: false
	};

	submitResetPassword = (data) => this.props.resetPassword(data).then(() => this.props.history.push('/login'));

	componentDidMount() {
		this.props
			.validateToken(this.props.match.params.token)
			.then(() => this.setState({ loading: false, success: true }))
			.catch(() => this.setState({ loading: false, success: false }));
	}

	render() {
		const { loading, success } = this.state;
		const { params } = this.props.match;
		return (
			<div>
				{loading && !success && <Message>Loading</Message>}
				{!loading && success && <ResetForm params={params} submitResetPassword={this.submitResetPassword} />}
				{!loading && !success && <Message>Invalidate URL</Message>}
			</div>
		);
	}
}

export default connect(null, { validateToken, resetPassword })(ResetPasswordPage);
