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
        title: 'Decentralized Applications',
        items: ['hello-world', '', '']
      }
    ]

    return (
      <DocumentTitle title="Blockstack - Documentation">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <ArticleIndex pageRows={pageRows} docs={docs} pathPrefix='/tutorials' />
          <Footer />
        </div>
      </DocumentTitle>
    )
  }
}

export default DocsIndexPage

/*

      {
        title: 'Apps',
        items: ['hello-world', 'blogging', 'package-manager']
      },
      {
        title: '',
        items: ['filesharing', 'social-networking', 'crowdfunding']
      },
      {
        title: '',
        items: ['tutorial-video-sharing', 'tutorial-doc-signing', 'tutorial-messaging']
      }
*/