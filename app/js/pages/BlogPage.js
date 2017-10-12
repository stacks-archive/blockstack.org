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
          <div className="container container-lg sectionWrap blog-post bg-white m-b-100">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="container-fluid">
                    <h2 className="m-b-45">
                      Blockstack Blog
                    </h2>
                    { this.state.posts.length == 0 && 
                      <div className="m-t-100 m-b-100 text-center">
                        <i className="fa fa-spinner fa-spin fa-3x fa-fw" />
                      </div>
                    }
                    { this.state.posts.map((post, index) => {
                      return (
                        <div className="m-b-20" key={index}>
                          { post.urlSlug && post.title ?
                          <Link to={'/blog/' + post.urlSlug}>
                            <h3 className="m-b-10">{ post.title }</h3>
                          </Link>
                          : null }
                          { post.preview ?
                          <div dangerouslySetInnerHTML={{ __html: post.preview }}>
                          </div>
                          : null }
                          <div className="post-meta">
                            { post.creator ?
                            <span className="post-author">{post.creator.name} |&nbsp;</span>
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
              </div>
            </div>
          </div>
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
                        className="btn btn-sm btn-secondary">
                    Newer Posts
                  </Link>
                  : null }
                  &nbsp;
                  { this.state.pageNumber < 2 ?
                  <Link to={'/blog?page=' + (this.state.pageNumber + 1).toString()}
                        className="btn btn-sm btn-secondary">
                    Older Posts
                  </Link>
                  : null }
                </p>
*/