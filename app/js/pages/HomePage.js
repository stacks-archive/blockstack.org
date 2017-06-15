'use strict'

import {Component}   from 'react'
import {Link}        from 'react-router'
import DocumentTitle from 'react-document-title'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {BlogActions}       from '../datastore/Blog'
import {StatsActions}      from '../datastore/Stats'
import Image               from '../components/Image'
import TransparentHeader   from '../components/TransparentHeader'

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
      let stats = nextProps.stats
      if (stats.domains === 0) {
        stats.domains = 72000
      }
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

    const content = {
      oldInternet: [
        {
          title: 'Mass Data Breaches',
          body: 'Traditional apps store user data in massive data silos. This results in high value targets just waiting to be breached. With a single app, confidence in the safety of your data requires blind trust in dozens of companies.'
        },
        {
          title: 'Insecure Connections',
          body: 'With traditional apps, a secure connection is far from a certainty. Domain names and website certificates are vulnerable to compromise. Reliance on 3rd party servers and many trusted services makes us less safe.'
        },
        {
          title: 'Platform Lock-in',
          body: 'With traditional apps, the digital keys to identity and authentication are owned by large monopoly platforms. Users and developers are locked in and restrictions are placed on innovation.'
        }
      ],
      newInternet: [
        {
          title: 'Own Your Data',
          body: 'With Blockstack apps you truly own your data. It’s kept on your device and encrypted before backed up in the cloud. This removes the need for blind trust in 3rd parties and makes it easier to keep your data safe.'
        },
        {
          title: 'Own Your Apps',
          body: 'Blockstack apps put you in control of your software. Apps are loaded via a secure domain name system and live on your devices. Independence from 3rd parties makes you more safe.'
        },
        {
          title: 'Own Your Identity',
          body: 'With Blockstack apps you own your identity. Your digital keys are seamlessly generated and kept on your device. This lets you move freely between apps and control your online experience.'
        }
      ],
      fullStack: [
        {
          title: 'Identity',
          body: 'With Blockstack, users get digital keys that let them own their identity. They sign in to apps locally without remote servers or identity providers.'
        },
        {
          title: 'Storage',
          body: 'Blockstack\'s storage system allows users to bring their own storage providers and control their data. Data is encrypted and easily shared between applications.'
        },
        {
          title: 'Payments',
          body: 'Blockstack uses Bitcoin and other crypto-currencies for simple peer-to-peer payments. Developers can charge for downloads, subscriptions, and more.'
        },
      ],
      appPossibilities: [
        {
          title: 'Decentralized Social Networks',
          body: 'Existing social networks lock in users and limit access. Build a decentralized social network that allows users to own their relationships and data and take it with them wherever they go.'
        },
        {
          title: 'Peer-to-peer Marketplaces',
          body: 'Existing marketplaces take a massive haircut and limit what can be bought and sold. Build a peer-to-peer marketplace that allows individuals to freely transact at a lower cost.'
        },
        {
          title: 'Collaborative Search Engines',
          body: 'The web was built to be open and accessible but today the search indexes we rely upon are proprietary. Build a platform that incentivizes people to contribute to a collaborative index.'
        }
      ]
    }

    return (
      <DocumentTitle title="Blockstack, building the decentralized internet">
        <div className="body-hero">
          <div className="col-centered block">
            <TransparentHeader />
            <div className="container">
              <section className="hero">
                <h1 className="h-secondary hero-head">
                 A New Internet for Decentralized Apps
                </h1>
                <p className="lead hero-lead col-md-9 col-centered">
                  Blockstack is a new decentralized internet where users own their data and apps run locally. A browser portal is all that’s needed to get started.
                </p>
                <div className="no-padding container-fluid col-md-9 col-centered">
                  <div className="col-sm-12 text-center landing-hero-img">
                    <Image className="landing-feat-img"
                      src="/images/resources/portal-home-screen@2x.png"
                      fallbackSrc="/images/tutorials/portal-home-screen.png"
                      retinaSupport={false} />
                  </div>
                </div>
                <div className="no-padding container-fluid col-md-10 col-lg-10 col-centered">
                  <div className="no-padding col-md-6" style={{ paddingRight: '1px' }}>
                    <p className="no-padding hero-btn-title">
                      Developers
                    </p>
                    <p className="no-padding m-b-10">
                      <Link to="/developers" role="button"
                        className="btn btn-sm btn-secondary btn-block btn-hero">
                        › Browser Kit
                      </Link>
                    </p>
                  </div>
                  <div className="no-padding col-md-6">
                    <p className="no-padding hero-btn-title">
                      Users
                    </p>
                    <p className="no-padding">
                      <Link to="/users" role="button"
                        className="btn btn-sm btn-secondary btn-block btn-hero">
                        › Join the Waitlist
                      </Link>
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <div className="section-stats container-fluid">
              <div className="container">
                <section>
                  <div className="no-padding col-sm-12 col-md-4 text-center text-white text-stats">
                    ——›&nbsp;{this.state.stats.domains} users registered
                  </div>
                  <div className="no-padding col-sm-12 col-md-4 text-center text-white text-stats">
                    ——›&nbsp;In production for 3+ years
                  </div>
                  <div className="no-padding col-sm-12 col-md-4 text-center text-white text-stats">
                    ——›&nbsp;{this.state.stats.meetupUsers} community devs
                  </div>
                </section>
              </div>
            </div>
            <div className="sectionContainer container-fluid">
              <div className="container">
                <section>
                  <h3 className="h-primary">
                    The Old Internet is Broken
                  </h3>
                  <div>
                    {content.oldInternet.map((item) => {
                      return (
                        <div className="col-md-4">
                          <h5 className="h-primary">
                            {item.title}
                          </h5>
                          <p className="text-center">
                            {item.body}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                  <h1 className="type-beauty text-center m-t-5">
                    The New Internet is Here
                  </h1>
                  <div className="row">
                    {content.newInternet.map((item) => {
                      return (
                        <div className="col-md-4">
                          <h3 className="text-center">
                            {item.title}
                          </h3>
                          <p className="text-center">
                            {item.body}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </section>
              </div>
            </div>
            <div className="section-odd container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    A Full Stack for Decentralized Apps
                  </h1>
                  <div className="row">
                    {content.fullStack.map((item) => {
                      return (
                        <div className="col-md-4">
                          <h3 className="modern text-center">
                            {item.title}
                          </h3>
                          <p>
                            {item.body}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </section>
              </div>
            </div>
            <div className="section-even container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    Step-by-step tutorials
                  </h1>
                  <div className="row">
                    <div className="col-md-8 col-centered">
                      <p className="modern text-center">
                        Complete the step-by-step tutorial and see how easy it is to build an app with a decentralized identity system in a few lines of code and no servers.
                      </p>
                      <p className="modern text-center">
                        <Link to="/tutorials/hello-blockstack">
                          <Image className="landing-feat-img"
                            src="/images/tutorials/hello-blockstack-fastforward.gif"
                            fallbackSrc="/images/tutorials/hello-blockstack-fastforward.gif"
                            retinaSupport={false} />
                        </Link>
                      </p>
                      <p className="modern text-center">
                        Want to learn more about building apps on blockstack? Tutorials on building serverless apps with decentralized storage are coming soon.
                      </p>
                      <p className="modern text-center">
                        <Link to="/tutorials" role="button"
                          className="btn btn-outline-primary btn-block">
                          Try the Tutorials
                        </Link>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="section-odd container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    Easily build apps like these
                  </h1>
                  <div className="row">
                    {content.appPossibilities.map((item) => {
                      return (
                        <div className="col-md-4">
                          <h3 className="modern text-center">
                            {item.title}
                          </h3>
                          <p>
                            {item.body}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </section>
              </div>
            </div>
            <div className="section-even container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    News
                  </h1>
                  <div className="row m-b-50 no-margin">
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
                </section>
              </div>
            </div>
            <div className="section-odd container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    Get Started
                  </h1>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="no-padding hero-btn-title">
                        Developers
                      </p>
                      <p className="no-padding m-b-10">
                        <Link to="/developers" role="button"
                          className="btn btn-sm btn-secondary btn-block btn-hero">
                          Browser Kit
                        </Link>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p className="no-padding hero-btn-title">
                        Users
                      </p>
                      <p className="no-padding">
                        <Link to="/users" role="button"
                          className="btn btn-sm btn-secondary btn-block btn-hero">
                          Join the Waitlist
                        </Link>
                      </p>
                    </div>
                  </div>
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