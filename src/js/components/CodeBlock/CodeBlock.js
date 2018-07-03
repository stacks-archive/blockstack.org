import React, { Component } from 'react';

import Highlight from 'react-highlight.js';
// import 'highlight.js/styles/atom-one-light.css';
// import 'highlight.js/styles/atom-one-dark.css';
// import 'highlight.js/styles/github.css';
// import 'highlight.js/styles/github-gist.css';
// https://highlightjs.org/static/demo/ for style choices. Above are some favorites

import './CodeBlock.scss';

export class CodeBlock extends Component {

	render () {

		return (
			<div className={"code-block " + this.props.className}>
				{this.props.simple ? (
					<pre className="code">{this.props.children}</pre>
				) : (
					<Highlight language={this.props.language} innerHTML={true}>
						{this.props.children}
					</Highlight>
				)}
			</div>
		);
	}
}

export default CodeBlock;
