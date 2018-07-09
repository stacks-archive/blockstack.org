import React, { Component } from 'react'

import './MainMenu.scss'

class MainMenu extends Component {
  render() {
    return (
      <div className="main-menu blue-bg pt-4 pb-4">
        <div className="container">
          <div className="grid-flex break-sm menu-cols v-spaced pt-4 pb-3">
            <div className="col pb-2">
              <h5 className="p md medium-weight list-title">Get Started</h5>
              <p className="md py-1 list-divider">---</p>
              <ul>
                <li>
                  <a href={this.props.links.tutorials} className="p md">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href={this.props.links.install} className="p md">
                    Install browser
                  </a>
                </li>
                <li>
                  <a href={this.props.links.liveApps} className="p md">
                    Live apps
                  </a>
                </li>
              </ul>
            </div>
            <div className="col pb-2">
              <h5 className="p md medium-weight list-title">Technology</h5>
              <p className="md py-1 list-divider">---</p>
              <ul>
                <li>
                  <a href={this.props.links.tutorials} className="p md">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href={this.props.links.documentation} className="p md">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href={this.props.links.github} className="p md">
                    Github
                  </a>
                </li>
                <li>
                  <a href={this.props.links.whitePapers} className="p md">
                    White Papers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col pb-2">
              <h5 className="p md medium-weight list-title">Community</h5>
              <p className="md py-1 list-divider">---</p>
              <ul>
                <li>
                  <a href={this.props.links.forum} className="p md">
                    Forum
                  </a>
                </li>
                <li>
                  <a href={this.props.links.slack} className="p md">
                    Slack
                  </a>
                </li>
                <li>
                  <a href={this.props.links.meetup} className="p md">
                    Meetup
                  </a>
                </li>
                <li>
                  <a href="#" className="p md">
                    Request an app
                  </a>
                </li>
                <li>
                  <a href="#" className="p md">
                    Get updates
                  </a>
                </li>
                <li>
                  <a href={this.props.links.blog} className="p md">
                    Blog
                  </a>
                </li>
                <li>
                  <a href={this.props.links.youtube} className="p md">
                    Youtube
                  </a>
                </li>
                <li>
                  <a href={this.props.links.videos} className="p md">
                    Videos
                  </a>
                </li>
                <li>
                  <a href={this.props.links.signatureFund} className="p md">
                    Signature fund
                  </a>
                </li>
              </ul>
            </div>
            <div className="col pb-2">
              <h5 className="p md medium-weight list-title">Blockstack</h5>
              <p className="md py-1 list-divider">---</p>
              <ul>
                <li>
                  <a href={this.props.links.about} className="p md">
                    About
                  </a>
                </li>
                <li>
                  <a href={this.props.links.whatIsBs} className="p md">
                    What is Blockstack
                  </a>
                </li>
                <li>
                  <a href={this.props.links.faq} className="p md">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href={this.props.links.careers} className="p md">
                    Careers
                  </a>
                </li>
                <li>
                  <a href={this.props.links.press} className="p md">
                    Press
                  </a>
                </li>
                <li>
                  <a href={this.props.links.swag} className="p md">
                    Swag
                  </a>
                </li>
                <li>
                  <a href={this.props.links.twitter} className="p md">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href={this.props.links.branding} className="p md">
                    Branding
                  </a>
                </li>
                <li>
                  <a href={this.props.links.privacy} className="p md">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href={this.props.links.tos} className="p md">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href={this.props.links.disclaimers} className="p md">
                    Disclaimers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainMenu

//<a className="menu-icon" onClick={this.props.openMenu}>Menu</a>
