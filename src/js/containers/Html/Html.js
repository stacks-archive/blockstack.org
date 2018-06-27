import React from 'react';

const Html = (props) =>  (
	<html lang="en">
		<head>
			<meta charSet="UTF-8" />
			<title>Blockstack</title>

			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

			<meta name="description" content="..." />
			<meta name="keywords" content="..." />

			<link rel="shorticon icon" href="/images/favicon.png" />
			<link rel="apple-touch-icon-precomposed" href="/images/touch-icon.png" />
			<link rel="canonical" href="..." />
			<link rel="stylesheet" href="/app.css" />

			<meta property="og:image" content="..." />
			<meta property="og:site_name" content="..." />
			<meta property="og:title" content="..." />
			<meta property="og:description" content="..." />
		</head>
		<body>
			<div className="app" id="root">{props.children}</div>
			<script src="app.js"></script>
		</body>
	</html>
);


export default Html;
