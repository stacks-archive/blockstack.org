import React, { Fragment } from 'react'
import { slugify } from '../utils/functions'
import Speakers from './Speakers'
import Image from './Image'
import PlayIcon from 'mdi-react/PlayIcon'
import Waypoint from 'react-waypoint'
import Modal from './Modal'
import YouTubePlayer from 'react-player/lib/players/YouTube'

class SignatureTalks extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      talk: null,
    }
  }
  openModal(talk) {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        talk,
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
  render() {
    const { talks, allData, handleTalkInView } = this.props
    return talks.map((talk, i) => {
      const { day, talkTitle: title, time, span } = talk
      const speakers = allData.filter((speaker) => speaker.talkTitle === title)

      const classes = 'event__talk'

      return (
        <Fragment key={i}>
          {this.state.modal &&
            this.state.talk.talkTitle === title && (
              <Modal onClose={() => this.closeModal()}>
                <div className="event__modal__talk">
                  <h3 className="event__modal__talk__title">
                    {talk.talkTitle}
                  </h3>
                  <div className="event__modal__talk__content">
                    <div>
                      <div className="player-wrapper">
                        <YouTubePlayer
                          className="react-player"
                          preload
                          url="https://www.youtube.com/watch?v=7SmC7AuZNWY"
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="event">
                        <div className="event__talk__speakers__container">
                          <div className="event__talk__speakers">
                            <Speakers speakers={speakers} />
                          </div>
                        </div>
                      </div>
                      <div className="modal__navigation">
                        {i > 0 && (
                          <div className="modal__navigation--button">
                            <h5>Previous</h5>
                            <h4>{talks[i - 1].talkTitle}</h4>
                          </div>
                        )}
                        {i + 1 <= talks.length && (
                          <div className="modal__navigation--button">
                            <h5>Up Next</h5>
                            <h4>{talks[i + 1].talkTitle}</h4>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            )}
          <div className={classes} id={slugify(title)} key={i}>
            <div className="event__talk__content">
              <div
                className="event__talk__media"
                onClick={() => this.openModal(talk)}
              >
                <div className="event__talk__media__wrapper">
                  <Image
                    src="https://blockstack.imgix.net/7c53ed6a-c4eb-4d99-94fc-2e2ed9f62652_p3020241.jpg?auto=format&w=1400"
                    alt={title}
                  />
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
                    onClick={() => this.openModal(talk)}
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
