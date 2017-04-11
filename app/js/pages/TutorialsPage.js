'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'

class TutorialsPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const tutorials = {
      "hello-blockstack": {
        title: "Hello, Blockstack",
      }
    }

    return (
      <DocumentTitle title="Blockstack - Videos">
        <div>
          <div className="navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container-fluid col-centered">
              <div className="container m-b-1">
                <h1>
                  Tutorials
                </h1>
                { Object.keys(tutorials).map((key, index) => {
                  const tutorial = tutorials[key]
                  return (
                    <div key={index}>
                      <h4 className="m-b-1">
                        {tutorial.title}
                      </h4>
                      <p className="m-b-1">
                        <Link to={`/tutorials/${key}`}
                              className="btn btn-sm btn-outline-primary">
                          Get Started
                        </Link>
                      </p>
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

export default TutorialsPage
