import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Feed, Segment, Icon, Divider, Breadcrumb, Form, Button, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { addComment, getComment } from '../../../../actions/comment';

class FeedbackForm extends Component {
	state = {
		comments: [],
		newComment: '',
		showAllComment: false,
		errors: ''
	};

	InputComment = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitComment = () => {
		const { newComment } = this.state;
		if (newComment === '') {
			this.setState({ errors: 'You must forget to write something ^` `^' });
		} else {
			this.props
				.addComment({
					comment: {
						summary: newComment,
						email: this.props.email,
						date: '2018-8-18'
					}
				})
				.then(() => this.props.getComment())
				.then(this.setState({ newComment: '' }))
				.catch((err) => this.setState({ errors: 'WRONG REQUEST' }));
			this.setState({ errors: '', showAllComment: true });
		}
	};

	showAllComment = () => {
		this.setState({ showAllComment: !this.state.showAllComment });
	};

	componentDidMount() {
		this.props.getComment().catch(() => console.log('wrong Load'));
	}

	render() {
		const { errors, showAllComment } = this.state;
		const { comments = [] } = this.props;
		return (
			<div className="feedbackForm">
				<Breadcrumb>
					<Breadcrumb.Section>
						<h2>Message</h2>
					</Breadcrumb.Section>
				</Breadcrumb>
				<Divider />
				<Segment>
					{comments.map((comment, index) => (
						<Container key={index}>
							{(index <= 2 || showAllComment) && (
								<Segment style={{ marginBottom: '1rem' }}>
									<Feed>
										<Feed.Event>
											<Feed.Label>
												<img
													style={{
														width: '41px',
														height: '41px',
														borderRadius: '50%',
														overFlow: 'hidden',
														marginTop: '10px'
													}}
													alt="load fail"
													src={comment.image || ''}
												/>
											</Feed.Label>
											<Feed.Content>
												<Feed.Summary>
													<Feed.User>{comment.email}</Feed.User>
													<Feed.Date>{comment.date}</Feed.Date>
												</Feed.Summary>
												<Feed.Extra>{comment.summary}</Feed.Extra>
												<Feed.Meta>
													<Feed.Like>
														<Icon name="like" />
														{comment.meta}
													</Feed.Like>
												</Feed.Meta>
											</Feed.Content>
										</Feed.Event>
									</Feed>
								</Segment>
							)}
						</Container>
					))}
				</Segment>
				<Container style={{ width: '100%' }}>
					<Button fluid color="olive" onClick={this.showAllComment}>
						{showAllComment ? '收起' : 'More'}
					</Button>
				</Container>
				<Container />

				<Form reply style={{ marginTop: '2rem' }}>
					<Form.TextArea
						value={this.state.newComment}
						error={!!errors}
						rows="6"
						onChange={this.InputComment}
						name="newComment"
					/>
					{!!errors && <p style={{ color: 'red' }}>{errors}</p>}
					<Button
						floated="right"
						size="huge"
						color="olive"
						onClick={this.submitComment}
						content="Add Reply"
						labelPosition="right"
						icon="edit"
					/>
				</Form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		email: state.user.email,
		comments: state.comments.data
	};
}

FeedbackForm.propTypes = {
	email: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { addComment, getComment })(FeedbackForm);
