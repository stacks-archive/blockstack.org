import Head from 'next/head'

const Meta = ({ title, description, ogImage, ...rest }) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content="..." />

      <link rel="shorticon icon" href={require('@assets/images/favicon.png')} />
      <link
        rel="apple-touch-icon-precomposed"
        href={require('@assets/images/touch-icon.png')}
      />
      <link rel="canonical" href="https://blockstack.org" />

      <meta property="og:image" content="..." />
      <meta property="og:site_name" content="Blockstack.org" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}
