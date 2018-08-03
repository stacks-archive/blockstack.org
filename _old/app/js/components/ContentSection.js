import { Component } from 'react'

class ContentSection extends Component {
  static propTypes: {
    markup: PropTypes.string.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <section className={this.props.className}>
        <div className="container col-centered blog-post">
          <div className="container">
            <div className="post-content">
              <div dangerouslySetInnerHTML={{ __html: this.props.markup }} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ContentSection
