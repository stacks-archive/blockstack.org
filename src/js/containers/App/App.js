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
		return (
			<div>
				<TopArea/>
				<AppsGrid/>
				<WhyBS/>
				<OurTechnology/>
				<OurCommunity/>
				<FundApp/>
				<Mission/>
			</div>
		);
	}
}

export default App;
