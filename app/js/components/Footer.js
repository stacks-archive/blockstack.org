'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

class Footer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const links = {
      twitter: 'https://www.twitter.com/blockstackorg',
      youtube: 'https://www.youtube.com/channel/UC3J2iHnyt2JtOvtGVf_jpHQ',
      slack: 'http://chat.blockstack.org',
      meetup: 'http://www.meetup.com/topics/blockstack/',
      reddit: 'https://www.reddit.com/r/blockstack',
      blog: 'http://blog.blockstack.org',
      github: 'https://github.com/blockstack',
      branding: 'https://projects.invisionapp.com/boards/Z52J1R29G8MYH'
    }

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
                  <Link to="/articles">Articles</Link>
                </li>
                <li>
                  <Link to="/tutorials">Tutorials</Link>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-lg-2">
              <ul className="foot-menu list-unstyled">
                <li>Community</li>
                <li>
                  <Link to={links.slack} target="_blank">Slack</Link>
                </li>
                <li>
                  <Link to={links.meetup} target="_blank">Meetup</Link>
                </li>
                <li>
                  <Link to={links.reddit} target="_blank">Reddit</Link>
                </li>
                <li>
                  <Link to={links.blog} target="_blank">Blog</Link>
                </li>
                <li>
                  <Link to={links.youtube} target="_blank">YouTube</Link>
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
