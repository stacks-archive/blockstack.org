import App, { Container } from 'next/app'
import React from 'react'
import Header from '@components/header'
import Footer from '@components/footer'
import NoTemplate from '@components/templates/none'
import DefaultPageTemplate from '@components/templates/default'
import Head from 'next/head'
import { Mdx } from '@components/mdx'
import withReduxStore from '@common/withReduxStore'
import { Provider as ReduxProvider } from 'redux-bundler-react'
import '@scss/main.scss'

import Router from "next/router";
import withGA from "next-ga";

const fetchOurData = async (ctx) => {
  if (!ctx.reduxStore.selectBlogPosts()) {
    await ctx.reduxStore.doFetchBlogData()
  }
  if (!ctx.reduxStore.selectJobs()) {
    await ctx.reduxStore.doFetchJobsData()
  }
}

const renderTemplate = (template) => {
  switch (template) {
    case 'NONE':
      return NoTemplate
    default:
      return DefaultPageTemplate
  }
}
class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    await fetchOurData(ctx)

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, store: ctx.reduxStore }
  }

  componentWillMount() {
    if (!this.props.store.selectIsDebug()) {
      this.props.store.doEnableDebug()
    }
  }

  render() {
    const { Component, pageProps } = this.props

    const template =
      pageProps && pageProps.meta ? pageProps.meta.template : null

    const title =
      pageProps && pageProps.meta && pageProps.meta.title !== 'Blockstack'
        ? `${pageProps.meta.title} — Blockstack`
        : 'Blockstack'

    const withPageTemplate = renderTemplate(template)

    const PageComponent = withPageTemplate(Component, pageProps.meta)
    return (
      <ReduxProvider store={this.props.store}>
        <Mdx>
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
        </Mdx>
      </ReduxProvider>
    )
  }
}

export default withGA("UA-74646510-1", Router)(withReduxStore(MyApp))
