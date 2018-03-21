import React from 'react'
import ReactDOM from 'react-dom'
import CloseIcon from 'mdi-react/CloseIcon'

const modalRoot = document.getElementById('modal-root')

export default class Modal extends React.Component {
  listenKeyboard(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.onClose()
    }
  }

  componentDidMount() {
    if (!document.body.classList.contains('no-scroll')) {
      document.body.classList.add('no-scroll')
    }
    if (this.props.onClose) {
      window.addEventListener('keydown', this.listenKeyboard.bind(this), true)
    }
  }

  componentWillUnmount() {
    if (document.body.classList.contains('no-scroll')) {
      document.body.classList.remove('no-scroll')
    }
    if (this.props.onClose) {
      window.removeEventListener(
        'keydown',
        this.listenKeyboard.bind(this),
        true,
      )
    }
  }

  onOverlayClick() {
    this.props.onClose()
  }

  onDialogClick(event) {
    event.stopPropagation()
  }

  render() {
    const modalShell = (
      <div className="bs-modal">
        {this.props.closeButton && (
          <div
            className="bs-modal__close"
            onClick={this.onOverlayClick.bind(this)}
          >
            <CloseIcon />
          </div>
        )}
        <div className="bs-modal__content">
          <div className="bs-modal__dialog">{this.props.children}</div>
        </div>
        <div className="bs-modal__overlay" />
      </div>
    )

    return ReactDOM.createPortal(modalShell, modalRoot)
  }
}
