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

    console.log(this.props)
    console.log('constructor called')
  }

  componentDidMount() {
    console.log('component mounted')
  }

  render() {
    var pageName = 'index'
    if (this.props.route.path !== '/docs') {
      pageName = this.props.routeParams.docSection
    }
    var markdown = docs[pageName]

    var menuItems = [
      {path: '/docs', name: 'Overview'},
      {path: '/docs/blockstore', name: 'Blockstore'},
      {path: '/docs/blockchain-profile', name: 'Blockchain Profile'},
      {path: '/docs/blockchain-auth', name: 'Blockchain Auth'}
    ]

    var _this = this

    return (
      <DocumentTitle title="Docs">
        <div>
          <div className="container-fluid col-centered about-head-wrap">
            <Header />
          </div>
          <section className="container-fluid sec-hook docs-extend">
            <div className="bs-docs-featurette col-centered">
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