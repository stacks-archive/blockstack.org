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

gulp.task('buildConstants', () => {
  let constants = {}

  constants.milestones = buildRoadmap()

  fs.writeFile('app/constants.json', JSON.stringify(constants), (err) => {
    if (err) {
      throw err
    }
  })
})