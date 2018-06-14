import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Logo from 'assets/images/Logo';
import LogoType from 'assets/images/logotype';
import Button from 'components/Button';
import NewsletterSignup from 'components/NewsletterSignup';

import scrollMonitor from 'scrollmonitor';

import './Header.scss'

class Header extends Component {

	state = {
		collapsed : false,
	}

	componentDidMount () {
		this.collapseHeader();
	}

	collapseHeader = () => {
		var Header = document.getElementById("StickyHeader");
		var elementWatcher = scrollMonitor.create( Header, { top: 1 } );

		elementWatcher.fullyEnterViewport( () => {
		  console.log( 'no fixed' );
		  this.setState({ collapsed : false });
		});
		elementWatcher.partiallyExitViewport( () => {
		  console.log( 'fixed' );
		  this.setState({ collapsed : true });
		});
	}

	render() {
		return (
			<header className="header blue-bg">
				<div id="StickyHeader">
					<div className={this.state.collapsed ? ("inner-header collapsed") : ("inner-header")}>
						<div>
							<div className="container">
								<div className="grid-flex no-break middle">

									<div className="col left">
										<div className="es-logo">
											<div className="grid-flex no-break no-gutter middle left">
												<InlineSVG src={Logo} element="div" className="bs-logo" />
												<InlineSVG src={LogoType} element="div" className="bs-logotype ml-2" />
											</div>
										</div>
									</div>

									<div className="col center align-center hide-lg">
										<div className="grid-flex tight-gutter center-actions center">
											<div className="col"><Button className="secondary main-action" label="Docs & Tutorials" /></div>
											<div className="col hide-xlg"><NewsletterSignup /></div>
										</div>
									</div>

									<div className="col right side-col align-right">
										<a className="p menu-toggle"><span className="material-icons md-24 menu-icon">menu</span> Menu</a>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>