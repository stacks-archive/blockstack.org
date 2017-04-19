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

    this.state = {
      posts: this.props.posts
    }
  }

  componentWillMount() {
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
