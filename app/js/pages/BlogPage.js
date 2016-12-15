'use strict'

import {Component}     from 'react'
import {Link}          from 'react-router'
import DocumentTitle   from 'react-document-title'
import marked          from 'marked'
import request         from 'request'
import {parseString}   from 'xml2js'

import Header          from '../components/Header'
import Footer          from '../components/Footer'
import docs            from '../../docs.json'

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

    parseString(body, (err, result) => {
      const firstChannel = result.rss.channel[0]
      const channelItems = firstChannel.item

      channelItems.map((post) => {
        const urlSlug = post.link[0].split('ghost.io/')[1]
        const date = new Date(Date.parse(post.pubDate))
        console.log(date)
        posts.push({
          urlSlug: urlSlug,
          title: post.title,
          date: date.toDateString(),
          markdown: post["content:encoded"],
          preview: post.description,
          creator: post["dc:creator"]
        })
      })
    })

    console.log(posts)

    this.setState({
      posts: posts
    })
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Documentation">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5">
                <h1>
                  Blockstack Blog
                </h1>
                { this.state.posts.map((post, index) => {
                  return (
                    <div className="m-b-3" key={index}>
                      <Link to={"/blog/" + post.urlSlug}>
                        <h4>{ post.title }</h4>
                      </Link>
                      <p>{ post.date }</p>
                      <div dangerouslySetInnerHTML={{ __html: post.preview }}>
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

/*
const postNames = [
  'blockstack-core-v0-14',
  'identity-attestation',
  'blockstack-profiles',
  'blockchain-identity',
  'blockstack-vs-dns',
  'blockstack-vs-namecoin',
  'namespaces',
  'how-blockstack-works',
]*/


/*
postNames.forEach((postName) => {
  let markdown = docs[postName].markdown
  let plaintext = markdown
    .replace('#### ', '').replace('####', '')
    .replace('### ', '').replace('###', '')
    .replace('## ', '').replace('##', '')
  let preview = plaintext.slice(0,250) + '...'

  posts.push({
    name: postName,
    title: docs[postName].title,
    date: docs[postName].date,
    markdown: markdown,
    preview: preview
  })
})*/