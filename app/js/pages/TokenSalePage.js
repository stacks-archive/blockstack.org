'use strict'

import {Component}          from 'react'
import {Link}               from 'react-router'
import DocumentTitle        from 'react-document-title'
import {bindActionCreators} from 'redux'
import {connect}            from 'react-redux'

import {BlogActions}       from '../datastore/Blog'
import {StatsActions}      from '../datastore/Stats'
import Image               from '../components/Image'
import TransparentHeader   from '../components/TransparentHeader'
import DarkForm            from '../components/DarkForm'
import EmbedYouTube        from '../components/EmbedYouTube'
import PostPreview         from '../components/PostPreview'

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

class TokenSalePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      subscribeURL: '//blockstack.us14.list-manage.com/subscribe/post?u=394a2b5cfee9c4b0f7525b009&amp;id=0e5478ae86',
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

    const blockstackExplanation = `Blockstack is a new decentralized internet.
      With Blockstack, users control their data and apps run on their devices. There are no middlemen, no passwords, no massive data silos to breach, and no services tracking us around the internet.
      The applications on blockstack are server-less and decentralized. Developers start by building a single-page application in Javascript, Then, instead of plugging the frontend into a centralized API, they plug into an API run by the user. Developers install a library called 'blockstack.js' and don't have to worry about running servers, maintaining databases, or building out user management systems.
    `

    return (
      <DocumentTitle title="Blockstack - Token Sale">
        <div className="token-hero">
          <div className="col-centered block">
            <TransparentHeader />
            <div className="container">
              <section className="text-xs-center">
                <Image className="stacks-logo-sm m-t-65 m-b-55"
                        src="/images/logos/stacks-logo.svg"
                        fallbackSrc="/images/logos/stacks-logo.svg"
                        retinaSupport={false} />
                <h1 className="text-white m-b-20">The Blockstack Token Sale</h1>
                <p className="hero-lead purple-50">Sign up to receive important information about the token sale</p>
                <div>
                  <div className="col-md-9 col-centered m-t-2 m-b-3">
                    <DarkForm subscribeURL={this.state.subscribeURL} submitButtonText='Sign Up' />
                  </div>
                </div>
                <p className="text-xs-center m-t-2 m-b-165">
                  <Link to="/whitepaper.pdf" target="_blank" className="btn btn-outline-primary" 
                  style={{ color: '#95889c' }}>
                    Read the Whitepaper
                  </Link>
                </p>
              </section>
            </div>
            <div className="section-stats section-stats-electric-blue container-fluid">
              <div className="container">
                <section>
                  <div className="no-padding col-sm-12 col-md-4 text-center text-stats">
                    73,191 
                    <span className="text-stats-description" style={{ color: 'rgba(255,255,255,0.8)' }} >
                      users registered
                    </span>
                  </div>
                  <div className="no-padding col-sm-12 col-md-4 text-center text-stats">
                    3+ years
                    <span className="text-stats-description" style={{ color: 'rgba(255,255,255,0.8)' }} >
                      in production
                    </span>
                  </div>
                  <div className="no-padding col-sm-12 col-md-4 text-center text-stats">
                    6,574 
                    <span className="text-stats-description" style={{ color: 'rgba(255,255,255,0.8)' }} >
                      community devs
                    </span>
                  </div>
                </section>
              </div>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid" style={{ backgroundColor: '#DDD' }}>
              <div className="container">
                <section>
                  <div className="containWrap">
                    <h2 className="h-primary text-center">
                      What is Blockstack?
                    </h2>
                    <div className="row">
                      <div className="col-md-8 col-centered">
                        <p className="text-center">
                          {blockstackExplanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid">
              <div className="container">
                <section>
                  <EmbedYouTube src={this.state.videoURL} />
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
                  <div className="row m-b-50 no-margin">
                  { firstThreePosts.map((post, index) => {
                    return (
                      <PostPreview key={index} post={post} />
                    )
                  }) }
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

export default connect(mapStateToProps, mapDispatchToProps)(TokenSalePage)