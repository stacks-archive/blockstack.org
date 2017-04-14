'use strict'

import {Component}      from 'react'
import DocumentTitle    from 'react-document-title'

import Paper            from '../components/Paper'
import {papers}         from '../config'

class PapersPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Papers">
        <div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5">
                <h1>
                  Papers
                </h1>
                { papers.map((paper, index) => {
                  return (
                    <Paper key={index}
                    date={paper.date} title={paper.title}
                    publication={paper.publication} authors={paper.authors}
                    url={paper.url} index={index} />
                  )
                }) }
              </div>
            </div>
          </section>
        </div>
      </DocumentTitle>
    )
  }

}

export default PapersPage
