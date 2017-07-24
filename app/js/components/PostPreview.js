import { Component, PropTypes } from 'react'
import {Link}           from 'react-router'

const propTypes = {
  post: PropTypes.object.isRequired
}

class PostPreview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-md-4">
        { this.props.post.urlSlug && this.props.post.title ?
        <Link to={'/blog/' + this.props.post.urlSlug}>
          <h4>{ this.props.post.title }</h4>
        </Link>
        : null }
        { this.props.post.preview ?
        <div dangerouslySetInnerHTML={{ __html: this.props.post.preview }}>
        </div>
        : null }
        <div className="post-meta">
          { this.props.post.creator ?
          <span>{this.props.post.creator.name} |&nbsp;</span>
          : null }
          { this.props.post.datetime && this.props.post.date ?
          <time className="post-date" dateTime={this.props.post.datetime}>
            {this.props.post.date}
          </time>
          : null }
        </div>
      </div>
    )
  }
}

PostPreview.propTypes = propTypes
export default PostPreview




