import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Logo from 'assets/images/Logo.svg';

import './Mission.scss'

class Header extends Component {
	render() {
		return (
			<section className="mission py-4">
				<div className="container align-center">
					<h3 className="p main-color pb-3">Our mission</h3>
					<p className="main-color">Build an ecosystem that gives your users control over their fundamental digital rights: Identity, data-ownership, privacy, and security. Join us and help build the new internet.</p>
				</div>
			</section>
		);
	}
}

export default Header;

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>