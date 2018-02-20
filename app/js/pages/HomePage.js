'use strict'

import {Component}          from 'react'
import {Link}               from 'react-router'
import DocumentTitle        from 'react-document-title'
import {bindActionCreators} from 'redux'
import {connect}            from 'react-redux'

import {BlogActions}       from '../datastore/Blog'
import {StatsActions}      from '../datastore/Stats'
import Image               from '../components/Image'
import Alert               from '../components/Alert'
import Header              from '../components/Header'
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
          src: 'https://www.youtube.com/embed/7SmC7AuZNWY',
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
        <div>
          <Alert />
          <Header transparent={true} />
          <section className="home-hero">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <h1 className="m-b-20 m-t-40">
                    A new internet for decentralized apps
                  </h1>
                </div>
                <div className="col-md-5">
                  <div style={{ width: '320px', height: '210px', backgroundColor: '#4a4a4a', borderRadius: '3px' }} />
                </div>
              </div>
            </div>
          </section>

          <section className="app-store">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="app-store-sidebar">
                    <p><strong>Blockstack apps are</strong></p>
                    <ul>
                      <li><i className="fa fa-cog" /> Easier to use</li>
                      <li><i className="fa fa-cog" /> Secure</li>
                      <li><i className="fa fa-cog" /> Decentralized</li>
                      <li><i className="fa fa-cog" /> Faster to Build</li>
                    </ul>
                    <p className="m-b-1">Are you a developer?</p>
                    <button className="btn btn-outline-primary">View tutorials</button>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="app-store-section">
                    <p>Featured Apps</p>
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-dotpodcast-512x512.png" />
                            <h4>DotPodcast</h4>
                            <p>Podcasts</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-afia-512x512.png" />
                            <h4>Afia</h4>
                            <p>Healthcare</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-casa-512x512.png" />
                            <h4>Casa</h4>
                            <p>Homesharing</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-guild.png" />
                            <h4>Guild</h4>
                            <p>Forums</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="app-store-section">
                    <p>Cryptocurrency Portfolio Apps</p>
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-coins-512x512.png" />
                            <h4>Coins</h4>
                            <p>Investment Portfolios</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-dotpodcast-512x512.png" />
                            <h4>DotPodcast</h4>
                            <p>Podcasts</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-casa-512x512.png" />
                            <h4>Casa</h4>
                            <p>Homesharing</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-guild.png" />
                            <h4>Guild</h4>
                            <p>Forums</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="app-store-section">
                    <p>Upcoming Apps</p>
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-dotpodcast-512x512.png" />
                            <h4>DotPodcast</h4>
                            <p>Podcasts</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-afia-512x512.png" />
                            <h4>Afia</h4>
                            <p>Healthcare</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-casa-512x512.png" />
                            <h4>Casa</h4>
                            <p>Homesharing</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-guild.png" />
                            <h4>Guild</h4>
                            <p>Forums</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="cta-panel">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2>Have an app idea?</h2>
                  <p>Get started building on Blockstack by visiting our developer site where you can find tutorials, docs, sourcecode, and a community forum.</p>
                </div>
                <div className="col-md-6">
                  <div className="m-t-60">
                    <button className="btn btn-primary">Go to developer site</button>
                    <button className="btn btn-outline-primary">Request an app</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </DocumentTitle>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
