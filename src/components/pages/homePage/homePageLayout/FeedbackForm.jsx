import React, { Component } from 'react';
import { Feed, Segment, Icon } from 'semantic-ui-react';

class FeedbackForm extends Component {
	state = {
		comments: [
			{
				name: 'Lee',
				date: '1 Hour Ago',
				image:
					'https://images.unsplash.com/photo-1528056177018-bad81ecc0268?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55bd20d42ebeefbaa44fd985b7807cad&auto=format&fit=crop&w=1384&q=80',
				meta: '4 Likes',
				summary:
					"Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon."
			},
			{
				name: 'Lee',
				date: '1 Hour Ago',
				image:
					'https://images.unsplash.com/photo-1528056177018-bad81ecc0268?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55bd20d42ebeefbaa44fd985b7807cad&auto=format&fit=crop&w=1384&q=80',
				meta: '4 Likes',
				summary:
					"Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon."
			}
		]
	};
	// 	{
	// 		date: '4 days ago',
	// 		image:
	// 			'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a723711f2c79ac1dc3c8718d82850f30&auto=format&fit=crop&w=1331&q=80',
	// 		meta: '1 Like',
	// 		summary: 'Helen Troy added 2 new illustrations',
	// 		extraImages: [
	// 			'https://images.unsplash.com/photo-1528056177018-bad81ecc0268?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=55bd20d42ebeefbaa44fd985b7807cad&auto=format&fit=crop&w=1384&q=80'
	// 		]
	// 	},
	// 	{
	// 		date: '3 days ago',
	// 		image:
	// 			'https://images.unsplash.com/photo-1520266788700-d5fd44d1d2ba?ixlib=rb-0.3.5&s=a3b898d5de7b0ca04124173602273594&auto=format&fit=crop&w=1050&q=80',
	// 		meta: '8 Likes',
	// 		summary: 'Joe Henderson posted on his page',
	// 		extraText: "Ours is a life of constant reruns. We're always circling back to where we'd we started."
	// 	},
	// 	{
	// 		date: '4 days ago',
	// 		image:
	// 			'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0f994eef47e5fb1a67849703cc961b3&auto=format&fit=crop&w=600&q=60',
	// 		meta: '41 Likes',
	// 		summary: 'Justen Kitsune added 2 new photos of you',
	// 		extraText: 'Look at these fun pics I found from a few years ago. Good times.',
	// 		extraImages: [
	// 			'https://images.unsplash.com/photo-1518081461904-9d8f136351c2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8a815e999d0f593c8c8bbcb6473b0d39&auto=format&fit=crop&w=500&q=60'
	// 		]
	// 	}
	// ]

	render() {
		return (
			<div className="feedbackForm">
				{this.state.comments.map((comment, index) => (
					<Segment key={index}>
						{/* <Feed events={this.state.data} /> */}
						<Feed>
							<Feed.Event>
								<Feed.Label>
									<img
										style={{
											width: '38px',
											height: '38px',
											borderRadius: '50%',
											overFlow: 'hidden'
										}}
										src={comment.image || ''}
									/>
								</Feed.Label>
								<Feed.Content>
									<Feed.Summary>
										<Feed.User>{comment.name}</Feed.User>
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
			</div>
		);
	}
}

export default FeedbackForm;
