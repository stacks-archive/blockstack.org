'use strict';

import { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Paper from '../components/Paper';
import { papers } from '../../constants.json';

class PapersPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Papers">
        <div>
          <div className="container container-lg sectionWrap blog-post bg-white m-b-100">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="container container-card">
                    <h2 className="m-b-45">Papers</h2>
                    {papers.map((paper, index) => {
                      return (
                        <Paper
                          key={index}
                          date={paper.date}
                          title={paper.title}
                          publication={paper.publication}
                          authors={paper.authors}
                          url={paper.url}
                          index={index}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default PapersPage;
