import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react';
import Card from 'components/Card';
import Arrow from 'assets/images/outline-arrow';
import TriangleBg from 'components/TriangleBg';
import CodeBlock from 'components/CodeBlock';

import './TopArea.scss'

class TopArea extends Component {
	render() {
		return (
			<section className="blue-bg top-section top-area">

				<div className="intro-text align-center">
					<div className="container">
						<h1>The easiest way to start building  decentralized blockchain apps</h1>
					</div>
				</div>
				<div className="triangle-bg py-4">
					<div className="container">
						<div>
							<div className="grid-flex v-spaced break-xlg">
								<div className="col-4">
									<a className="g-card code-card dark align-left link" href="#">
										<div className="p-2">
											<CodeBlock className="sm minimal dark" language="javascript">
{`if (blockstack.isUserSignedIn()) {
  var profile = blockstack.loadUserData().profile
  showProfile(profile)`}
											</CodeBlock>
										</div>
										<Card className="card">
											<div className="p-2">
												<div className="grid-flex tight-gutter no-break pb-2">
													<div className="col grow">
														<h4 className="main-color underline-hover">Hello World</h4>
													</div>
													<div className="col no-grow">
														<InlineSVG src={Arrow} element="div" />
													</div>
												</div>
												<p className="sm">Build a single-page JavaScript application that runs completely client-side without any servers.</p>
											</div>
										</Card>
									</a>
								</div>
								<div className="col-4">
									<a className="g-card code-card dark align-left link" href="#">
										<div className="p-2">
											<CodeBlock className="sm minimal dark">
{`signIn () {
  const blockstack = this.blockstack
  blockstack.redirectToSignIn()`}
											</CodeBlock>
										</div>
										<Card className="card">
											<div className="p-2">
												<div className="grid-flex tight-gutter no-break pb-2">
													<div className="col grow">
														<h4 className="main-color underline-hover">Authentication</h4>
													</div>
													<div className="col no-grow">
														<InlineSVG src={Arrow} element="div" />
													</div>
												</div>
												<p className="sm">Build a basic Todo application and learn about Authentication and Gaia storage.</p>
											</div>
										</Card>
									</a>
								</div>
								<div className="col-4">
									<a className="g-card code-card dark align-left link" href="#">
										<div className="p-2">
											<CodeBlock className="sm minimal dark">
{` this.setState({
    person: new Person(loadUserData().profile),
    username: loadUserData().username`}
											</CodeBlock>
										</div>
										<Card className="card">
											<div className="p-2">
												<div className="grid-flex tight-gutter no-break pb-2">
													<div className="col grow">
														<h4 className="main-color underline-hover">Storage</h4>
													</div>
													<div className="col no-grow">
														<InlineSVG src={Arrow} element="div" />
													</div>
												</div>
												<p className="sm">Build a decentralized blogging app using multi-player Gaia storage.</p>
											</div>
										</Card>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="container align-center pt-3 mt-2 bs-pb-card">
						<nav className="line-nav pb-4">
							<ul className="pb-3">
								<li><a href="#">All tutorials</a></li>
								<li><a href="#">Documentation</a></li>
								<li><a href="#">Github</a></li>
							</ul>
						</nav>
					</div>
					<TriangleBg/>
				</div>
			</section>
		);
	}
}

export default TopArea;
