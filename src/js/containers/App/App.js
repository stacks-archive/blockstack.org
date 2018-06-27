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

const bslinks = {
	'tutorials' : '#',
	'documentation' : 'http://blockstack.github.io/blockstack.js/',
	'github' : 'https://github.com/blockstack',
	'forum' : 'https://forum.blockstack.org/',
	'slack' : 'http://chat.blockstack.org/',
	'meetup' : 'http://www.meetup.com/topics/blockstack/',
	'blog' : 'https://blockstack.org/blog',
	'youtube' : 'https://www.youtube.com/channel/UC3J2iHnyt2JtOvtGVf_jpHQ',
	'twitter' : 'https://www.twitter.com/blockstack/',
	'branding' : 'https://projects.invisionapp.com/boards/HE2VVROFSGB27/',
	'install' : '/install',
	'liveApps' : '/apps',
	'whitePapers' : '/papers',
	'about' : '/about',
	'faq' : '/faq',
	'careers' : '/careers',
	'press' : '/press',
	'swag' : '/swag',
	'disclaimers' : '#',
	'tos' : '#',
	'privacy' : '#',
	'appCo' : '#',
	'signatureFund' : '#',
	'events' : '#'
}

class App extends Component {
	render() {
		return (
			<div className="landing-page">
				<Header links={bslinks}/>
				<TopArea links={bslinks}/>
				<AppsGrid links={bslinks}/>
				<WhyBS/>
				<OurTechnology/>
				<OurCommunity links={bslinks}/>
				<FundApp/>
				<Mission/>
				<Footer links={bslinks} />
			</div>
		);
	}
}

export default App;
