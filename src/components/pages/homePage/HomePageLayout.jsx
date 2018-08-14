import React, { Component } from 'react';
import HomePageContainer from './HomePageContainer';
import LayoutLeft from './homePageLayout/LayoutLeft';
import LayoutRight from './homePageLayout/LayoutRight';
import { Segment, Grid, Header, Image, Container, Icon } from 'semantic-ui-react';
import FeedbackForm from './homePageLayout/FeedbackForm';

class HomePageLayout extends Component {
	state = {};
	render() {
		return (
			<div>
				<Segment style={{ padding: '6em 0' }} vertical>
					<Grid container>
						<Grid.Row>
							<Grid.Column width={10}>
								<LayoutLeft />
							</Grid.Column>

							<Grid.Column width={6}>
								<LayoutRight />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</Segment>
				<Container className="mainContent">
					<Header
						as="h1"
						textAlign="justified"
						size="large"
						style={{ margin: '20px 140px', paddingTop: '80px', width: '650px' }}
					>
						<Icon size="big" name="cubes" />
						<Header.Content>
							THOUSANDS OF PERSPECTIVES, ONE HOME
							<Header.Subheader style={{ margin: '5px' }}>Manage your preferences</Header.Subheader>
						</Header.Content>
					</Header>
					<Segment
						style={{
							width: '80%',
							margin: '0 auto',
							fontSize: '19px',
							boxShadow: '3px 5px 3px #888888'
						}}
					>
						<Container fluid>
							<div style={{ width: '90%', margin: '20px auto', paddingTop: '21px' }}>
								<Header as="h1">Dogs Roles with Humans</Header>
								<p>
									Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf
									ancestors, which would have been pack hunters with complex body language. These
									sophisticated forms of social cognition and communication may account for their
									trainability, playfulness, and ability to fit into human households and social
									situations, and these attributes have given dogs a relationship with humans that has
									enabled them to become one of the most successful species on the planet today.
								</p>
								<p>
									The dogs' value to early human hunter-gatherers led to them quickly becoming
									ubiquitous across world cultures. Dogs perform many roles for people, such as
									hunting, herding, pulling loads, protection, assisting police and military,
									companionship, and, more recently, aiding handicapped individuals. This impact on
									human society has given them the nickname "man's best friend" in the Western world.
									In some cultures, however, dogs are also a source of meat.
								</p>
							</div>
						</Container>
					</Segment>
				</Container>
				<FeedbackForm />
			</div>
		);
	}
}

export default HomePageLayout;
