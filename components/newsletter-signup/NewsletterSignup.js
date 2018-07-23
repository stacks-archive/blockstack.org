import React, { Component } from 'react'
import toQueryString from 'to-querystring'
import jsonp from 'jsonp'
import { ChevronRightIcon } from 'mdi-react'
import Input from '@components/input'

import './NewsletterSignup.scss'

const subscribeURL =
  'https://blockstack.us14.list-manage.com/subscribe/post?u=394a2b5cfee9c4b0f7525b009&amp;id=0e5478ae86'

class NewsletterSignup extends Component {
  state = {
    email: '',
    validEmail: true,
    success: false,
    submitting: false,
    error: null
  }

  updateEmailAddress = (event) => {
    const email = event.target.value
    this.setState({ email })

    const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email.length > 4) {
      this.setState({ validEmail: regEx.test(this.state.email) })
    }
  }

  signup = (event) => {
    console.log('sign me up please')

    const data = { EMAIL: this.state.email }
    const url = subscribeURL.replace('/post?', '/post-json?')

    this.setState({
      submitting: true
    })
    const params = toQueryString(data)

    jsonp(url + '&' + params, { param: 'c' }, (err, res) => {
      if (err || res.result !== 'success') {
        console.log('err', err)
        this.setState({ error: err, submitting: false })
      } else {
        console.log('res', res)
        this.setState({ success: true, submitting: false })
      }
    })
  }

  render() {
    const disabled =
      this.state.email.length < 4 ||
      !this.state.validEmail ||
      this.state.success
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
          onChange={this.updateEmailAddress}
        />
        {this.state.success ? (
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
            You've been added!
          </div>
        ) : null}
        <div
          onClick={!this.state.success || !disabled ? this.signup : null}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '60px',
            width: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: disabled ? 0.25 : 1,
            pointerEvents: disabled ? 'none' : null
          }}
        >
          <ChevronRightIcon color="#3700ff !important" size={32} />
        </div>
        {/*<Button*/}
        {/*onClick={ this.signup }*/}
        {/*icon={ () => <Arrow/> }*/}
        {/*className={ 'transparent circle ' + this.props.inputClass }*/}
        {/*htmlFor={ this.props.id }*/}
        {/*disabled={*/}

        {/*}*/}
        {/*/>*/}
      </div>
    )
  }
}

export default NewsletterSignup
