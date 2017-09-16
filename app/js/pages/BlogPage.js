'use strict'

import {Component}     from 'react'
import {Link}          from 'react-router'
import DocumentTitle   from 'react-document-title'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {BlogActions}  from '../datastore/Blog'

function mapStateToProps(state) {
  return {
    posts: state.blog.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BlogActions, dispatch)
}

class BlogPage extends Component {

  constructor(props) {
    super(props)

    let pageNumber = 1
    if ('page' in this.props.location.query) {
      pageNumber = parseInt(this.props.location.query.page)
    }

    this.state = {
      posts: this.props.posts,
      pageNumber: pageNumber,
    }
  }

  componentWillMount() {
    //let pageNumber = this.state.pageNumber
    if (this.props.posts.length === 0) {
      this.props.fetchPosts()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.posts !== this.props.posts) {
      this.setState({
        posts: nextProps.posts,
      })
    }
    if (nextProps.location !== this.props.location) {
      let pageNumber = 1
      if ('page' in nextProps.location.query) {
        pageNumber = parseInt(nextProps.location.query.page)
      }
      this.setState({
        pageNumber: pageNumber,
      })
      this.props.fetchPosts()
    }
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Blog">
        <div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered blog-index">
              <div className="container m-b-5">
                <h1>
                  Blockstack Blog
                </h1>
                { this.state.posts.map((post, index) => {
                  return (
                    <div className="m-b-3" key={index}>
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
            </div>
          </section>
        </div>
      </DocumentTitle>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage)

/*
<p>
                  { this.state.pageNumber > 1 ?
                  <Link to={'/blog?page=' + (this.state.pageNumber - 1).toString()}
                        className="btn btn-sm btn-outline-primary">
                    Newer Posts
                  </Link>
                  : null }
                  &nbsp;
                  { this.state.pageNumber < 2 ?
                  <Link to={'/blog?page=' + (this.state.pageNumber + 1).toString()}
                        className="btn btn-sm btn-outline-primary">
                    Older Posts
                  </Link>
                  : null }
                </p>
*/