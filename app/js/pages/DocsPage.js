'use strict';

import { Component }    from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'
import Markdown         from 'react-remarkable'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import docs             from '../../docs.json'

const propTypes = {
}

class DocsPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let pageName = 'index'
    if (this.props.route.path !== '/docs') {
      pageName = this.props.routeParams.docSection
    }
    let markdown = docs[pageName]

    let menuItems = [
      {path: '/docs',                    name: 'Overview'},
      {path: '/docs/installation',       name: 'Installation'},
      {path: '/docs/lookups',            name: 'Lookups'},
      {path: '/docs/registrations',      name: 'Registrations'},
      {path: '/docs/zone-files',         name: 'Zone Files'},
      {path: '/docs/transfers',          name: 'Transfers'},
      {path: '/docs/renewals',           name: 'Renewals'},
      {path: '/docs/namespaces',         name: 'Namespaces'},
      {path: '/docs/pricing',            name: 'Pricing'},
      {path: '/docs/troubleshooting',    name: 'Troubleshooting'},
      {path: '/docs/faq',                name: 'FAQ'}
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
                <Markdown>
                  {markdown}
                </Markdown>
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

/*
let menuItems2 = [
  {path: '/docs/virtual-blockchain', name: 'Virtual Blockchain'},
  {path: '/docs/data-storage',       name: 'Data Storage'},
  {path: '/docs/consensus-rules',    name: 'Consensus Rules'},
  {path: '/docs/light-nodes',        name: 'Light Nodes'},
  {path: '/docs/bootstrapping',      name: 'Bootstrapping'},
  {path: '/docs/fork-detection',     name: 'Fork Detection'}
]

<h4>Technology</h4>
<div className="list-group">
  {
    menuItems2.map((menuItem) => {
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
*/