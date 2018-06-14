import React, { Component } from 'react';

import Header from 'components/Header';
import Card from 'components/Card';


import TopArea from 'components/TopArea';
import AppsGrid from 'components/AppsGrid';
import WhyBS from 'components/WhyBS';
import OurTechnology from 'components/OurTechnology';
import OurCommunity from 'components/OurCommunity';
import FundApp from 'components/FundApp';
import Mission from 'components/Mission';
import Footer from 'components/Footer';

import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="landing-page">
				<Header/>
				<TopArea/>
				<AppsGrid/>
				<WhyBS/>
				<OurTechnology/>
				<OurCommunity/>
				<FundApp/>
				<Mission/>
				<Footer/>
			</div>
		);
	}
}

export default App;
