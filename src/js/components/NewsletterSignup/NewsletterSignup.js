import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';

import Input from 'js/components/Input';
import Button from 'js/components/Button';

import Arrow from 'assets/images/outline-arrow.svg';

import './NewsletterSignup.scss'

class NewsletterSignup extends Component {

	state = {
		email : '',
		validEmail : true
	}

	updateEmailAddress = (event) => {
		const email = event.target.value;
		this.setState({ email });

		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(email.length > 4) {
			this.setState({ validEmail : re.test(this.state.email) });
		}

	}

	render() {
		return (
			<form className={!this.state.validEmail && this.state.email != '' ? ('newsletter-form invalid') : ('newsletter-form')}>
				<Input id={this.props.id} placeholder="Get email updates" className={this.props.inputClass} value={this.state.email} onChange={this.updateEmailAddress} />
				<Button icon={Arrow()} className={"transparent circle " + this.props.inputClass} htmlFor={this.props.id} disabled={this.state.email.length < 4 || !this.state.validEmail ? true : false} />
			</form>
		);
	}
}

export default NewsletterSignup;