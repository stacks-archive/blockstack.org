import { Component, PropTypes } from 'react'
import {
  ShareButtons,
  generateShareIcon
} from 'react-share'

import hackerNewsLoad from '../utils/hackerNewsButton'

const { FacebookShareButton, TwitterShareButton } = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

class StickyShare extends Component {
  static propTypes: {
    description: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    shareUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const {
      description,
      imgUrl,
      shareUrl,
      title,
    } = this.props;

    return (
      <div className="sticky-share">
        {/*hackerNewsLoad()*/}
        <FacebookShareButton
          url={shareUrl}
          picture={imgUrl}
          title={title}
          description={description}
        >
          <FacebookIcon
            size="32"
            iconBgStyle={{fill: '#270F34'}}
            logoFillColor="white"
            round
          />
        </FacebookShareButton>
        <br/>
        <TwitterShareButton
          url={shareUrl}
          title={title}
        >
          <TwitterIcon
            size="32"
            iconBgStyle={{fill: '#270F34'}}
            logoFillColor="white"
            round
          />
        </TwitterShareButton>
        <br/>
        <div>
          <div className="hn-button">
            <a
              href={`https://news.ycombinator.com/submitlink?u=${shareUrl}&t=${title}`}
              data-count="vertical"
            >
              Y
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default StickyShare
