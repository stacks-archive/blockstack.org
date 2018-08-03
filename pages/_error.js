import React from 'react'
import Link from 'next/link'
export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return {
      statusCode,
      meta: {
        title: 'Not Found'
      }
    }
  }

  render() {
    return (
      <div
        style={{
          minHeight: '300px',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <p>
          Sorry, looks like this page doesn't exist or we ran into an error!{' '}
        </p>
        <p>
          <Link href="/" prefetch>
            <a href="/">Head back home.</a>
          </Link>
        </p>
      </div>
    )
  }
}
