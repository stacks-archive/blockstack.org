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
											<div className="col hide-xlg"><NewsletterSignup id="headerNewsletterSignup" /></div>
										</div>
									</div>

									<div className="col right side-col align-right">
										<a onClick={this.toggleMenu} className="p menu-toggle"><span className="material-icons md-24 menu-icon">{this.state.menuOpen ? ('close') : ('menu')}</span> Menu</a>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
				{this.state.menuOpen ? (
					<div className="main-menu blue-bg pt-4 pb-4">
						<div className="container">
							<div className="grid-flex break-sm menu-cols v-spaced pt-4 pb-3">
								<div className="col pb-2">
									<h5 className="p md medium-weight list-title">Quicklinks</h5>
									<p className="md py-1 list-divider">//</p>
									<ul>
										<li><a href="#" className="p md">Tutorials</a></li>
										<li><a href="#" className="p md">Install browser</a></li>
										<li><a href="#" className="p md">Live apps</a></li>
									</ul>
								</div>
								<div className="col pb-2">
									<h5 className="p md medium-weight list-title">Technology</h5>
									<p className="md py-1 list-divider">//</p>
									<ul>
										<li><a href="#" className="p md">Tutorials</a></li>
										<li><a href="#" className="p md">Documentation</a></li>
										<li><a href="#" className="p md">Github</a></li>
										<li><a href="#" className="p md">White Papers</a></li>
									</ul>
								</div>
								<div className="col pb-2">
									<h5 className="p md medium-weight list-title">Community</h5>
									<p className="md py-1 list-divider">//</p>
									<ul>
										<li><a href="#" className="p md">Forum</a></li>
										<li><a href="#" className="p md">Slack</a></li>
										<li><a href="#" className="p md">Meetup</a></li>
										<li><a href="#" className="p md">Request an app</a></li>
										<li><a href="#" className="p md">Get updates</a></li>
										<li><a href="#" className="p md">Blog</a></li>
										<li><a href="#" className="p md">Youtube</a></li>
										<li><a href="#" className="p md">Videos</a></li>
										<li><a href="#" className="p md">Signature fund</a></li>
									</ul>
								</div>
								<div className="col pb-2">
									<h5 className="p md medium-weight list-title">Blockstack</h5>
									<p className="md py-1 list-divider">//</p>
									<ul>
										<li><a href="#" className="p md">About</a></li>
										<li><a href="#" className="p md">FAQ</a></li>
										<li><a href="#" className="p md">Careers</a></li>
										<li><a href="#" className="p md">Press</a></li>
										<li><a href="#" className="p md">Swag</a></li>
										<li><a href="#" className="p md">Twitter</a></li>
										<li><a href="#" className="p md">Branding</a></li>
										<li><a href="#" className="p md">Privacy</a></li>
										<li><a href="#" className="p md">Terms of Use</a></li>
										<li><a href="#" className="p md">Disclaimers</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				) : false}
			</header>
		);
	}
}

export default Header;

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>