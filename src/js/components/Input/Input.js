import React, { Component } from 'react';

import Typeahead from 'components/Typeahead';
import InlineSVG from 'svg-inline-react';
import Loader from 'components/Loader';

import './inputs';

export default class Input extends Component {

	constructor (props) {
		super(props);
		this.state = {
			className : this.props.className,
			hasValue : this.props.value ? true : false,
			inputType : this.props.type ? this.props.type : 'text'
		};
	}

	type () {
		// var type = 'text';
		// if (this.props.type) {
		// 	type = this.props.type;
		// }
		var type = this.state.inputType;
		return type;
	}

	inputClass () {
		var inputClass = 'input-wrap';
		if (this.props.type) {
			inputClass += ' ' + this.props.type;
		}
		if (this.props.className) {
			inputClass += ' ' + this.state.className;
		}

		if(this.props.error) {
			inputClass += ' ' + 'error';
		}

		if(this.props.validated) {
			inputClass += ' ' + 'validated';
		}

		if(this.state.hasValue) {
			inputClass += ' has-value';
		}

		if(this.createIcon()) {
			inputClass += ' has-icon-after';
		}

		if(this.createIconBefore()) {
			inputClass += ' has-icon-before';
		}

		return inputClass;
	}

	inputPlaceholder () {
		var placeholderText = this.props.type;
		if (this.props.placeholder) {
				placeholderText = this.props.placeholder;
		}
		else if (this.props.placeholder === false) {
			placeholderText = '';
		}
		return placeholderText;
	}

	handleChange = (event) => {
		if(event.target.value.length > 0) {
			this.setState({
				hasValue : true
			});
		}

		if(this.props.maxLength) {
			event.target.value = event.target.value.substring(0, this.props.maxLength);
		}

		if(this.props.onChange) {
			this.props.onChange(event);
		}
	}

	handleBlur = (event) => {
		if(event.target.value.length > 0) {
			this.setState({
				hasValue : true
			});
		} else {
			this.setState({
				hasValue : false
			});
		}
	}

	// TO DO Only works on the first textarea on the page. not THIS one
	autoResize () {
		var textarea = document.querySelector(this.props.type);
		var heightLimit = 1000; /* Maximum height: 200px */
		textarea.style.height = ""; /* Reset the height*/
		textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
	}

	createInput () {
		if (this.props.type === 'select') {
			var options = this.props.options || [];

			//<option disabled selected value> -- select an option -- </option>

			var listOptions = options.map((option, index) =>
				<option
					key={index}
					disabled={option.disabled}
					value={option.value}
					selected={option.selected}
				>
					{option.label}
				</option>
			);
			return (
				<div className="select-wrap">
					<select
						disabled={this.props.disabled}
						placeholder={this.inputPlaceholder()}
						value={this.props.value}
						name={this.props.name}
						onChange={this.handleChange}
						{...this.props.extraProps}
					>
						{listOptions}
					</select>
					<i className="material-icons icon select-icon">keyboard_arrow_down</i>
				</div>
			);
		}
		else if (this.props.type === 'toggle') {
			var inputLabel = false;
			if (this.props.onLabel) {
				inputLabel = <div className="text"><span className="off-label">{this.props.offLabel}</span><span className="on-label">{this.props.onLabel}</span></div>;
			}
			if (this.props.hideLabel === 'true') {
				inputLabel = '';
			}
			return (
				<div>
				<input
					className="toggle"
					type="checkbox"
					checked={this.props.checked}
					value={this.props.value}
					id={this.props.id ? this.props.id : this.props.name}
					name={this.props.name}
					onChange={this.handleChange}
					{...this.props.extraProps}
				/>
				<label htmlFor={this.props.id ? this.props.id : this.props.name}><div className="switch"/>{inputLabel}</label>
				</div>
			);
		}
		else if (this.props.type === 'typeahead') {
			return (
				<Typeahead {...this.props}/>
			);
		}
		else if (this.props.type === 'checkbox' || this.props.type === 'radio') {
			return (
				<div className="flex-wrap">
					<input
						disabled={this.props.disabled}
						type={this.type()}
						placeholder={this.inputPlaceholder()}
						value={this.props.value}
						id={this.props.id ? this.props.id : this.props.value}
						name={this.props.name}
						onChange={this.handleChange}
						checked={this.props.checked}
						autoComplete={this.props.autoComplete}
						readOnly={this.props.readOnly}
						{...this.props.extraProps}
					/>
				{this.props.label ? (
					<label htmlFor={this.props.id ? this.props.id : this.props.value}>{this.props.label}</label>
				) : false}
				</div>
			);
		}
		else if (this.props.type === 'textarea') {
			return (
				<textarea
					disabled={this.props.disabled}
					type={this.type()}
					autoFocus={this.props.autoFocus}
					placeholder={this.props.placeholder}
					value={this.props.value}
					name={this.props.name}
					rows="4"
					onInput={this.autoResize.bind(this)}
					onChange={this.handleChange}
					onKeyPress={this.props.onKeyPress}
					autoComplete={this.props.autoComplete}
					readOnly={this.props.readOnly}
					{...this.props.extraProps}
				/>
			);
		} else if (this.props.type === 'color-swatch') {
			return (
				<div className="swatch">
					<input
						disabled={this.props.disabled}
						type="radio"
						style={{display: 'none'}}
						placeholder={this.inputPlaceholder()}
						value={this.props.value}
						id={this.props.id ? this.props.id : this.props.value}
						name={this.props.name}
						onChange={this.handleChange}
						checked={this.props.checked}
						{...this.props.extraProps}
					/>
					<label style={{display: 'block', background: this.props.value}} htmlFor={this.props.value}/>
				</div>
			);
		} else {
			if (this.props.label) {
				return (
					<div className="fancy-input">
						<input
							disabled={this.props.disabled}
							type={this.type()}
							autoFocus={this.props.autoFocus}
							value={this.props.value || ''}
							name={this.props.name}
							onChange={this.handleChange}
							onKeyPress={this.props.onKeyPress}
							onBlur={this.handleBlur}
							autoComplete={this.props.autoComplete}
							readOnly={this.props.readOnly}
							{...this.props.extraProps}
						/>
						{this.createIcon()}
						{this.createIconBefore()}
						<label>{this.props.label}</label>
					</div>
				);
			} else {
				return (
					<input
						disabled={this.props.disabled}
						type={this.type()}
						autoFocus={this.props.autoFocus}
						placeholder={this.inputPlaceholder()}
						value={this.props.value || ''}
						name={this.props.name}
						onChange={this.handleChange}
						onKeyPress={this.props.onKeyPress}
						autoComplete={this.props.autoComplete}
						readOnly={this.props.readOnly}
						{...this.props.extraProps}
					/>
				);
			}
		}
	}

