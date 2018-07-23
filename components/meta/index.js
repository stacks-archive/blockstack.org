import Head from 'next/head'
import React from 'react'
const favicon = require('@assets/images/favicon.png')
const appleTouchIcon = require('@assets/images/touch-icon.png')
const ogImage = require('@assets/images/blockstack_og.png')
const url =
  typeof window !== 'undefined'
    ? window.location.href
    : 'https://blockstack.org'
const DEFAULT = {
  desc: `Blockstack is building an ecosystem that gives your users control over their fundamental digital rights: Identity, data-ownership, privacy, and security. Join us and help build the new internet.`,
  ogImage: ogImage.src
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

      <link rel="shorticon icon" href={favicon.src} />
      <link rel="apple-touch-icon-precomposed" href={appleTouchIcon.src} />
      <link rel="canonical" href={url} />

      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Blockstack.org" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}

export { Meta }
