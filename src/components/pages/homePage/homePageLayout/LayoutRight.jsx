import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import imgURL from '../../../../img/Lee.jpg';

class LayoutRight extends Component {
	state = {};
	render() {
		return (
			<div>
				<Image bordered rounded size="large" src={imgURL} />
			</div>
		);
	}
}

export default LayoutRight;
