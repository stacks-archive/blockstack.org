import React, { Component } from 'react';

import Header from 'containers/Header';
import Hero from 'containers/Hero';
import Footer from 'containers/Footer';


import './App.scss';

class App extends Component {
	render() {
		return (
			<div className="landing-page">
				<Header />
				<Hero />
				<Footer />
			</div>
		);
	}
}

export default App;
