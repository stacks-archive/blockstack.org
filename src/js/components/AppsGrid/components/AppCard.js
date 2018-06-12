import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import Card from '../../Card';

class AppsGrid extends Component {
	render() {
		return (
			<Card className={"p-2 app-card" + this.props.className}>
				<div className="grid-flex no-break tight-gutter middle">
					<div className="col no-grow">
						<img src={this.props.appIcon} alt={this.props.appName} style={{width: '60px' }}/>
					</div>
					<div className="col grow">
						<p><strong>{this.props.appName}</strong>: {this.props.appDescription}</p>
					</div>
				</div>
				<div className="align-right">
					<p className="sm main-color">View code</p>
				</div>
			</Card>
		);
	}
}

export default AppsGrid;
