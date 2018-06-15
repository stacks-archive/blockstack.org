import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import TriangleTopLeft from 'assets/images/triangle-top-left';
import TriangleTopRight from 'assets/images/triangle-top-right';
import TriangleBottomLeft from 'assets/images/triangle-bottom-left';
import TriangleBottomRight from 'assets/images/triangle-bottom-right';

import './TriangleBg.scss'

class Header extends Component {
	render() {
		return (
			<div className={"pattern-triangle " + this.props.className}>
				{this.props.direction == 'down' ? (
					<div>
						<InlineSVG src={TriangleBottomLeft} element="div" className="triangle triangle-bottom-left" />
						<InlineSVG src={TriangleBottomRight} element="div" className="triangle triangle-bottom-right" />
					</div>
				) : (
					<div>
						<InlineSVG src={TriangleTopLeft} element="div" className="triangle triangle-top-left" />
						<InlineSVG src={TriangleTopRight} element="div" className="triangle triangle-top-right" />
					</div>
				)}
			</div>
		);
	}
}

export default Header;

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>