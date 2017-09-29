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
          <div className="row">
            <div className="col-md-2 foot-left-col d-none d-lg-block">
              <div className="foot-logo">
                <Link to="/">
                  <img src="/images/logos/blockstack-logo-landscape-rev.svg" />
                </Link>
              </div>
            </div>
            <div className="col-6 col-lg-2">
              <div className="foot-menu">
                <div className="foot-item text-white">
                  Pages
                </div>
                <div className="foot-item">
                  <Link to="/intro">Intro</Link>
                </div>
                <div className="foot-item">
                  <Link to="/tutorials">Tutorials</Link>
                </div>
                <div className="foot-item">
                  <Link to="/blog">Blog</Link>
                </div>
                <div className="foot-item">
                  <Link to="/papers">Papers</Link>
                </div>
                <div className="foot-item">
                  <Link to="/videos">Videos</Link>
                </div>
                <div className="foot-item">
                  <Link to="/about">About</Link>
                </div>
                <div className="foot-item">
                  <Link to="/faq">FAQs</Link>
                </div>
                <div className="foot-item">
                  <Link to="/careers">Careers</Link>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-2">
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
              </div>
            </div>
            <div className="col-6 col-lg-2">
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
              </div>
            </div>
          </div>
        </div>
      </footer>

    )
  }

}

export default Footer

{ /*



        </div>

        <div className="container copy-foot">
          <ul className="midfoot">
            <li>
              <div className="social hidden-lg-up container">
                <div className="sm-social">
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
                </div>
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
                <div className="sm-social">
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
                </div>
              </div>
            </li>
          </div>
        </div>
        <div className="container base-foot">
            <p className="base-push-left">
              Made with &lt;3 by the Blockstack community
            </p>
        </div>
      </footer>
*/ }