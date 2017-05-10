'use strict'

import {Component}   from 'react'
import {Link}        from 'react-router'
import DocumentTitle from 'react-document-title'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {BlogActions}  from '../datastore/Blog'
import {StatsActions} from '../datastore/Stats'
import Image          from '../components/Image'

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
      const stats = nextProps.stats
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
      <DocumentTitle title="Blockstack, building the decentralized internet">
        <div className="body-hero">
          <div className="col-centered block">
            <div className="container">
              <section className="hero">
                <h1 className="hero-head">
                  A full stack for building decentralized apps
                </h1>
                <p className="no-padding col-md-12">
                  <Link to="/install" role="button"
                    className="btn btn-lg btn-secondary" style={{ marginBottom: '10px' }}>
                    Try Blockstack
                  </Link>
                  <Link to="/tutorials/hello-blockstack" role="button"
                    className="btn btn-lg btn-secondary" style={{ marginBottom: '10px' }}>
                    Watch Tutorial
                  </Link>
                </p>
                <p className="no-padding col-md-12">
                  In production for <b>3+ years</b> &#183; <b>{this.state.stats.domains} domains</b> registered
                </p>
              </section>
            </div>
            <div className="section-even container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    The old internet is broken
                  </h1>
                  <div className="row">
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Mass data breaches
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Identity theft
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Walled gardens
                      </h3>
                    </div>
                  </div>
                  <h1 className="modern text-center m-t-5">
                    The new internet is here
                  </h1>
                  <div className="row">
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Own your data
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Own your identity
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Own your apps
                      </h3>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="section-odd container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    Why build on Blockstack?
                  </h1>
                  <div className="row">
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        User empowerment
                      </h3>
                      <p className="lead lead-centered col-md-10 block col-centered text-center">
                        Build apps that put users in control of their identity and data. Remove data as a liability. Attract users who value their freedom and security.
                      </p>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        No infrastructure
                      </h3>
                      <p className="lead lead-centered col-md-10 block col-centered text-center">
                        Build apps without databases or server maintainance. Publish apps to the decentralized internet where they will run on user devices and live forever.
                      </p>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Be paid for open source
                      </h3>
                      <p className="lead lead-centered col-md-10 block col-centered text-center">
                        New business models enable you to get paid for open source code. Utilize micropayments, blockchain protocols, and more.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="section-even container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    A full trustless stack
                  </h1>
                  <div className="row">
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Identity
                      </h3>
                      <p className="lead lead-centered col-md-10 block col-centered text-center">
                        With Blockstack, users get digital keys that let them own their identity.
                        They sign in to apps locally without remote servers or identity providers.
                      </p>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Storage
                      </h3>
                      <p className="lead lead-centered col-md-10 block col-centered text-center">
                        Blockstack's storage system allows users to bring their own storage providers and control their data.
                        Data is encrypted and easily shared between applications.
                      </p>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Payments
                      </h3>
                      <p className="lead lead-centered col-md-10 block col-centered text-center">
                        Blockstack uses Bitcoin and other crypto-currencies for simple peer-to-peer payments.
                        Developers can charge for downloads, subscriptions, and more.
                      </p>
                    </div>
                  </div>
                  <div className="row" style={{ display: 'none' }}>
                    <div className="col-md-4 offset-md-2 no-padding">
                      <h3 className="modern text-center">
                        Payments
                      </h3>
                      <p className="lead lead-centered col-md-10 block col-centered text-center">
                        With Blockstack, you can accept simple one-time payments, enable continuous micropayments, and do much more.
                        All with a global-accepted and decentralized currency called Bitcoin.
                      </p>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Encryption
                      </h3>
                      <p className="lead lead-centered col-md-10 block col-centered text-center">
                        With Blockstack, all files and communication is end-to-end encrypted by default.
                        Blockstack handles key distribution and discovery so you don't have to.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="section-odd container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    Easily build apps like these
                  </h1>
                  <div>
                    <div className="col-md-4 no-padding feat-card">
                      <h3 className="modern text-center">
                        Liquid democracy
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding feat-card">
                      <h3 className="modern text-center">
                        Peer-to-peer marketplaces
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding feat-card">
                      <h3 className="modern text-center">
                        Decentralized social networks
                      </h3>
                    </div>
                  </div>
                  <div>
                    <div className="col-md-4 no-padding feat-card">
                      <h3 className="modern text-center">
                        Open ridesharing
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding feat-card">
                      <h3 className="modern text-center">
                        Verified file publishing
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding feat-card">
                      <h3 className="modern text-center">
                        Encrypted health records
                      </h3>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="section-even container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    Step-by-step tutorials
                  </h1>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    <Link to="/tutorials/hello-blockstack">
                      <Image className="landing-feat-img"
                        src="/images/tutorials/hello-blockstack-fastforward.gif"
                        fallbackSrc="/images/tutorials/hello-blockstack-fastforward.gif"
                        retinaSupport={false} />
                    </Link>
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    Complete the step-by-step tutorial and see how easy it is to build an app with a decentralized identity system in a few lines of code and no servers.
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    <Link to="/tutorials/hello-blockstack" role="button"
                      className="btn btn-outline-primary btn-block">
                      Hello Blockstack Tutorial
                    </Link>
                  </p>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    Want to learn more about building apps on blockstack? Tutorials on building serverless apps with decentralized storage are coming soon.
                  </p>
                </section>
              </div>
            </div>
            <div className="section-odd container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    News
                  </h1>
                  <div className="row m-b-50 no-margin">
                  { firstThreePosts.map((post, index) => {
                    return (
                      <div className="col-md-4" key={index}>
                        { post.urlSlug && post.title ?
                        <Link to={'/blog/' + post.urlSlug}>
                          <h3>{ post.title }</h3>
                        </Link>
                        : null }
                        { post.preview ?
                        <div dangerouslySetInnerHTML={{ __html: post.preview }}>
                        </div>
                        : null }
                        <div className="post-meta">
                          { post.creator ?
                          <span>{post.creator.name} |&nbsp;</span>
                          : null }
                          { post.datetime && post.date ?
                          <time className="post-date" dateTime={post.datetime}>
                            {post.date}
                          </time>
                          : null }
                        </div>
                      </div>
                    )
                  }) }
                  </div>
                  <p className="lead-centered">
                    <Link to="/newsletter" role="button"
                      className="btn btn-lg btn-outline-primary btn-block">
                      Get Updates
                    </Link>
                  </p>
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

