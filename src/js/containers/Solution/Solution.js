import React, { Component } from 'react';

import ReactPlayer from 'react-player'

import './Solution.scss';

class Solution extends Component {
	render() {
		return (
			<section id="solution" className="solution">
				<div className="content">
					<div className="container">
						<div className="video">
							<ReactPlayer url='https://www.youtube.com/watch?v=0_k-KAUOQnE' />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Solution;