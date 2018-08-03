import { Component } from 'react'

class MailchimpForm extends Component {
  static propTypes: {
    subscribeURL: PropTypes.string.isRequired,
    submitButtonText: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      email: '',
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.setState({
      email: event.target.value,
    })
  }

  render() {
    return (
      <div id="mc_embed_signup">
        <form
          action={this.props.subscribeURL}
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL" style={{ display: 'none' }}>
                Email Address{' '}
              </label>
              <input
                type="email"
                value={this.state.email}
                name="EMAIL"
                className="form-control m-b-15"
                id="mce-EMAIL"
                placeholder="Email address"
                onChange={this.onChange}
              />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              />
            </div>
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_394a2b5cfee9c4b0f7525b009_0e5478ae86"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value={this.props.submitButtonText}
                name="subscribe"
                id="mc-embedded-subscribe"
                className="btn btn-primary btn-block"
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default MailchimpForm
