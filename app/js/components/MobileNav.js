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
          <li className="nav-item">
            <Link to="/install" className="nav-link">
              Install
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tutorials" className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/papers" className="nav-link">
              Papers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/videos" className="nav-link">
              Videos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faqs" className="nav-link">
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="https://github.com/blockstack" className="nav-link" target="_blank">
              <i className="fa fa-github"></i>
              <span>Code</span>
            </Link>
          </li>
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
