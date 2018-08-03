import React, { Fragment } from 'react'
import { slugify } from '../utils/functions'
import Speakers from './Speakers'
import Image from './Image'
import PlayIcon from 'mdi-react/PlayIcon'
import Waypoint from 'react-waypoint'

class SignatureTalks extends React.PureComponent {
  render() {
    const {
      talks,
      allData,
      handleTalkInView,
      sections,
      sectionIndex,
    } = this.props
    return talks.map((talk, i) => {
      const { talkTitle: title } = talk
      const thisTalk = (speaker) => speaker.talkTitle === title
      const speakers = allData.filter(thisTalk)
      const classes = 'event__talk'

      const imageSrc = talk.thumbnail
        ? talk.thumbnail + '?auto=format&w=800'
        : 'https://blockstack.imgix.net/7c53ed6a-c4eb-4d99-94fc-2e2ed9f62652_p3020241.jpg?blur=160.2&auto=format&w=800'

      return (
        <Fragment key={i}>
          <div className={classes} id={slugify(title)} key={i}>
            <div className="event__talk__content">
              <div
                className="event__talk__media"
                onClick={() =>
                  this.props.openModal(talk, sections, talks, sectionIndex)
                }
              >
                <div className="event__talk__media__wrapper">
                  <Image src={`${imageSrc}?auto=format&w=800`} alt={title} />
                  <div className="event__talk__media__overlay">
                    <PlayIcon />
                  </div>
                </div>
              </div>
              <div className="event__talk__details">
                <Waypoint
                  onEnter={({ currentPosition }) =>
                    currentPosition === 'inside' &&
                    handleTalkInView(slugify(title))
                  }
                  bottomOffset={'80%'}
                >
                  <h3>
                    <a href={`#${slugify(title)}`}>{title}</a>
                  </h3>
                </Waypoint>

                <div className="event__talk__speakers__container">
                  <div className="event__talk__speakers">
                    <Speakers speakers={speakers} />
                  </div>
                </div>
                <div className="p-t-20">
                  <a
                    onClick={() =>
                      this.props.openModal(talk, sections, talks, sectionIndex)
                    }
                    href={`#${slugify(title)}`}
                    className="btn btn-secondary btn-sm"
                  >
                    Watch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )
    })
  }
}

export default SignatureTalks
