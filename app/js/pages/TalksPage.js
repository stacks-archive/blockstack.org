'use strict';

import { Component } from 'react';
import DocumentTitle from 'react-document-title';

import TalkPreview from '../components/TalkPreview';
import { videos } from '../../constants.json';

class TalksPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DocumentTitle title="Blockstack - Videos">
        <div>
          <div className="container container-lg sectionWrap blog-post bg-white m-b-100">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="container-fluid">
                    <h2 className="m-b-45">Videos</h2>
                    {Object.keys(videos).map((key, index) => {
                      const talk = videos[key];
                      return (
                        <TalkPreview
                          key={index}
                          url={'/videos/' + talk.urlSlug}
                          date={talk.date}
                          title={talk.title}
                          event={talk.event}
                          speaker={talk.speaker}
                          location={talk.location}
                          image={talk.image}
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

export default TalksPage;
