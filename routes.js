const { fetchBlogPosts } = require('./common/lib')
const routes = async () => {
  const { posts } = await fetchBlogPosts()

  // transform the list of posts into a map of pages with the pathname `/blog/:slug`
  const blogPosts = posts.reduce(
    (pages, post) =>
      Object.assign({}, pages, {
        [`/blog/${post.urlSlug}`]: {
          page: '/blog/single',
          query: { slug: post.urlSlug }
        }
      }),
    {}
  )

  // combine the map of post pages with our static pages
  return Object.assign({}, blogPosts, {
    '/': { page: '/' },
    '/404': { page: '/_error' },
    '/about': { page: '/about' },
    '/blog': { page: '/blog' },
    '/faq': { page: '/faq' },
    '/careers': { page: '/careers' },
    '/funding': { page: '/funding' },
    '/install': { page: '/install' },
    '/papers': { page: '/papers' },
    '/press': { page: '/press' },
    '/videos': { page: '/videos' },
    '/roadmap': { page: '/roadmap' },
    '/what-is-blockstack': { page: '/what-is-blockstack' },
    '/legal/disclaimers': { page: '/legal/disclaimers' },
    '/legal/privacy-policy': { page: '/legal/privacy-policy' },
    '/legal/terms-of-use': { page: '/legal/terms-of-use' },
    '/tutorials': { page: '/tutorials' },
    '/tutorials/hello-blockstack': { page: '/tutorials/hello-blockstack' },
    '/tutorials/managing-data-with-gaia': {
      page: '/tutorials/managing-data-with-gaia'
    },
    '/tutorials/multi-player-storage': {
      page: '/tutorials/multi-player-storage'
    },
    '/tutorials/todo-list': { page: '/tutorials/todo-list' }
  })
}

module.exports = routes
