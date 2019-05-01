const routes = async () => {
  // combine the map of post pages with our static pages
  return {
    '/': { page: '/' },
    '/about': { page: '/about' },
    '/technology': { page: '/technology' },
    // '/404': { page: '/_error' },
    // '/about': { page: '/about' },
    // '/pbc': { page: '/pbc' },
    // '/blog': { page: '/blog' },
    // '/faq': { page: '/faq' },
    // '/careers': { page: '/careers' },
    // '/funding': { page: '/funding' },
    // '/install': { page: '/install' },
    // '/papers': { page: '/papers' },
    // '/press': { page: '/press' },
    // '/videos': { page: '/videos' },
    // '/roadmap': { page: '/roadmap' },
    // '/what-is-blockstack': { page: '/what-is-blockstack' },
    // '/legal/disclaimers': { page: '/legal/disclaimers' },
    // '/legal/privacy-policy': { page: '/legal/privacy-policy' },
    // '/legal/terms-of-use': { page: '/legal/terms-of-use' }
  }
}

module.exports = routes
