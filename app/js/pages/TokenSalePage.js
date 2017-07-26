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
import TeamMember          from '../components/TeamMember'
import {teamMembers}  from '../config'

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

      Personal user APIs ship with the Blockstack app and handle everything from identity and authentication to data storage. Applications can request permissions from users and then gain read and write access to user resources.
      
      Data storage is simple and reliable and uses existing cloud infrastructure. Users connect with their Dropbox, Google Drive, etc and data is synced from their local device up to the cloud.
      
      Identity is user-controlled and utilizes the blockchain for secure management of keys, devices and usernames. When users login with apps, they are anonymous by default and use an app-specific key, but their full identity can be revealed and proven at any time. Keys are for signing and encryption and can be changed as devices need to be added or removed.
      
      Under the hood, Blockstack provides a decentralized domain name system (DNS), decentralized public key distribution system, and registry for apps and user identities.
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
            <div className="sectionContainerLight section-spacing container-fluid">
              <div className="container">
                <section>
                  <div className="containWrap">
                    <h2 className="h-primary text-center">
                      What is Blockstack?
                    </h2>
                    <div className="row">
                      <div className="col-md-8 col-centered">
                        <h5>
                          {blockstackExplanation}
                        </h5>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid" style={{ backgroundColor: '#FAFAFA' }}>
              <div className="container">
                <section>
                  <h2 className="h-primary text-center">
                    Why Blockstack?
                  </h2>
                  <div className="row m-t-3">
                    <EmbedYouTube src={this.state.videoURL} />
                  </div>
                </section>
              </div>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid">
              <div className="container">
                <section>
                  <div className="containWrap">
                    <h2 className="h-primary text-center">
                      How Does Blockstack Work?
                    </h2>
                    <div className="row m-t-3">
                      <div className="col-sm-10 offset-sm-1 text-center">
                        <Image
                          src="/images/visuals/blockstack-stack-diagram-2.png"
                          style={{width: '100%'}}
                          retinaSupport={false} />
                      </div>
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
            <div className="sectionContainerLight section-spacing container-fluid" style={{ backgroundColor: '#FAFAFA' }}>
              <div className="container">
                <section>
                  <h2 className="h-primary text-center">
                    Featured Apps on Blockstack
                  </h2>
                  <div className="m-t-3 row">
                    <div className="col-md-4">
                      <p className="text-center">
                        <Image className="col-img"
                          src="/images/logos/app-icon-afia.png"
                          retinaSupport={false} />
                      </p>
                      <h4 className="modern text-center">
                        Afia
                      </h4>
                      <p className="text-center">
                        Privately share your home with trusted friends and family using Casa. Casa is a decentralized homesharing platform that let's you control your data and book without trusted intermediaries.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-center">
                        <Image className="col-img"
                          src="/images/logos/app-icon-guild.png"
                          retinaSupport={false} />
                      </p>
                      <h4 className="modern text-center">
                        Guild
                      </h4>
                      <p className="text-center">
                        OpenBazaar is a different way to do online commerce. It’s a peer to peer application that doesn’t require middlemen, which means no fees & no restrictions.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-center">
                        <Image className="col-img"
                          src="/images/logos/app-icon-ongaku-ryoho.png"
                          retinaSupport={false} />
                      </p>
                      <h4 className="modern text-center">
                        Ongaku Ryoho
                      </h4>
                      <p className="text-center">
                        Ongaku Ryoho is a music player that puts you in control. Join a decentralized music platform that let's you truly own your music and fund your favorite musicians directly.
                      </p>
                    </div>
                  </div>
                  <div className="m-t-3 row">
                    <div className="col-md-4">
                      <p className="text-center">
                        <Image className="col-img"
                          src="/images/logos/app-icon-afia.png"
                          retinaSupport={false} />
                      </p>
                      <h4 className="modern text-center">
                        Casa
                      </h4>
                      <p className="text-center">
                        Privately share your home with trusted friends and family using Casa. Casa is a decentralized homesharing platform that let's you control your data and book without trusted intermediaries.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-center">
                        <Image className="col-img"
                          src="/images/logos/app-icon-guild.png"
                          retinaSupport={false} />
                      </p>
                      <h4 className="modern text-center">
                        OpenBazaar
                      </h4>
                      <p className="text-center">
                        OpenBazaar is a different way to do online commerce. It’s a peer to peer application that doesn’t require middlemen, which means no fees & no restrictions.
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="text-center">
                        <Image className="col-img"
                          src="/images/logos/app-icon-ongaku-ryoho.png"
                          retinaSupport={false} />
                      </p>
                      <h4 className="modern text-center">
                        Mediachain
                      </h4>
                      <p className="text-center">
                        Ongaku Ryoho is a music player that puts you in control. Join a decentralized music platform that let's you truly own your music and fund your favorite musicians directly.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid">
              <div className="container">
                <section>
                  <h2 className="h-primary text-center">
                    Team
                  </h2>
                  <div className="post-content m-t-3">
                    {teamMembers.map((teamMember, index) => {
                      return (
                        <TeamMember key={index} profile={teamMember} />
                      )
                    })}
                  </div>
                </section>
              </div>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid" style={{ backgroundColor: '#FAFAFA' }}>
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