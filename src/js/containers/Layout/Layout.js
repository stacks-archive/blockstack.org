import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from 'js/components/Header'
import Footer from 'js/components/Footer'

import './Layout.scss'

import favicon from 'assets/images/favicon.png'
import touchIcon from 'assets/images/touch-icon.png'

const Layout = ({ children, data, location }) => {
  console.log(data)
  console.log(location)

  let title = ''
  let description =
    'Blockstack is a new internet for decentralized apps where users own their data. A browser is all that’s needed to get started.'

  if (location.pathname !== '/') {
    let item = data.allMarkdownRemark.edges.find((item) => {
      return item.node.frontmatter.path.includes(
        location.pathname.replace(/\//g, '')
      )
    })

    if (item) {
      title = item.node.frontmatter.title
    } else {
      console.log('No item for', location.pathname)
    }
  }

  if (location.pathname !== '/') {
    let item = data.allMarkdownRemark.edges.find((item) => {
      return item.node.frontmatter.path.includes(
        location.pathname.replace(/\//g, '')
      )
    })

    if (item) {
      description = item.node.frontmatter.description
    }
  }

  return (
    <div className="landing-page">
      <Helmet
        title={
          title
            ? data.site.siteMetadata.title + ' | ' + title
            : data.site.siteMetadata.title
        }
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: 'sample, something' },
          {
            name: 'viewport',
            content:
              'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
          }
        ]}
        link={[
          { rel: 'icon', type: 'image/png', href: favicon },
          { rel: 'apple-touch-icon', href: touchIcon }
        ]}
      />

      <Header links={data.site.siteMetadata.bslinks} />
      {children()}
      <Footer links={data.site.siteMetadata.bslinks} />
    </div>
  )
}

// const Layout = (props) => {
//   console.log(props)
//   return(<div></div>);
// }

export default Layout
