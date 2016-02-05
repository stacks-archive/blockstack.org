'use strict';

import React            from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'
import Markdown         from 'react-remarkable'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import docs             from '../../docs.json'

const propTypes = {
}

class DocsPage extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    var pageName = 'index'
    if (this.props.route.path !== '/docs') {
      pageName = this.props.routeParams.docSection
    }
    var markdown = docs[pageName]

    var menuItems = [
      {path: '/docs',                    name: 'Overview'},
      {path: '/docs/installation',       name: 'Installation'},
      {path: '/docs/name-lookups',       name: 'Name Lookups'},
      {path: '/docs/name-registrations', name: 'Name Registrations'},
      {path: '/docs/name-records',       name: 'Name Records'},
      {path: '/docs/name-transfers',     name: 'Name Transfers'},
      {path: '/docs/name-renewals',      name: 'Name Renewals'},
      {path: '/docs/namespaces',         name: 'Namespaces'},
      {path: '/docs/name-pricing',       name: 'Name Pricing'},

      {path: '/docs/virtual-blockchain', name: 'Virtual Blockchain'},
      {path: '/docs/data-storage',       name: 'Data Storage'},
      {path: '/docs/consensus-rules',    name: 'Consensus Rules'},
      {path: '/docs/light-nodes',        name: 'Light Nodes'},
      {path: '/docs/bootstrapping',      name: 'Bootstrapping'},
      {path: '/docs/fork-detection',     name: 'Fork Detection'},
      {path: '/docs/troubleshooting',    name: 'Troubleshooting'},
      {path: '/docs/faq',                name: 'FAQ'},
    ]

    return (
      <DocumentTitle title="Docs">
        <div>
          <div className="container-fluid col-centered about-head-wrap">
            <Header />
          </div>
          <section className="container-fluid sec-hook">
            <div className="bs-docs-featurette col-centered">
              <div className="col-md-3">
                <div className="list-group">
                  {
                    menuItems.map((menuItem) => {
                      var className = 'list-group-item'
                      if (menuItem.path === this.props.location.pathname) {
                        className += ' active'
                      }
                      return (
                        <Link
                          key={menuItem.path}
                          to={menuItem.path}
                          className={className}>
                          {menuItem.name}
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
              <div className="col-md-9">
                { markdown ?
                <Markdown source={markdown} />
                : null }
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

DocsPage.propTypes = propTypes

export default DocsPage