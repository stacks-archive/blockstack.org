import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import AppCard from './components/AppCard.js';
import Card from 'js/components/Card';
import TriangleBg from 'js/components/TriangleBg';
import Arrow from 'assets/images/outline-arrow.svg';

// App Icons
import GraphiteIcon from 'assets/images/app-graphite.png';
import HermesIcon from 'assets/images/app-hermes.png';
import DotpodcastIcon from 'assets/images/app-dotpodcast.png';
import KanstackIcon from 'assets/images/app-kanstack.png';
import CoinfortIcon from 'assets/images/app-coinfort.png';
import AppCoIcon from 'assets/images/app-co-icon.png';

import './AppsGrid.scss';

const cards = [
	{
		title : 'Graphite',
		icon : GraphiteIcon,
		link : '#',
		description : 'Collaborative decentralized docs'
	},
	{
		title : 'Hermes',
		icon : HermesIcon,
		link : '#',
		description : 'Encrypted peer-to-peer chat'
	},
	{
		title : 'Dotpodcast',
		icon : DotpodcastIcon,
		link : 'https://github.com/DotPodcast/dotpodcast-player',
		description : 'Discover and listen to podcasts'
	},
	{
		title : 'Kanstack',
		icon : KanstackIcon,
		link : '#',
		description : 'Decentralized Kanban sprint board'
	},
	{
		title : 'Coinfort',
		icon : CoinfortIcon,
		link : '#',
		description : 'Encrypted crypto tracker'
	}
];

class AppsGrid extends Component {
	render() {
		return (
			<section className="app-grid mb-2">
				<div className="div triangle up"></div>
				<div className="hang-section-title">
					<div className="container">
						<div className="align-center pb-3 mb-1">
							<h3 className="p white">Live dapps built by our community</h3>
						</div>
					</div>
				</div>
				<div className="triangle-bg">
					<div className="container pb-4 bs-mtn-card">
						<div className="grid-flex collapse-3-2-1 v-spaced">
							{cards.map( (app, index) => {
								return (
									<div className="col" key={"app-card-" + index}>
										<AppCard
											appName={app.title}
											appDescription={app.description}
											appIcon={app.icon}
											href={app.link}
										/>
									</div>
								);
							})}
							<div className="col">
								<Card className="p-gutter app-card dark large-icon flex-center" href={this.props.links.liveApps}>
									<div>
										<div className="grid-flex no-break middle">
											<div className="col no-grow">
												<div className="icon-wrap">
													<img className="icon" src={AppCoIcon} />
												</div>
											</div>
											<div className="col grow align-left">
												<div className="app-desc">
													<p className="underline-hover">View all live Blockstack dapps</p>
												</div>
											</div>
										</div>
									</div>
									<div className="ml-1 view-arrow" ><div className="bs-outline-arrow">{Arrow()}</div></div>
								</Card>
							</div>
						</div>
					</div>
					<TriangleBg className="bs-mt-card" direction="down" />
				</div>
			</section>
		);
	}
}

export default AppsGrid;
