'use strict';

import { Component } from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { BlogActions } from '../datastore/Blog';
import Image from '../components/Image';
import CommunityMember from '../components/CommunityMember';
import PostShareWidget from '../components/PostShareWidget';

function mapStateToProps(state) {
  return {
    posts: state.blog.posts,
    postObject: state.blog.postObject,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BlogActions, dispatch);
}

class BlogPostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLoading: false,
      posts: this.props.posts,
      postObject: this.props.postObject,
    };

    this.initHighlighting = this.initHighlighting.bind(this);
    this.filterMarkup = this.filterMarkup.bind(this);
    this.onImageLoad = this.onImageLoad.bind(this);
  }

  componentWillMount() {
    if (this.props.posts.length === 0) {
      this.props.fetchPosts();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      imageLoading: true,
    });
    if (this.props.posts !== nextProps.posts) {
      this.setState({
        posts: nextProps.posts,
        postObject: nextProps.postObject,
      });
    }
  }

  componentDidUpdate() {
    this.initHighlighting();
  }

  initHighlighting() {
    const blocks = document.querySelectorAll('pre code');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  }

  filterMarkup(markup) {
    return markup.replace('<a href="', '<a target="_blank" href="');
  }

  onImageLoad() {
    this.setState({
      imageLoading: false,
    });
  }

  render() {
    const currentUrlSlug = location.pathname.split('/')[2];
    const currentPage = this.state.postObject[currentUrlSlug];
    const title = currentPage ? currentPage.title : '';
    const headerImageSrc = currentPage ? currentPage.image : '';

    return (
      <DocumentTitle title={title}>
        <div>
          {!currentPage && (
            <div className="container container-lg sectionWrap blog-post bg-white m-t-100 m-b-100 text-center">
              <i className="fa fa-spinner fa-spin fa-3x fa-fw" />
            </div>
          )}
          {currentPage && currentPage.preview ? (
            <div>
              <div className="hidden-image">
                <Image
                  src={headerImageSrc}
                  fallbackSrc="/images/article-photos/road.jpg"
                  onLoad={this.onImageLoad}
                  retinaSupport={false}
                />
              </div>
              <PostShareWidget
                description={currentPage.description}
                imgUrl={headerImageSrc}
                shareUrl={currentPage.url}
                title={currentPage.title}
              />
              <div className="container container-lg sectionWrap blog-post bg-white m-b-60">
                <div className="row">
                  <div className="container">
                    <div className="row">
                      <div className="container-fluid">
                        <h2 className="post-title">{currentPage.title}</h2>
                        <time
                          className="post-date"
                          dateTime={currentPage.datetime}
                        >
                          {currentPage.date}
                        </time>
                      </div>
                    </div>
                    <div className="m-b-55">
                      {currentPage !== null &&
                      this.state.imageLoading !== true ? (
                        <Image
                          src={headerImageSrc}
                          fallbackSrc="/images/article-photos/road.jpg"
                          className="img-fluid"
                          retinaSupport={false}
                        />
                      ) : null}
                    </div>
                    <div
                      className="post-body m-b-50"
                      dangerouslySetInnerHTML={{ __html: currentPage.markup }}
                    />
                    <hr className="m-t-70 m-b-60" />
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="row">
                            <div className="author">
                              <p className="written-by">Written by:</p>
                              <CommunityMember
                                key={0}
                                blockstackId={currentPage.creator.blockstackId}
                                name={currentPage.creator.name}
                                avatar={currentPage.creator.avatar}
                                twitter={currentPage.creator.twitter}
                                github={currentPage.creator.github}
                                isCentered={false}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="row h-100 d-flex align-items-center">
                            <Link
                              to="/signup"
                              role="button"
                              className="btn btn-secondary btn-block"
                            >
                              Get Updates
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <section className="m-b-5 m-t-5">
              <div className="container p-b-5 col-centered blog-post">
                <div className="container">
                  <div className="post-header">
                    <h1 className="post-title">{title}</h1>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </DocumentTitle>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostPage);