/*
            <div className="section-even container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    New internet. New browser experience.
                  </h1>
                  <p className="lead lead-centered col-md-10 block col-centered text-center">
                    Introducing the Blockstack browser portal - your way to access the new decentralized internet.
                  </p>
                  <div className="row">
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Free yourself from platform lock-in
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Be safe from tracking & mass breaches
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding">
                      <h3 className="modern text-center">
                        Powered by blockchain technology
                      </h3>
                    </div>
                  </div>
                  <p className="lead-centered m-t-3">
                    <Link to="/install" role="button"
                      className="btn btn-lg btn-outline-primary btn-block">
                      Install Browser Portal
                    </Link>
                  </p>
                </section>
              </div>
            </div>


            <div className="section-even container-fluid">
              <div className="container">
                <section>
                  <h1 className="modern text-center">
                    The Blockstack app platform is here today
                  </h1>
                  <div className="row">
                    <div className="col-md-4 no-padding feat-card">
                      <h3 className="modern text-center">
                        In production for over 3 years
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding feat-card">
                      <h3 className="modern text-center">
                        {this.state.stats.domains} domains registered
                      </h3>
                    </div>
                    <div className="col-md-4 no-padding feat-card">
                      <h3 className="modern text-center">
                        Used by Microsoft, OpenBazaar & more
                      </h3>
                    </div>
                  </div>
                  <p className="lead lead-centered col-md-10 block col-centered text-center m-t-3">
                    Build on a decentralized platform that's been in production use for years,
                    with open source software maintained by a well-funded team.
                  </p>
                </section>
              </div>
            </div>
*/