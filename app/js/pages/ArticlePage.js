'use strict';

import { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Article from '../components/Article';
import docs from '../../docs.json';

class ArticlePage extends Component {
  constructor(props) {
    super(props);

    this.state = { urlSlug: null };
    this.getPageInfo = this.getPageInfo.bind(this);
  }

  getPageInfo(props) {
    let title = '404';
    let urlSlug = '404';
    if (props.routeParams.hasOwnProperty('docSection')) {
      if (docs.hasOwnProperty(props.routeParams.docSection)) {
        urlSlug = props.routeParams.docSection;
        title = docs[urlSlug].title;
      }
    }
    this.setState({
      urlSlug: urlSlug,
      title: title,
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
        <div className="m-b-5 m-t-5">
          <Article urlSlug={this.state.urlSlug} />
        </div>
      </DocumentTitle>
    );
  }
}

export default ArticlePage;
