import React, { Component } from 'react';


import Card from 'js/components/Card';
import TopArea from 'js/components/TopArea';
import AppsGrid from 'js/components/AppsGrid';
import WhyBS from 'js/components/WhyBS';
import OurTechnology from 'js/components/OurTechnology';
import OurCommunity from 'js/components/OurCommunity';
import FundApp from 'js/components/FundApp';
import Mission from 'js/components/Mission';

import './App.scss';

class App extends Component {
	render() {
		const { data } = this.props

		return (
			<div>
				<TopArea links={data.site.siteMetadata.bslinks} />
				<AppsGrid links={data.site.siteMetadata.bslinks} />
				<WhyBS/>
				<OurTechnology/>
				<OurCommunity links={data.site.siteMetadata.bslinks} />
				<FundApp links={data.site.siteMetadata.bslinks}/>
				<Mission/>
			</div>
		);
	}
}

export default App;
