import App, { Container } from 'next/app'
import React from 'react'
import Header from '@components/header'
import Footer from '@components/footer'

import NoTemplate from '@components/templates/none'
import DefaultPageTemplate from '@components/templates/default'
import Head from 'next/head'
import '@scss/main.scss'

const renderTemplate = (template) => {
  switch (template) {
    case 'NONE':
      return NoTemplate
    default:
      return DefaultPageTemplate
  }
}
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    const template =
      pageProps && pageProps.meta ? pageProps.meta.template : null

    const title =
      pageProps && pageProps.meta
        ? `${pageProps.meta.title} -- Blockstack`
        : 'Blockstack'

    const withPageTemplate = renderTemplate(template)

    const PageComponent = withPageTemplate(Component, pageProps.meta)
    return (
      <Container>
        <Head>
          <title>{title}</title>
          <meta name="theme-color" content="#3700ff" />
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
        </Head>

        <div className="landing-page">
          <Header />
          <PageComponent {...pageProps} />
          <Footer />
        </div>
      </Container>
    )
  }
}
