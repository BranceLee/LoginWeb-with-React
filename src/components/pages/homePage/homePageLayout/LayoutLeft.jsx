import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';

class LayoutLeft extends Component {
	state = {};
	render() {
		return (
			<div>
				<Grid container>
					<Grid.Row>
						<Grid.Column width={8}>
							<Header as="h3" style={{ fontSize: '1.5em' }}>
								We Make Bananas That Can Dance
							</Header>
							<p style={{ fontSize: '1.33em' }}>
								Yes that's right, you thought it was the stuff of dreams, but even bananas can be
								bioengineered.
							</p>
						</Grid.Column>
						<Grid.Column width={8}>
							<Header as="h3" style={{ fontSize: '1.5em' }}>
								What are your friends reading?
							</Header>
							<p style={{ fontSize: '1.33em' }}>
								Chances are your friends are discussing their favorite (and least favorite) books on
								Goodreads.
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default LayoutLeft;
