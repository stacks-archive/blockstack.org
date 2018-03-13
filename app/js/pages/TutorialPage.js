'use strict';

import { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Article from '../components/Article';
import docs from '../../docs.json';

class TutorialPage extends Component {
  constructor(props) {
    super(props);

    this.state = { urlSlug: null };
    this.getPageInfo = this.getPageInfo.bind(this);
  }

  getPageInfo(props) {
    let title = '404';
    let urlSlug = '404';
    let youtubeURL = null;
    if (props.routeParams.hasOwnProperty('docSection')) {
      if (docs.hasOwnProperty(props.routeParams.docSection)) {
        urlSlug = props.routeParams.docSection;
        title = docs[urlSlug].title;
        if (docs[urlSlug].hasOwnProperty('youtube')) {
          youtubeURL = docs[urlSlug].youtube;
        }
      }
    }
    this.setState({
      urlSlug: urlSlug,
      title: title,
      youtubeURL: youtubeURL,
    });
  }

  componentWillMount() {
    this.getPageInfo(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.getPageInfo(nextProps);
    }
  }

  render() {
    return (
      <DocumentTitle title={this.state.title}>
        <section className="bottom-spacing-container">
          <div className="m-b-25">
            <Article
              urlSlug={this.state.urlSlug}
              youtubeURL={this.state.youtubeURL}
            />
          </div>
        </section>
      </DocumentTitle>
    );
  }
}

export default TutorialPage;
