'use strict';

import { Component }    from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'
import marked           from 'marked'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import docs             from '../../docs.json'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

const propTypes = {
}

class DocsPage extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    let pageName = 'index'
    if (this.props.route.path !== '/docs') {
      pageName = this.props.routeParams.docSection
    }
    let markdown = docs[pageName]
    let createMarkup = function() {
      return {
        __html: marked(markdown)
      }
    }

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
      <DocumentTitle title="Blockstack - Documentation">
        <div>
          <div className="container-fluid col-centered about-head-wrap">
            <Header />
          </div>
          <section className="container-fluid sec-hook docs-extend">
            <div className="bs-docs-featurette col-centered">
<<<<<<< HEAD
              <div className="col-sm-10 col-centered">
                <div className="col-sm-4 list-group-shift">
                  <div className="list-group">
                    {
                      menuItems.map(function(menuItem) {
                        var className = 'list-group-item'
                        if (menuItem.path === _this.props.location.pathname) {
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
                <div className="col-sm-8">
                  { markdown ?
                  <Markdown source={markdown} />
                  : null }
                </div>
=======
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
                { createMarkup ?
                  <div dangerouslySetInnerHTML={createMarkup()}>
                  </div>
                : null }
>>>>>>> 1e22e48234cb948c886d131cb2a14fac455c97c1
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