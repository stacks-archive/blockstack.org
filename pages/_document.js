import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {this.props.styleTags}
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css-flags/css/flag-icon.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/static/lazysizes.js" async defer />
          <script src="/static/ls.unveilhooks.min.js" async defer />
        </body>
      </html>
    )
  }
}
