'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import ArticleIndex     from '../components/ArticleIndex'
import docs             from '../../docs.json'

class ArticlesIndexPage extends Component {
  render() {
    const pageRows = [
      {
        title: 'Overview',
        items: ['what-is-blockstack', 'how-blockstack-works', '']
      },
      {
        title: 'Papers',
        items: ['blockstack-papers', 'virtualchain-paper', 'login-paper']
      },
      {
        title: 'Naming',
        items: ['blockstack-vs-dns', 'blockstack-vs-namecoin', 'namespaces']
      },
      {
        title: 'Identity',
        items: ['blockchain-identity', 'blockstack-profiles', 'identity-attestation']
      },
      {
        title: 'Misc',
        items: ['light-clients', 'faq', '']
      }
    ]

    return (
      <DocumentTitle title="Blockstack - Documentation">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <ArticleIndex pageRows={pageRows} docs={docs} pathPrefix='/articles' />
          <Footer />
        </div>
      </DocumentTitle>
    )
  }
}

export default ArticlesIndexPage
