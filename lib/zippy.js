const cp = require('child_process')
const fs = require('fs')
const path = require('path')

const zippyProc = (command, args) => {
  return new Promise((resolve, reject) => {
    const proc = cp.spawn(command, args)

    proc.addListener('close', () => resolve())
    proc.addListener('error', () => reject())
  })
}

const zippy = {
  zip(dest, sources) {
    const args = ['--quiet', '--recurse-paths', dest, ...sources]
    return zippyProc('zip', args)
  },
  unzip(file, dest) {
    const args = ['--quiet', file, dest]
    return zippyProc('unzip', args)
  },
}
