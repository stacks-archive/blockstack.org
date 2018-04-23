import React, { Component } from 'react';

import InlineSVG from 'svg-inline-react';

import image1 from 'assets/images/how-it-works-1.png';
import image2 from 'assets/images/how-it-works-2.png';

import step1 from 'assets/images/step-1.svg';
import step2 from 'assets/images/step-2.svg';
import step3 from 'assets/images/step-3.svg';

import './HowItWorks.scss';

class HowItWorks extends Component {

	render() {
		return (
			<section id="how-it-works" className="how-it-works">
				<div className="section-header grey">
					<div className="container">
						<h2 className="section-title">How it works</h2>
						<h5 className="section-subtitle">The easiest way to create professional security assesment reports.</h5>
					</div>
				</div>
				<div className="content">
					<div className="container">
						<div className="flex-grid">
							<div className="col-6">
								<InlineSVG src={step1} element="div" className="step-image space-after" />
								<div className="step-content">
								<div className="num">1</div>
								<h5>Identify & Solve Each Vulnerability</h5>
								<p>Individually or as a team, download the EasySet app and simultaneously conduct your physical security survey in real-time. With EasySet, it's as easy as 1, 2, 3. Simply choose the area, identify the vulnerability, and select your solutions.</p>
								</div>
								<InlineSVG src={step2} element="div" className="step-image space-after" />
								<div className="step-content">
								<div className="num">2</div>
								<h5>Document, Report & Assess</h5>
								<p>EasySet makes it simple to add custom notes, document, and photograph each and every vulnerability, all with your smartphone.</p>
								</div>
								<InlineSVG src={step3} element="div" className="step-image space-after" />
								<div className="step-content">
								<div className="num">3</div>
								<h5>Review, Edit, & Deliver Stunning Reports</h5>
								<p>Before you return to the office, your report is already done. Review, edit and fine-tune your assessment on the EasySet web interface. With EasySet, present an impressive assessment to your client every time.</p>
								</div>
							</div>
							<div className="col-6">

								<img src={image1} className="space-after" />
								<img src={image2} className="space-after" />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default HowItWorks;