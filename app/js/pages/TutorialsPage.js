'use strict'

import {Component}      from 'react'
import DocumentTitle    from 'react-document-title'

import TutorialPreview  from '../components/TutorialPreview'
import {tutorials}      from '../../constants.json'

class TutorialsPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Videos">
        <div>
          <section className="container-fluid spacing-container">
            <div className="container-fluid col-centered">
              <div className="container m-b-1">
                <h1>
                  Tutorials
                </h1>
                { Object.keys(tutorials).map((key, index) => {
                  const tutorial = tutorials[key]
                  return (
                    <TutorialPreview
                      key={index}
                      url={'/tutorials/' + tutorial.urlSlug}
                      title={tutorial.title}
                      description={tutorial.description}
                      image={tutorial.image} />
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

export default TutorialsPage
