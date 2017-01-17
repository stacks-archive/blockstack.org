'use strict'

import {Component}     from 'react'
import {Link}          from 'react-router'
import DocumentTitle   from 'react-document-title'
import marked          from 'marked'
import request         from 'request'
import {parseString}   from 'xml2js'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import {getPostFromRSS} from '../utils/rssUtils'
import docs             from '../../docs.json'
import {blogAuthors}    from '../data'


class BlogPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }

    this.setPosts = this.setPosts.bind(this)
  }

  componentDidMount() {
    const url = "https://blockstack-site-api.herokuapp.com/v1/blog-rss"
    request({
      url: url,
      withCredentials: false
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        this.setPosts(body)
      } else {
        console.log(error)
      }
    })
  }

  setPosts(body) {
    let posts = []

    parseString(body, (err, result) => { // parse XML string
      const firstChannel = result.rss.channel[0]
      const channelItems = firstChannel.item

      channelItems.map((rssPost) => {
        let post = getPostFromRSS(rssPost)
        post.creator = blogAuthors[post.blockstackID]
        posts.push(post)
      })
    })

    this.setState({
      posts: posts
    })
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Blog">
        <div>
          <div className="navbar-fixed-top bg-primary">
            <Header />
          </div>
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
                      <Link to={"/blog/" + post.urlSlug}>
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
          <Footer />
        </div>
      </DocumentTitle>
    )
  }

}

export default BlogPage