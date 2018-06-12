import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import Card from 'components/Card';
import TriangleUp from 'assets/images/triangle-up';

import './TopArea.scss'

class TopArea extends Component {
	render() {
		return (
			<div className="top-area">
				<div className="intro-text align-center mt-4 mb-3">
					<div className="container">
						<h1>The easiest way to start building  decentralized blockchain apps</h1>
					</div>
				</div>
				<div className="triangle-bg py-4">
					<div className="container">
						<div>
							<div className="grid-flex">
								<div className="col-4">
									<div className="g-card dark align-left">
										<div className="p-2">
											code
										</div>
										<Card className="card">
											<div className="p-2">
												<h4 className="main-color">Hello World</h4>
												<p className="sm">Build a single-page JavaScript application that runs completely client-side without any servers.</p>
											</div>
										</Card>
									</div>
								</div>
								<div className="col-4">
									<div className="g-card dark align-left">
										<div className="p-2">
											code
										</div>
										<Card className="card">
											<div className="p-2">
												<h4 className="main-color">Authentication</h4>
												<p className="sm">Build a basic Todo application and learn about Authentication and Gaia storage.</p>
											</div>
										</Card>
									</div>
								</div>
								<div className="col-4">
									<div className="g-card dark align-left">
										<div className="p-2">
											code
										</div>
										<Card className="card">
											<div className="p-2">
												<h4 className="main-color">Storage</h4>
												<p className="sm">Build a decentralized blogging app using multi-player Gaia storage.</p>
											</div>
										</Card>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container align-center pt-3">
						<nav className="line-nav">
							<ul>
								<li><a href="#">All tutorials</a></li>
								<li><a href="#">Documentation</a></li>
								<li><a href="#">Github</a></li>
							</ul>
						</nav>
					</div>
					<InlineSVG src={TriangleUp} element="div" className="triangle triangle-up" />
				</div>
			</div>
		);
	}
}

export default TopArea;
