'use strict'

import {Component}          from 'react'
import {Link}               from 'react-router'
import DocumentTitle        from 'react-document-title'
import {bindActionCreators} from 'redux'
import {connect}            from 'react-redux'

import {BlogActions}       from '../datastore/Blog'
import {StatsActions}      from '../datastore/Stats'
import Image               from '../components/Image'
import Header              from '../components/Header'
import Alert               from '../components/Alert'
import PostPreview         from '../components/PostPreview'
import {featuredApps}      from '../config'

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
            <div>
              <Alert />
              <Header transparent={true} />
              <div className="container">
                <section className="hero text-center">
                  <h1 className="text-white m-b-20">
                   A New Internet for Decentralized Apps
                  </h1>
                  <p className="hero-lead purple-50 col-md-9 col-centered">
                    Blockstack is a new decentralized internet where users own their data and apps run locally. A browser portal is all that’s needed to get started.
                  </p>
                  <div className="no-padding container-fluid col-md-10 col-lg-10 col-centered m-b-60">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <p className="float-md-right">
                          <Link to="/install" role="button"
                            className="btn btn-electric-blue btn-block btn-block-reset" style={{ minWidth: '245px' }}>
                            Developers&nbsp;&nbsp;›&nbsp;&nbsp;Browser Kit
                          </Link>
                        </p>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <p className="float-md-left">
                          <Link to="/signup" role="button"
                            className="btn btn-electric-blue btn-block btn-block-reset" style={{ minWidth: '245px' }}>
                            Users&nbsp;&nbsp;›&nbsp;&nbsp;Sign Up
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="no-padding container-fluid col-md-9 col-centered">
                    <div className="text-center hidden-sm-down">
                      <Image className="landing-feat-img"
                        src="/images/resources/browser-home-screen@2x.png"
                        fallbackSrc="/images/resources/browser-home-screen.png"
                        retinaSupport={false} />
                    </div>
                    <div className="caption-browser hidden-sm-down">
                      Blockstack Browser
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="section-stats container-fluid">
              <div className="container">
                <section>
                  <div className="no-padding col-sm-12 col-md-4 text-center text-stats">
                    {this.state.stats.domains.toLocaleString()}
                    <span className="text-stats-description">domains registered</span>
                  </div>
                  <div className="no-padding col-sm-12 col-md-4 text-center text-stats">
                    3+
                    <span className="text-stats-description">years in production</span>
                  </div>
                  <div className="no-padding col-sm-12 col-md-4 text-center text-stats">
                    {this.state.stats.meetupUsers.toLocaleString()}
                    <span className="text-stats-description">community devs</span>
                  </div>
                </section>
              </div>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid">
              <div className="sectionWrap">
                <section>
                  <div className="container no-padding">
                    <div className="col-md-6 containWrap">
                      <div className="row">
                        <div className="container-fluid">
                          <h3 className="h-primary text-center-md m-b-25">
                            The <span className="electric-magenta">Old Internet</span> is Broken
                          </h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="container-fluid">
                        {content.oldInternet.map((item, index) => {
                          return (
                            <div key={index} className="container-fluid no-padding-sm m-b-30">
                              <h5 className="h-primary text-center-md">
                                {item.title}
                              </h5>
                              <p className="text-center-md">
                                {item.body}
                              </p>
                            </div>
                          )
                        })}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 containWrap">
                      <div className="row">
                        <div className="container-fluid">
                          <h3 className="h-primary text-center-md m-b-25">
                            The <span className="electric-blue">New Internet</span> is Here
                          </h3>
                        </div>
                      </div>
                      <div className="row">
                        <div className="container-fluid">
                        {content.newInternet.map((item, index) => {
                          return (
                            <div key={index} className="container-fluid no-padding-sm m-b-30">
                              <h5 className="h-primary text-center-md">
                                {item.title}
                              </h5>
                              <p className="text-center-md">
                                {item.body}
                              </p>
                            </div>
                          )
                        })}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="sectionContainerLightGray section-spacing container-fluid">
              <div className="container sectionWrap">
                <section>
                  <div className="containWrap">
                    <h3 className="h-primary text-center m-b-25">
                      A Full Stack for Decentralized Apps
                    </h3>
                    <div className="col-sm-12 text-center landing-hero-img">
                      <Image className="landing-feat-img"
                        src="/images/visuals/blockstack-architecture-diagram.svg"
                        retinaSupport={false} />
                    </div>
                    <div>
                      {content.fullStack.map((item, index) => {
                        return (
                          <div key={index} className="col-md-4">
                            <h4 className="inverse text-center">
                              {item.title}
                            </h4>
                            <p className="inverse text-center">
                              {item.body}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid">
              <div className="container sectionWrap">
                <section>
                  <div className="container p-b-15">
                    <h2 className="h-primary text-center">
                      Libraries and Step-by-Step Tutorials
                    </h2>
                  </div>
                  <div className="container m-b-30">
                    <div className="col-md-8 col-centered">
                      <p className="text-center">
                        Complete the step-by-step tutorial and see how easy it is to build an app with a decentralized identity system in a few lines of code and no servers.
                      </p>
                    </div>
                  </div>
                  <div className="container m-b-40">
                    <div className="col-md-4">
                      <h4 className="text-center m-b-10">
                        Identity
                      </h4>
                      <p className="light-gray text-center">
                        Available today!
                      </p>
                      <p className="text-center">
                        <Image className="col3-img-lg"
                          src="/images/visuals/text-editor-identity.svg"
                          fallbackSrc=""
                          retinaSupport={false} />
                      </p>
                    </div>
                    <div className="col-md-4">
                      <h4 className="text-center m-b-10">
                        Storage
                      </h4>
                      <p className="light-gray text-center">
                        Available today!
                      </p>
                      <p className="text-center">
                        <Image className="col3-img-lg"
                          src="/images/visuals/text-editor-storage.svg"
                          fallbackSrc=""
                          retinaSupport={false} />
                      </p>
                    </div>
                    <div className="col-md-4">
                      <h4 className="text-center m-b-10">
                        Payments
                      </h4>
                      <p className="light-gray text-center">
                        <i>(Coming Soon...)</i>
                      </p>
                      <p className="text-center">
                        <Image className="col3-img-lg"
                          src="/images/visuals/text-editor-payments.svg"
                          fallbackSrc=""
                          retinaSupport={false} />
                      </p>
                    </div>
                  </div>
                  <div className="container">
                    <p className="text-center">
                      <Link to="/tutorials" role="button"
                        className="btn btn-outline-primary">
                        Try the Tutorials
                      </Link>
                    </p>
                  </div>
                </section>
              </div>
            </div>
            <div className="sectionContainerLightGray section-spacing container-fluid">
              <div className="container">
                <section>
                  <h2 className="h-primary m-b-85 text-center">
                    Featured Apps on Blockstack
                  </h2>
                  {[[0,3], [3,5]].map((row, index) => {
                    return (
                      <div key={index}>
                        {featuredApps.slice(row[0],row[1]).map((featuredApp, index2) => {
                          const offsetClass = (row[0] === 3 && index2 === 0) ? 'offset-md-2' : ''
                          return (
                            <div key={index2}
                              className={`col-md-4 m-b-55 ${offsetClass}`}>
                              <p className="text-center">
                                <Image className="col-img" src={featuredApp.icon}
                                  retinaSupport={false} />
                              </p>
                              <h4 className="modern text-center">
                                {featuredApp.name}
                              </h4>
                              <p className="text-center">
                                {featuredApp.description}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                </section>
              </div>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid">
              <div className="container">
                <section>
                  <div className="containWrap">
                    <h2 className="h-primary text-center">
                      News
                    </h2>
                  </div>
                  <div className="container">
                  { firstThreePosts.map((post, index) => {
                    return (
                      <PostPreview key={index} post={post} />
                    )
                  }) }
                  </div>
                </section>
              </div>
            </div>
            <div className="sectionContainerDark section-spacing container-fluid">
              <div className="container sectionWrap">
                <section>
                  <div className="containWrap">
                    <h3 className="h-primary text-center">
                      Get Started
                    </h3>
                  </div>
                  <div className="col-md-6">
                    <p className="no-padding hero-btn-title">
                      Developers
                    </p>
                    <p className="no-padding m-b-10">
                      <Link to="/install" role="button"
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
                      <Link to="/signup" role="button"
                        className="btn btn-sm btn-secondary btn-block btn-hero">
                        Sign Up
                      </Link>
                    </p>
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