import React, { Component } from 'react';
import { Feed, Segment, Icon, Header, Divider, Breadcrumb, Form, Button } from 'semantic-ui-react';
import axios from 'axios';

class FeedbackForm extends Component {
	state = {
		comment: []
	};

	componentDidMount() {
		axios.get('/api/comments').then((res) => res.data).then((result) => this.setState({ comment: result.data }));
	}

	render() {
		return (
			<div className="feedbackForm">
				<Breadcrumb>
					<Breadcrumb.Section>
						<h2>Message</h2>
					</Breadcrumb.Section>
				</Breadcrumb>
				<Divider />
				{this.state.comment.map((comment, index) => (
					<Segment key={index}>
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
				))}
				<Form reply>
					<Form.TextArea rows="5" />
					<Button content="Add Reply" labelPosition="left" icon="edit" primary />
				</Form>
			</div>
		);
	}
}

export default FeedbackForm;
