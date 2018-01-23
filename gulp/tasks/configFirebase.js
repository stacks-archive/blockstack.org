'use strict';

import fs                        from 'fs'
import gulp                      from 'gulp'
import {parseString as parseXML} from 'xml2js'
import request from 'sync-request'

import {getPostFromRSS}          from '../../app/js/utils/rssUtils'

gulp.task('configFirebase', () => {
  let firebaseJson = JSON.parse(fs.readFileSync('firebase.json'))

  /*
  * Configure Rewrites
  */
  let rewrites = []

  // create rewrites for docs
  const docFolderNames = ['posts', 'tutorials']
  docFolderNames.forEach((folderName) => {
    fs.readdirSync('app/docs/' + folderName + '/').forEach((docFilename) => {
      const key = docFilename.split('.')[0].toLowerCase()

      rewrites.push({
        'source': `/${folderName}/${key}`,
        'destination': `/docs-${folderName}-${key}.html`
      })
    })
  })

  // Create rewrites for blog
  const rssURL = 'https://blockstack-site-api.herokuapp.com/v1/blog-rss'
  const requestBody = request('GET', rssURL).body
  parseXML(requestBody, (err, blogRSSData) => {
    const firstChannel = blogRSSData.rss.channel[0]
    firstChannel.item.map((rssPost) => {
      const post = getPostFromRSS(rssPost)
      rewrites.push({
        'source': `/blog/${post.urlSlug}`,
        'destination': `/blog-${post.urlSlug}.html`
      })
    })
  })

  // Push the main index.html rewrite
  rewrites.push({
    'source': '**',
    'destination': '/index.html'
  })

  firebaseJson.hosting.rewrites = rewrites

  /*
  * Configure Redirects
  */
  const redirectRules = [
    {
      'source': '/token',
      'destination': 'https://blockstack.com'
    },
    {
      'source': '/token/',
      'destination': 'https://blockstack.com'
    },
    {
      'source': '/summit2017/',
      'destination': '/summit2017'
    },
    {
      'source': '/funding/',
      'destination': '/funding'
    },
    {
      'source': '/fund',
      'destination': '/funding'
    },
    {
      'source': '/docs/blockchain-identity',
      'destination': '/posts/blockchain-identity',
    },
    {
      'source': '/docs/blockchain-id',
      'destination': '/posts/blockchain-identity',
    },
    {
      'source': '/docs/what-is-blockstack',
      'destination': '/posts/blockstack-core',
    },
    {
      'source': '/docs/how-blockstack-works',
      'destination': '/whitepaper.pdf'
    },
    {
      'source': '/blockstack_whitepaper.pdf',
      'destination': '/whitepaper.pdf'
    },
    {
      'source': '/tokenpaper.pdf',
      'destination': 'https://blockstack.com/tokenpaper.pdf'
    },
    {
      'source': '/articles',
      'destination': '/blog'
    },
    {
      'source': '/posts',
      'destination': '/blog'
    },
    {
      'source': '/talks',
      'destination': '/videos'
    },
    {
      'source': '/browser',
      'destination': '/download'
    },
    {
      'source': '/articles/blockstack-core',
      'destination': '/papers'
    },
    {
      'source': '/articles/browser-beta',
      'destination': '/download'
    },
    {
      'source': '/articles/faq',
      'destination': '/faq'
    },
    {
      'source': '/faqs',
      'destination': '/faq'
    },
    {
      'source': '/articles/light-clients',
      'destination': '/papers'
    },
    {
      'source': '/articles/login-paper',
      'destination': '/papers'
    },
    {
      'source': '/docs/login-paper',
      'destination': '/papers'
    },
    {
      'source': '/docs/installation',
      'destination': '/tutorials'
    },
    {
      'source': '/tutorials/hello-world',
      'destination': '/tutorials/hello-blockstack',
    },
    {
      'source': '/tutorials/todo-spa',
      'destination': '/tutorials/todo-spa',
    },
    {
      'source': '/docs/cli-basic-usage',
      'destination': '/tutorials/cli-basics'
    },
    {
      'source': '/docs/cli-extended-usage',
      'destination': '/tutorials/cli-basics'
    },
    {
      'source': '/blockstack.pdf',
      'destination': '/blockstack_usenix16.pdf'
    },
    {
      'source': '/blockstack-login.pdf',
      'destination': '/blockstack_login16.pdf'
    },
    {
      'source': '/virtualchain.pdf',
      'destination': '/virtualchain_dccl16.pdf'
    },
    {
      'source': '/join',
      'destination': '/signup'
    },
    {
      'source': '/newsletter',
      'destination': '/signup'
    },
    {
      'source': '/users',
      'destination': '/signup'
    },
    {
      'source': '/summit',
      'destination': 'https://www.eventbrite.com/e/blockstack-summit-2017-tickets-35385366584'
    },
    {
      'source': '/tokensale',
      'destination': 'https://blockstack.com'
    },
    {
      'source': '/blog/the-scaling-announcement-bitcoin-core-should-have-made-146790f755df',
      'destination': 'https://medium.com/@ryanshea/the-scaling-announcement-bitcoin-core-should-have-made-146790f755df'
    },
    {
      'source': '/blog/forking-a-network-86d1b766d38d',
      'destination': 'https://medium.com/@muneeb/forking-a-network-86d1b766d38d'
    },
    {
      source: '/blog/blockchains-for-distributed-systems-ffd68e6341b5',
      destination: 'https://medium.com/@judecnelson/blockchains-for-distributed-systems-ffd68e6341b5'
    },
    {
      source: '/blog/blockchains-are-not-magic-4fa6dd412ab',
      destination: 'https://medium.com/@muneeb/blockchains-are-not-magic-4fa6dd412ab'
    },
    {
      source: '/blog/snapstorm-what-is-identity-ad34e681b62f',
      destination: 'https://medium.com/@ryanshea/snapstorm-what-is-identity-ad34e681b62f'
    },
    {
      source: '/blog/toasters-are-breaking-the-internet-c1d153c33f78',
      destination: 'https://medium.com/@muneeb/toasters-are-breaking-the-internet-c1d153c33f78'
    },
    {
      source: '/blog/spreading-the-gospel-of-decentralization-6a3404ebd869',
      destination: 'https://medium.com/@ryanshea/spreading-the-gospel-of-decentralization-6a3404ebd869'
    },
    {
      source: '/blog/trust-machine-global-and-federated-8b9dc6dab7ec',
      destination: 'https://medium.com/@muneeb/trust-machine-global-and-federated-8b9dc6dab7ec'
    },
    {
      source: '/blog/the-blockchain-as-a-journal-dc1715ffa8a1',
      destination: 'https://medium.com/@ryanshea/the-blockchain-as-a-journal-dc1715ffa8a1'
    },
    {
      source: '/blog/blockstack-labs-partners-with-microsoft-3ffccebf3f4f',
      destination: 'https://medium.com/@blockstackinc/blockstack-labs-partners-with-microsoft-3ffccebf3f4f'
    },
    {
      source: '/blog/video-blockstack-ipfs-berlin-meetup-a05770180d9e',
      destination: 'https://medium.com/@ryanshea/video-blockstack-ipfs-berlin-meetup-a05770180d9e'
    },
    {
      source: '/blog/blockstack-meetups-come-to-asia-1df29454eb2c',
      destination: 'https://medium.com/@larrysalibra/blockstack-meetups-come-to-asia-1df29454eb2c'
    },
    {
      source: '/blog/snapstorm-decentralized-apps-and-decentralization-4084e8e432bf',
      destination: 'https://medium.com/@ryanshea/snapstorm-decentralized-apps-and-decentralization-4084e8e432bf'
    },
    {
      source: '/blog/blockstack-core-v0-14-0-release-aad748f46d',
      destination: '/blog/blockstack-core-v0-14-release'
    },
    {
      source: '/blog/blockstack-at-the-decentralized-web-summit-8d45e3ea4b82',
      destination: 'https://medium.com/@guylepage3/blockstack-at-the-decentralized-web-summit-8d45e3ea4b82'
    },
    {
      source: '/blog/blockstack-summit-2015-review-part-1-b710ada61c70',
      destination: 'https://medium.com/@lightcoin/blockstack-summit-2015-review-part-1-b710ada61c70'
    },
    {
      source: '/blog/blockstack-summit-2015-review-part-2-38e73f19e4a5',
      destination: 'https://medium.com/@lightcoin/blockstack-summit-2015-review-part-2-38e73f19e4a5'
    },
    {
      source: '/blog/peeling-the-layers-of-blockchain-forks-d06b52340a3c',
      destination: 'https://medium.com/@muneeb/peeling-the-layers-of-blockchain-forks-d06b52340a3c'
    },
    {
      source: '/blog/the-comprehensive-speaker-guide-to-consensus-2016-ba356dab8886',
      destination: 'https://medium.com/@ryanshea/the-comprehensive-speaker-guide-to-consensus-2016-ba356dab8886'
    },
    {
      source: '/blog/next-steps-towards-a-secure-internet-a057217acebb',
      destination: 'https://medium.com/@muneeb/next-steps-towards-a-secure-internet-a057217acebb'
    },
    {
      source: '/blog/this-months-top-blockstack-tweets-september-a829118dafa7',
      destination: 'https://medium.com/@ryanshea/this-months-top-blockstack-tweets-september-a829118dafa7'
    },
    {
      source: '/blog/blockstack-research-paper-published-at-usenix-atc16-conference-34bad5bd0221',
      destination: '/blog/blockstack-research-paper-published-at-usenix-atc16-conference'
    },
    {
      source: '/blog/it-s-not-about-privacy-phone-protection-21b0d4f400d5',
      destination: 'https://medium.com/@ryanshea/it-s-not-about-privacy-phone-protection-21b0d4f400d5'
    },
    {
      source: '/blog/the-scaling-announcement-bitcoin-core-should-have-made-146790f755df',
      destination: 'https://medium.com/@ryanshea/the-scaling-announcement-bitcoin-core-should-have-made-146790f755df'
    },
    {
      source: '/blog/what-s-at-stake-in-the-bitcoin-block-size-debate-70197e8bc983',
      destination: 'https://medium.com/@lightcoin/what-s-at-stake-in-the-bitcoin-block-size-debate-70197e8bc983'
    },
    {
      source: '/blog/things-i-think-i-know-about-blockchains-public-and-private-828467f43707',
      destination: 'https://medium.com/@ryanshea/things-i-think-i-know-about-blockchains-public-and-private-828467f43707'
    },
    {
      source: '/blog/solar-storm-a-serious-security-exploit-with-ethereum-not-just-the-dao-a03d797d98fa',
      destination: 'https://medium.com/@muneeb/solar-storm-a-serious-security-exploit-with-ethereum-not-just-the-dao-a03d797d98fa'
    },
    {
      source: '/blog/simple-contracts-are-better-contracts-what-we-can-learn-from-the-dao-6293214bad3a',
      destination: 'https://medium.com/@ryanshea/simple-contracts-are-better-contracts-what-we-can-learn-from-the-dao-6293214bad3a'
    },
    {
      source: '/blog/strange-democracy-fd00b1bc1f8',
      destination: 'https://medium.com/@cryptowanderer/strange-democracy-fd00b1bc1f8'
    },
    {
      source: '/blog/the-road-ahead-for-ethereum-b5b090bcd1a',
      destination: 'https://medium.com/@muneeb/the-road-ahead-for-ethereum-b5b090bcd1a'
    },
    {
      source: '/blog/gaming-the-dao-prof-emin-g%C3%BCn-sirers-cornell-talk-d0b78099d0d5',
      destination: 'https://medium.com/@guylepage3/gaming-the-dao-prof-emin-g%C3%BCn-sirers-cornell-talk-d0b78099d0d5'
    }
  ]

  let redirects = []

  redirectRules.forEach((rule) => {
    redirects.push({
      'source': rule.source,
      'destination': rule.destination,
      'type': 301
    })
  })

  firebaseJson.hosting.redirects = redirects

  fs.writeFileSync('firebase.json', JSON.stringify(firebaseJson, null, 2))

  const netlifyRedirectFilename = 'build/_redirects'
  fs.writeFileSync(netlifyRedirectFilename, '# Netlify redirects & rewrites \n')


  firebaseJson.hosting.redirects.forEach(redirect => {
    const line = `${redirect.source} ${redirect.destination} ${redirect.type} \n`
    fs.appendFileSync(netlifyRedirectFilename, line)
  })

  firebaseJson.hosting.rewrites.forEach(rewrite => {
    if (rewrite.source === '**') {
      const line = `/*    /index.html   200 \n`
      fs.appendFileSync(netlifyRedirectFilename, line)
    } else {
      const line = `${rewrite.source} ${rewrite.destination} 200 \n`
      fs.appendFileSync(netlifyRedirectFilename, line)
    }
  })
});
