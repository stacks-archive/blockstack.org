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
import DarkForm            from '../components/DarkForm'
import EmbedYouTube        from '../components/EmbedYouTube'
import PostPreview         from '../components/PostPreview'
import TeamMembers         from '../components/TeamMembers'
import ContentSection      from '../components/ContentSection'
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

class TokenSalePage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      subscribeURL: '//blockstack.us14.list-manage.com/subscribe/post?u=394a2b5cfee9c4b0f7525b009&amp;id=da7056bb03',
      videoURL: 'https://www.youtube.com/embed/0C2y9mZ0Dnc',
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

    return (
      <DocumentTitle title="Blockstack - Token">
        <div className="token-hero">
          <div className="col-centered block">
            <Header transparent={true} />
            <div className="container">
              <section className="text-center">
                <Image className="m-t-65 m-b-55"
                  src="/images/logos/stacks-logo.svg"
                  retinaSupport={false} />
                <h1 className="text-white m-b-20">
                  The Blockstack Token
                </h1>
                <p className="hero-lead purple-50">Sign up to receive important information about the token distribution</p>
                <div className="m-b-50">
                  <div className="col-md-9 col-centered m-b-3">
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

            <div className="bg-white sectionWrap section-spacing container-fluid">
              <div className="container">
                <section>
                  <div className="containWrap">
                    <h2 className="h-primary text-center">
                      What is Blockstack?
                    </h2>
                    <ContentSection markup="
                      <p>
                        Blockstack is a new decentralized internet where users control their data and apps run on their devices.
                        There are no middlemen, no passwords, no massive data silos to breach,
                        and no services tracking us around the internet.
                      </p>

                      <p>
                        The applications on blockstack are server-less and decentralized.

                        Developers start by building a single-page application in Javascript,

                        Then, instead of plugging the frontend into a centralized API,
                        they plug into an API run by the user.

                        Developers install a library called 'blockstack.js' and
                        don't have to worry about running servers, maintaining databases,
                        or building out user management systems.
                      </p>

                      <p>
                        Personal user APIs ship with the Blockstack app and
                        handle everything from identity and authentication
                        to data storage.

                        Applications can request permissions from users and then
                        gain read and write access to user resources.
                      </p>

                      <p>
                        Data storage is simple and reliable and uses existing cloud infrastructure.

                        Users connect with their Dropbox, Google Drive, etc and data is synced from
                        their local device up to the cloud.
                      </p>

                      <p>
                        Identity is user-controlled and utilizes the blockchain for secure management
                        of keys, devices and usernames.

                        When users login with apps, they are anonymous by default and use an
                        app-specific key, but their full identity can be revealed and proven
                        at any time.

                        Keys are for signing and encryption and can be changed
                        as devices need to be added or removed.
                      </p>

                      <p>
                        Under the hood, Blockstack provides a decentralized domain name system (DNS),
                        decentralized public key distribution system,
                        and registry for apps and user identities.
                      </p>" />
                  </div>
                </section>
              </div>
            </div>

            {/* New section layout applied */}
            <div className="container-fluid sectionWrap bg-container-lightGray">
              <div className="row">
                <div className="container-fluid">
                  <h2 className="text-center m-b-25">
                    Why Blockstack?
                  </h2>
                </div>
                <div className="container container-md">
                  <EmbedYouTube src={this.state.videoURL} />
                </div>
              </div>
            </div>

            <div className="bg-white sectionWrap section-spacing container-fluid">
              <div className="container">
                <section>
                  <div className="containWrap">
                    <h2 className="h-primary text-center m-b-3">
                      How Does Blockstack Work?
                    </h2>
                    <div className="col-sm-12 text-center landing-hero-img">
                      <Image className="landing-feat-img"
                        src="/images/visuals/blockstack-architecture-diagram.svg"
                        retinaSupport={false} />
                    </div>
                    <div className="row m-t-3">
                      <div className="col-sm-10 offset-sm-1 text-center">
                        <Image
                          src="/images/visuals/blockstack-tx-diagram.png"
                          style={{width: '100%'}}
                          retinaSupport={false} />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* New section layout applied */}
            <div className="container-fluid sectionWrap bg-container-lightGray">
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

            <TeamMembers />

            {/* New section layout applied */}
            <div className="container-fluid sectionWrap bg-container-lightGray">
              <div className="row">
                <div className="container">
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

          </div>
        </div>
      </DocumentTitle>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(TokenSalePage)