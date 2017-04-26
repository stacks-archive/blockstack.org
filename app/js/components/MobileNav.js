'use strict'

import {Component}  from 'react'
import {Link} from 'react-router'

const links = [
  { name: 'Intro', url: '/intro' },
  { name: 'About', url: '/about' },
  { name: 'Install', url: '/install' },
  { name: 'Tutorials', url: '/tutorials' },
  { name: 'Docs', url: '/docs' },
  { name: 'Blog', url: '/blog' },
  { name: 'Papers', url: '/papers' },
  { name: 'Videos', url: '/videos' },
  { name: 'FAQs', url: '/faqs' },
  { name: 'Code', url: 'https://github.com/blockstack' },
]

class MobileNav extends Component {

  constructor (props) {
    super(props)
    this.renderLinks = this.renderLinks.bind(this)
  }

  render() {
    const { isOpen } = this.props;

    return (
      <div
        className={isOpen ? 'mobile-nav closing' : 'mobile-nav opening'}
        id="mobile-nav"
        aria-expanded={isOpen}
      >
        <ul className="nav nav-justified">
          { links.map(this.renderLinks) }
        </ul>
      </div>
    )
  }

  renderLinks(link) {
    const { toggleDropdown } = this.props;
    return (
      <li className="nav-item m-b-1">
        <Link
          onClick={toggleDropdown}
          to={link.url}
          className="nav-link"
          target={link.name === 'Code' ? '_blank' : ''}
        >
          { link.name === 'Code' ?
            <i className="fa fa-github"></i>
            : null }
          <span>{ link.name }</span>
        </Link>
      </li>
    )
  }

}

export default MobileNav
