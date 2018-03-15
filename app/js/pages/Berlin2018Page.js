'use strict'

import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import CollapsibleList from '../components/CollapsibleList'
import berlinData, { berlinPressData } from '../datastore/berlin-event-data'
import Slider from 'react-slick'
import SignatureTalks from '../components/SignatureTalks'
import { slugify } from '../utils/functions'
import Image from '../components/Image'

const sliderSettings = {
  className: 'photo-slider center',
  centerMode: true,
  infinite: true,
  centerPadding: '0',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  autoplaySpeed: 1500,
  initialSlide: 1,
  speed: 500,
  arrows: true,
  dots: true,
  useCSS: true,
  accessibility: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

const photoSlides = [
  {
    src:
      'https://blockstack.imgix.net/ce1ee40f-d333-4778-ac7d-62d1231a3a9c__3020095.jpg',
  },

  {
    src:
      'https://blockstack.imgix.net/9f001bca-23bb-4510-9f0b-4e166514f60c__3020273.jpg',
  },
  {
    src:
      'https://blockstack.imgix.net/6fa2356d-07fd-4ee7-a083-4d8d80dce521_p3010031.jpg',
  },
  {
    src:
      'https://blockstack.imgix.net/b0415647-dc2f-44ac-b083-e7f445229f10__3020103.jpg',
  },
  {
    src:
      'https://blockstack.imgix.net/2a992e79-07b5-4440-a681-6c33a339a5ad__3020104.jpg',
  },
]

function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos
  })
}

const filterIndex = (data, min, max) =>
  data.filter((item, i) => {
    if (min && max) {
      return i >= min && i <= max
    }
    if (min && !max) {
      return i >= min
    }
    if (!min && max) {
      return i <= max
    }
  })

const filteredData = [...removeDuplicates(berlinData, 'talkTitle')]

const mainEvent = filteredData.filter((day) => day.day === 'March 2')

const learningSessions = filteredData.filter((day) => day.day === 'March 1')

const mainEventSections = [
  {
    title: 'Morning Sessions',
    items: filterIndex(mainEvent, 0, 8),
  },
  {
    title: 'After Lunch Sessions',
    items: filterIndex(mainEvent, 9, 11),
  },
  {
    title: 'App Demos',
    items: filterIndex(mainEvent, 12, 23),
  },
  {
    title: 'Late Afternoon Sessions',
    items: filterIndex(mainEvent, 24, 26),
  },
]
const learningSessionSections = [
  {
    title: 'Learning Sessions',
    items: learningSessions,
  },
]

const renderSections = (sections, props) =>
  sections.map((section, i) => (
    <div key={i} id={slugify(section.title)}>
      <h2 className="event__talk__header">{section.title}</h2>
      <SignatureTalks talks={section.items} allData={berlinData} {...props} />
    </div>
  ))

class Berlin2018Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      talkInView: null,
    }
  }

  handleTalkInView(talkInView) {
    if (this.state.talkInView !== talkInView) {
      this.setState({
        talkInView,
      })
    }
  }
  render() {
    return (
      <div className="page--berlin-event" id="berlin-page">
        <Helmet>
          <title>Blockstack Berlin: A Signature Fund Event</title>
          <meta
            name="description"
            content="Blockstack Berlin brought together top experts on data privacy, blockchain, information theory, and the decentralized community at large to imagine, learn about, and create decentralized applications."
          />
        </Helmet>
        <div className="berlin-event-hero">
          <div className="col-centered block">
            <div className="container p-b-90">
              <section className="berlin-hero">
                <h1 className="text-white m-b-20">
                  <Image
                    src="https://blockstack.imgix.net/0c4ac3e2-64ca-41cb-9e51-0c8b59764b42_blockstackberlin_logos_whitewithborder.png"
                    alt="Blockstack Berlin"
                  />
                </h1>
                <p className="text-white">
                  The Blockstack Signature Fund and the folks who brought you{' '}
                  <a href="https://blockstack.org/summit2017">
                    Blockstack Summit 2017
                  </a>{' '}
                  are excited to bring you Blockstack Berlin, the first in a
                  series of worldwide events and demo days around Blockstack.
                  The event took place on March 2, 2018 in Berlin at the Frank
                  Gehry designed Axica Convention Center.
                </p>
                <div className="row p-t-20 berlin-hero__actions">
                  <div className="col-sm">
                    <a
                      role="button"
                      className="btn btn-primary btn-block btn-block-reset"
                      href="#morning-sessions"
                      style={{
                        minWidth: '245px',
                      }}
                    >
                      Main Event
                    </a>
                  </div>
                  <div className="col-sm">
                    <a
                      role="button"
                      className="btn btn-primary btn-block btn-block-reset"
                      href="#learning-sessions"
                      style={{
                        minWidth: '245px',
                      }}
                    >
                      Learning Sessions
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="page__slider">
          <Slider {...sliderSettings}>
            {photoSlides.map((slide, i) => (
              <div key={i} className="photo-slider__slide">
                <Image src={`${slide.src}?auto=format&w=1400`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="bg-light-gray">
          <div className="container ">
            <div className="row">
              <div className="col-lg-3 col-md-4 order-1 order-md-4 order-lg-1 p-t-70 event__timeline-sidebar">
                <div className="sticky-sidebar">
                  <div className="p-t-20 p-b-90">
                    <h3>Event Timeline</h3>
                    <div>
                      <CollapsibleList
                        sections={mainEventSections}
                        talkInView={this.state.talkInView}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 order-12 order-md-1">
                <div className="event p-t-90 p-b-90">
                  <div className="event__speaker-grid">
                    {renderSections(mainEventSections, {
                      handleTalkInView: (t) => this.handleTalkInView(t),
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 order-12 order-md-1 bg-white col-centered">
              <div className="event p-t-90 p-b-90">
                <h2 className="text-center">Press</h2>
                <div className="press-grid">
                  {berlinPressData.map((item, i) => (
                    <div key={i} className="press-grid__item">
                      <a href={item.url} target="_blank">
                        <Image
                          src={`${item.logo}?w=200&auto=compress`}
                          alt={item.outlet}
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          //  Learning Sessions
        }
        <div className="bg-light-gray">
          <div className="container ">
            <div className="row">
              <div className="col-lg-3 col-md-4 order-1 order-md-4 order-lg-1 p-t-70 event__timeline-sidebar">
                <div className="sticky-sidebar">
                  <div className="p-t-20 p-b-90">
                    <h3>Overview</h3>
                    <div>
                      <CollapsibleList
                        sections={learningSessionSections}
                        talkInView={this.state.talkInView}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 order-12 order-md-1">
                <div className="event p-t-90 p-b-90">
                  <div className="event__speaker-grid">
                    {renderSections(learningSessionSections, {
                      handleTalkInView: (t) => this.handleTalkInView(t),
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Berlin2018Page
