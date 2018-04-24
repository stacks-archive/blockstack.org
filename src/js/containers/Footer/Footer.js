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
							<a href="mailto:easyset@easysetgo.com">easyset@easysetgo.com</a>
							<p>
								© 2018 EasySet LLC
								<br />
								All Rights Reserved United States
							</p>

							<div className="android">
								<InlineSVG src={Android} element="div" className="android-icon" />
								<div className="android-text">Coming Soon...</div>
							</div>
							</div>
							<div className="col-6 col-footer">
								<div className="social">
									<InlineSVG src={Facebook} element="a" target="_blank" href="https://www.facebook.com/easyset" className="social-icon" />
									<InlineSVG src={LinkedIn} element="a" target="_blank" href="https://www.linkedin.com/company/easyset-easy-security-templates" className="social-icon" />
									<InlineSVG src={Youtube} element="a" target="_blank" href="https://www.youtube.com/channel/UCPasSjmoQfISknRm2jmG9Fw" className="social-icon" />
									<InlineSVG src={Twitter} element="a" target="_blank" href="https://twitter.com/easysetgo" className="social-icon" />
									<InlineSVG src={GooglePlus} element="a" target="_blank" href="https://plus.google.com/116632501996464889011" className="social-icon" />
								</div>
								<ul>
									<li><a href="https://app.easysetgo.com/login" >Login</a></li>
									<li><a href="mailto:easyset@easysetgo.com" target="_blank">Contact</a></li>
									<li><a href="https://www.easysetgo.com/physical-security-checklist-privacy" target="_blank">Privacy</a></li>
									<li><a href="https://www.easysetgo.com/security-assessment-app-terms" target="_blank">License Terms</a></li>
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