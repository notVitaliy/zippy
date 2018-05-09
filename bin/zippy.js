#!/usr/bin/env node

const { zip } = require('../lib/zippy.js')

const yargs = require('yargs')

const {
  _: [destination, ...sources],
} = yargs.argv

zip(destination, sources).then(() => {
  console.log(`Zippy done zipping: ${sources.join(', ')}`)
})
