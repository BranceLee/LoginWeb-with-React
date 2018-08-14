import React from 'react';
import img from '../../../../img/Lee.jpg';
import { Segment, Header, Image, Container, Icon } from 'semantic-ui-react';

const BookContent = () => {
	return (
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
							packs of tourists and layers of sirens and an unexpected rainstorm. Once again, I’m forced
							to buy yet another bodega umbrella that will break upon opening, and my new sandals are
							soaked.
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
							Have you tried Tindering in the past few months? Everyone’s coming at it on the defense:
							quick to judge, to snark, to cancel, to ghost. Summer romance feels at once out of reach and
							pointless. It’s as easy to spiral into despair as it is to fall for the French tourist on
							the subway with the bright-blue shoes. Summer normally heightens our feelings of longing,
							nostalgia, excitement, and possibility, but in 2018, we carry an added sense of dread and
							despair to every beach bonfire and rooftop brunch.
						</p>
						<p style={{ textIndent: '3rem' }}>
							We are dreaming of taking off to some foreign mountains, to some country where the people
							are still optimistic, to a seaside town where we can pretend our biggest decision is between
							mint chocolate chip or salted caramel. We want to be away.
						</p>
						<p>
							I’ve been keeping a list on my phone of “Magical Things I’ve Seen in NYC” ever since I moved
							there last summer. They’re interactions or moments that lift me out of my day and into a
							miraculous sunny realm. I may linger there only a few seconds, but the effect of the
							momentary escape lingers for hours. Instead of whisking myself away from the city, these
							observations plunge me in deeper. They reorient my comment section–induced perspective that
							“humans are awful” to a softer sidewalk-induced perspective that “humans are complex,
							fascinating, wonderful.”
						</p>
						<p style={{ textIndent: '3rem' }}>
							An example: When I was in despair over Hurricane Maria, I took a walk to clear my
							hashtag-clogged brain and saw a handwritten sign on a post office reading, “Thank you for
							your food and clothes! We are at capacity for Puerto Rico donations.” While the national
							news paralyzed me into hopelessness, this piece of local news inspired me to chip in some
							extra money. Counterintuitively, when the state of humanity is driving me to give up,
							spending time around humans inspires me to keep going.
						</p>
						<p>
							I listen, and I watch, and I record the split-seconds of magic, humor, kindness, and grace
							that give me the sense that I have escaped into the kind of gentle world I dream of
							inhabiting. I’m not away from the chaos — rather, I’m in the middle of it — but I am away
							from the despair, the disorientation, and the easy irritation that I’m so desperate to
							escape this summer.
						</p>
					</div>
				</Container>
			</Segment>
		</Container>
	);
};

export default BookContent;
