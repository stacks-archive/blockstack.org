'use strict'

import {Component}     from 'react'
import {Link}          from 'react-router'
import DocumentTitle   from 'react-document-title'
import marked          from 'marked'

import Header          from '../components/Header'
import Footer          from '../components/Footer'
import docs            from '../../docs.json'

class BlogPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: [
      ]
    }

    this.setPosts = this.setPosts.bind(this)
  }

  setPosts() {
    const postNames = [
      'blockstack-core-v0-14',
      'identity-attestation',
      'blockstack-profiles',
      'blockchain-identity',
      'blockstack-vs-dns',
      'blockstack-vs-namecoin',
      'namespaces',
      'how-blockstack-works',
    ]

    let posts = []

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
    })

    console.log(posts)

    this.setState({
      posts: posts
    })
  }

  componentDidMount() {
    this.setPosts()
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
                  Posts
                </h1>
                { this.state.posts.map((post, index) => {
                  return (
                    <div className="m-b-3" key={index}>
                      <Link to={"/posts/" + post.name}>
                        <h3>{ post.title }</h3>
                      </Link>
                      <p>{ post.date }</p>
                      <p>{ post.preview }</p>
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