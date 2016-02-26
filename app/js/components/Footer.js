'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

class Footer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
        <div className="container">
            <div className="col-md-2 foot-left-col hidden-md-down">
              <ul className="list-unstyled">
                <li>
                  <div className="foot-logo">
                    <Link to="/">
                      <img src="/images/logos/blockstack.svg" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-lg-2">
              <ul className="foot-menu list-unstyled">
                <li>Pages</li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/docs">Docs</Link>
                </li>
                <li>
                  <Link to="/docs/installation">Installation</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-lg-2">
              <ul className="foot-menu list-unstyled">
                <li>Community</li>
                <li>
                  <Link to="https://forum.blockstack.org/" target="_blank">Forum</Link>
                </li>
                <li>
                  <Link to="http://chat.blockstack.org" target="_blank">Slack Group</Link>
                </li>
                <li>
                  <Link to="https://medium.com/blockstack-review" target="_blank">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-lg-2">
              <ul className="foot-menu list-unstyled">
                <li>Resources</li>
                <li>
                  <Link to="https://github.com/blockstack" target="_blank">Github</Link>
                </li>
                <li>
                  <Link to="https://www.twitter.com/blockstackorg" target="_blank">Twitter</Link>
                </li>
                <li>
                  <Link to="http://brandfolder.com/blockstack" target="_blank">Branding</Link>
                </li>
              </ul>
            </div>
        </div>
        <div className="container copy-foot">
          <ul className="midfoot">
            <li>
              <div className="social hidden-lg-up container">
                <ul className="sm-social list-unstyled">
                  <li>
                    <Link to="https://www.twitter.com/blockstackorg" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com/channel/UCvDtRhHLNDyKiY-iwhneNbw" target="_blank">
                      <i className="fa fa-youtube-play"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://github.com/blockstack" target="_blank">
                      <i className="fa fa-github"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="copyright-push-left">
              <div className="copyright">
                This is an open sourced site hosted on GitHub.
                Patches, suggestions and comments are welcome.
              </div>
            </li>
            <li className="pull-right">
              <div className="social hidden-md-down">
                <ul className="sm-social list-unstyled">
                  <li>
                    <Link to="https://www.twitter.com/blockstackorg" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com/channel/UCvDtRhHLNDyKiY-iwhneNbw" target="_blank">
                      <i className="fa fa-youtube-play"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://github.com/blockstack" target="_blank">
                      <i className="fa fa-github"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="container base-foot">
            <p className="base-push-left">
              Made with &lt;3 by the Blockstack community
            </p>
        </div>
      </footer>
    )
  }

}

export default Footer
