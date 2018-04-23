import React, { Component } from 'react';


import web1 from 'assets/images/web-1.png';

import mobile1 from 'assets/images/mobile-1.png';

import './Hero.scss';

import Device from 'components/Device';

class Hero extends Component {

	// TOOD Shift things up as you scroll

	render() {
		return (
			<section id="hero" className="full-height hero">
				<div className="colorful">
					<div className="container">
					<div className="grid">
					  <div className="cell-1">
							<h1>The Ultimate Physical Security Assessment Toolset</h1>
							<a className="button" href="https://app.easysetgo.com">Create Your First Report</a>
					  </div>
					  <div className="cell-2">
							<Device
								type="desktop"
								content={<img src={web1} />}
							/>

					  </div>
					  <div className="cell-3">
							<Device
								type="iphone"
								content={<img src={mobile1} />}
							/>
					  </div>
					</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Hero;
//<div className="full-height bg"></div>