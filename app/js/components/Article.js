'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'
import marked           from 'marked'

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
    const currentPage = this.state.currentPage
    const title = currentPage ? currentPage.title : 'Docs'
    const pathPrefix = '/' + location.pathname.split('/')[1]

    return (
      <section className="m-b-5 m-t-5">
        <div className="container p-b-5 col-centered blog-post">
          { this.state.title ?
          <div className="container">
            <h1>{this.state.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: this.state.markup }}>
            </div>
            <div className="m-t-4">
              <Link to={githubFileUrlRoot + pathPrefix + '/' + this.state.urlSlug + '.md'}
                role="button" target="_blank"
                className="btn btn-sm btn-outline-primary m-b-2">
                Edit this post on GitHub
              </Link>
            </div>
          </div>
          : null }
        </div>
      </section>
    )
  }
}

export default Article