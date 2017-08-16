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
        <div className="container">
            <div className="col-md-2 foot-left-col hidden-md-down">
              <ul className="list-unstyled">
                <li>
                  <div className="foot-logo">
                    <Link to="/">
                      <img src="/images/logos/blockstack-logo-landscape-rev.svg" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-lg-2">
              <ul className="foot-menu list-unstyled">
                <li>Pages</li>
                <li>
                  <Link to="/intro">Intro</Link>
                </li>
                <li>
                  <Link to="/tutorials">Tutorials</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/papers">Papers</Link>
                </li>
                <li>
                  <Link to="/videos">Videos</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/faq">FAQs</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-lg-2">
              <ul className="foot-menu list-unstyled">
                <li>Community</li>
                <li>
                  <Link to={links.forum} target="_blank">Forum</Link>
                </li>
                <li>
                  <Link to={links.slack} target="_blank">Slack</Link>
                </li>
                <li>
                  <Link to={links.meetup} target="_blank">Meetup</Link>
                </li>
                <li>
                  <Link to={links.youtube} target="_blank">YouTube</Link>
                </li>
                <li>
                  <Link to="/summit2017">Summit 2017</Link>
                </li>
                <li>
                  <Link to="/funding">Funding</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-lg-2">
              <ul className="foot-menu list-unstyled">
                <li>Resources</li>
                <li>
                  <Link to={links.github} target="_blank">Github</Link>
                </li>
                <li>
                  <Link to={links.twitter} target="_blank">Twitter</Link>
                </li>
                <li>
                  <Link to={links.branding} target="_blank">Branding</Link>
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
                    <Link to={links.twitter} target="_blank">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={links.youtube} target="_blank">
                      <i className="fa fa-youtube-play"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={links.github} target="_blank">
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
                    <Link to={links.twitter} target="_blank">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={links.youtube} target="_blank">
                      <i className="fa fa-youtube-play"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={links.github} target="_blank">
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
