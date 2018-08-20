import React from 'react';
import img from '../../../../img/Lee.jpg';
import { Segment, Header, Image, Container, Icon, Label } from 'semantic-ui-react';

const BookContent = () => {
	return (
		<Container className="mainContent">
			<Header
				as="h1"
				textAlign="justified"
				size="large"
				style={{ margin: '0px 140px 15px', paddingTop: '80px', width: '650px' }}
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
					margin: '0 auto 60px',
					fontSize: '19px',
					boxShadow: '3px 5px 3px #888888'
				}}
			>
				<Container fluid>
					<div style={{ width: '90%', margin: '20px auto', paddingTop: '21px' }}>
						<Header as="h1">Dogs Roles with Humans</Header>
						<p style={{ textIndent: '3rem' }}>
							Even New York’s die-hard defenders want to flee the city come summer. When popsicle-colored
							dreams of warm afternoons watching kids run through gushing fire hydrants fade, we’re left
							with all the obligations and dress codes of regular life — plus the added challenge of
							enduring tropical subway stations. An air conditioner always breaks, a promise of summer
							love goes flat like a soda left out in the sun, ambitious walks home are overwhelmed by
							packs of tourists and layers of sirens and an unexpected rainstorm.
						</p>
						<Image as="img" src={img} size="small" floated="left" circular />
						<p>
							This summer is particularly oppressive, and not just because of the overwhelming heat.
							Social media feeds were a disorienting mess this Fourth of July: jubilant babies in
							sunglasses interspersed with reflective captions about what patriotism really means. Local,
							national, and international news has been weighing so heavily, it’s no wonder everyone seems
							to be on edge and desperate for escape
						</p>
						<p style={{ textIndent: '3rem' }}>
							An example: When I was in despair over Hurricane Maria, I took a walk to clear my
							hashtag-clogged brain and saw a handwritten sign on a post office reading, “Thank you for
							your food and clothes! We are at capacity for Puerto Rico donations.” While the national
							news paralyzed me into hopelessness, this piece of local news inspired me to chip in some
							extra money. Counterintuitively, when the state of humanity is driving me to give up,
							spending time around humans inspires me to keep going.
						</p>
					</div>
				</Container>
			</Segment>
		</Container>
	);
};

export default BookContent;
