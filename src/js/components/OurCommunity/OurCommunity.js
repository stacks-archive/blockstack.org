import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import Card from 'components/Card';
import TriangleBg from 'components/TriangleBg';
import Arrow from 'assets/images/outline-arrow';
import Divider from 'assets/images/divider-2';

import './OurCommunity.scss';

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
	}
];

class OurCommunity extends Component {
	render() {
		return (
			<section>
				<div className="blue-bg bs-pb-card">
					<div className="container">
						<InlineSVG src={Divider} element="div" className="text-color pt-4 pb-4 align-center" />
						<div className="align-center pb-3 mb-1">
							<p>Our community</p>
						</div>
					</div>	
				</div>
				<div className="triangle-bg pb-margin">
					<div className="container bs-mtn-card">
						<div>
							<div className="grid-flex tight-gutter center">
								{cards.map( (card, index) => {
									return (
										<div key={"community-card-" + index} className="col-4">
											<Card className="card mb-tight-gutter min-height c-mtn-height" href="#">
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
								})}
								<div className="col-12">
									<Card className="card" href="#">
										<div className="p-2">
											<div className="grid-flex tight-gutter no-break pb-1">
												<div className="col grow">
													<p className="main-color underline-hover">card.title</p>
												</div>
												<div className="col no-grow">
												<InlineSVG src={Arrow} element="div" />
												</div>
											</div>
											<p className="sm">Experts on privacy, blockchain, information theory, and the decentralized community.</p>
										</div>
									</Card>
								</div>
							</div>
						</div>
					</div>
					<div className="container align-center pt-3 mt-2">
						<nav className="line-nav main-color">
							<ul>
								<li><a href="#">Slack</a></li>
								<li><a href="#">Github</a></li>
								<li><a href="#">App.co</a></li>
								<li><a href="#">Blog</a></li>
								<li><a href="#">YouTube</a></li>
							</ul>
						</nav>
					</div>
					<TriangleBg className="down bs-mt-card"/>
				</div>
			</section>
		);
	}
}

export default OurCommunity;
