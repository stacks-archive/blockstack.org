'use strict'

import React, { Component, Fragment } from 'react'
import Image from '../components/Image'
import { Helmet } from 'react-helmet'
import berlinData from '../datastore/berlin-event-data'
import Slider from 'react-slick'

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos
  })
}

const settings = {
  className: 'photo-slider center',
  centerMode: true,
  infinite: true,
  centerPadding: '0',
  slidesToShow: 3,
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

const renderSpeakers = (speakers) => {
  return speakers.map((speaker, i) => (
    <div key={i} className="event__speaker">
      <div className="event__speaker__avatar">
        {speaker.headshot && (
          <img
            src={`${
              speaker.headshot
            }?fit=facearea&crop=faces&facepad=2.6&w=400&h=400&auto=format`}
            alt={speaker.name}
          />
        )}
      </div>
      <div className="event__speaker__meta">
        <h5>{speaker.name}</h5>
        <div>{speaker.company}</div>
        <div>{speaker.jobTitle}</div>
        <div>
          <a href={`https://twitter.com/${speaker.twitter}`} target="_blank">
            {speaker.twitter}
          </a>
        </div>
      </div>
    </div>
  ))
}

const renderTalks = (talks, dayNum = 2) =>
  talks.map(({ day, talkTitle: title, time }, i) => {
    const speakers = berlinData.filter((speaker) => speaker.talkTitle === title)
    let classes = 'event__talk'

    if (speakers.length > 2) {
      classes += ' event__talk--large'
    }
    return (
      day === `March ${dayNum}` && (
        <div className={classes} id={slugify(title)}>
          <div className="event__talk__details">
            <h6>{time}</h6>
            <h3 key={i}>
              <a href={`#${slugify(title)}`}>{title}</a>
            </h3>
          </div>
          <div className="event__talk__content">
            <div className="event__talk__media">
              <img
                src="https://blockstack.imgix.net/7c53ed6a-c4eb-4d99-94fc-2e2ed9f62652_p3020241.jpg?auto=format&w=1400"
                alt={title}
              />
            </div>
            <div className="event__talk__speakers__container">
              <div className="event__talk__speakers">
                {renderSpeakers(speakers)}
              </div>
            </div>
          </div>
        </div>
      )
    )
  })

const renderSimpleTalkList = (talks, dayNum = 2) =>
  talks.map(({ day, talkTitle: title, time }, i) => {
    return (
      day === `March ${dayNum}` && (
        <div key={i} className="event__toc__talk__item">
          <a href={`#${slugify(title)}`}>{title}</a>
        </div>
      )
    )
  })

class Berlin2018Page extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const filteredData = removeDuplicates(berlinData, 'talkTitle')
    return (
      <div className="page--berlin-event">
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
                <h1 className="text-white m-b-20 p-t-90">
                  Blockstack Berlin: A Signature Fund Event
                </h1>
                <p className="text-white">
                  July 27th, 2017, Computer History Museum, Mountain View, CA
                </p>
              </section>
            </div>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            {photoSlides.map((slide, i) => (
              <div key={i} className="photo-slider__slide">
                <img src={`${slide.src}?auto=format&w=1400`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="col-centered block">
          <div className="event container p-t-90 p-b-90">
            {/*<div>{renderSimpleTalkList(filteredData)}</div>*/}
            <h2>Talks</h2>
            <div className="event__speaker-grid">
              {renderTalks(filteredData)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Berlin2018Page
