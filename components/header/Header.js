import React, { Component } from 'react'
import { bslinks } from '@common'
import { Logo, LogoType } from '@components/svgs'
import Button from '@components/button'
import NewsletterSignup from '@components/newsletter-signup'
import MainMenu from '@components/main-menu'
import { InternalLink } from '@components/internal-link'
import scrollMonitor from 'scrollmonitor'

import './Header.scss'

class Header extends Component {
  state = {
    collapsed: false,
    menuOpen: false
  }

  componentDidMount() {
    this.collapseHeader()
  }

  collapseHeader = (nextProps) => {
    const Header = document.getElementById('StickyHeader')
    const elementWatcher = scrollMonitor.create(Header, { top: 1 })

    elementWatcher.fullyEnterViewport(() => {
      this.setState({ collapsed: false })
    })
    elementWatcher.partiallyExitViewport(() => {
      this.setState({ collapsed: true })
    })
    if (elementWatcher.isAboveViewport) {
      this.setState({ collapsed: true })
    }
  }

  closeMenu = () => {
    if (this.state.menuOpen) {
      this.setState({ menuOpen: false })
      document.querySelector('html').classList.remove('overflow-hidden')
    }
  }

  openMenu = () => {
    if (!this.state.menuOpen) {
      this.setState({ menuOpen: true })
      document.querySelector('html').classList.add('overflow-hidden')
    }
  }

  toggleMenu = () => {
    if (this.state.menuOpen) {
      this.closeMenu()
    } else {
      this.openMenu()
    }
  }

  render() {
    return (
      <header
        className={
          this.state.menuOpen ? 'header blue-bg menu-open' : 'header blue-bg'
        }
      >
        <div id="StickyHeader">
          <div
            className={
              this.state.collapsed ? 'inner-header collapsed' : 'inner-header'
            }
          >
            <div>
              <div className="container header-container">
                <div className="grid-flex no-break middle no-gutter">
                  <div className="col left">
                    <InternalLink
                      closeMenu={this.closeMenu}
                      className="es-logo"
                      href={{ pathname: '/', asPath: '/home' }}
                    >
                      <div className="grid-flex no-break no-gutter middle left">
                        <div className="bs-logo">{Logo()}</div>
                        <div className="bs-logotype ml-2">{LogoType()}</div>
                      </div>
                    </InternalLink>
                  </div>

                  <div className="col center align-center">
                    <div className="grid-flex tight-gutter center-actions center">
                      <div className="col">
                        <Button
                          className="secondary main-action"
                          href={bslinks && bslinks.tutorials}
                          label="Docs & Tutorials"
                        />
                      </div>
                      <div className="col newsletter-col">
                        <NewsletterSignup id="headerNewsletterSignup" />
                      </div>
                    </div>
                  </div>

                  <div className="col right side-col align-right">
                    <a onClick={this.toggleMenu} className="p menu-toggle">
                      <span className="material-icons md-24 menu-icon">
                        {this.state.menuOpen ? 'close' : 'menu'}
                      </span>
                      <span className="menu-text"> Menu</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.menuOpen ? (
          <MainMenu links={bslinks} closeMenu={() => this.closeMenu()} />
        ) : (
          false
        )}
      </header>
    )
  }
}

export default Header
