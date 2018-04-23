import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Logo from 'assets/images/LogoSmall';

import Android from 'assets/images/Android-black';

import Facebook from 'assets/images/Facebook-black';
import LinkedIn from 'assets/images/LinkedIn-black';
import Youtube from 'assets/images/Youtube-black';
import Twitter from 'assets/images/Twitter-black';
import GooglePlus from 'assets/images/GooglePlus-black';


import './Footer.scss';

class Footer extends Component {
	render() {
		return (
			<footer id="footer" className="footer">
				<div className="content">
					<div className="container">
						<div className="flex-grid">
							<div className="col-6 col-footer">
							<InlineSVG src={Logo} element="div" className="es-logo" />
							<a href="#">easyset@easysetgo.com </a>
							<p>
								© 2018 EasySet LLC
								<br />
								All Rights Reserved United States
							</p>

							<div className="android">
								<InlineSVG src={Android} element="div" className="android-icon" />
								<div className="android-text">Coming Soon...</div>
								<div className="android-link">Learn More</div>
							</div>
							</div>
							<div className="col-6 col-footer">
								<div className="social">
									<InlineSVG src={Facebook} element="div" className="social-icon" />
									<InlineSVG src={LinkedIn} element="div" className="social-icon" />
									<InlineSVG src={Youtube} element="div" className="social-icon" />
									<InlineSVG src={Twitter} element="div" className="social-icon" />
									<InlineSVG src={GooglePlus} element="div" className="social-icon" />
								</div>
								<ul>
									<li>Login</li>
									<li>Contact</li>
									<li>Privacy</li>
									<li>License Terms</li>
								</ul>

							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}


export default Footer;