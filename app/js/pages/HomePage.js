'use strict'

import {Component}          from 'react'
import {Link} from 'react-router'
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
          <Header transparent={true} />
          <section className="jumbotron jumbotron-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <h1 className="page-heading m-b-20 mt-1 mt-md-5">
                    Own your data
                  </h1>
                  <p style={{ maxWidth: '410px' }}>
                    Decentralized apps on Blockstack let you own your data so you can maintain your privacy, security and freedom.
                  </p>
                </div>
                <div className="col-md-5">
                  <div className="d-inline-block">
                    <div className="video-thumbnail img-hover-scale" onClick={this.openModal}>
                      <div className="video-thumbnail-img" style={{ backgroundImage: 'url("/images/resources/video-home-1-thumbnail.jpg")' }} />
                      <i className="fa fa-play"></i>
                    </div>
                    <ModalVideo channel='youtube' timeout={300} isOpen={this.state.videoOpen} videoId='7SmC7AuZNWY' onClose={() => this.setState({ videoOpen: false })} />
                    <Link to="/what-is-blockstack" className="float-right">
                      What is Blockstack?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="app-store">
            <div className="container">
              <h3 className="mb-5 mt-1 mt-md-5">
                Apps built on Blockstack
              </h3>
              <div className="row">
                <div className="col-lg-9 col-md-8">
                  <div className="app-store-section">
                    <p>Featured Apps</p>
                    <div className="row">
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="https://www.graphitedocs.com/" target="_blank">
                            <img src="/images/logos/app-icon-graphite-256x256.png" />
                            <h4>Graphite</h4>
                            <p>Docs Suite</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="https://www.stealthy.im/" target="_blank">
                            <img src="/images/logos/app-icon-coins-512x512.png" />
                            <h4>Stealthy</h4>
                            <p>Messaging</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="https://coinsapp.co" target="_blank">
                            <img src="/images/logos/app-icon-coins-512x512.png" />
                            <h4>Coins</h4>
                            <p>Investment Portfolios</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="https://dotpodcast.co/" target="_blank">
                            <img src="/images/logos/app-icon-dotpodcast-512x512.png" />
                            <h4>DotPodcast</h4>
                            <p>Podcasts</p>
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
                          <a href="https://coinsapp.co/" target="_blank">
                            <img src="/images/logos/app-icon-coins-512x512.png" />
                            <h4>Coins</h4>
                            <p>Crypto Portfolios</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="https://faa.st" target="_blank">
                            <img src="/images/logos/app-icon-faast-256x256.png" />
                            <h4>faast</h4>
                            <p>Crypto Portfolios</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="http://www.coinstack.one/" target="_blank">
                            <img src="/images/logos/app-icon-coinstack-256x256.png" />
                            <h4>CoinStack</h4>
                            <p>Crypto Portfolios</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="http://lioapp.io/" target="_blank">
                            <img src="/images/logos/app-icon-lio-256x256.png" />
                            <h4>Lio</h4>
                            <p>Crypto Portfolios</p>
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
                          <a href="https://dotpodcast.co/" target="_blank">
                            <img src="/images/logos/app-icon-dotpodcast-512x512.png" />
                            <h4>DotPodcast</h4>
                            <p>Podcasts</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="https://casa.cash/" target="_blank">
                            <img src="/images/logos/app-icon-casa-512x512.png" />
                            <h4>Casa</h4>
                            <p>Homesharing</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="http://www.afiabeta.com/" target="_blank">
                            <img src="/images/logos/app-icon-afia-512x512.png" />
                            <h4>Afia</h4>
                            <p>Healthcare</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 col-6">
                        <div className="app-store-app">
                          <a href="http://www.guildblog.com/" target="_blank">
                            <img src="/images/logos/app-icon-guild.png" />
                            <h4>Guild</h4>
                            <p>Forums</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="app-store-sidebar">
                    <p><strong>Perfect for:</strong></p>
                    <ul>
                      <li>Keeping your privacy</li>
                      <li>Using cryptocurrency</li>
                      <li>Freedom of speech</li>
                    </ul>

                    <p><strong>Helps engineers:</strong></p>
                    <ul>
                      <li>Remove data liability</li>
                      <li>Differentiate themselves</li>
                      <li>Fund their projects</li>
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
              <h2 className="page-heading">Have an app idea?</h2>
              <div className="row mt-5">
                <div className="col-lg-4 col-md-6 pb-5">
                  <h5>Start building</h5>
                  <p>If you’re a developer, we’re here to help. Discover tutorials, docs, sourcecode, our forum, and more.</p>
                  <button className="btn btn-outline-primary mt-3">View tutorials</button>
                </div>
                <div className="col-lg-4 col-md-6 pb-5">
                  <h5>Request an app</h5>
                  <p>If you’ve got an idea for an app you’d like to see built on Blockstack, let us know and we’ll take note.</p>
                  <button className="btn btn-outline-primary mt-3">Request an app</button>
                </div>
                <div className="col-lg-4 col-md-6 pb-5">
                  <h5>Funding</h5>
                  <p>Developer building something great with Blockstack?  Investor looking to fund powerful applications on Web 3?</p>
                  <button className="btn btn-outline-primary mt-3">Learn more</button>
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
