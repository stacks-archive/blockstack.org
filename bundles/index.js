import { composeBundles, createUrlBundle } from 'redux-bundler'

import blog from './blog'
import jobs from './jobs'
import ui from './ui'
import url from './url'

export default composeBundles(blog, jobs, ui, url)
