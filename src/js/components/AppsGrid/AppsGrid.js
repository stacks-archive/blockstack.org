import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import AppCard from './components/AppCard.js';
import TriangleDown from 'assets/images/triangle-down';

import './AppsGrid.scss'

class AppsGrid extends Component {
	render() {
		return (
			<section className="triangle-bg mb-2">
				<div className="container pb-margin">
					<h2 className="p white align-center py-3">Live dapps built by our community</h2>
					<div className="grid-flex collapse-3-2-1 v-spaced">
						<div className="col">
							<AppCard
								appName="Graphite"
								appDescription="Collaborative decentralized docs"
								appIcon="http://unsplash.it/300/300"
							/>
						</div>
						<div className="col">
							<AppCard
								appName="Hermes"
								appDescription="Encrypted peer-to-peer chat"
								appIcon="http://unsplash.it/300/300"
							/>
						</div>
						<div className="col">
							<AppCard
								appName="Dotpodcast"
								appDescription="Discover and listen to podcasts"
								appIcon="http://unsplash.it/300/300"
							/>
						</div>
						<div className="col">
							<AppCard
								appName="Kanstack"
								appDescription="Decentralized Kanban sprint board"
								appIcon="http://unsplash.it/300/300"
							/>
						</div>
						<div className="col">
							<AppCard
								appName="Coinfort"
								appDescription="Encrypted crypto tracker"
								appIcon="http://unsplash.it/300/300"
							/>
						</div>
						<div className="col">
							<AppCard
								className="dark"
								appName="Dotpodcast"
								appDescription="View all live Blockstack dapps"
								appIcon="http://unsplash.it/300/300"
							/>
						</div>
					</div>
				</div>
				<InlineSVG src={TriangleDown} element="div" className="triangle triangle-down" />
			</section>
		);
	}
}

export default AppsGrid;
