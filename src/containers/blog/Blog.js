import React, { Component } from 'react';

export default class Blog extends Component {
	render() {

		const { data } = this.props

		return (
			<div>{
				data.allRssFeedItem.edges.map( (item) => {
					const slug = item.node.link.slice(item.node.link.indexOf('/blog'));
					return (<div key={item.node.id}>
							<a href={slug}>{item.node.title}</a>
						</div>)
				})

			}</div>
		);
	}
}
