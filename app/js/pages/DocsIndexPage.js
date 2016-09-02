'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import ArticleIndex     from '../components/ArticleIndex'
import docs             from '../../docs.json'

class DocsIndexPage extends Component {
  render() {
    const pageRows = [
      {
        title: 'Command Line Interface',
        items: ['installation', 'basic-usage', 'extended-usage']
      },
      {
        title: 'Tutorials',
        items: ['tutorial-hello-world', 'tutorial-blogging', 'tutorial-package-manager']
      },
      {
        title: '',
        items: ['tutorial-filesharing', 'tutorial-social-networking', 'tutorial-crowdfunding']
      }
    ]

    return (
      <DocumentTitle title="Blockstack - Documentation">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <ArticleIndex pageRows={pageRows} docs={docs} pathPrefix='/docs' />
          <Footer />
        </div>
      </DocumentTitle>
    )
  }
}

export default DocsIndexPage

/*
      {
        title: '',
        items: ['tutorial-video-sharing', 'tutorial-doc-signing', 'tutorial-messaging']
      }
*/