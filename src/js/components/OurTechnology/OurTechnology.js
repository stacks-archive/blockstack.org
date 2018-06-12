import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import Card from 'components/Card';
import TriangleDown from 'assets/images/triangle-down';
import Arrow from 'assets/images/outline-arrow';

import './OurTechnology.scss';

const cards = [
	{
		title : 'SDKs',
		link : '#',
		description : 'Dev tools: Web, iOS, Android'
	},
	{
		title : 'Browser',
		link : '#',
		description : 'Auth and identity mgmt apps'
	},
	{
		title : 'Blockstack Naming Sys. ',
		link : '#',
		description : 'Discover apps and people'
	},
	{
		title : 'Gaia',
		link : '#',
		description : 'Decentralized storage hubs'
	},
	{
		title : 'Stacks',
		link : '#',
		description : 'Token to register IDs and apps'
	},
	{
		title : 'Virtual Chain',
		link : '#',
		description : 'State engine pegged to blockchain'
	},
	{
		title : 'Atlas',
		link : '#',
		description : 'Peer-to-peer network'
	},
	{
		title : 'Stacks Blockchain',
		link : '#',
		description : 'Proof of burn blockchain'
	},
];

class OurTechnology extends Component {
	render() {
		return (
			<section className="blue-bg">
				<div className="triangle-bg pt-margin">
					<div className="container">
						<div className="align-center pb-4">
							<p>Our technology (Block)stack</p>
						</div>
						<div>
							<div className="grid-flex tight-gutter center">
								<div className="col-8">
									<div className="grid-flex tight-gutter center">
										{cards.map( (card, index) => {
											if (index < 4) {
												return (
													<div key={"tech-card-" + index} className="col-6">
														<Card className="card mb-tight-gutter" href="#">
															<div className="p-2">
																<div className="grid-flex tight-gutter no-break">
																	<div className="col grow">
																		<p className="main-color">{card.title}</p>
																	</div>
																	<div className="col no-grow">
																		<InlineSVG src={Arrow} element="div" />
																	</div>
																</div>
																<p className="sm">Dev tools: Web, iOS, Android</p>
															</div>
														</Card>
													</div>
												);
											}
										})}
									</div>
								</div>
								<div className="col-12"></div>
								{cards.map( (card, index) => {
									var length = cards.length - 1;
									if (index > 3 && index != length) {
										return (
											<div key={"tech-card-" + index} className="col-4">
												<Card className="card mb-tight-gutter" href="#">
													<div className="p-2">
														<div className="grid-flex tight-gutter no-break">
															<div className="col grow">
																<p className="main-color">{card.title}</p>
															</div>
															<div className="col no-grow">
																<InlineSVG src={Arrow} element="div" />
															</div>
														</div>
														<p className="sm">Dev tools: Web, iOS, Android</p>
													</div>
												</Card>
											</div>
										);
									} else if (index == length) {
										return(
											<div key={"tech-card-" + index} className="col-12">
												<Card className="card" href="#">
													<div className="p-2">
														<div className="grid-flex tight-gutter no-break">
															<div className="col grow">
																<p className="main-color">{card.title}</p>
															</div>
															<div className="col no-grow">
																<InlineSVG src={Arrow} element="div" />
															</div>
														</div>
														<p className="sm">Dev tools: Web, iOS, Android</p>
													</div>
												</Card>
											</div>
										);
									}
								})}
							</div>
						</div>
					</div>
					<InlineSVG src={TriangleDown} element="div" className="triangle triangle-down" />
				</div>
			</section>
		);
	}
}

export default OurTechnology;
