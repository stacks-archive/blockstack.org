'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import marked           from 'marked'

import EmbedYouTube     from '../components/EmbedYouTube'
import docs             from '../../docs.json'
import {githubFileUrlRoot} from '../config'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

class Article extends Component {
  static propTypes: {
    urlSlug: PropTypes.string.isRequired,
    youtubeURL: PropTypes.string
  }

  constructor(props) {
    super(props)

    this.state = {
      title: null,
      markup: null,
      urlSlug: null
    }

    this.initHighlighting = this.initHighlighting.bind(this)
    this.setArticle = this.setArticle.bind(this)
  }

  setArticle(props) {
    const urlSlug = props.urlSlug
    if (docs.hasOwnProperty(urlSlug)) {
      const title = docs[urlSlug].title
      const markdown = docs[props.urlSlug].markdown
      const markup = marked(markdown)
      this.setState({
        urlSlug: urlSlug,
        title: title,
        markup: markup,
      })
    } else {
      // do nothing
    }
  }

  initHighlighting() {
    const blocks = document.querySelectorAll('pre code')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  }

  componentWillMount() {
    this.setArticle(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setArticle(nextProps)
    }
  }

  componentDidMount() {
    this.initHighlighting()
  }

  componentDidUpdate() {
    this.initHighlighting()
  }

  render() {
    const pathPrefix = '/' + location.pathname.split('/')[1]

    return (
      <section>
        { this.props.youtubeURL ?
              <div className="media-screen">
                <div className="container container-lg">
                  <div className="row">
                    <EmbedYouTube src={this.props.youtubeURL} />
                  </div>
                </div>
              </div>
            : null }
            <div className="container container-lg sectionWrap blog-post bg-white m-b-100">
              <div className="row">
                <div className="container">
                  <div className="row">
                    { this.state.title ?
                    <div className="container container-card">
                      <h2 className="m-b-45">
                        {this.state.title}
                      </h2>
                      <div dangerouslySetInnerHTML={{ __html: this.state.markup }}>
                      </div>
                      <div className="m-t-40">
                        <Link to={`${githubFileUrlRoot}${pathPrefix}/${this.state.urlSlug}.md`}
                          role="button" target="_blank"
                          className="btn btn-primary m-b-20">
                          Edit this post on GitHub
                        </Link>
                      </div>
                    </div>
                    : null }
                  </div>
                </div>
              </div>
            </div>
      </section>
    )
  }
}

export default Article
