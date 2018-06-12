import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Logo from 'assets/images/Logo';

import './Header.scss'

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="container">
					<div className="grid-flex no-break">

						<div className="col no-grow">
							<InlineSVG src={Logo} element="div" className="es-logo" />
						</div>

						<div className="col no-grow">
							<a className="p sm">Menu</a>
						</div>

					</div>
				</div>
			</header>
		);
	}
}

export default Header;

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>