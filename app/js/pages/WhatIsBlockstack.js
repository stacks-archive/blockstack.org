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
      <DocumentTitle title="What is Blockstack?">
        <div>
          <section className="jumbotron jumbotron-fluid text-center">
            <div className="container">
              <h1 className="page-heading mx-auto">
                What is Blockstack?
              </h1>
              <p style={{ maxWidth: '410px' }} className="mb-5 mx-auto">
                Blockstack is a decentralized app ecosystem where users own and control their data. Blockstack's platform helps entrepreneurs and engineers build these apps and deliver better end-user experiences. 
              </p>
              <Link to="install" className="btn btn-primary">Download Blockstack</Link>
            </div>
          </section>

          <section className="features">
            <div className="container">
              <div className="feature">
                <div className="feature-number">1</div>
                <div className="feature-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="font-weight-bold">Decentralized app ecosystem</h2>
                      <p>
                        Join a community building the decentralized internet, as we re-envision apps for social, gaming, finance, and everything in between.
                      </p>
                    </div>
                    <div className="col-md-6 text-center">
                      <img src="/images/visuals/dev.png" />
                    </div>
                  </div>
                  <div className="feature-benefits">
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="font-weight-bold">For users</h5>
                        <ul className="pl-3">
                          <li>Discover the latest decentralized apps.</li>
                          <li>Limitless applications, one identity.</li>
                          <li>Share your data across applications.</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h5 className="font-weight-bold">For developers</h5>
                        <ul className="pl-3">
                          <li>Join an active community driven by decentralized philosophy.</li>
                          <li>Built-in, free, and effortless app distribution channel.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-number">2</div>
                <div className="feature-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="font-weight-bold">Own your data</h2>
                      <p>
                        Currently, users are "digital serfs" and apps are "digital landlords". User's don't actually or control own their data. 
                      </p>
                    </div>
                    <div className="col-md-6 text-center">
                      <img src="/images/visuals/storage.png" />
                    </div>
                  </div>
                  <div className="feature-benefits">
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="font-weight-bold">For users</h5>
                        <ul className="pl-3">
                          <li>Decide where to store your data.</li>
                          <li>No one sees your data unless you want them to.</li>
                          <li>If you’re hacked, your data is encrypted and unreadable.</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h5 className="font-weight-bold">For developers</h5>
                        <ul className="pl-3">
                          <li>Users store their own data. No central servers.</li>
                          <li>Code in the language of your choice.</li>
                          <li>No data storage. No data liabilities.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="feature">
                <div className="feature-number">3</div>
                <div className="feature-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h2 className="font-weight-bold">Take your identity everywhere</h2>
                      <p>
                        Your personal storage is built on Blockstack ID, which uses blockchain to keep devices and usernames secure.
                      </p>
                    </div>
                    <div className="col-md-6 text-center">
                      <img src="/images/visuals/identity.png" />
                    </div>
                  </div>
                  <div className="feature-benefits">
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="font-weight-bold">For users</h5>
                        <ul className="pl-3">
                          <li>One identity that you own and control.</li>
                          <li>Verify identities to increase trust online.</li>
                          <li>Your identity is globally and verifiably unique.</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h5 className="font-weight-bold">For developers</h5>
                        <ul className="pl-3">
                          <li>Never worry about account security again.</li>
                          <li>Access meta-information like social URLs.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="jumbotron jumbotron-white jumbotron-fluid text-center">
            <div className="container">
              <h1 className="page-heading mx-auto" style={{ maxWidth: '550px' }}>
                Join the new internet
              </h1>
              <p style={{ maxWidth: '410px' }} className="mb-5 mx-auto">
                We envision a decentralized internet, where users take control of their identity and data, without having to rely on intermediaries. 
              </p>
              <Link to="/install" className="btn btn-primary">Download Blockstack</Link>
            </div>
          </section>
          

          <section className="cta-panel">
            <div className="container">
              <h2 className="page-heading">Resources</h2>
              <div className="row mt-5">
                <div className="col-lg-4 col-md-6 pb-5">
                  <h5>Videos</h5>
                  <p>Our video section is a great place to find past presentations, Q&amp;A sessions with cofounders Muneeb &amp; Ryan, and more.</p>
                  <Link to="/videos" className="btn btn-outline-primary mt-3">Watch videos</Link>
                </div>
                <div className="col-lg-4 col-md-6 pb-5">
                  <h5>Papers</h5>
                  <p>Our whitepapers are the best place to start for a technical deep-dive into the Blockstack vision.</p>
                  <Link to="/papers" className="btn btn-outline-primary mt-3">Read whitepapers</Link>
                </div>
                <div className="col-lg-4 col-md-6 pb-5">
                  <h5>About Blockstack</h5>
                  <p>Read about our history, values and core team. Find out why we're a Public Benefit Corporation.</p>
                  <Link to="/about" className="btn btn-outline-primary mt-3">About Blockstack</Link>
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
