'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'
import request          from 'request'
import {
  parseString as parseXML
}                       from 'xml2js'

import Image            from '../components/Image'
import Header           from '../components/Header'
import Footer           from '../components/Footer'
import CardLink         from '../components/CardLink'
import CommunityMember  from '../components/CommunityMember'
import {getPostFromRSS} from '../utils/rssUtils'
import docs             from '../../docs.json'
import {
  communityMemberDict
}                       from '../data'


class ArticlePage extends Component {

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
        parseXML(body, (err, result) => {
          this.setPage(result)
        })
      } else {
        console.log(error)
      }
    })
  }

  setPage(result) {
    let currentPage = {
      title: 'Page loading...',
      markup: '<p>Loading...</p>'
    }
    let rssPost = null

    const firstChannel = result.rss.channel[0]
    const channelItems = firstChannel.item

    channelItems.map((channelItem) => {
      const channelItemUrlSlug = channelItem.link[0].split('ghost.io/')[1].replace(/\/$/, "")
      const currentUrlSlug = location.pathname.split('/')[2]
      if (channelItemUrlSlug === currentUrlSlug) {
        rssPost = channelItem
      }
    })

    if (rssPost) {
      let post = getPostFromRSS(rssPost)
      post.creator = communityMemberDict[post.blockstackID]
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
          title = currentPage ? currentPage.title : "Docs"
    const headerImageSrc = this.state.currentPage ? this.state.currentPage.image : ''
    const pathPrefix = '/' + location.pathname.split('/')[1]

    return (
      <DocumentTitle title="Blockstack - Documentation">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <div className="hidden-image">
            <Image
              src={headerImageSrc}
              fallbackSrc="/images/article-photos/road.jpg"
              onLoad={this.onImageLoad}
              retinaSupport={false} />
          </div>
          <div className="m-b-3 docs-header-image-wrapper">
            { currentPage !== null && this.state.imageLoading !== true ?
            <Image src={headerImageSrc}
              fallbackSrc="/images/article-photos/road.jpg"
              className="img-fluid docs-header-image"
              retinaSupport={false} />
            : null }
          </div>
          <nav className="container-fluid m-b-1 back-docs">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" to={pathPrefix} aria-label="Back">
                  <span aria-hidden="true">&laquo; Back</span>
                  <span className="sr-only">Back</span>
                </Link>
              </li>
            </ul>
          </nav>
          { currentPage ?
          <section className="m-b-5 m-t-5">
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
                <div dangerouslySetInnerHTML={{ __html: currentPage.markup }}>
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
              </div>
            </div>
          </section>
          : null }
          <Footer />
        </div>
      </DocumentTitle>
    )
  }
}

export default ArticlePage