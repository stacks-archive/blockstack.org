import { Component } from 'react';
import PropTypes from 'prop-types';
import { ShareButtons, generateShareIcon } from 'react-share';

const { FacebookShareButton, TwitterShareButton } = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

const propTypes = {
  description: PropTypes.string,
  imgUrl: PropTypes.string.isRequired,
  shareUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

class PostShareWidget extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { description, imgUrl, shareUrl, title } = this.props;
    return (
      <div className="PostShareWidget">
        <FacebookShareButton
          url={shareUrl}
          picture={imgUrl}
          title={title}
          description={description}
          style={{ cursor: 'pointer', outline: 'none' }}
        >
          <FacebookIcon
            size={40}
            iconBgStyle={{ fill: 'transparent' }}
            logoFillColor="#270F34"
            round
          />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          title={title}
          style={{ cursor: 'pointer', outline: 'none' }}
        >
          <TwitterIcon
            size={40}
            iconBgStyle={{ fill: 'transparent' }}
            logoFillColor="#270F34"
            round
          />
        </TwitterShareButton>
      </div>
    );
  }
}
PostShareWidget.propTypes = propTypes;

export default PostShareWidget;
