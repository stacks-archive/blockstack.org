import React, { Component } from 'react';



import './Device.scss';

class Device extends Component {

	state = {
		type : this.props.type,
		orientation : this.props.orientation,
		content : this.props.content
	}


	deviceStyles () {
		const { orientation } = this.state;

		const styles = {
			transform: orientation === 'horizontal' ? 'rotate(90deg)' : ''
		}

		return styles;
	}

	renderContent () {
		const { content, orientation } = this.state;

		const styles = {
			transform: orientation === 'horizontal' ? 'rotate(-90deg)' : ''
		}


		return (<div style={styles}>{content}</div>);


	}

	render() {

		const { type } = this.state;

		return (
			<div style={this.deviceStyles()} className="devices">
				<div className={'device' + ' ' + type}>
					<div className="device-top">
						<div className="camera"></div>
						<div className="speaker"></div>
						<div className="light"></div>
					</div>
					<div className="screen">
						{this.renderContent()}
					</div>
					<div className="device-bottom">
						<div className="button">
							<div className="button-square"></div>
						</div>
					</div>
				</div>
		</div>
		);
	}
}

Device.defaultProps = {
	type : 'iphone',
	orientation : 'vertical'
}



export default Device;

