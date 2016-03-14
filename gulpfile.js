'use strict'

var fs = require('fs')
var gulp = require('gulp')
var svgSprite = require('gulp-svg-sprite')

var svgConfig = {
  log: 'verbose',
  shape: {
    id: {
      generator: 'icon-%s'
    }
  },
  mode: {
    symbol: {
      dest: '.',
      sprite: 'maneuvers',
      inline: true
    }
  }
}

gulp.task('default', function () {
  return gulp.src('assets/*.svg')
    .pipe(svgSprite(svgConfig))
    .pipe(gulp.dest('./dist'))
})
