import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from 'js/components/Header';
import Footer from 'js/components/Footer';

import './Layout.scss'

const Layout = ({ children, data }) => (
  <div className="landing-page">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header/>
    {children()}
    <Footer/>
  </div>
)

export default Layout;
