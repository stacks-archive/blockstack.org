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
import MultiVideoPlayer    from '../components/MultiVideoPlayer'
import MailchimpForm       from '../components/MailchimpForm'
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
      videos: [
        {
          src: 'https://www.youtube.com/embed/Z4bMFKBRg_k',
          previewImageUrl: '/images/resources/video-home-1-preview.jpg',
          thumbnailImageUrl: '/images/resources/video-home-1-thumbnail.jpg',
        },
        {
          src: 'https://www.youtube.com/embed/qtOIh93Hvuw',
          previewImageUrl: '/images/resources/video-home-2-thumbnail.jpg',
          thumbnailImageUrl: '/images/resources/video-home-2-thumbnail.jpg',
        },
        {
          src: 'https://www.youtube.com/embed/YzlyEuRfXxo',
          previewImageUrl: '/images/resources/video-home-3-thumbnail.jpg',
          thumbnailImageUrl: '/images/resources/video-home-3-thumbnail.jpg',
        }
      ],
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
          title: 'Tokens',
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

    const subscribeURL = '//blockstack.us14.list-manage.com/subscribe/post?u=394a2b5cfee9c4b0f7525b009&amp;id=0e5478ae86'

    return (
      <DocumentTitle title="Blockstack, building the decentralized internet">
        <div className="body-hero">
          <div className="w-100" style={{ overflow: 'hidden' }}>
            <div>
              <Header transparent={true} />
              <div className="container">
                <section className="hero text-center">
                  <h1 className="text-white m-b-20">
                   A New Internet for Decentralized Apps
                  </h1>
                  <p className="hero-lead purple-50 col-md-9 col-centered">
                    Blockstack is a new internet for decentralized apps where users own their data.<br/>A browser is all that’s needed to get started.
                  </p>
                  <div className="no-padding container-fluid col-md-10 col-lg-10 col-centered m-b-55">
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
                  <div className="container container-md mx-auto no-padding">
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
            <div className="container-fluid sectionWrap bg-primary-dark section-stats">
              <div className="container container-md mx-auto">
                <div className="row">
                  <div className="col-sm-4 text-center text-stats text-white">
                    {this.state.stats.domains.toLocaleString()}
                    <span className="text-stats-description purple-50">domains registered</span>
                  </div>
                  <div className="col-sm-4 text-center text-stats text-white">
                    3+
                    <span className="text-stats-description purple-50">years in production</span>
                  </div>
                  <div className="col-sm-4 text-center text-stats text-white">
                    {this.state.stats.meetupUsers.toLocaleString()}
                    <span className="text-stats-description purple-50">community devs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* New section layout applied */}
            <div className="container-fluid sectionWrap bg-white">
              <div className="row">
                <div className="col-sm-12">
                  <MultiVideoPlayer videos={this.state.videos}/>
                </div>
              </div>
            </div>

            {/* New section layout applied */}
            <div className="container container-lg sectionWrap">
              <div className="row">
                <div className="col-md-5 text-center">
                  <a href="https://blockstack.org/whitepaper.pdf" target="_blank">
                    <Image className="w-100 icon-lg-special"
                      src="/images/icons/icon-whitepaper-01@2x.png"
                      retinaSupport={false} />
                  </a>
                </div>
                <div className="col-md-7 m-b-25 d-flex align-items-center">
                  <div className="container-fluid text-center">
                    <h3 className="text-white m-b-35">
                      The Blockstack Whitepaper
                    </h3>
                    <a href="https://blockstack.org/whitepaper.pdf" role="button"
                      className="btn btn-outline-light btn-pill" style={{ minWidth: '245px' }}>
                      Read the Whitepaper
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* New section layout applied */}
            <div className="container-fluid sectionWrap bg-white">
              <div className="row">
                <div className="container container-lg mx-auto">
                  <div className="row">
                    <div className="container-fluid">
                      <h2 className="text-center m-b-40">
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
            <div className="container-fluid sectionWrap bg-light-gray">
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
            <div className="container-fluid sectionWrap bg-white">
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
            <div className="container-fluid sectionWrap bg-light-gray">
              <div className="row">
                <div className="container">
                  <div className="row">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-4 m-b-25">
                          <div className="container">
                            <a href="https://www.wsj.com/articles/blockstack-launches-25-million-fund-for-blockchain-startups-1502883001" target="_blank">
                            <h4 className="text-center">
                              <Image className="h-press-wsj"
                                src="/images/logos/wsj-logo-BW-40.svg"
                                retinaSupport={false} />
                            </h4>
                            <p className="font-weight-bold text-center">
                              “Blockstack… has launched a $25 million fund to invest in startups that build on its technology.”
                            </p>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-4 m-b-25">
                          <div className="container">
                            <a href="http://observer.com/2016/09/a-second-internet-coming-soon-courtesy-of-the-blockchain/" target="_blank">
                            <h4 className="text-center">
                              <Image className="h-press-observer"
                                src="/images/logos/observer-logo-BW-40.svg"
                                retinaSupport={false} />
                            </h4>
                            <p className="font-weight-bold text-center">
                              “Blockstack… has been designing an alternative browser for what could be fairly described as another internet”
                            </p>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-4 m-b-25">
                          <div className="container">
                            <a href="https://www.technologyreview.com/s/603352/one-startups-vision-to-reinvent-the-web-for-better-privacy/" target="_blank">
                            <h4 className="text-center">
                              <Image className="h-press-mit"
                                src="/images/logos/mit-logo-BW-40.svg"
                                retinaSupport={false} />
                            </h4>
                            <p className="font-weight-bold text-center">
                              “A kind of parallel universe to the Web we know — one where users have more control of their data.”
                            </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* New section layout applied */}
            <div className="container-fluid sectionWrap bg-primary text-white">
              <div className="row">
                <div className="container container-md mx-auto m-b-80 m-t-35">
                  <div className="row">
                    <div className="container-fluid">
                      <h2 className="text-center m-b-45">
                        Sign Up for Updates
                      </h2>
                    <div className="container-fluid">
                      <p>
                        Join our mailing list to stay up to date with the Blockstack community. You'll hear about product launches, upcoming events, newly released applications and more.
                      </p>
                      <MailchimpForm subscribeURL={subscribeURL} submitButtonText='Sign Up' />
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
