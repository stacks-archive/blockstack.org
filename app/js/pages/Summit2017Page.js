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

class Summit2017Page extends Component {

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
      <DocumentTitle title="Blockstack Summit 2017">
        <div className="feature-event-hero">
          <div className="col-centered block">
            <Header transparent={true} />
            <div className="container p-b-100">
              <section className="text-xs-center p-b-10">
                <Image className="blockstack-summit-2017-logo-md m-t-65 m-b-55"
                        src="/images/logos/blockstack-summit-logo-landscape-rev.svg"
                        retinaSupport={false} />
                <h1 className="text-white m-b-20">Blockstack Summit 2017</h1>
                <p className="hero-lead text-white p-b-100">the Blockstack Summit at the Computer History Museum, Mountain View, CA</p>
              </section>
            </div>
            <div className="sectionContainerLight section-spacing container-fluid">
              <div className="container">
                <section>
                  <div className="containWrap">
                    <ContentSection markup="
                      <p>
                        On July 27th, 2017, we hosted the Blockstack Summit at 
                        the Computer History Museum. It was a day to take 
                        people back to the original dream of the internet back 
                        in 1989 -- one of a shared space where we could be free 
                        to create together. Attendees and speakers from all 
                        over the world came together for this one day event to 
                        envision a new internet built for freedom, security, 
                        and innovation.
                      </p>
                      <p>
                        It was a star-studded lineup of speakers and they did 
                        not disappoint. You'll find videos and photos below 
                        from the event. We hope you enjoy them as much as we 
                        did, and would love to hear what your favorite parts 
                        were by tweeting your favorite speaker quotes and clips 
                        mentioning @blockstackorg.
                      </p>" />
                  </div>
                </section>
              </div>
            </div>
            <div className="feature-event-subhero">
              <div className="col-centered block">
                <div className="container summit-img-section">
                  <section className="text-xs-center p-b-80">
                  </section>
                </div>
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
            <div className="sectionContainerGray section-spacing container-fluid">
              <div className="container">
                <section>
                  <h2 className="h-primary m-b-85 text-center">
                    Featured Apps on Blockstack
                  </h2>
                  {[[0,3], [3,5]].map((row, index) => {
                    return (
                      <div key={index}>
                        {featuredApps.slice(row[0],row[1]).map((featuredApp, index2) => {
                          const offsetClass = (row[0] === 3 && index2 === 0) ? 'offset-md-2' : ''
                          return (
                            <div key={index2} 
                              className={`col-md-4 m-b-55 ${offsetClass}`}>
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
                </section>
              </div>
            </div>
            <TeamMembers />
            <div className="sectionContainerLightGray section-spacing container-fluid">
              <div className="container">
                <section>
                  <div className="containWrap">
                    <h2 className="h-primary text-center">
                      News
                    </h2>
                  </div>
                  <div className="container">
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

export default connect(mapStateToProps, mapDispatchToProps)(Summit2017Page)