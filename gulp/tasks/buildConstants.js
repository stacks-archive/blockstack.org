'use strict';

import gulp                      from 'gulp'
import fs                        from 'fs'

function buildRoadmap() {
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

  return roadmapItems
}

function buildPapers() {
  const papersFile = fs.readFileSync('app/docs/papers/README.md', 'utf8')

  const papersFileParts = papersFile.split('\n\n### ').slice(1)

  let papers = []

  papersFileParts.map((part) => {
    let paper = {}

    paper.title = part.substring(0, part.indexOf('\n\n'))
    let rest = part.substring(part.indexOf('\n\n') + 2)
    let lines = rest.split('\n')
    let authors, publication, url, date
    
    lines.map((line) => {
      if (line.startsWith('- ')) {
        line = line.substring(line.indexOf('- ') + 2)
        let label = line.split(': ')[0]
        let value = line.split(': ')[1]
        paper[label] = value
      }
    })

    papers.push(paper)
  })

  return papers
}

gulp.task('buildConstants', () => {
  let constants = {}

  constants.milestones = buildRoadmap()
  constants.papers = buildPapers()

  fs.writeFile('app/constants.json', JSON.stringify(constants), (err) => {
    if (err) {
      throw err
    }
  })
})