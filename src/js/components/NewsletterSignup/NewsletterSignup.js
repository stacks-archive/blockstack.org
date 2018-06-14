import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Input from 'components/Input';
import Button from 'components/Button';

import Arrow from 'assets/images/outline-arrow';

import './NewsletterSignup.scss'

class NewsletterSignup extends Component {
	render() {
		return (
			<div className="newsletter-form">
				<Input placeholder="Get email updates" className={this.props.inputClass} />
				<Button icon={Arrow} className={"transparent circle " + this.props.inputClass} />
			</div>
		);
	}
}

export default NewsletterSignup;