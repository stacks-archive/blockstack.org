'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'
import request          from 'request'
import {parseString}    from 'xml2js'

import Image            from '../components/Image'
import Header           from '../components/Header'
import Footer           from '../components/Footer'
import CardLink         from '../components/CardLink'
import CommunityMember  from '../components/CommunityMember'
import {getPostFromRSS} from '../utils/rssUtils'
import {getSlugFromRSS} from '../utils/rssUtils'
import docs             from '../../docs.json'
import {blogAuthors}    from '../config'

class BlogPostPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentPage: null,
      imageLoading: false
    }

    this.initHighlighting = this.initHighlighting.bind(this)
    this.setPage = this.setPage.bind(this)
    this.filterMarkup = this.filterMarkup.bind(this)
    this.onImageLoad = this.onImageLoad.bind(this)
    this.getRSS = this.getRSS.bind(this)
  }

  componentWillMount() {
    this.getRSS(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      imageLoading: true
    })
    if (this.props !== nextProps) {
      this.getRSS(nextProps)
    }
  }

  componentDidUpdate() {
    this.initHighlighting()
  }

  initHighlighting() {
    const blocks = document.querySelectorAll('pre code')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  }

  filterMarkup(markup) {
    return markup.replace('<a href="', '<a target="_blank" href="')
  }

  getRSS() {
    request({
      url: "https://blockstack-site-api.herokuapp.com/v1/blog-rss",
      withCredentials: false
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        parseString(body, (err, result) => { // parse XML string
          this.setPage(result)
        })
      } else {
        console.log(error)
      }
    })
  }

  setPage(result) {
    let currentPage = {
      title: 'Page Not Found',
    }
    let rssPost = null

    const firstChannel = result.rss.channel[0]
    const channelItems = firstChannel.item

    channelItems.map((channelItem) => {
      const channelItemUrlSlug = getSlugFromRSS(channelItem)
      const currentUrlSlug = location.pathname.split('/')[2]
      if (channelItemUrlSlug === currentUrlSlug) {
        rssPost = channelItem
      }
    })

    if (rssPost) {
      let post = getPostFromRSS(rssPost)
      if (blogAuthors.hasOwnProperty(post.blockstackID)) {
        post.creator = blogAuthors[post.blockstackID]
      } else {
        post.creator = blogAuthors["blockstack.id"]
      }
      currentPage = Object.assign({}, currentPage, post)
    }

    this.setState({
      currentPage: currentPage
    })
  }

  onImageLoad() {
    this.setState({
      imageLoading: false
    })
  }

  render() {
    const currentPage = this.state.currentPage,
          title = currentPage ? currentPage.title : ""
    const headerImageSrc = this.state.currentPage ? this.state.currentPage.image : ''
    const pathPrefix = '/' + location.pathname.split('/')[1]

    return (
      <DocumentTitle title={title}>
        <div>
          <div className="navbar-fixed-top bg-primary">
            <Header />
          </div>
          { currentPage && currentPage.preview ?
          <div>
            <div className="hidden-image">
              <Image
                src={headerImageSrc}
                fallbackSrc="/images/article-photos/road.jpg"
                onLoad={this.onImageLoad}
                retinaSupport={false} />
            </div>
            <section className="m-b-50 m-t-100">
              <div className="container p-b-5 col-centered blog-post">
                <div className="container">
                  <div className="post-header">
                    <h1 className="post-title">
                      {currentPage.title}
                    </h1>
                    <time className="post-date" dateTime={currentPage.datetime}>
                      {currentPage.date}
                    </time>
                  </div>
                  <div className="m-b-3 m-t-3">
                    { currentPage !== null && this.state.imageLoading !== true ?
                    <Image src={headerImageSrc}
                      fallbackSrc="/images/article-photos/road.jpg"
                      className="img-fluid"
                      retinaSupport={false} />
                    : null }
                  </div>
                  <div className="post-body"
                    dangerouslySetInnerHTML={{ __html: currentPage.markup }}>
                  </div>
                  <hr className="m-t-70 m-b-60" />
                  <section className="author">
                    <p>
                      Written by:
                    </p>
                    <CommunityMember
                      key={0}
                      blockstackId={currentPage.creator.blockstackId}
                      name={currentPage.creator.name}
                      avatar={currentPage.creator.avatar}
                      twitter={currentPage.creator.twitter}
                      github={currentPage.creator.github}
                      isCentered={false} />
                  </section>
                  <p className="no-padding col-md-8">
                    <Link to="http://eepurl.com/cv8gQ1" role="button" target="_blank"
                      className="btn btn-lg btn-primary btn-block">
                      Join the Community
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </div>
          :
          <section className="m-b-5 m-t-5">
            <div className="container p-b-5 col-centered blog-post">
              <div className="container">
                <div className="post-header">
                  <h1 className="post-title">
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </section>
          }
          <Footer />
        </div>
      </DocumentTitle>
    )
  }
}

export default BlogPostPage