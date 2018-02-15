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
                      <div className="col-md-10">
                       <div className="col-md-4">
                       </div>
                       <div className="col-md-8">
                        <h4 className="">
                          This is the really long title part
                        </h4>
                        <p className="">
                          Date
                        </p>
                       </div>
                      </div>

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
