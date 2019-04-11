import React from 'react'
import { InternalLink as InternalLinkComponent } from '@components/internal-link'

class MainMenu extends React.PureComponent {
  render() {
    const { closeMenu } = this.props

    const InternalLink = (props) => (
      <InternalLinkComponent {...props} onClick={closeMenu} />
    )
    return (
      <div className="main-menu blue-bg pt-4 pb-4">
        <div className="container">
          <div className="grid-flex break-sm menu-cols v-spaced pt-4 pb-3">
            <div className="col pb-2">
              <h5 className="p md medium-weight list-title">Get Started</h5>
              <p className="md py-1 list-divider">---</p>
              <ul>
                <li>
                  <InternalLink
                    href={this.props.links.tutorials}
                    className="p md"
                  >
                    Tutorials
                  </InternalLink>
                </li>
                <li>
                  <InternalLink
                    href={this.props.links.install}
                    className="p md"
                  >
                    Install browser
                  </InternalLink>
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
                  <InternalLink
                    href={this.props.links.tutorials}
                    className="p md"
                  >
                    Tutorials
                  </InternalLink>
                </li>
                <li>
                  <a href={this.props.links.documentation} className="p md">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href={this.props.links.github} className="p md">
                    GitHub
                  </a>
                </li>
                <li>
                  <InternalLink
                    href={this.props.links.whitePapers}
                    className="p md"
                  >
                    White Papers
                  </InternalLink>
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
                  <a href={this.props.links.events} className="p md">
                    Events
                  </a>
                </li>
                <li>
                  <a href={this.props.links.meetup} className="p md">
                    Meetup
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
                  <InternalLink href={this.props.links.videos} className="p md">
                    Videos
                  </InternalLink>
                </li>
                <li>
                  <a href={this.props.links.appMining} className="p md">
                    App Mining
                  </a>
                </li>
                <li>
                  <a href={this.props.links.signatureFund} className="p md">
                    Signature fund
                  </a>
                </li>
                <li>
                  <a href={this.props.links.telegramEnglish} className="p md">
                    Telegram (English)
                  </a>
                </li>
                <li>
                  <a href={this.props.links.telegramChinese} className="p md">
                    Telegram (中文群)
                  </a>
                </li>
                <li>
                  <a href={this.props.links.emailArchive} className="p md">
                    Newsletter archive
                  </a>
                </li>
              </ul>
            </div>
            <div className="col pb-2">
              <h5 className="p md medium-weight list-title">Blockstack</h5>
              <p className="md py-1 list-divider">---</p>
              <ul>
                <li>
                  <InternalLink href={this.props.links.about} className="p md">
                    About
                  </InternalLink>
                </li>
                <li>
                  <InternalLink
                    href={this.props.links.whatIsBs}
                    className="p md"
                  >
                    What is Blockstack
                  </InternalLink>
                </li>
                <li>
                  <InternalLink href="/pbc" className="p md">
                    Blockstack PBC
                  </InternalLink>
                </li>
                <li>
                  <InternalLink href={this.props.links.faq} className="p md">
                    FAQ
                  </InternalLink>
                </li>
                <li>
                  <InternalLink href="/roadmap" className="p md">
                    Roadmap
                  </InternalLink>
                </li>
                <li>
                  <InternalLink
                    href={this.props.links.careers}
                    className="p md"
                  >
                    Careers
                  </InternalLink>
                </li>
                <li>
                  <InternalLink href={this.props.links.press} className="p md">
                    Press
                  </InternalLink>
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
                  <InternalLink
                    href={this.props.links.privacy}
                    className="p md"
                  >
                    Privacy
                  </InternalLink>
                </li>
                <li>
                  <InternalLink href={this.props.links.tos} className="p md">
                    Terms of Use
                  </InternalLink>
                </li>
                <li>
                  <InternalLink
                    href={this.props.links.disclaimers}
                    className="p md"
                  >
                    Disclaimers
                  </InternalLink>
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
