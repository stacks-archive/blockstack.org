import React, { Component } from 'react';

import InlineSVG from 'svg-inline-react';

import appIcon from 'assets/images/AppIcon.svg';
import appStore from 'assets/images/AppStore.svg';

import './Mobile.scss';

class Mobile extends Component {
	render() {
		return (
			<section id="mobile" className="mobile">
				<div className="section-header">
					<div className="container">
						<InlineSVG src={appIcon} element="div" className="app-icon" />
					</div>
				</div>
				<div className="content mobile-content">
					<div className="container">
						<InlineSVG src={appStore} element="a" href="https://itunes.apple.com/us/app/easyset-security-templates/id1337277481?mt=8" target="_blank" className="app-store" />
					</div>
				</div>
			</section>
		);
	}
}

export default Mobile;
