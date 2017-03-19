'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import CardLink         from '../components/CardLink'

class ContentSection extends Component {
  static propTypes: {
    markup: PropTypes.string.isRequired,
    className: PropTypes.string
  }

  render() {
    return(
      <section className={this.props.className}>
        <div className="container col-centered blog-post">
          <div className="container">
            <div className="post-content">
              <div dangerouslySetInnerHTML={{ __html: this.props.markup }}>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

class IntroPage extends Component {

  render() {

    return (
      <DocumentTitle title="Blockstack - Intro">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="m-t-100">
            <div className="container col-centered blog-post">
              <div className="container">
                <div className="post-header">
                  <h1>
                    Intro to Blockstack
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <ContentSection className="m-b-50"
            markup="<p>
              Blockstack is a new decentralized internet.
            </p>

            <p>
              With Blockstack, users control their data and apps run on their devices.
              There are no middlemen, no passwords, no massive data silos to breach,
              and no services tracking us around the internet.
            </p>

            <p>
              The applications on blockstack are server-less and decentralized.

              Developers start by building a single-page application in Javascript,

              Then, instead of plugging the frontend into a centralized API,
              they plug into an API run by the user.

              Developers install a library called 'blockstack.js' and
              don't have to worry about running servers, maintaining databases,
              or building out user management systems.
            </p>

            <p>
              Personal user APIs ship with the Blockstack app and
              handle everything from identity and authentication
              to data storage.

              Applications can request permissions from users and then
              gain read and write access to user resources.
            </p>

            <p>
              Data storage is simple and reliable and uses existing cloud infrastructure.

              Users connect with their Dropbox, Google Drive, etc and data is synced from
              their local device up to the cloud.
            </p>

            <p>
              Identity is user-controlled and utilizes the blockchain for secure management
              of keys, devices and usernames.

              When users login with apps, they are anonymous by default and use an
              app-specific key, but their full identity can be revealed and proven
              at any time.

              Keys are for signing and encryption and can be changed
              as devices need to be added or removed.
            </p>

            <p>
              Under the hood, Blockstack provides a decentralized domain name system (DNS),
              decentralized public key distribution system,
              and registry for apps and user identities.
            </p>

            <p>
              Here's a diagram laying out the major components of Blockstack and showing how it works under the hood:
            </p>" />
          <section className="foot-feature col-centered"
            style={{ paddingTop: '50px', paddingBottom: '50px' }}>
            <div className="container-fluid bs-docs-featurette col-centered">
              <div className="col-centered m-b-5">
                <div className="row col-centered">
                  <h2 className="col-md-10 col-lg-8 col-centered m-b-2">
                    How Blockstack Works
                  </h2>
                  <div className="text-xs-center">
                    <img src="/images/visuals/bsk-architecture-dark.svg"
                      className="img-fluid col-centered" alt="Blockstack layer diagram" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ContentSection className="m-b-50 m-t-50"
            markup="<p>
              To get started building apps on Blockstack,
              read the developer documentation,
              setup a Blockstack Core node,
              and preview the Blockstack Browser (in an experimantal alpha).
            </p>" />
          <section>
            <div className="bs-docs-featurette col-centered m-b-2">
              <div className="container col-centered">
                <div className="card-deck-wrapper">
                  <div className="card-deck m-b-3">
                    <CardLink
                      href='/docs'
                      title='Docs'
                      body="Documentation for the Blockstack Browser, Blockstack Core, and Blockstack Explorer."
                      imageSrc="/images/article-photos/bookshelves.jpg"
                      cardsPerRow={3} />
                    <CardLink
                      href='https://github.com/blockstack/blockstack-core'
                      title='Blockstack Core'
                      body="A server you can run that becomes a part of the Blockstack P2P network and maintains the DNS, PKI and identity system."
                      imageSrc="/images/article-photos/passport.jpg"
                      target="_blank"
                      cardsPerRow={3} />
                    <CardLink
                      href='https://github.com/blockstack/blockstack-browser/releases'
                      title='Blockstack Browser'
                      body="A desktop app you can install to upgrade your browsers and turn them into blockstack-enabled browsers."
                      imageSrc="/images/article-photos/astronaut.jpg"
                      target="_blank"
                      cardsPerRow={3} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ContentSection className="m-b-50 m-t-50"
            markup="<p>
                    To learn more about Blockstack, read the papers,
                    watch the videos, and check out the Blockstack Blog.
                  </p>" />
          <section>
            <div className="bs-docs-featurette col-centered m-b-2">
              <div className="container col-centered">
                <div className="card-deck-wrapper">
                  <div className="card-deck m-b-3">
                    <CardLink
                      href='/papers'
                      title='Papers'
                      body="Academic papers on Blockstack's DNS/naming, storage, identity, and authentication systems."
                      imageSrc="/images/article-photos/booklets.jpg"
                      cardsPerRow={3} />
                    <CardLink
                      href='/videos'
                      title='Videos'
                      body="Videos of talks given about what Blockstack is, how it works, and what can be built on top of it."
                      imageSrc="/images/article-photos/scribble.jpg"
                      cardsPerRow={3} />
                    <CardLink
                      href='/blog'
                      title='Blog'
                      body="Blog with the latest developments about Blockstack, including product announcements and technical writeups."
                      imageSrc="/images/article-photos/computer.jpg"
                      cardsPerRow={3} />
                  </div>
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

export default IntroPage
