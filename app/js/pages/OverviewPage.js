'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import ArticleIndex     from '../components/ArticleIndex'
import docs             from '../../docs.json'

class OverviewPage extends Component {
  
  render() {
    const pageRows = [
      {
        items: ['blockstack-dns', 'blockstack-identity']
      },
      {
        items: ['blockstack-auth', 'blockstack-storage']
      }
    ]

    return (
      <DocumentTitle title="Blockstack - Documentation">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <ArticleIndex
            cardsPerRow={3}
            pageRows={pageRows}
            docs={docs}
            pathPrefix='/overview' />
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

export default OverviewPage
