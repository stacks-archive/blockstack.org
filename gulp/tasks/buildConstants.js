'use strict';

import gulp                      from 'gulp'
import fs                        from 'fs'
//import request                   from 'request'
import scrape                    from 'html-metadata'
import hasprop                   from 'hasprop'
import async                     from 'async'

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

function linesToObject(lines) {
  let object = {}

  lines.map((line) => {
    if (line.startsWith('- ')) {
      line = line.substring(line.indexOf('- ') + 2)
      let label = line.split(': ')[0]
      let value = line.split(': ')[1]
      object[label] = value
    }
  })

  return object
}

function buildRoadmap(callback) {
  const roadmapFile = fs.readFileSync('app/docs/roadmap.md', 'utf8')
    .replace('# Roadmap', '')

  const roadmapFileParts = roadmapFile.split('\n\n### ').slice(1)

  let roadmapItems = []

  roadmapFileParts.map((part) => {
    let description = part.substring(part.indexOf('\n\n') + 2)
    let dateAndTitle = part.substring(0, part.indexOf('\n\n'))
    let date = dateAndTitle.substring(0, dateAndTitle.indexOf(': '))
    let title = dateAndTitle.substring(dateAndTitle.indexOf(': ') + 2)

    roadmapItems.push({
      date: date,
      title: title,
      description: description
    })
  })

  callback(null, roadmapItems)
}

function buildTutorials(callback) {
  const tutorialsFile = fs.readFileSync('app/docs/tutorials/README.md', 'utf8')

  const tutorialsFileParts = tutorialsFile.split('\n\n### ').slice(1)

  let tutorials = []

  tutorialsFileParts.map((part) => {
    let tutorial = {}
    tutorial.title = part.substring(0, part.indexOf('\n\n'))
    let rest = part.substring(part.indexOf('\n\n') + 2)
    let lines = rest.split('\n')
    Object.assign(tutorial, linesToObject(lines))
    tutorials.push(tutorial)
  })

  callback(null, tutorials)
}

function buildPapers(callback) {
  const papersFile = fs.readFileSync('app/docs/papers/README.md', 'utf8')

  const papersFileParts = papersFile.split('\n\n### ').slice(1)

  let papers = []

  papersFileParts.map((part) => {
    let paper = {}
    paper.title = part.substring(0, part.indexOf('\n\n'))
    let rest = part.substring(part.indexOf('\n\n') + 2)
    let lines = rest.split('\n')
    Object.assign(paper, linesToObject(lines))
    papers.push(paper)
  })

  callback(null, papers)
}

function analyzeVideoPart(part, callback) {
  let video = {}
  video.title = part.substring(0, part.indexOf('\n\n'))
  let rest = part.substring(part.indexOf('\n\n') + 2)
  let lines = rest.split('\n')
  Object.assign(video, linesToObject(lines))

  if (!video.hasOwnProperty('urlSlug')) {
    video.urlSlug = slugify(video.event + ' ' + video.title)
  }

  if (video.hasOwnProperty('youtubeURL')) {
    scrape(video.youtubeURL).then((metadata) => {
      if (hasprop(metadata, ['openGraph', 'image', 'url']) &&
          hasprop(metadata, ['twitter', 'player', 'url'])) {
        video.image = metadata.openGraph.image.url
        video.youtubeURL = metadata.twitter.player.url
        callback(null, video)
      } else {
        callback(null, video)
      }
    })
  }
}

function buildVideos(callback) {
  const videosFile = fs.readFileSync('app/docs/videos/README.md', 'utf8')
  const videosFileParts = videosFile.split('\n\n### ').slice(1)
  async.map(videosFileParts, analyzeVideoPart, (err, results) => {
    callback(null, results)
  })
}

gulp.task('buildConstants', () => {
  async.parallel({
    milestones: buildRoadmap,
    papers: buildPapers,
    videos: buildVideos,
    tutorials: buildTutorials,
  }, (err, results) => {
    const constants = Object.assign({}, results)
    fs.writeFile('app/constants.json', JSON.stringify(constants), (err) => {
      if (err) {
        throw err
      }
    })
  })
})