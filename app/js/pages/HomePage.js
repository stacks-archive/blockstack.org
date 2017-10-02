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
import EmbedYouTube        from '../components/EmbedYouTube'
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
      videoURL: 'https://www.youtube.com/embed/Z4bMFKBRg_k',
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
          title: 'Token',
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
          <div className="w-100" style={{ overflow: 'hidden' }}>
            <div>

              <Alert />
              <Header transparent={true} />

              <div className="container">
                <section className="hero text-center">
                  <h1 className="text-white m-b-20">
                   A New Internet for Decentralized Apps
                  </h1>
                  <p className="hero-lead purple-50 col-md-9 col-centered">
                    Blockstack is a new internet for decentralized apps where users own their data.<br/>A browser is all that’s needed to get started.
                  </p>
                  <div className="no-padding container-fluid col-md-10 col-lg-10 col-centered m-b-95">
                    <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <p className="float-md-right">
                          <Link to="/install" role="button"
                            className="btn btn-primary btn-block btn-block-reset" style={{ minWidth: '245px' }}>
                            Install
                          </Link>
                        </p>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <p className="float-md-left">
                          <Link to="/signup" role="button"
                            className="btn btn-primary btn-block btn-block-reset" style={{ minWidth: '245px' }}>
                            Get Updates
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="no-padding container-fluid col-md-9 col-centered">
                    <div className="text-center d-none d-sm-block">
                      <Image className="landing-feat-img"
                        src="/images/resources/browser-home-screen@2x.png"
                        fallbackSrc="/images/resources/browser-home-screen.png"
                        retinaSupport={false} />
                    </div>
                    <div className="caption-browser d-none d-sm-block">
                      Blockstack Browser
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* New section layout applied */}
            <div className="container-fluid sectionWrap bg-secondary section-stats">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4 text-center text-stats text-white">
                    {this.state.stats.domains.toLocaleString()}
                    <span className="text-stats-description text-white">domains registered</span>
                  </div>
                  <div className="col-sm-4 text-center text-stats text-white">
                    3+
                    <span className="text-stats-description text-white">years in production</span>
                  </div>
                  <div className="col-sm-4 text-center text-stats text-white">
                    {this.state.stats.meetupUsers.toLocaleString()}
                    <span className="text-stats-description text-white">community devs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* New section layout applied */}
            <div className="container-fluid sectionWrap bg-white">
              <div className="row">
                <div className="container container-md">
                  <EmbedYouTube src={this.state.videoURL} />
                </div>
              </div>
            </div>

            {/* New section layout applied */}
            <div className="container-fluid sectionWrap bg-light-gray">
              <div className="row">
                <div className="container">
                  <div className="row">
                    <div className="container-fluid">
                      <h2 className="text-center m-b-25">
                        A Full Stack for Decentralized Apps
                      </h2>
                    </div>
                    <div className="col-sm-12 text-center landing-hero-img m-b-35">
                      <Image className="landing-feat-img container-sm"
                        src="/images/visuals/blockstack-architecture-diagram.svg"
                        retinaSupport={false} />
                    </div>
                    <div className="container-fluid">
                      <div className="row">
                        {content.fullStack.map((item, index) => {
                          return (
                            <div key={index} className="col-lg-4 m-b-25">
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
                  </div>
                </div>
              </div>
            </div>

            {/* New section layout applied */}
            <div className="container-fluid sectionWrap bg-white">
              <div className="row">
                <div className="container">
                  <div className="row">
                    <div className="container-fluid">
                      <h2 className="text-center m-b-25">
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
                    <div className="container m-b-80">
                      <div className="row">
                        <div className="col-xl-4 code-img-gutter">
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
                        <div className="col-xl-4 code-img-gutter">
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
                        <div className="col-xl-4 code-img-gutter">
                          <h4 className="text-center m-b-10">
                            Tokens
                          </h4>
                          <p className="light-gray text-center">
                            <i>Coming Soon...</i>
                          </p>
                          <p className="text-center">
                            <Image className="col3-img-lg"
                              src="/images/visuals/text-editor-payments.svg"
                              fallbackSrc=""
                              retinaSupport={false} />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="container container-xs">
                      <p className="text-center">
                        <Link to="/tutorials" role="button"
                          className="btn btn-primary btn-block">
                          Try the Tutorials
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* New section layout applied */}
            <div className="container-fluid sectionWrap bg-light-gray">
              <div className="row">
                <div className="container">
                  <div className="row">
                    <div className="container-fluid">
                      <h2 className="text-center m-b-85">
                        Featured Apps on Blockstack
                      </h2>
                    </div>
                    <div className="container-fluid">
                      {[[0,3], [3,5]].map((row, index) => {
                        return (
                          <div key={index} className="row">
                            {featuredApps.slice(row[0],row[1]).map((featuredApp, index2) => {
                              const offsetClass = (row[0] === 3 && index2 === 0) ? '' : ''
                              return (
                                <div key={index2}
                                  className={`col-lg-4 m-b-55 mx-auto ${offsetClass}`}>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* New section layout applied */}
            <div className="container-fluid sectionWrap bg-white">
              <div className="row">
                <div className="container container-lg">
                  <div className="row">
                    <div className="container-fluid">
                      <h2 className="text-center m-b-25">
                        News
                      </h2>
                    </div>
                    <div className="container">
                      <div className="row">
                      { firstThreePosts.map((post, index) => {
                        return (
                          <PostPreview key={index} post={post} />
                        )
                      }) }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* New section layout applied */}
            <div className="container-fluid sectionWrap bg-primary text-white">
              <div className="row">
                <div className="col-sm-10 col-lg-11 col-xl-12 mx-auto m-b-80 m-t-35">
                  <div className="row">
                    <div className="container-fluid">
                      <h2 className="text-center m-b-35">
                        Get Started
                      </h2>
                    </div>
                    <div className="col-12 col-xl-8 container-lg mx-auto">
                      <div className="row">
                        <div className="col-md-6 m-b-20">
                          <Link to="/install" role="button"
                            className="btn btn-primary btn-block m-b-10">
                            Install
                          </Link>
                        </div>
                        <div className="col-md-6 m-b-20">
                          <Link to="/signup" role="button"
                            className="btn btn-primary btn-block">
                            Get Updates
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)