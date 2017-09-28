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
          <div className="container container-lg sectionWrap blog-post bg-white m-b-100">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="container container-card">
                    <h2 className="m-b-45">
                      Tutorials
                    </h2>
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
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }

}

export default TutorialsPage
