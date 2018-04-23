import React, { Component } from 'react';

import InlineSVG from 'svg-inline-react';

import individual from 'assets/images/individual.svg';
import smallBusiness from 'assets/images/small-business.svg';
import corporate from 'assets/images/corporate.svg';

import './Pricing.scss';

class Pricing extends Component {
	render() {
		return (
			<section id="pricing" className="pricing">
				<div className="section-header red">
					<div className="container">
						<h2 className="section-title">Pricing</h2>
						<h5 className="section-subtitle">EasySet is Free to use.<br /> Only pay when satisfied with your final report.</h5>
					</div>
				</div>
				<div className="content">
					<div className="container">
						<div className="flex-grid">
							<div className="col-4">
								<div className="card">
									<h4>Individual</h4>
									<InlineSVG src={individual} element="div" className="space-before space-after individual-image" />
									<h2>1 Report</h2>
									<p className="space-after">Pay as you go</p>
									<ul className="space-after">
										<li>Risk-Free!</li>
										<li>EasySet Mobile App</li>
										<li>Desktop Fine Tuning</li>
										<li>Branding & Customization</li>
										<li>Free PDF Previews</li>
										<li>Real-Time Team Assessments</li>
										<li>Unlimited Downloads</li>
										<li>$299 Per Report</li>
									</ul>
									<a className="button block" href="https://app.easysetgo.com">More Info</a>
								</div>
							</div>
							<div className="col-4">
								<div className="card">
									<h4>Small Business</h4>
									<InlineSVG src={smallBusiness} element="div" className="space-before space-after small-business-image" />
									<h2>10 Reports</h2>
									<p className="space-after">Save 20% Per Report</p>
									<ul className="space-after">
										<li>Most Popular!</li>
										<li>EasySet Mobile App</li>
										<li>Desktop Fine Tuning</li>
										<li>Free PDF Previews</li>
										<li>Branding & Customization</li>
										<li>Real-Time Team Assessments</li>
										<li>Unlimited Downloads</li>
										<li>*Only $240 Per Report</li>
									</ul>
									<a className="button block" href="https://app.easysetgo.com">More Info</a>
								</div>
							</div>
							<div className="col-4">
								<div className="card">
									<h4>Corporate</h4>
									<InlineSVG src={corporate} element="div" className="space-before space-after corporate-image" />
									<h2>20 Reports</h2>
									<p className="space-after">Save 33% Per Report</p>
									<ul className="space-after">
										<li>Best Value!</li>
										<li>EasySet Mobile App</li>
										<li>Desktop Fine Tuning</li>
										<li>Free PDF Previews</li>
										<li>Branding & Customization</li>
										<li>Real-Time Team Assessments</li>
										<li>Unlimited Downloads</li>
										<li>*Only $200 Per Report</li>
									</ul>
									<a className="button block" href="https://app.easysetgo.com">More Info</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Pricing