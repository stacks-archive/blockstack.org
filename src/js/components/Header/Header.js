import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Logo from 'assets/images/Logo';
import LogoType from 'assets/images/logotype';
import Button from 'components/Button';
import NewsletterSignup from 'components/NewsletterSignup';
import MainMenu from 'components/MainMenu';

import scrollMonitor from 'scrollmonitor';

import './Header.scss'

class Header extends Component {

	state = {
		collapsed : false,
		menuOpen : false
	}

	componentDidMount () {
		this.collapseHeader();
	}

	collapseHeader = () => {
		var Header = document.getElementById("StickyHeader");
		var elementWatcher = scrollMonitor.create( Header, { top: 1 } );

		elementWatcher.fullyEnterViewport( () => {
		  this.setState({ collapsed : false });
		});
		elementWatcher.partiallyExitViewport( () => {
		  this.setState({ collapsed : true });
		});
		if(elementWatcher.isAboveViewport) {
		  this.setState({ collapsed : true });
		}
	}

	toggleMenu = () => {
		if(this.state.menuOpen) {
			this.setState({ menuOpen : false });
		} else {
			this.setState({ menuOpen : true });
		}
	}

	render() {
		return (
			<header className={this.state.menuOpen ? "header blue-bg menu-open" : "header blue-bg"}>
				<div id="StickyHeader">
					<div className={this.state.collapsed ? ("inner-header collapsed") : ("inner-header")}>
						<div>
							<div className="container header-container">
								<div className="grid-flex no-break middle no-gutter">

									<div className="col left">
										<div className="es-logo">
											<div className="grid-flex no-break no-gutter middle left">
												<InlineSVG src={Logo} element="div" className="bs-logo" />
												<InlineSVG src={LogoType} element="div" className="bs-logotype ml-2" />
											</div>
										</div>
									</div>

									<div className="col center align-center">
										<div className="grid-flex tight-gutter center-actions center">
											<div className="col"><Button className="secondary main-action" href={this.props.links.tutorials} label="Docs & Tutorials" /></div>
											<div className="col newsletter-col"><NewsletterSignup id="headerNewsletterSignup" /></div>
										</div>
									</div>

									<div className="col right side-col align-right">
										<a onClick={this.toggleMenu} className="p menu-toggle"><span className="material-icons md-24 menu-icon">{this.state.menuOpen ? ('close') : ('menu')}</span><span className="menu-text"> Menu</span></a>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
				{this.state.menuOpen ? (
					<MainMenu links={this.props.links}/>
				) : false}
			</header>
		);
	}
}

export default Header;

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>