'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

import {socialLinks}   from '../config'

class Footer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const links = socialLinks
    return (
      <footer>
        <div className="container container-lg">
          <div className="row">
            <div className="d-none d-lg-inline">
              <div className="foot-logo">
                <Link to="/">
                  <img src="/images/logos/blockstack-logo-landscape-rev.svg" />
                </Link>
              </div>
            </div>
            <div className="container foot-3col">
              <div className="row">
                <div className="col-6 col-md-3">
                  <div className="foot-menu">
                    <div className="foot-item text-white">
                      Pages
                    </div>
                    <div className="foot-item">
                      <Link to="/install">Install</Link>
                    </div>
                    <div className="foot-item">
                      <Link to="/about">About</Link>
                    </div>
                    <div className="foot-item">
                      <Link to="/tutorials">Tutorials</Link>
                    </div>
                    <div className="foot-item">
                      <Link to="/papers">Papers</Link>
                    </div>
                    <div className="foot-item">
                      <Link to="/videos">Videos</Link>
                    </div>
                    <div className="foot-item">
                      <Link to="/blog">Blog</Link>
                    </div>
                    <div className="foot-item">
                      <Link to="/faq">FAQ</Link>
                    </div>
                    <div className="foot-item">
                      <Link to="/careers">Careers</Link>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="foot-menu">
                    <div className="foot-item text-white">
                      Community
                    </div>
                    <div className="foot-item">
                      <Link to={links.forum} target="_blank">Forum</Link>
                    </div>
                    <div className="foot-item">
                      <Link to={links.slack} target="_blank">Slack</Link>
                    </div>
                    <div className="foot-item">
                      <Link to={links.meetup} target="_blank">Meetup</Link>
                    </div>
                    <div className="foot-item">
                      <Link to={links.youtube} target="_blank">YouTube</Link>
                    </div>
                    <div className="foot-item">
                      <Link to="/summit2017">Summit 2017</Link>
                    </div>
                    <div className="foot-item">
                      <Link to="/funding">Funding</Link>
                    </div>
                    <div className="foot-item">
                      <a href="http://blockstack.com" target="_blank">Token</a>
                    </div>
                    <div className="foot-item">
                      <Link to="/press">Press</Link>
                    </div>
                    <div className="foot-item">
                      <a href="https://blockstack.myshopify.com/" target="_blank">Swag Shop</a>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="foot-menu">
                    <div className="foot-item text-white">
                      Resources
                    </div>
                    <div className="foot-item">
                      <Link to={links.github} target="_blank">Github</Link>
                    </div>
                    <div className="foot-item">
                      <Link to={links.twitter} target="_blank">Twitter</Link>
                    </div>
                    <div className="foot-item">
                      <Link to={links.branding} target="_blank">Branding</Link>
                    </div>
                    <div className="foot-item">
                      <Link to="/legal/privacy-policy">Privacy Policy</Link>
                    </div>
                    <div className="foot-item">
                      <Link to="/legal/terms-of-use">Terms of Use</Link>
                    </div>
                    <div className="foot-item">
                      <Link to="/legal/disclaimers">Disclaimers</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-lg">
          <div className="row">
            <div className="container foot-3col">
              <div className="row">
                <div className="col-12 col-md-3 order-md-2 mt-5 foot-social">
                  <div className="container d-flex justify-content-md-end">
                    <div className="d-inline">
                      <Link to={links.twitter} target="_blank">
                        <i className="fa fa-twitter foot-social-item"></i>
                      </Link>
                    </div>
                    <div className="d-inline">
                      <Link to={links.youtube} target="_blank">
                        <i className="fa fa-youtube-play foot-social-item"></i>
                      </Link>
                    </div>
                    <div className="d-inline">
                      <Link to={links.github} target="_blank">
                        <i className="fa fa-github foot-social-item"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-9 order-md-1 mt-2 mt-md-5">
                  <div className="container">
                    <div className="foot-text">
                      This is an open sourced site hosted on GitHub. Patches, suggestions and comments are welcome.
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-9 order-md-1 mt-1 mt-md-3">
                  <div className="container">
                    <div className="foot-text" style={{ fontSize: '8px', lineHeight: '8px' }}>
                      The Blockstack Tokens are a crypto asset that is currently being developed by Blockstack Token LLC, a Delaware limited liability company, whose website can be found at www.blockstack.com.
                      The website you are currently visiting (www.blockstack.org) is sponsored by Blockstack PBC, an affiliate of Blockstack Token LLC, and should not be viewed as an offer or sale of securities.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-lg">
          <div className="row">
            <div className="container foot-3col">
              <div className="container mt-5">
                Made with &hearts; by the Blockstack community
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

}

export default Footer

