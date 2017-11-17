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
    let dateAndTitle = part.substring(0, part.indexOf('\n\n'))
    let date = dateAndTitle.substring(0, dateAndTitle.indexOf(': '))
    let title = date.length > 0 ? dateAndTitle.substring(dateAndTitle.indexOf(': ') + 2)
    : part.substring(0, part.indexOf('\n\n'))
    let description = part.substring(part.indexOf('\n\n') + (date.length > 0 ? 2 : 0))
    let subParts = description.split('\n**')

    if (subParts.length > 1) {
      subParts = subParts.map((subPart, index) => {
        let subPartTitle = subPart.substring(0, subPart.indexOf(':**'))
        let subPartDescription = subPart.substring(subPart.indexOf(':**') + 3)
        return {title: subPartTitle, description: subPartDescription}
      })
    } else {
      subParts = [{title: '', description: subParts[0]}]
    }

    roadmapItems.push({
      date: date,
      title: title,
      description: description,
      parts: subParts
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

function buildPress(callback) {
  const pressFile = fs.readFileSync('app/docs/media/appearances.md', 'utf8')
  const pressFileMain = pressFile.split('\n**Appearances**\n')[1]
  const pressFileParts = pressFileMain.split('\n* ')
  
  let appearances = []

  pressFileParts.map((part) => {
    //console.log(part)
    let appearance = {}

    const split1 = part.split(' - **')
    appearance.date = split1[0]
    if (split1.length > 1) {
      const split2 = split1[1].split('** - [')
      appearance.publication = split2[0]
      if (split2.length > 1) {
        const split3 = split2[1].split('](')
        appearance.title = split3[0]
        if (split3.length > 1) {
          const split4 = split3[1].split(')')
          appearance.url = split4[0]
          appearances.push(appearance)
        }
      }   
    }

  })

  callback(null, appearances)
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
    press: buildPress,
  }, (err, results) => {
    const constants = Object.assign({}, results)
    fs.writeFile('app/constants.json', JSON.stringify(constants), (err) => {
      if (err) {
        throw err
      }
    })
  })
})