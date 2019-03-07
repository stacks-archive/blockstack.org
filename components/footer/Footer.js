import React, { Component } from 'react'
import { Logo, LogoType } from '@components/svgs'
import NewsletterSignup from '@components/newsletter-signup'
import { bslinks } from '@common'

class Footer extends Component {
  render() {
    return (
      <footer className="pb-4 blue-bg mt-4">
        <div className="container narrow">
          <div className="mb-4 my-auto">
            <NewsletterSignup inputClass="large" id="footerNewsletterSignup" />
          </div>
          <div className="align-center pb-4">
            <nav className="line-nav">
              <ul>
                <li>
                  <a href={bslinks.tutorials} className="p md">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href={bslinks.install} className="p md">
                    Install browser
                  </a>
                </li>
                <li>
                  <a href={bslinks.liveApps} className="p md">
                    Live apps
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="grid-flex v-spaced footer-links">
            <div className="col pb-2">
              <h5 className="p sm medium-weight pb-1">Technology</h5>
              <ul>
                <li>
                  <a href={bslinks.tutorials} className="p sm">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href={bslinks.documentation} className="p sm">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href={bslinks.github} className="p sm">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={bslinks.whitePapers} className="p sm">
                    White Papers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col pb-2">
              <h5 className="p sm medium-weight pb-1">Community</h5>
              <ul>
                <li>
                  <a href={bslinks.forum} className="p sm">
                    Forum
                  </a>
                </li>
                <li>
                  <a href={bslinks.slack} className="p sm">
                    Slack
                  </a>
                </li>
                <li>
                  <a href={bslinks.meetup} className="p sm">
                    Meetup
                  </a>
                </li>
                <li>
                  <a href={bslinks.blog} className="p sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href={bslinks.youtube} className="p sm">
                    Youtube
                  </a>
                </li>
                <li>
                  <a href={bslinks.videos} className="p sm">
                    Videos
                  </a>
                </li>
                <li>
                  <a href={bslinks.appMining} className="p sm">
                    App Mining
                  </a>
                </li>
                <li>
                  <a href={bslinks.signatureFund} className="p sm">
                    Signature fund
                  </a>
                </li>
                <li>
                  <a href={bslinks.telegramEnglish} className="p sm">
                    Telegram (English)
                  </a>
                </li>
                <li>
                  <a href={bslinks.telegramChinese} className="p sm">
                    Telegram (中文群)
                  </a>
                </li>
                <li>
                  <a href={bslinks.emailArchive} className="p sm">
                    Newsletter archive
                  </a>
                </li>
              </ul>
            </div>
            <div className="col pb-2">
              <h5 className="p sm medium-weight pb-1">Blockstack</h5>
              <ul>
                <li>
                  <a href={bslinks.about} className="p sm">
                    About
                  </a>
                </li>
                <li>
                  <a href={bslinks.whatIsBs} className="p sm">
                    What is Blockstack
                  </a>
                </li>
                <li>
                  <a href="/pbc" className="p sm">
                    Blockstack PBC
                  </a>
                </li>
                <li>
                  <a href={bslinks.faq} className="p sm">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/roadmap" className="p sm">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a href={bslinks.careers} className="p sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href={bslinks.press} className="p sm">
                    Press
                  </a>
                </li>
                <li>
                  <a href={bslinks.swag} className="p sm">
                    Swag
                  </a>
                </li>
                <li>
                  <a href={bslinks.twitter} className="p sm">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href={bslinks.branding} className="p sm">
                    Branding
                  </a>
                </li>
                <li>
                  <a href={bslinks.privacy} className="p sm">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href={bslinks.tos} className="p sm">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href={bslinks.disclaimers} className="p sm">
                    Disclaimers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="tiny text-color medium-weight pt-4">
            The Blockstack Tokens are a crypto asset that is currently being
            developed by Blockstack Token LLC, a Delaware limited liability
            company, whose website can be found at{' '}
            <a href="https://www.blockstack.com">www.blockstack.com</a>. The
            website you are currently visiting{' '}
            <a href="https://www.blockstack.com">www.blockstack.org</a> is
            sponsored by Blockstack PBC, an affiliate of Blockstack Token LLC,
            and should not be viewed as an offer or sale of securities.
          </p>

          <div className=" mt-4">
            <div className="grid-flex no-break no-gutter middle center">
              <div className="bs-logo">
                <Logo />
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
