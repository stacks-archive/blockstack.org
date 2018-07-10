import React, { Component } from 'react'
import InlineSVG from 'svg-inline-react'
import toQueryString from 'to-querystring'
import jsonp from 'jsonp'

import Input from '@components/input'
import Button from '@components/button'

import Arrow from 'assets/images/outline-arrow.svg'

import './NewsletterSignup.scss'

class NewsletterSignup extends Component {
  state = {
    email: '',
    validEmail: true,
    success: false,
    error: null
  }

  updateEmailAddress = (event) => {
    const email = event.target.value
    this.setState({ email })

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email.length > 4) {
      this.setState({ validEmail: re.test(this.state.email) })
    }
  }

  signup = (event) => {

    const options = {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }

    const data = { EMAIL: this.state.email }

    // TODO : GET this from mail chimp
    const url = process.env.MAILCHIMP_URL.replace('/post?', '/post-json?')

    const params = toQueryString(data)

    jsonp(url + '&' + params, { param: 'c' }, (err, res) => {
      if (err || res.result !== 'success') {
        console.log(err)
        this.setState({ error: err })
      } else {
        this.setState({ success: true })
      }
    })
  }

  render() {
    return (
      <div
        className={
          !this.state.validEmail && this.state.email != ''
            ? 'newsletter-form invalid'
            : 'newsletter-form'
        }
      >
        <Input
          id={this.props.id}
          placeholder="Get email updates"
          className={this.props.inputClass}
          value={this.state.email}
          onChange={this.updateEmailAddress}
        />
        <Button
          onClick={this.signup}
          icon={Arrow()}
          className={'transparent circle ' + this.props.inputClass}
          htmlFor={this.props.id}
          disabled={
            this.state.email.length < 4 ||
            !this.state.validEmail ||
            this.state.success
              ? true
              : false
          }
        />
      </div>
    )
  }
}

export default NewsletterSignup
