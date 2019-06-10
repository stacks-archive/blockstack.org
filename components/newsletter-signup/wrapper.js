import React, { useState } from 'react'
import fetch from 'cross-fetch'
import PropTypes from 'prop-types'

const initialState = {
  loading: false,
  success: false,
  error: null,
  email: null
}

const useNewsletterState = () => {
  const [state, setState] = useState(initialState)

  const { loading, success, error, email } = state

  const doSetEmail = (e) => {
    setState((s) => ({ ...s, email: e }))
  }

  const doResetError = () => {
    setState((s) => ({
      ...s,
      error: null
    }))
  }

  const doSubscribe = async (e) => {
    e.preventDefault()
    if (email) {
      setState((s) => ({
        ...s,
        loading: true
      }))
    } else {
      return
    }

    try {
      const res = await fetch(
        'https://app-co-api.herokuapp.com/api/blockstack-subscribe',
        {
          method: 'POST',
          body: JSON.stringify({
            email
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await res.json()
      if (data.success) {
        setState((s) => ({
          ...s,
          success: true,
          loading: false
        }))
      } else {
        setState((s) => ({
          ...s,
          loading: false,
          error: data.error
        }))
      }
    } catch (error) {
      setState((s) => ({
        ...s,
        loading: false,
        error: error.message
      }))
    }
  }

  return { ...state, doSubscribe, doSetEmail, doResetError }
}

class NewsletterWrapper extends React.Component {
  static propTypes = {
    email: PropTypes.string.isRequired
  }
  state = {
    loading: false,
    success: false,
    error: null
  }

  doSubscribe = async (e) => {
    e.preventDefault()
    const { email } = this.props
    this.setState({
      loading: true
    })

    try {
      const res = await fetch(
        'https://app-co-api.herokuapp.com/api/blockstack-subscribe',
        {
          method: 'POST',
          body: JSON.stringify({
            email
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const data = await res.json()
      if (data.success) {
        this.setState({
          success: true,
          loading: false
        })
      } else {
        this.setState({
          loading: false,
          error: data.error
        })
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message
      })
    }
  }

  render() {
    const props = {
      loading: this.state.loading,
      error: this.state.error,
      success: this.state.success,
      doSubscribe: this.doSubscribe
    }
    return this.props.children(props)
  }
}
export { useNewsletterState }
export default NewsletterWrapper
