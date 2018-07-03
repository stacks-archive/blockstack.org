import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Logo from 'assets/images/Logo.svg';

import './Card.scss'

class Header extends Component {
	render() {
		return (
			this.props.href ? (
				<a href={this.props.href} target={this.props.target} className={"g-card link " + this.props.className}>{this.props.children}</a>
			) : (
				<div className={"g-card " + this.props.className}>{this.props.children}</div>
			)
		);
	}
}

export default Header;

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>