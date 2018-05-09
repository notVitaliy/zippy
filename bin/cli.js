#!/usr/bin/env node

const zippy = require('../lib/zippy.js')

require('yargs')
  .command(
    'zippy [destination] [sources]',
    'Zip sources',
    (yargs) => {
      yargs
        .positional('destination', {
          describe: 'The output zip file.',
          default: './zippy.zip',
        })
        .positional('sources', {
          describe: 'The source file(s)/directory.',
          default: '.',
        })
    },
    (argv) => {
      zippy.zip(argv.destination, argv.sources).then(() => {
        console.log('Zippy done!')
      })
    }
  )
  .command(
    'unzippy [zipfile] [destination]',
    'Unzip file',
    (yargs) => {
      yargs
        .positional('zipfile', {
          describe: 'The source file(s)/directory.',
          default: './zippy.zip',
        })
        .positional('destination', {
          describe: 'The extraction output directory.',
          default: '.',
        })
    },
    (argv) => {
      zippy.unzip(argv.zipfile, argv.destination).then(() => {
        console.log('Zippy done!')
      })
    }
  ).argv

var archive = zip(dest, sources, function(err) {
  if (err) {
    console.error(err)
    return process.exit(1)
  }
  console.log('zipped!')
})
