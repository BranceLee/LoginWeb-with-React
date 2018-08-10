import React, { Component } from 'react';
import HomePageContainer from './HomePageContainer';
import LayoutLeft from './homePageLayout/LayoutLeft';
import LayoutRight from './homePageLayout/LayoutRight';
import { Segment, Grid, Header, Image } from 'semantic-ui-react';

class HomePageLayout extends Component {
	state = {};
	render() {
		return (
			<Segment style={{ padding: '6em 0' }} vertical>
				<Grid container>
					<Grid.Row>
						<Grid.Column width={11}>
							<LayoutLeft />
						</Grid.Column>

						<Grid.Column width={5}>
							<LayoutRight />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		);
	}
}

export default HomePageLayout;
