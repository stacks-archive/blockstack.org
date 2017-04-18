'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'
import {bindActionCreators} from 'redux'
import {connect}        from 'react-redux'

import {BlogActions}    from '../datastore/Blog'
import Image            from '../components/Image'
import CommunityMember  from '../components/CommunityMember'
import StickyShare      from '../components/StickyShare'

function mapStateToProps(state) {
  return {
    posts: state.blog.posts,
    postObject: state.blog.postObject,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BlogActions, dispatch)
}

class BlogPostPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      imageLoading: false,
      posts: this.props.posts,
      postObject: this.props.postObject,
    }

    this.initHighlighting = this.initHighlighting.bind(this)
    this.filterMarkup = this.filterMarkup.bind(this)
    this.onImageLoad = this.onImageLoad.bind(this)
  }

  componentWillMount() {
    if (this.props.posts.length === 0) {
      this.props.fetchPosts()
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      imageLoading: true
    })
    if (this.props.posts !== nextProps.posts) {
      this.setState({
        posts: nextProps.posts,
        postObject: nextProps.postObject,
      })
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

  onImageLoad() {
    this.setState({
      imageLoading: false
    })
  }

  render() {
    const currentUrlSlug = location.pathname.split('/')[2]
    const currentPage = this.state.postObject[currentUrlSlug]
    const title = currentPage ? currentPage.title : ''
    const headerImageSrc = currentPage ? currentPage.image : ''

    return (
      <DocumentTitle title={title}>
        <div>
          { currentPage && currentPage.preview ?
          <div>
            <div className="hidden-image">
              <Image
                src={headerImageSrc}
                fallbackSrc="/images/article-photos/road.jpg"
                onLoad={this.onImageLoad}
                retinaSupport={false} />
            </div>
            <StickyShare
              description={currentPage.description}
              imgUrl={headerImageSrc}
              shareUrl={currentPage.url}
              title={currentPage.title}
            />
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
                    <Link to="/newsletter" role="button"
                      className="btn btn-lg btn-primary btn-block">
                      Get Updates
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
        </div>
      </DocumentTitle>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostPage)
