import App, { Container } from 'next/app'
import React from 'react'
import Header from '@components/header'
import Footer from '@components/footer'
import { MDXProvider } from '@mdx-js/tag'
import { Codeblock } from '@components/codeblock'
import NoTemplate from '@components/templates/none'
import DefaultPageTemplate from '@components/templates/default'
import Head from 'next/head'
import withReduxStore from '@common/withReduxStore'
import { Provider as ReduxProvider } from 'redux-bundler-react'
import { Type } from '@components/typography'
import '@scss/main.scss'

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
      pageProps && pageProps.meta
        ? `${pageProps.meta.title} -- Blockstack`
        : 'Blockstack'

    const withPageTemplate = renderTemplate(template)

    const PageComponent = withPageTemplate(Component, pageProps.meta)
    return (
      <ReduxProvider store={this.props.store}>
        <MDXProvider
          components={{
            h1: Type.h1,
            h2: Type.h2,
            h3: Type.h3,
            h4: Type.h4,
            h5: Type.h5,
            h6: Type.h6,
            p: Type.p,
            pre: Type.pre,
            ol: Type.ol,
            ul: Type.ul,
            li: Type.li,
            code: Codeblock
          }}
        >
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
        </MDXProvider>
      </ReduxProvider>
    )
  }
}

export default withReduxStore(MyApp)
