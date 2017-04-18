'use strict'

import {Component}   from 'react'
import {Link}        from 'react-router'
import DocumentTitle from 'react-document-title'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {BlogActions}  from '../datastore/Blog'
import {StatsActions} from '../datastore/Stats'
import Image          from '../components/Image'

function mapStateToProps(state) {
  return {
    posts: state.blog.posts,
    stats: state.stats,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    Object.assign({}, BlogActions, StatsActions),
    dispatch
  )
}

class HomePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      stats: this.props.stats,
      posts: this.props.posts
    }
  }

  componentWillMount() {
    if (this.props.posts.length === 0) {
      this.props.fetchPosts()
    }
    this.props.fetchStats()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stats !== this.props.stats) {
      const stats = nextProps.stats
      this.setState({
        stats: stats,
      })
    }

    if (nextProps.posts !== this.props.posts) {
      this.setState({
        posts: nextProps.posts,
      })
    }
  }

  render() {
    const firstThreePosts = this.state.posts.slice(0, 3)

    return (
      <DocumentTitle title="Blockstack, building the decentralized internet">
        <div className="body-hero">
          <div className="col-centered block">
            <div className="container">
              <section className="hero">
                <h1 className="hero-head">
                  What will you build on the decentralized internet?
                </h1>
                <p className="lead hero-lead col-md-5 block">
                  Blockstack is a new decentralized internet where you own your data and apps run locally without remote servers.
                </p>
                <p className="no-padding col-md-12">
                  <Link to="/tutorials/hello-blockstack" role="button"
                    className="btn btn-lg btn-secondary btn-block">
                    Watch Tutorial
                  </Link>
                </p>
                <p className="no-padding col-md-12 hero-caption">
                  <Link to="/install" className="hero-caption-text">
                    Try the browser portal &nbsp; › &nbsp;
                    <span className="hero-caption-link">Install</span>
                  </Link>
                </p>
              </section>
            </div>
            <div className="section-even container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    The decentralized internet is already here
                  </h1>
                  <div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        In production for over 2 years
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        {this.state.stats.domains} users registered
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Used by OpenBazaar, Microsoft & more
                      </h3>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="section-odd container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    The internet, evolved
                  </h1>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    The decentralized internet is powered by a technological breakthrough in consensus algorithms that lets you take back your safety, privacy, and property rights. Experience the internet as it was truly meant to be.
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    Blockstack gives you access to the decentralized internet within your favorite browser. Claim your identity, try out the decentralized apps, find friends in the public directory, make payments with digital currency, and connect storage providers to host and own your data.
                  </p>
                  <p className="lead-centered">
                    <Link to="/install" role="button"
                      className="btn btn-lg btn-outline-primary btn-block">
                      Install Browser Portal
                    </Link>
                  </p>
                </section>
              </div>
            </div>
            <div className="section-even container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    The future of app development is decentralized
                  </h1>
                  <div className="col-md-4 no-padding">
                    <h3 className="modern text-center">
                      No infrastructure
                    </h3>
                    <p className="lead lead-centered col-md-10 block col-centered text-center">
                      Build apps without databases or server maintainance. Publish apps to the decentralized internet where they will run on user devices and live forever.
                    </p>
                  </div>
                  <div className="col-md-4 no-padding">
                    <h3 className="modern text-center">
                      Get users faster
                    </h3>
                    <p className="lead lead-centered col-md-10 block col-centered text-center">
                      Make it easier than ever for users to switch with shared data protocols between apps and freedom from walled gardens, censorship, and middlemen.
                    </p>
                  </div>
                  <div className="col-md-4 no-padding">
                    <h3 className="modern text-center">
                      Be paid for open source
                    </h3>
                    <p className="lead lead-centered col-md-10 block col-centered text-center">
                      New business models enable you to get paid for open source code. Utilize micropayments, blockchain protocols, and more.
                    </p>
                  </div>
                </section>
              </div>
            </div>
            <div className="section-odd container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    New app possibilities to explore 
                  </h1>
                  <div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Decentralized social networks
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Liquid democracy
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Peer-to-peer marketplaces
                      </h3>
                    </div>
                  </div>
                  <div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Open ridesharing
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Verified file publishing
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Encrypted health records
                      </h3>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="section-even container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    Blockstack gives you a full trustless stack
                  </h1>
                  <div className="col-md-4 no-padding">
                    <h3 className="modern text-center">
                      Identity
                    </h3>
                    <p className="lead lead-centered col-md-10 block col-centered text-center">
                      With Blockstack's identity system, users hold their own digital keys.
                      This let's them control their data access and auth into apps without the need for identity providers.
                    </p>
                  </div>
                  <div className="col-md-4 no-padding">
                    <h3 className="modern text-center">
                      Storage
                    </h3>
                    <p className="lead lead-centered col-md-10 block col-centered text-center">
                      Blockstack's storage system allows users to bring their own storage providers and control their data.
                      Data is encrypted and easily shared between applications.
                    </p>
                  </div>
                  <div className="col-md-4 no-padding">
                    <h3 className="modern text-center">
                      Naming
                    </h3>
                    <p className="lead lead-centered col-md-10 block col-centered text-center">
                      The Blockstack naming system (BNS) is completely decentralized and handles public key distribution and cache invalidation.
                      It is supported by the Blockstack blockchain and P2P network.
                    </p>
                  </div>
                  <div className="col-md-4 no-padding">
                    <h3 className="modern text-center">
                      Payments
                    </h3>
                    <p className="lead lead-centered col-md-10 block col-centered text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="col-md-4 no-padding">
                    <h3 className="modern text-center">
                      Encryption
                    </h3>
                    <p className="lead lead-centered col-md-10 block col-centered text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="col-md-4 no-padding">
                    <h3 className="modern text-center">
                      Auth
                    </h3>
                    <p className="lead lead-centered col-md-10 block col-centered text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </section>
              </div>
            </div>
            <div className="section-odd container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    Step-by-step tutorials
                  </h1>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    <Link to="/tutorials/hello-blockstack">
                      <Image
                        src="/images/tutorials/hello-blockstack-fastforward.gif"
                        fallbackSrc="/images/tutorials/hello-blockstack-fastforward.gif"
                        retinaSupport={false} />
                    </Link>
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    Complete the step-by-step tutorial and see how easy it is to build an app with a decentralized identity system in a few lines of code and no servers.
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    <Link to="/tutorials/hello-blockstack" role="button"
                      className="btn btn-outline-primary btn-block">
                      Hello Blockstack Tutorial
                    </Link>
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    Want to learn more about building apps on blockstack? Tutorials on building serverless apps with decentralized storage are coming soon.
                  </p>
                </section>
              </div>
            </div>
            <div className="section-even container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    News
                  </h1>
                  <div className="row">
                  { firstThreePosts.map((post, index) => {
                    return (
                      <div className="col-md-4" key={index}>
                        { post.urlSlug && post.title ?
                        <Link to={'/blog/' + post.urlSlug}>
                          <h3>{ post.title }</h3>
                        </Link>
                        : null }
                        { post.preview ?
                        <div dangerouslySetInnerHTML={{ __html: post.preview }}>
                        </div>
                        : null }
                        <div className="post-meta">
                          { post.creator ?
                          <span>{post.creator.name} |&nbsp;</span>
                          : null }
                          { post.datetime && post.date ?
                          <time className="post-date" dateTime={post.datetime}>
                            {post.date}
                          </time>
                          : null }
                        </div>
                      </div>
                    )
                  }) }
                  </div>
                  <p className="lead-centered">
                    <Link to="/newsletter" role="button"
                      className="btn btn-lg btn-outline-primary btn-block">
                      Get Updates
                    </Link>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)