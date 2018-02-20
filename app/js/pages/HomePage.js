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
import ModalVideo          from 'react-modal-video'

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
      videoOpen: false,
      stats: this.props.stats,
      posts: this.props.posts
    }

    this.openModal = this.openModal.bind(this)
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

  openModal() {
    this.setState({ videoOpen: true })
  }

  render() {
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
                  <h1 className="m-b-20 mt-1 mt-md-5">
                    A new internet for decentralized apps
                  </h1>
                </div>
                <div className="col-md-5">
                  <div className="video-thumbnail img-hover-scale" onClick={this.openModal}>
                    <div className="video-thumbnail-img" style={{ backgroundImage: 'url("/images/resources/video-home-1-thumbnail.jpg")' }} />
                    <i className="fa fa-play"></i>
                  </div>
                  <ModalVideo channel='youtube' timeout={300} isOpen={this.state.videoOpen} videoId='7SmC7AuZNWY' onClose={() => this.setState({ videoOpen: false })} />
                </div>
              </div>
            </div>
          </section>

          <section className="app-store">
            <div className="container">
              <div className="row">
                <div className="col-lg-9 col-md-8 order-md-2">
                  <div className="app-store-section">
                    <p>Featured Apps</p>
                    <div className="row">
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-dotpodcast-512x512.png" />
                            <h4>DotPodcast</h4>
                            <p>Podcasts</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-afia-512x512.png" />
                            <h4>Afia</h4>
                            <p>Healthcare</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-casa-512x512.png" />
                            <h4>Casa</h4>
                            <p>Homesharing</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
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
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-coins-512x512.png" />
                            <h4>Coins</h4>
                            <p>Investment Portfolios</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-dotpodcast-512x512.png" />
                            <h4>DotPodcast</h4>
                            <p>Podcasts</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-casa-512x512.png" />
                            <h4>Casa</h4>
                            <p>Homesharing</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
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
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-dotpodcast-512x512.png" />
                            <h4>DotPodcast</h4>
                            <p>Podcasts</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-afia-512x512.png" />
                            <h4>Afia</h4>
                            <p>Healthcare</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="">
                            <img src="/images/logos/app-icon-casa-512x512.png" />
                            <h4>Casa</h4>
                            <p>Homesharing</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
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
                <div className="col-lg-3 col-md-4 order-md-1">
                  <div className="app-store-sidebar">
                    <p><strong>Blockstack apps are</strong></p>
                    <ul>
                      <li><i className="fa fa-cog" /> Easier to use</li>
                      <li><i className="fa fa-cog" /> Secure</li>
                      <li><i className="fa fa-cog" /> Decentralized</li>
                      <li><i className="fa fa-cog" /> Faster to Build</li>
                    </ul>
                    <div className="d-none d-md-block">
                      <p className="m-b-1">Are you a developer?</p>
                      <button className="btn btn-outline-primary">View tutorials</button>
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
                  <div className="m-t-60 float-md-right">
                    <button className="btn btn-primary mt-3">Go to developer site</button>
                    <button className="btn btn-outline-primary mt-3">Request an app</button>
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
