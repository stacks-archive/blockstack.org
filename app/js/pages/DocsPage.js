'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import marked           from 'marked'
import Helmet           from 'react-helmet'

import Image            from '../components/Image'
import Header           from '../components/Header'
import Footer           from '../components/Footer'
import CardLink         from '../components/CardLink'
import docs             from '../../docs.json'

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

class DocsPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentPage: null,
      nextPage: null,
      imageLoading: false
    }

    this.initHighlighting = this.initHighlighting.bind(this)
    this.getPageName = this.getPageName.bind(this)
    this.setPage = this.setPage.bind(this)
    this.filterMarkup = this.filterMarkup.bind(this)
    this.onImageLoad = this.onImageLoad.bind(this)
  }

  initHighlighting() {
    const blocks = document.querySelectorAll('pre code')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  }

  componentWillMount() {
    this.setPage(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      imageLoading: true
    })
    if (this.props !== nextProps) {
      this.setPage(nextProps)
    }
  }

  componentDidUpdate() {
    this.initHighlighting()
  }

  getPageName(props) {
    let pageName = '404'
    if (props.route.path === '/about') {
      pageName = 'about'
    } else if (props.routeParams.hasOwnProperty('docSection')) {
      if (docs.hasOwnProperty(props.routeParams.docSection)) {
        pageName = props.routeParams.docSection
      }
    }
    return pageName
  }

  filterMarkup(markup) {
    return markup.replace('<a href="', '<a target="_blank" href="')
  }

  setPage(props) {
    let pageName = this.getPageName(props)
    let currentPage = Object.assign({}, docs[pageName], {
      pageName: pageName,
      markup: this.filterMarkup(marked(docs[pageName].markdown))
    })

    let nextPage = null
    if (currentPage.hasOwnProperty('next')) {
      nextPage = Object.assign({}, docs[currentPage.next], {
        pageName: currentPage.next
      })
    }

    this.setState({
      currentPage: currentPage,
      nextPage: nextPage
    })
  }

  onImageLoad() {
    this.setState({
      imageLoading: false
    })
  }

  render() {
    const currentPage = this.state.currentPage,
          nextPage = this.state.nextPage,
          title = currentPage ? currentPage.title : "Docs"

    const headerImageSrc = this.state.currentPage ? this.state.currentPage.image : null

    return (
      <div>
        { currentPage ?
        <Helmet
          title={`Blockstack- ${currentPage.title}`}
          meta={[
            {"name": "description", "content": currentPage.description },

            {"property": "og:type", "content": "article"},
            {"property": "og:url", "content": `https://blockstack.org/docs/${currentPage.pageName}`},
            {"property": "og:title", "content": `Blockstack - ${currentPage.title}` },
            {"property": "og:description", "content": `${currentPage.description}`},
            {"property": "og:image", "content": `${currentPage.image}`},

            {"property": "twitter:card", "content": "summary"},
            {"property": "twitter:site", "content": "@blockstackorg"},
            {"property": "twitter:title", "content": `Blockstack - ${currentPage.title}`},
            {"property": "twitter:description", "content": `${currentPage.description}`},
            {"property": "twitter:image", "content": `${currentPage.image}` }
          ]}
        />
        : null }
        <div className="container-fluid col-centered navbar-fixed-top bg-primary">
          <Header />
        </div>
        <div className="hidden-image">
          <Image src={headerImageSrc} onLoad={this.onImageLoad} retinaSupport={true} />
        </div>
        <div className="m-b-3 docs-header-image-wrapper">
          { currentPage !== null && this.state.imageLoading !== true ?
          <Image src={headerImageSrc}
            fallbackSrc="/images/article-photos/road.jpg"
            className="img-fluid docs-header-image"
            retinaSupport={true} />
          : null }
        </div>
        { currentPage.pageName !== 'about' ?
        <nav className="container-fluid m-b-1 back-docs">
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link" to="/docs" aria-label="Back">
                <span aria-hidden="true">&laquo; Back to Docs</span>
                <span className="sr-only">Back</span>
              </Link>
            </li>
          </ul>
        </nav>
        : null }
        <section className="m-b-5 m-t-5">
          <div className="container p-b-5 col-centered">
            <div className="container">
              <h1>{currentPage.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: currentPage.markup }}>
              </div>
              {nextPage ?
                <div>
                  <div className="col-md-4 pull-l-padding">
                    <h3>Next Article</h3>
                    <CardLink href={`/docs/${nextPage.pageName}`}
                      title={nextPage.title} body={nextPage.description}
                      imageSrc={nextPage.image} />
                  </div>
                </div>
              : null }
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default DocsPage