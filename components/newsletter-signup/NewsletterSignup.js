import React, { Component } from 'react'
import toQueryString from 'to-querystring'
import jsonp from 'jsonp'
import { ChevronRightIcon } from 'mdi-react'
import Input from '@components/input'
import { string, object } from 'yup'

const schema = object().shape({
  email: string()
    .email()
    .required()
})

import './NewsletterSignup.scss'

const subscribeURL =
  'https://blockstack.us14.list-manage.com/subscribe/post?u=394a2b5cfee9c4b0f7525b009&amp;id=0e5478ae86'

const InputMessage = ({ children }) => (
  <div
    style={{
      position: 'absolute',
      right: 0,
      top: 0,
      height: '100%',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'white',
      borderRadius: '60px',
      zIndex: 10,
      color: '#3700ff'
    }}
  >
    {children}
  </div>
)

class NewsletterSignup extends Component {
  state = {
    email: '',
    validEmail: true,
    success: false,
    submitting: false,
    error: null
  }
  validate = async (email) => {
    return schema.isValid({ email })
  }
  updateEmailAddress = async (event) => {
    const email = event.target.value
    this.setState({ email })
    console.log('validation', await this.validate(email))

    if (email.length > 4) {
      const validEmail = await this.validate(email)
      this.setState({
        validEmail
      })
    }
  }

  setError = (error) => {
    this.setState(
      {
        submitting: false,
        error
      },
      () =>
        setTimeout(
          () =>
            this.setState({
              error: null,
              email: ''
            }),
          1200
        )
    )
  }

  signup = () => {
    console.log('sign me up please')

    const data = { EMAIL: this.state.email }
    const url = subscribeURL.replace('/post?', '/post-json?')

    this.setState({
      submitting: true
    })
    const params = toQueryString(data)

    jsonp(url + '&' + params, { param: 'c' }, (err, res) => {
      console.log('res', res)
      if (err) {
        this.setError(err)
      } else if (res.result === 'error') {
        this.setError(res.msg)
      } else {
        this.setState({ success: true, submitting: false })
      }
    })
  }

  render() {
    const disabled =
      this.state.email.length < 4 ||
      !this.state.validEmail ||
      this.state.success

    const errorMessage = () => {
      if (this.state.error.includes('already')) {
        return 'Thanks for subscribing!'
      }
      if (this.state.error.includes('too many')) {
        return 'Too many attempts, try another.'
      }
      return 'Sorry, try another email.'
    }

    return (
      <div
        className={
          !this.state.validEmail && this.state.email !== ''
            ? 'newsletter-form invalid'
            : 'newsletter-form'
        }
      >
        <Input
          id={this.props.id}
          placeholder="Get email updates"
          className={this.props.inputClass}
          value={this.state.email}
          type="email"
          onChange={this.updateEmailAddress}
        />
        {this.state.error ? (
          <InputMessage>{errorMessage()}</InputMessage>
        ) : null}
        {this.state.success ? (
          <InputMessage>Thanks for subscribing!</InputMessage>
        ) : null}
        {this.state.submitting ? (
          <InputMessage>Processing...</InputMessage>
        ) : null}
        <div
          onClick={!this.state.success || !disabled ? this.signup : null}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            width: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: disabled ? 0 : 1,
            pointerEvents: disabled ? 'none' : null
          }}
        >
          <ChevronRightIcon color="currentColor !important" size={32} />
        </div>
      </div>
    )
  }
}

export default NewsletterSignup
