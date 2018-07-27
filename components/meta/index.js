import Head from 'next/head'
import React from 'react'
import { addPath } from '@components/image'

const favicon = require('@assets/images/favicon.png')
const appleTouchIcon = require('@assets/images/touch-icon.png')
const ogImage = require('@assets/images/blockstack_og.png')
const DEFAULT = {
  desc: `Blockstack is building an ecosystem that gives your users control over their fundamental digital rights: Identity, data-ownership, privacy, and security. Join us and help build the new internet.`,
  ogImage: addPath(ogImage.src)
}

const url = 'https://blockstack.org/'

const Meta = ({
  title,
  description = DEFAULT.desc,
  ogImage = DEFAULT.ogImage,
  ...rest
}) => {
  let metaOgImage = url + ogImage
  if (ogImage && ogImage.indexOf && (ogImage.indexOf('https://') >= 0)) {
    metaOgImage = ogImage
  }
  return (
    <Head>
      <meta name="description" content={description} />
      <link
        rel="shorticon icon"
        href={addPath(favicon.src)}
        type="image/x-icon"
      />
      <link rel="icon" href={addPath(favicon.src)} type="image/x-icon" />
      <link
        rel="apple-touch-icon-precomposed"
        href={addPath(appleTouchIcon.src)}
      />
      <link rel="canonical" href={url} />

      <meta property="og:image" content={metaOgImage} />
      <meta property="og:site_name" content="Blockstack.org" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}

export { Meta }
