import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Logo from 'assets/images/Logo';
import Arrow from 'assets/images/outline-arrow';
import Input from 'components/Input';
import Button from 'components/Button';

import './Footer.scss'

class Header extends Component {
	render() {
		return (
			<footer className="pb-4 blue-bg mt-4">
				<div className="container narrow">
					<div className="newsletter-form mb-4 my-auto">
						<Input placeholder="Get email updates" className="large" />
						<Button icon={Arrow} className="transparent large circle"/>
					</div>
					<div className="align-center pb-4">
						<nav className="line-nav">
							<ul>
								<li><a href="#" className="p md">Tutorials</a></li>
								<li><a href="#" className="p md">Install browser</a></li>
								<li><a href="#" className="p md">Live apps</a></li>
							</ul>
						</nav>
					</div>
					<div className="grid-flex">
						<div className="col">
							<h5 className="p sm medium-weight pb-1">Technology</h5>
							<ul>
								<li><a href="#" className="p sm">Tutorials</a></li>
								<li><a href="#" className="p sm">Documentation</a></li>
								<li><a href="#" className="p sm">Github</a></li>
								<li><a href="#" className="p sm">White Papers</a></li>
							</ul>
						</div>
						<div className="col">
							<h5 className="p sm medium-weight pb-1">Community</h5>
							<ul>
								<li><a href="#" className="p sm">Forum</a></li>
								<li><a href="#" className="p sm">Slack</a></li>
								<li><a href="#" className="p sm">Meetup</a></li>
								<li><a href="#" className="p sm">Request an app</a></li>
								<li><a href="#" className="p sm">Get updates</a></li>
								<li><a href="#" className="p sm">Blog</a></li>
								<li><a href="#" className="p sm">Youtube</a></li>
								<li><a href="#" className="p sm">Videos</a></li>
								<li><a href="#" className="p sm">Signature fund</a></li>
							</ul>
						</div>
						<div className="col">
							<h5 className="p sm medium-weight pb-1">Blockstack</h5>
							<ul>
								<li><a href="#" className="p sm">About</a></li>
								<li><a href="#" className="p sm">FAQ</a></li>
								<li><a href="#" className="p sm">Careers</a></li>
								<li><a href="#" className="p sm">Press</a></li>
								<li><a href="#" className="p sm">Swag</a></li>
								<li><a href="#" className="p sm">Twitter</a></li>
								<li><a href="#" className="p sm">Branding</a></li>
								<li><a href="#" className="p sm">Privacy</a></li>
								<li><a href="#" className="p sm">Terms of Use</a></li>
								<li><a href="#" className="p sm">Disclaimers</a></li>
							</ul>
						</div>
					</div>
					<p className="tiny text-color medium-weight pt-4">The Blockstack Tokens are a crypto asset that is currently being developed by Blockstack Token LLC, a Delaware limited liability company, whose website can be found at www.blockstack.com. The website you are currently visiting (www.blockstack.org) is sponsored by Blockstack PBC, an affiliate of Blockstack Token LLC, and should not be viewed as an offer or sale of securities.</p>
				</div>
			</footer>
		);
	}
}

export default Header;

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>