import React, { Component } from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

class BookLibray extends Component {
	state = {};
	render() {
		return (
			<div className="bookLibray">
				<Grid columns={3}>
					<Grid.Row>
						<Grid.Column>
							<Image
								className="booklibImg"
								src="https://cdn-images-1.medium.com/max/1250/1*5TBstrwpQEOfhcwnRSqA9A.png"
							/>
							<Header as="h3">We Have a Podcast! Meet the Hosts</Header>
							<h4>
								Kara Brown and Manoush Zomorodi discuss the power of voice, their favorite books, and
								fancy pasta
							</h4>
						</Grid.Column>
						<Grid.Column>
							<Image
								className="booklibImg"
								src="https://cdn-images-1.medium.com/max/1600/1*ga2cr_Q2lb7JKFEGXDYM7g.png"
							/>
							<Header as="h3">A New Kind of Playground</Header>
							<h4>Recent stories that take a deeper look at the effects of technology on youth</h4>
						</Grid.Column>
						<Grid.Column>
							<Image
								className="booklibImg"
								src="https://cdn-images-1.medium.com/max/1600/0*UYZse7a8K6n-Dsug"
							/>
							<Header as="h3">Four Improvements to Our App, Designed for Your Eyes Only</Header>
							<h4>The latest Medium app updates and design changes help you focus on the words</h4>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default BookLibray;
