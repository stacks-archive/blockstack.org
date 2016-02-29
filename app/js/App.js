'use strict';

import {Component, PropTypes, cloneElement} from 'react'
import Helmet             from 'react-helmet'

import Header             from './components/Header'
import Footer             from './components/Footer'

const propTypes = {
  params: PropTypes.object,
  query: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  renderChildren() {
    return cloneElement(this.props.children, {
      params: this.props.params,
      query: this.props.query
    })
  }

  render() {
    const metatags = {
      title: "Blockstack - Decentralized DNS for Blockchain Applications",
      description: "Blockstack is a community of developers building decentralized applications, and a software stack around decentralized DNS, identity and more for blockchain applications.",
      image: "https://blockstack.org/images/metatags/blockstack-screenshot.png",
      url: "https://blockstack.org/"
    }

    return (
      <div>
        <Helmet
          title={metatags.title}
          meta={[
            {"name": "description", "content": metatags.description },

            {"property": "og:type", "content": "article"},
            {"property": "og:url", "content": metatags.url },
            {"property": "og:title", "content": metatags.title },
            {"property": "og:description", "content": metatags.description },
            {"property": "og:image", "content": metatags.image },

            {"property": "twitter:card", "content": "summary"},
            {"property": "twitter:site", "content": "@blockstackorg"},
            {"property": "twitter:title", "content": metatags.title },
            {"property": "twitter:description", "content": metatags.description },
            {"property": "twitter:image", "content": metatags.image }
          ]}
        />
        {this.renderChildren()}
      </div>
    )
  }

}

App.propTypes = propTypes

export default App