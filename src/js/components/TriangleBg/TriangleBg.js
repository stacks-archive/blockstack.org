import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import TriangleTopLeft from 'assets/images/triangle-top-left';
import TriangleTopRight from 'assets/images/triangle-top-right';

import './TriangleBg.scss'

class Header extends Component {
	render() {
		return (
			<div className={"pattern-triangle " + this.props.className}>
				<InlineSVG src={TriangleTopLeft} element="div" className="triangle triangle-top-left" />
				<InlineSVG src={TriangleTopRight} element="div" className="triangle triangle-top-right" />
			</div>
		);
	}
}

export default Header;

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>