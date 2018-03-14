'use strict'

import { Component } from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import Image from '../components/Image'

class AboutPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Browser">
        <div>
          <div className="hidden-image">
            <Image
              src={'/images/article-photos/astronaut.jpg'}
              fallbackSrc="/images/article-photos/road.jpg"
              retinaSupport={false}
            />
          </div>
          <div className="m-b-3 docs-header-image-wrapper">
            <Image
              src={'/images/article-photos/astronaut.jpg'}
              fallbackSrc="/images/article-photos/road.jpg"
              className="img-fluid docs-header-image"
              retinaSupport={false}
            />
          </div>
          <section className="m-t-5">
            <div className="container p-b-5 col-centered">
              <div className="container">
                <hgroup>
                  <h1 className="action-title">Browser</h1>
                </hgroup>
                <div className="m-b-3">
                  <h4>The Blockstack browser is currently in private alpha.</h4>
                  <h4>
                    If you're a developer, join our Slack group to learn more.
                  </h4>
                  <Link className="btn btn-primary btn-lg">
                    Join the Blockstack Slack
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </DocumentTitle>
    )
  }
}

export default AboutPage
