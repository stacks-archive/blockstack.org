'use strict'

import {Component}      from 'react'
import DocumentTitle    from 'react-document-title'

import PressItem        from '../components/PressItem'
import {press}          from '../../constants.json'

class PressPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Press">
        <div>
          <div className="container sectionWrap bg-white m-b-100">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="container">
                    <h2 className="m-b-45">
                      Press
                    </h2>
                    <div className="row">
                    { press.map((item, index) => {
                      return (
                        <div className="col-md-4" key={index}>
                          <PressItem
                            date={item.date} title={item.title}
                            publication={item.publication} url={item.url} />
                        </div>
                      )
                    }) }
                    </div>
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

export default PressPage
