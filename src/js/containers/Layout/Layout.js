import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from 'js/components/Header';
import Footer from 'js/components/Footer';

import './Layout.scss';

import favicon from 'assets/images/favicon.png';
import touchIcon from 'assets/images/touch-icon.png';

const Layout = ({ children, data, location }) => {

  let title = '';
  let description = 'Blockstack is a new internet for decentralized apps where users own their data. A browser is all that’s needed to get started.';

  if (location.pathname.includes('blog')) {
    let item = data.allRssFeedItem.edges.find( (item) => {
      return item.node.link.includes(location.pathname)
    });

    if (item) {
      title = item.node.title;
      description = item.node.content;
    } else {
      console.log('No post for', location.pathname);
    }

  } else if (location.pathname !== '/') {
    let item = data.allMarkdownRemark.edges.find( (item) => {
      return item.node.frontmatter.path.includes(location.pathname.replace(/\//g, ""));
    });

    if (item) {
      title = item.node.frontmatter.title;
      description = item.node.frontmatter.description;
    } else {
      console.log('No page for', location.pathname);
    }
  }

  return(
    <div className="landing-page">
      <Helmet
        title={title ? data.site.siteMetadata.title + ' | ' + title : data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: 'sample, something' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
        ]}
        link={[
          { rel: 'icon', type: 'image/png', href: favicon },
          { rel: 'apple-touch-icon', href: touchIcon }
        ]}
      />

      <Header links={data.site.siteMetadata.bslinks}/>
      {children()}
      <Footer links={data.site.siteMetadata.bslinks}/>
    </div>
  )
}

export default Layout;
