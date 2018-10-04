import React, { Component } from 'react'
import { ChevronRightIcon } from 'mdi-react'
import Input from '@components/input'
import styled from 'styled-components'
import Wrapper from './wrapper'

const StyledInputWrapper = styled.div`
  * {
    font-family: 'Plex', monospace !important;
  }
`
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

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
      background: '#3700ff',
      border: '1px solid #fff',
      borderRadius: '60px',
      zIndex: 10,
      color: 'white'
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
  validate = (email) => validateEmail(email)

  updateEmailAddress = async (event) => {
    const email = event.target.value
    this.setState({ email })

    if (email.length > 4) {
      const validEmail = this.validate(email)
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
          6500
        )
    )
  }

  success = () =>
    this.setState({
      success: true,
      submitting: false
    })

  render() {
    const disabled =
      this.state.email.length < 4 ||
      !this.state.validEmail ||
      this.state.success

    const errorMessage = (error) => {
      if (error && typeof error === 'string') {
        if (error.includes('already')) {
          return 'Thanks for subscribing!'
        }
        if (error.includes('too many')) {
          return 'Too many attempts, try another.'
        }
        return 'Sorry, try another email.'
      }
    }

    return (
      <StyledInputWrapper
        className={
          !this.state.validEmail && this.state.email !== ''
            ? 'newsletter-form invalid'
            : 'newsletter-form'
        }
      >
        <Wrapper email={this.state.email}>
          {({ error, loading: submitting, success, doSubscribe }) => (
            <form onSubmit={!disabled ? doSubscribe : () => false}>
              <Input
                id={this.props.id || 'newsletter_input'}
                placeholder="Get email updates"
                className={this.props.inputClass}
                value={this.state.email}
                type="email"
                onChange={this.updateEmailAddress}
              />
              {error ? (
                <InputMessage>{errorMessage(error)}</InputMessage>
              ) : null}
              {success ? (
                <InputMessage>Thanks for subscribing!</InputMessage>
              ) : null}
              {submitting ? <InputMessage>Processing...</InputMessage> : null}
              <div
                onClick={!success || !disabled ? doSubscribe : null}
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
            </form>
          )}
        </Wrapper>
      </StyledInputWrapper>
    )
  }
}

export default NewsletterSignup
