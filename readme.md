# zippy

This module provides a `zippy` command that calls the native `zip` and `unzip` commands.

## Global command line usage

    yarn global add zippy-js
    zippy destination.zip source/ [other sources...]

    ...

    unzippy source.zip destination/

## Command line usage within `package.json` scripts

package.json:

```javascript
{
  //...
  "scripts": {
    "build" "...",
    "zip": "zippy bundle.zip source/*",
    "unzip": "unzippy bundle.zip",
    "upload": "....",
    "deploy": "npm run build && npm run zip && npm run upload"
  }
}
```

## Programmatic usage from within Node.js

```javascript
const zippy = require('zippy')

zippy.zip('./destination.zip', ['source/', 'other_soure_file.js']).then(() => {
  console.log('all done!')
})
```
