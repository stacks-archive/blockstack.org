import App, { Container } from 'next/app'
import React from 'react'
import Header from '@components/header'
import Footer from '@components/footer'
import DefaultTemplate from '@common/templates/basic'
import NoTemplate from '@common/templates/none'
import SecondaryPageTemplate from '@common/templates/secondary'
import Head from 'next/head'
import { TunnelProvider } from 'react-tunnels'
import '@scss/main.scss'

const renderTemplate = (template) => {
  switch (template) {
    case 'secondary':
      return SecondaryPageTemplate
    case 'NONE':
      return NoTemplate
    default:
      return DefaultTemplate
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
