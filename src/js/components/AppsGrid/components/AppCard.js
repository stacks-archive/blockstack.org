import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import Card from 'components/Card';
import Arrow from 'assets/images/outline-arrow';

class AppsGrid extends Component {
	render() {
		return (
			<Card className={"p-2 app-card " + this.props.className} href={this.props.href} target="_blank">
				<div className="grid-flex no-break tight-gutter top">
					<div className="col no-grow">
						<div className="icon-wrap">
							<img className="icon" src={this.props.appIcon} alt={this.props.appName} />
						</div>
					</div>
					<div className="col grow">
						<div className="app-desc">
							<p className="underline-hover">{this.props.appName ? (<span><strong>{this.props.appName}</strong>: </span>) : false}{this.props.appDescription}</p>
						</div>
					</div>
				</div>
				<div className="align-right pt-2">
					<div className="sm main-color">
						<div className="grid-flex no-break no-gutter right middle">
							<div className="col"><span className="main-color p sm view-text">View code</span></div>
							<div className="col"><InlineSVG src={Arrow} element="div" className="ml-1 view-arrow" /></div>
						</div>
					</div>
				</div>
			</Card>
		);
	}
}

export default AppsGrid;
