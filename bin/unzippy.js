#!/usr/bin/env node

const { unzip } = require('../lib/zippy.js')

const yargs = require('yargs')

const {
  _: [source],
} = yargs.argv

unzip(source).then(() => {
  console.log(`Zippy done extracting: ${source}`)
})
