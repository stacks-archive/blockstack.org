const routes = async () => {
  // combine the map of post pages with our static pages
  return {
    '/': { page: '/' },
    '/about': { page: '/about' },
    '/technology': { page: '/technology' },
    '/try-blockstack': { page: '/try-blockstack' },
    '/404': { page: '/_error' },
    '/pbc': { page: '/about' },
    // '/blog': { page: '/blog' },
    // '/faq': { page: '/faq' }, // redirect to docs.blockstack.org
    '/careers': { page: '/careers' },
    // '/funding': { page: '/funding' },// redirect to signature.vc
    '/install': { page: '/install' },
    '/papers': { page: '/papers' },
    '/press': { page: '/press' },
    '/videos': { page: '/videos' },
    '/roadmap': { page: '/roadmap' },
    '/what-is-blockstack': { page: '/try-blockstack' },
    '/legal/disclaimers': { page: '/legal/disclaimers' },
    '/legal/privacy-policy': { page: '/legal/privacy-policy' },
    '/legal/terms-of-use': { page: '/legal/terms-of-use' }
  }
}

module.exports = routes
