import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from 'js/components/Header';
import Footer from 'js/components/Footer';

import './Layout.scss';

import favicon from 'assets/images/favicon.png';
import touchIcon from 'assets/images/touch-icon.png';

const Layout = ({ children, data, location }) => {

  console.log(location.pathname)

  let title = '';
  let description = 'Blockstack is a new internet for decentralized apps where users own their data. A browser is all that’s needed to get started.';

  if(location.pathname !== '/') {
    title = data.allMarkdownRemark.edges.find((item) => {
      return item.node.frontmatter.path === location.pathname;
    }).node.frontmatter.title;
  }

  if(location.pathname !== '/') {
    description = data.allMarkdownRemark.edges.find((item) => {
      return item.node.frontmatter.path === location.pathname;
    }).node.frontmatter.description;
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

// const Layout = (props) => {
//   console.log(props)
//   return(<div></div>);
// }

export default Layout;
