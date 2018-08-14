import React, { Component } from 'react';
import { Grid, Header, Divider } from 'semantic-ui-react';

class LayoutLeft extends Component {
	state = {};
	render() {
		return (
			<div>
				<Grid container>
					<Grid.Row>
						<Grid.Column width={14}>
							<div className="headerIntroduction">We Make Bananas That Can Dance</div>
							<div className="drawLine" />
							<div>
								<div className="headerIntroductionAd">
									Become a Medium member for $5/month or $50/year and get unlimited access to the
									smartest writers and biggest ideas you won’t find anywhere else.
								</div>
								<div className="headerIntroductionAd">
									Your favorite writers, thinkers, and experts are publishing their best work on
									Medium. And you’ll get access to all of it as a member. Here’s a sample of the
									diverse, bold thinking you can expect:
								</div>
							</div>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default LayoutLeft;
