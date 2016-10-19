'use strict'

import { Component }   from 'react'
import DocumentTitle   from 'react-document-title'
import {
  Link, Element, Events, scrollSpy
}                      from 'react-scroll'
import marked          from 'marked'

import Header          from '../components/Header'
import Footer          from '../components/Footer'
import docs            from '../../docs.json'


class DocsPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentPage: null
    }

    this.setPage = this.setPage.bind(this)
    this.filterMarkup = this.filterMarkup.bind(this)
  }

  componentWillMount() {
    this.setPage()
  }

  setPage() {
    const pageNames = [
      'cli-installation', 'cli-basic-usage', 'cli-extended-usage'
    ]
    let sections = []
    let markup = ""

    pageNames.forEach((pageName) => {
      let markdown = docs[pageName].markdown
      let currentMarkup = marked(markdown)
      markup = markup + currentMarkup

      let markupParts = currentMarkup.split(/(<h3.*<\/h3>)\n/g)
      markupParts.splice(0, 1)

      for (var i = 0, j = markupParts.length; i < j; i += 2) {
        let id = markupParts[i].split(/id="(.*)"/g)[1]
        let title = id
        sections.push({
          id: id,
          title: title,
          header: markupParts[i],
          body: markupParts[i+1]
        })
      }
    })

    console.log(sections)

    this.setState({
      currentPage: {
        markup: markup,
        sections: sections
      }
    })
  }

  filterMarkup(markup) {
    return markup.replace('<a href="', '<a target="_blank" href="')
  }

  render() {

    return (
      <DocumentTitle title="Blockstack - About">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="m-t-5">
            <div className="container p-b-5 col-centered">
              <div className="row">

                <div className="col-md-4 col-lg-3 sidebar hidden-sm-down">
                  <ul className="nav nav-sidebar docs-ul">
                    <div className="btn-group-vertical docs-btn-group">
                    { this.state.currentPage.sections.map((section, index) => {
                      return (
                        <Link to={section.id} smooth={true} spy={true} offset={-250}
                          className="btn btn-secondary" key={index}>
                          {section.title}
                        </Link>
                      )
                    })}
                    </div>
                  </ul>
                </div>
                <div className="col-md-8 offset-md-4 col-lg-9 offset-lg-3 bitcoin-protocols-main">
                  { this.state.currentPage ?
                  <div>
                  { this.state.currentPage.sections.map((section, index) => {
                    return (
                      <Element name={section.id} className="element" key={index}>
                        <div dangerouslySetInnerHTML={{ __html: section.header + section.body }}>
                        </div>
                      </Element>
                    )
                  })}
                  </div>
                  : null }
                </div>

              </div>
            </div>
            <Footer />
          </section>
        </div>
      </DocumentTitle>
    )
  }

}

export default DocsPage

/*
<Element name="section_2" className="element">
                      <h3 className="chart-header">
                        Lookups
                      </h3>
                    </Element>
                    <Element name="section_3" className="element">
                      <h3 className="chart-header">
                        Price Estimation
                      </h3>
                    </Element>
                    <Element name="section_4" className="element">
                      <h3 className="chart-header">
                        Deposits
                      </h3>
                    </Element>
                    <Element name="section_5" className="element">
                      <h3 className="chart-header">
                        Registrations
                      </h3>
                    </Element>
                    <Element name="section_6" className="element">
                      <h3 className="chart-header">
                        Updates
                      </h3>
                    </Element>
                    <Element name="section_7" className="element">
                      <h3 className="chart-header">
                        Transfers
                      </h3>
                    </Element>
                    <Element name="section_8" className="element">
                      <h3 className="chart-header">
                        Names You Own
                      </h3>
                    </Element>
                    <Element name="section_9" className="element">
                      <h3 className="chart-header">
                        Bitcoin Balance
                      </h3>
                    </Element>
                    <Element name="section_10" className="element">
                      <h3 className="chart-header">
                        Imports
                      </h3>
                    </Element>
                    <Element name="section_11" className="element">
                      <h3 className="chart-header">
                        Whois Info
                      </h3>
                    </Element>
                    <Element name="section_12" className="element">
                      <h3 className="chart-header">
                        Server Updates
                      </h3>
                    </Element>

                    <p>
                      The quickest way to experience the power of Blockstack first hand is to install
                      the command line interface and play around with looking up names and registering names.
                    </p>
                    <p>
                      Below you'll find the installation instructions for both OS X and Linux (Debian and Ubuntu).
                    </p>
                    <p>
                      Installation on OS X requires `pip`. If you're running OS X, you should already have `pip`
                      installed (it comes with Python), but if not make sure to install it using the following command:
                    </p>
                    <pre>
                      $ brew install python
                    </pre>
                    <p>
                      Next, use `pip` to install blockstack:
                    </p>
                    <pre>
                      $ sudo pip install blockstack
                    </pre>
                    <p>
                      Installation on Debian + Ubuntu requires `pip` and `libssl`. First, make sure you have both:                      
                    </p>
                    <pre>
                      $ sudo apt-get update && sudo apt-get install -y python-pip python-dev libssl-dev
                    </pre>
                    <p>
                      Next, use `pip` to install blockstack:
                    </p>
                    <pre>
                      $ sudo pip install blockstack
                    </pre>


                    <p>
                      Now, to perform a name lookup, run this command:
                    </p>
                    <pre>
                      $ blockstack lookup timblee.id
                    </pre>
                    <p>
                      You should get a response like this:
                    </p>
                    <pre>
$ORIGIN timblee.id
$TTL 3600
_http._tcp URI 10 1 "https://blockstack.s3.amazonaws.com/timblee.id"
                    </pre>
*/

