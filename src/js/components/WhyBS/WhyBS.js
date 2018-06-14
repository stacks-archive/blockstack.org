import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import Divider from 'assets/images/divider-1';

import debounce from 'debounce';

import './WhyBS.scss';

const compareRows = [
	{
		title : 'Storage',
		leftItem : 'Google servers',
		rightItem : 'No servers. Encrypted piggyback on Google, AWS, and Azure'
	},
	{
		title : 'Authentication',
		leftItem : 'Google authentication',
		rightItem : 'Universal, user owned ID'
	},
	{
		title : 'Scaling',
		leftItem : 'Scaling costs ($/gigabyte)',
		rightItem : 'User owned storage. No incremental scaling costs.'
	},
	{
		title : 'Community',
		leftItem : 'Owned by Google',
		rightItem : 'Open source. 7000+ devs.'
	},
	{
		title : 'Decentralization',
		leftItem : 'None. Highly centralized.',
		rightItem : 'Stacks blockchain'
	},
];

class WhyBS extends Component {

	state = {
		mobile : false,
	}

	componentDidMount () {
		this.toggleMobileComparision();
		window.addEventListener('resize', this.toggleMobileComparision);
	}

	componentWillUnmount () {
		window.removeEventListener('resize', this.toggleMobileComparision);	
	}

	toggleMobileComparision = debounce(() => {
		if(window.innerWidth > 800) {
			this.setState({ mobile : false });
		} else {
			this.setState({ mobile : true });
		}
	});

	render() {
		return (
			<section className="why-bs py-3">
				<div className="container align-center mb-4">
					<h2 className="main-color">Why build on Blockstack?</h2>
					<InlineSVG src={Divider} element="div" className="main-color pt-2 pb-1" />
					<ol className="dashlist main-color">
						<li><p>Get paid mining rewards if you build a popular app</p></li>
						<li><p>Scale your app orders of magnitude greater than blockchain alone</p></li>
						<li><p>Gain a competitive advantage by giving your users data ownership</p></li>
					</ol>
				</div>
				{this.state.mobile ? (
					<div className="bs-mobile-compare-table pt-1px pb-4">
						<div className="container">
							<div className="left-col-header"><div className="p sm main-color title">Firebase</div></div>
							<div className="right-col-header"><div className="p sm main-color title">Blockstack</div></div>
							{compareRows.map( (row, index) => {
								return (
									<div className="bs-compare-row my-1" key={'compare-row-' + index}>
										<div className="grid-flex no-break no-gutter">
											<div className="col-12">
												<div className="px-tight-gutter mt-tight-gutter align-center"><h5 className="p sm main-color row-title">{row.title}</h5></div>
											</div>
											<div className="col-6 align-right">
												<div className="px-tight-gutter pb-tight-gutter pt-1 mb-1"><p className="sm main-color">{row.leftItem}</p></div>
											</div>
											<div className="col-6 align-left">
												<div className="px-tight-gutter pb-tight-gutter pt-1 mb-1"><p className="sm main-color">{row.rightItem}</p></div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				) : (
					<div className="bs-compare-table pt-1px pb-4">
						<div className="container">
							<div className="left-col-header"><div className="p sm main-color title">Firebase</div></div>
							<div className="right-col-header"><div className="p sm main-color title">Blockstack</div></div>
							{compareRows.map( (row, index) => {
								return (
									<div className="bs-compare-row p-gutter my-1" key={'compare-row-' + index}>
										<div className="grid-flex middle no-break">
											<div className="col grow"><p className="sm main-color">{row.leftItem}</p></div>
											<div className="col no-grow center-col align-center"><h5 className="p sm main-color">{row.title}</h5></div>
											<div className="col grow"><p className="sm main-color">{row.rightItem}</p></div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</section>
		);
	}
}

export default WhyBS;
