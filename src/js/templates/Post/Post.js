import React from "react";

import './Post.scss';

export default function Post({data}) {

	const { rssFeedItem } = data;
	const { title, pubDate, content_encoded } = rssFeedItem;

  return (
		<div>
			<h2>{title}</h2>
			<h4>{pubDate}</h4>
			<div dangerouslySetInnerHTML={{__html:content_encoded}} />
		</div>
	)
}
