import { Component, PropTypes } from 'react'
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

const { FacebookShareButton, TwitterShareButton } = ShareButtons;

class StickyShare extends Component {
  static propTypes: {
    shareUrl: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
  }

  render() {
    const {
      shareUrl,
    } = this.props;

    return (
      <div className="sticky-share">
        <FacebookShareButton url={shareUrl}>

        </FacebookShareButton>
        <TwitterShareButton url={shareUrl}>

        </TwitterShareButton>
      </div>
    );
  }
}

export default StickyShare
