import React, { Component } from 'react';

//https://github.com/JedWatson/react-select/issues/1661
import Select from 'react-select';
import Button from 'js/components/Button';
import 'react-select';

export default class Typeahead extends Component {

	fixedBtnOption () {
		var button = false;
		if (this.props.fixedBtn) {
			button = (<Button
				label={this.props.fixedBtn}
				icon={this.props.fixedBtnIcon}
				className="fixed-typeahead-btn"
			/>);
		}
		return button;
	}

	componentDidMount () {
    if(this.props.autoFocus) {
    	this.textInput.focus();
  	}
	}

	onNewOption(newOption) {
		return {
			value: newOption.label,
			label: newOption.label,
			className: 'Select-create-option-placeholder'
		};
	}

	render () {
		var addNewOption = (value) => { return { value, label: value }; }
		var options = this.props.options;

		function logChange(val) {
			console.log(val);
			console.log("Selected: " + val);
		}

		return (
			<div>
				<Select
					name={this.props.name}
					value={this.props.value}
					options={options}
					placeholder={this.props.placeholder}
					onChange={this.props.onChange}
					autoFocus={this.props.autoFocus}
					autosize={true}
					openOnFocus={this.props.openOnFocus}
					ref={(thisInput) => {this.textInput = thisInput}}
				/>
				{this.fixedBtnOption()}
			</div>
		);
	}
}