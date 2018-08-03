import { composeBundlesRaw, debugBundle } from 'redux-bundler'

import blog from './blog'
import jobs from './jobs'
import ui from './ui'

export default composeBundlesRaw(blog, jobs, ui, debugBundle)
