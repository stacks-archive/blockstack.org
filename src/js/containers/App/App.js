import React, { Component } from 'react';

import Header from 'containers/Header';
import Hero from 'containers/Hero';
import Footer from 'containers/Footer';

import HowItWorks from 'containers/HowItWorks';
import Pricing from 'containers/Pricing';
import Solution from 'containers/Solution';
import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="landing-page">
				<Header />
				<Hero />
				<HowItWorks />
				<Pricing />
				<Solution />
				<Footer />
			</div>
		);
	}
}

export default App;
