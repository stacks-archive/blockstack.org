'use strict'

import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import CollapsibleList from '../components/CollapsibleList'
import berlinData, {
  berlinPressData,
  berlinSponsorData,
} from '../datastore/berlin-event-data'
import Slider from 'react-slick'
import SignatureTalks from '../components/SignatureTalks'
import { slugify } from '../utils/functions'
import Image from '../components/Image'
import Modal from '../components/Modal'
import YouTubePlayer from 'react-player/lib/players/YouTube'
import Speakers from '../components/Speakers'
import { SECTIONS } from '../datastore/berlin-event-data'

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
      'https://blockstack.imgix.net/b52ca3fc-1b98-4f41-b296-24b0d1d26ea3__3020287.jpg',
  },
  {
    src:
      'https://blockstack.imgix.net/14051eb2-e391-4830-8bb0-a759c50f3126__3020140.jpg',
  },
]

function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj[prop]).indexOf(obj[prop]) === pos
  })
}

const filterTalksBySection = (data, section) =>
  data.filter((talk) => talk.section === section)

const filteredData = [...removeDuplicates(berlinData, 'talkTitle')]

const mainEvent = filteredData.filter((day) => day.day === 'March 2')

const learningSessions = filteredData.filter((day) => day.day === 'March 1')

const mainEventSections = [
  {
    title: 'Morning Sessions',
    items: filterTalksBySection(mainEvent, SECTIONS.MORNING),
  },
  {
    title: 'Early Afternoon Sessions',
    items: filterTalksBySection(mainEvent, SECTIONS.EARLY_AFTERNOON),
  },
  {
    title: 'Dapp Demos',
    items: filterTalksBySection(mainEvent, SECTIONS.APPDEMOS),
  },
  {
    title: 'Late Afternoon Sessions',
    items: filterTalksBySection(mainEvent, SECTIONS.LATE_AFTERNOON),
  },
]
const learningSessionSections = [
  {
    title: 'Learning Sessions',
    items: learningSessions,
  },
]