	createInputWithLabel () {
		return (
			<div className="label-above">
				{this.createInput()}
				{this.createIcon()}
				{this.createIconBefore()}
				<label htmlFor={this.props.id}>{this.props.labelAbove}</label>
			</div>
		);
	}

	createSecondary () {
		if(this.props.error && typeof this.props.error === 'string') {
			return (<span className="error-message">{this.props.error}</span>);
		}

		if(this.props.secondary) {
			return (<span className="secondary">{this.props.secondary}</span>);
		}
		return false;
	}

	toggleType () {
		console.log(this.state.inputType)
		if (this.state.inputType == 'password') {
			this.setState({
				inputType : 'text'
			});
		} else {
			this.setState({
				inputType : this.props.type
			});
		}
	}

	createIcon () {
		if(this.props.materialIcon) {
			return(<i className="material-icons icon">{this.props.materialIcon}</i>);
		}

		else if (this.props.type == 'password') {
			return(<i className="material-icons icon" onClick={this.toggleType.bind(this)}>remove_red_eye</i>);
		}
		else if (this.props.icon) {
			if (this.props.icon === "loader") {
        return(<Loader className="normal icon" />)
			} else if (this.props.icon.startsWith("<")) {
				return(<InlineSVG src={this.props.icon} element="span" className="icon" />);
			} else {
				return(<i className="material-icons icon">{this.props.icon}</i>);
			}
		}

		return false;
	}

	createIconBefore () {
		if(this.props.materialIconLeft) {
			return(<i className="material-icons icon left">{this.props.materialIcon}</i>);
		}

		if (this.props.iconLeft) {
			if (this.props.iconLeft === "loader") {
        return(<Loader className="normal icon left" />)
			} else if (this.props.iconLeft.startsWith("<")) {
				return(<InlineSVG src={this.props.iconLeft} element="span" className="icon left" />);
			} else {
				return(<i className="material-icons icon left">{this.props.iconLeft}</i>);
			}
		}
		return false;
	}

	render () {
		return (
			<div className={this.inputClass()}>
				{this.props.labelAbove ? (this.createInputWithLabel()) : (this.createInput())}
				{!this.props.label && !this.props.labelAbove ? (
					this.createIcon()
				) : false}
				{!this.props.label && !this.props.labelAbove ? (
					this.createIconBefore()
				) : false}
				{this.createSecondary()}
			</div>
		);
	}
}