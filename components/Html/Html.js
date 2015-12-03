/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component, PropTypes } from 'react';
import { title, description } from '../../config';

class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    body: PropTypes.string.isRequired,
    debug: PropTypes.bool.isRequired,
  };

  render() {
    var appleTouchIcons = []
    var appleTouchIconSizes = ['29', '40', '58', '60', '76', '80', '120', '152']
    appleTouchIconSizes.forEach(function(size) {
      appleTouchIcons.push(
        (<link rel="apple-touch-icon"
          sizes={size + 'x' + size}
          href={'/images/blockstack-apple-touch-' + size} />)
      )
    })

    return (
      <html className="no-js" lang="">
      <head>
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <title>{this.props.title || title}</title>

        <meta name="description" content={this.props.description || description} />
        <meta name="keywords" content={this.props.keywords} />
        <meta name="viewport" content="width=device-width" />
        <meta name="google-site-verification" content={this.props.googleSiteVerification} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={this.props.twitterHandle} />
        <meta name="twitter:title" content={this.props.title || title} />
        <meta name="twitter:description" content={this.props.description || description} />
        <meta name="twitter:image" content={this.props.siteImageUrl} />

        <meta property="og:title" content={this.props.title || title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={this.props.siteUrl} />
        <meta property="og:image" content={this.props.siteImageUrl} />
        <meta property="og:description" content={this.props.description || description}/>

        <link rel="shortcut icon" href="/favicon.ico" />
        {appleTouchIcons}

        <link rel="stylesheet" href="/bootstrap/css/bootstrap.css" />
        <link rel="stylesheet" href="/font-awesome/css/font-awesome.css" />

        <script src="/jquery/jquery.js"></script>

        <script src={'/app.js?' + new Date().getTime()}></script>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{__html: this.props.body}} />
      </body>
      </html>
    );
  }

}

export default Html;
