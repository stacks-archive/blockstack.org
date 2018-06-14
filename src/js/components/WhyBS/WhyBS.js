import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import Divider from 'assets/images/divider-1';

import './WhyBS.scss'

class WhyBS extends Component {
	render() {
		return (
			<section className="why-bs py-3">
				<div className="container align-center">
					<h2 className="main-color">Why build on Blockstack?</h2>
					<InlineSVG src={Divider} element="div" className="main-color pt-2 pb-1" />
					<ol className="dashlist main-color">
						<li><p>Get paid mining rewards if you build a popular app</p></li>
						<li><p>Scale your app orders of magnitude greater than blockchain alone</p></li>
						<li><p>Gain a competitive advantage by giving your users data ownership</p></li>
					</ol>
				</div>
			</section>
		);
	}
}

export default WhyBS;
