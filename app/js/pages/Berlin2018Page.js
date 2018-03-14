'use strict'

import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import CollapsibleList from '../components/CollapsibleList'
import berlinData from '../datastore/berlin-event-data'
import Slider from 'react-slick'
import SignatureTalks from '../components/SignatureTalks'
import { slugify } from '../utils/functions'

const settings = {
  className: 'photo-slider center',
  centerMode: true,
  infinite: true,
  centerPadding: '0',
  slidesToShow: 3,
  autoPlay: true,
  autoplaySpeed: 1500,
  initialSlide: 1,
  speed: 500,
  arrows: true,
  dots: true,
  useCSS: true,
  accessibility: true,
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

const sections = [
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

const renderSections = (sections) =>
  sections.map((section, i) => (
    <div key={i} id={slugify(section.title)}>
      <h2 className="event__talk__header">{section.title}</h2>
      <SignatureTalks talks={section.items} allData={berlinData} />
    </div>
  ))

class Berlin2018Page extends Component {
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
              <section className="text-xs-center">
                <h3 className="text-white p-t-90">A Signature Fund Event</h3>
                <h1 className="text-white m-b-20">Blockstack Berlin</h1>
                <p className="text-white">
                  The Blockstack Signature Fund and the folks who brought you{' '}
                  <a href="https://blockstack.org/summit2017">
                    Blockstack Summit 2017
                  </a>{' '}
                  are excited to announce Blockstack Berlin, the first in a
                  series of worldwide events and demo days around Blockstack.
                  The event took place on March 2, 2018 in Berlin at the Axica
                  Convention Center.
                </p>
              </section>
            </div>
          </div>
        </div>
        <div className="page__slider">
          <Slider {...settings}>
            {photoSlides.map((slide, i) => (
              <div key={i} className="photo-slider__slide">
                <img src={`${slide.src}?auto=format&w=1400`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="bg-light-gray">
          <div className="container ">
            <div className="row">
              <div className="col-lg-3 col-md-4 order-1 order-md-4 order-lg-1 p-t-70">
                <div className="sticky-sidebar">
                  <div className="p-t-20 p-b-90">
                    <h3>Event Timeline</h3>
                    <div>
                      <CollapsibleList sections={sections} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-8 order-12 order-md-1">
                <div className="event p-t-90 p-b-90">
                  <div className="event__speaker-grid">
                    {renderSections(sections)}
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
