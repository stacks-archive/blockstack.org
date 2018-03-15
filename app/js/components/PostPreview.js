import { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'

const propTypes = {
  post: PropTypes.object.isRequired,
}

class PostPreview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-md-4 m-b-55">
        {this.props.post.urlSlug && this.props.post.title ? (
          <Link className="news-links" to={'/blog/' + this.props.post.urlSlug}>
            <h4 className="font-weight-bold">{this.props.post.title}</h4>
          </Link>
        ) : null}
        {this.props.post.preview ? (
          <div dangerouslySetInnerHTML={{ __html: this.props.post.preview }} />
        ) : null}
        <div
          className="post-meta"
          style={{ fontSize: '14px', color: '#949494' }}
        >
          {this.props.post.creator ? (
            <span>{this.props.post.creator.name} |&nbsp;</span>
          ) : null}
          {this.props.post.datetime && this.props.post.date ? (
            <time
              className="post-date"
              style={{
                textTransform: 'unset',
                fontSize: '14px',
                color: '#949494',
              }}
              dateTime={this.props.post.datetime}
            >
              {this.props.post.date}
            </time>
          ) : null}
        </div>
      </div>
    )
  }
}

PostPreview.propTypes = propTypes
export default PostPreview
