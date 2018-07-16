import Head from 'next/head'
import React from 'react'

const DEFAULT = {
  desc: `Blockstack is building an ecosystem that gives your users control over their fundamental digital rights: Identity, data-ownership, privacy, and security. Join us and help build the new internet.`,
  ogImage: null
}

const Meta = ({
  title,
  description = DEFAULT.desc,
  ogImage = DEFAULT.ogImage,
  ...rest
}) => {
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

      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Blockstack.org" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}

export { Meta }
