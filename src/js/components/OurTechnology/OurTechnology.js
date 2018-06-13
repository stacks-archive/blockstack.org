import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import Card from 'components/Card';
import TriangleBg from 'components/TriangleBg';
import Arrow from 'assets/images/outline-arrow';

import GraphiteIcon from 'assets/images/app-hermes';
import HermesIcon from 'assets/images/app-hermes';
import DotpodcastIcon from 'assets/images/app-dotpodcast';
import KanstackIcon from 'assets/images/app-dotpodcast';
import CoinfortIcon from 'assets/images/app-coinfort';

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
						<div className="align-center pb-3 mb-1">
							<p>Our technology (Block)stack</p>
						</div>
					</div>
					<div className="container very-narrow pt-3">
						<div className="g-card dark px-2 pb-2 align-center mb-tight-gutter pt-1px">
							<div className="grid-flex no-break tight-gutter center mtn-3">
								<div className="col"><img src={GraphiteIcon} style={{ width: '60px' }} /></div>
								<div className="col"><img src={GraphiteIcon} style={{ width: '60px' }} /></div>
								<div className="col"><img src={GraphiteIcon} style={{ width: '60px' }} /></div>
								<div className="col"><img src={GraphiteIcon} style={{ width: '60px' }} /></div>
							</div>
							<p className="sm pt-2">Amazing dapps built by you!</p>
						</div>
					</div>
					<div className="container">
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
																<div className="grid-flex tight-gutter no-break pb-1">
																	<div className="col grow">
																		<p className="main-color underline-hover">{card.title}</p>
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
														<div className="grid-flex tight-gutter no-break pb-1">
															<div className="col grow">
																<p className="main-color underline-hover">{card.title}</p>
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
														<div className="grid-flex tight-gutter no-break pb-1">
															<div className="col grow">
																<p className="main-color underline-hover">{card.title}</p>
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
					<TriangleBg className="down"/>
				</div>
			</section>
		);
	}
}

export default OurTechnology;
