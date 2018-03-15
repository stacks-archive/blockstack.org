import React from 'react'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modal-root');

export default class Modal extends React.Component {
  listenKeyboard(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.onClose()
    }
  }

  componentDidMount() {
    if (this.props.onClose) {
      window.addEventListener('keydown', this.listenKeyboard.bind(this), true)
    }
  }

  componentWillUnmount() {
    if (this.props.onClose) {
      window.removeEventListener('keydown', this.listenKeyboard.bind(this), true)
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
      <div>
        <div className="modal-overlay-div" />
        <div className="modal-content-div" onClick={this.onOverlayClick.bind(this)}>
          <div className="modal-dialog-div" onClick={this.onDialogClick}>
            {this.props.children}
          </div>
        </div>
      </div>
    )

    return ReactDOM.createPortal(modalShell, modalRoot)
  }
}
