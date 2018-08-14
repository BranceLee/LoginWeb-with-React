import React, { Component } from 'react';
import { Image, Divider } from 'semantic-ui-react';
import imgURL from '../../../../img/log.jpg';

class LayoutRight extends Component {
	state = {};
	render() {
		return (
			<div className="rightSideJpg">
				<Image src={imgURL} />
			</div>
		);
	}
}

export default LayoutRight;
