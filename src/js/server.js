import React from 'react'
import { renderToNodeStream } from 'react-dom/server'

import express from 'express'

import Html from 'containers/Html'
import App from 'containers/App'

import path from 'path'

const PORT = process.env.PORT || 5000
const app = express()

console.log(__dirname)
console.log(path.resolve(__dirname))

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  console.log('got req')

  const stream = renderToNodeStream(
    <Html>
      <App />
    </Html>
  )
  const ieClass =
    '<!--[if lt IE 7]><html class="ie ielt9 ielt8 ielt7" lang="en"><![endif]--><!--[if IE 7]><html class="ie ielt9 ielt8 ie7" lang="en"><![endif]--><!--[if IE 8]><html class="ie ielt9 ie8" lang="en"><![endif]--><!--[if IE 9]><html class="ie ie9" lang="en"><![endif]--><!-- [if gt IE 9] <!--><html lang="en"><!-- <![endif]-->'

  res.set('content-type', 'text/html')
  res.write('<!DOCTYPE html>' + ieClass)
  stream.pipe(res)
})

let server = app.listen(PORT, function() {
  console.log('Listening on port %d', server.address().port)
})

console.log('we ehre??')
