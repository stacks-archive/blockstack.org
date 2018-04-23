import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Logo from 'assets/images/Logo';

import './Header.scss'

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="container">
					<div className="flex-grid no-break">

						<div className="col-3 align-left">
								<InlineSVG src={Logo} element="div" className="es-logo" />
						</div>

						<div className="col-no-grow align-right">
							<a href="#" className="all-caps">How It Works</a>
						</div>

						<div className="col-no-grow align-right">
							<a href="#" className="all-caps">Pricing</a>
						</div>

						<div className="col-no-grow align-right">
							<a href="#" className="all-caps">Solution</a>
						</div>

						<div className="col-no-grow align-right">
							<a href="#" className="all-caps">Mobile App</a>
						</div>

						<div className="col-no-grow align-right">
							<a href="https://app.easysetgo.com/login" className="all-caps">Login</a>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>