class Berlin2018Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      talkInView: null,
      modal: false,
      talk: null,
      nextTalk: null,
      prevTalk: null,
    }
  }

  setNewTalk(talk, direction) {
    const { sections, talks, sectionIndex } = this.state

    if (this.state.talk !== talk) {
      const {
        prevTalk,
        nextTalk,
        nextSection,
        prevSection,
        talks: newTalks,
        sectionIndex: newSectionIndex,
      } = this.computeTalkData(talk, sections, talks, sectionIndex)

      const returnTalks = () => {
        if (direction && direction === 'next') {
          if (nextSection && nextSection !== this.state.talks) {
            return nextSection
          } else {
            return newTalks
          }
        } else if (direction && direction === 'prev') {
          if (prevSection && prevSection !== this.state.talks) {
            return prevSection
          } else {
            return newTalks
          }
        } else {
          return newTalks
        }
      }
      this.setState({
        modal: true,
        talk,
        prevTalk,
        nextTalk,
        nextSection,
        prevSection,
        sectionIndex: newSectionIndex,
        talks: returnTalks(),
      })
    }
  }

  closeModal() {
    if (this.state.modal) {
      this.setState({
        modal: false,
        talk: null,
      })
    }
  }

  handleTalkInView(talkInView) {
    if (this.state.talkInView !== talkInView) {
      this.setState({
        talkInView,
      })
    }
  }

  openModal(talk, sections, talks, sectionIndex) {
    const {
      prevTalk,
      nextTalk,
      nextSection,
      prevSection,
      talks: newTalks,
    } = this.computeTalkData(talk, sections, talks, sectionIndex)

    if (!this.state.modal) {
      this.setState({
        modal: true,
        talk,
        talks: newTalks,
        sections,
        prevTalk,
        nextTalk,
        nextSection,
        prevSection,
        sectionIndex,
      })
    }
  }

  computeTalkData(talk, sections, talks, sectionIndex) {
    let computedSectionIndex = sectionIndex
    let computedTalks = talks
    let newSection = false

    let talkIndex = computedTalks.findIndex(
      (speaker) => speaker.talkTitle === talk.talkTitle,
    )

    if (talkIndex === -1) {
      newSection = sections.find((section) =>
        section.items.find((speaker) => speaker.talkTitle === talk.talkTitle),
      )
      talkIndex = newSection.items.findIndex(
        (speaker) => speaker.talkTitle === talk.talkTitle,
      )
      computedTalks = newSection.items
      computedSectionIndex = sections.findIndex(
        (sect) => sect.title === newSection.title,
      )
    }

    let prevTalkIndex = talkIndex - 1
    let nextTalkIndex = talkIndex + 1

    let prevTalk = computedTalks[prevTalkIndex]
    let nextTalk = computedTalks[nextTalkIndex]
    let nextSection = false
    let prevSection = false

    const isLastTalkInSection = talkIndex === computedTalks.length - 1
    const isFirstTalkInSection = talkIndex === 0

    const isNotLastSection = computedSectionIndex < sections.length - 1
    const isNotFirstSection = computedSectionIndex > 0

    if (!isFirstTalkInSection && isLastTalkInSection && isNotLastSection) {
      const thisSection = sections.findIndex((s) =>
        s.items.find((t) => t.talkTitle === talk.talkTitle),
      )
      const ns = sections[thisSection + 1]
      nextTalk = ns.items[0]
      nextSection = ns.items
      computedSectionIndex = thisSection
    }

    if (!isLastTalkInSection && isFirstTalkInSection && isNotFirstSection) {
      const thisSection = sections.findIndex((s) =>
        s.items.find((t) => t.talkTitle === talk.talkTitle),
      )

      const ps = sections[thisSection - 1]
      prevTalk = ps.items[ps.items.length - 1]
      prevSection = ps.items
      computedSectionIndex = thisSection
    }

    return {
      prevTalk,
      nextTalk,
      nextSection,
      prevSection,
      sectionIndex: computedSectionIndex,
      talks: computedTalks,
    }
  }

  renderSections(sections, props) {
    return sections.map((section, i) => (
      <div key={i} id={slugify(section.title)}>
        <h2 className="event__talk__header">{section.title}</h2>
        <SignatureTalks
          talks={section.items}
          allData={berlinData}
          openModal={(t, ss, talks, si) => this.openModal(t, ss, talks, si)}
          closeModal={() => this.closeModal()}
          sections={sections}
          sectionIndex={i}
          section={section}
          {...props}
        />
      </div>
    ))
  }
  render() {
    const { talk, nextTalk, prevTalk } = this.state
    const thisTalk = (speaker) => talk && speaker.talkTitle === talk.talkTitle
    const speakers = berlinData.filter(thisTalk)
    return (
      <div className="page--berlin-event" id="berlin-page">
        {this.state.modal && (
          <Modal onClose={() => this.closeModal()} closeButton>
            <div className="event__modal__talk">
              <h3 className="event__modal__talk__title">{talk.talkTitle}</h3>
              <div className="event__modal__talk__content">
                <div>
                  <div className="player-wrapper">
                    {talk.video && (
                      <YouTubePlayer
                        className="react-player"
                        preload
                        url={talk.video}
                        width="100%"
                        height="100%"
                      />
                    )}
                  </div>
                  <div className="event">
                    <div className="event__talk__speakers__container">
                      <div className="event__talk__speakers">
                        <Speakers speakers={speakers} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__navigation">
                    {prevTalk && (
                      <div
                        className="modal__navigation--button"
                        onClick={() => this.setNewTalk(prevTalk, 'prev')}
                      >
                        <h5>Previous</h5>
                        <h4>{prevTalk.talkTitle}</h4>
                      </div>
                    )}
                    {nextTalk && (
                      <div
                        className="modal__navigation--button"
                        onClick={() => this.setNewTalk(nextTalk, 'next')}
                      >
                        <h5>Up Next</h5>
                        <h4>{nextTalk.talkTitle}</h4>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
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
                <h1>
                  <Image
                    src="https://blockstack.imgix.net/799cc81f-381b-46a5-9a72-8f2a202cfe7f_blockstackberlin_logos_blackwithborder.png"
                    alt="Blockstack Berlin"
                  />
                </h1>
                <p>
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
                    {this.renderSections(mainEventSections, {
                      handleTalkInView: (t) => this.handleTalkInView(t),
                      activeTalk: this.state.talk,
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
                    {this.renderSections(learningSessionSections, {
                      handleTalkInView: (t) => this.handleTalkInView(t),
                      activeTalk: this.state.talk,
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
                <h2 className="text-center">Our Sponsors</h2>
                {berlinSponsorData.map(({ items }, i) => (
                  <div key={i} className="sponsors-section">
                    <div className="press-grid sponsors">
                      {items.map((item, index) => (
                        <div key={index} className="press-grid__item">
                          <Image
                            src={`${item.src}?w=200&auto=compress`}
                            alt="Blockstack Berlin Sponsor"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Berlin2018Page
