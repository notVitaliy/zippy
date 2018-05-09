# zippy

This module provides a `zippy` command that calls the native `zip` and `unzip` commands.

## Global command line usage

    yarn global add zippy-js
    zippy zip destination.zip source/ [other sources...]

    ...

    zippy unzip source.zip destination/

## Command line usage within `package.json` scripts

package.json:

```javascript
{
    //...
    "scripts": {
        "build" "...",
        "zip": "zippy zip bundle.zip source/*",
        "upload": "....",
        "deploy": "npm run build && npm run zip && npm run upload"
    }
}
```

## Pragmatic usage from within Node.js

```javascript
const zippy = require('zippy')

const files = []

zippy.zip('./destination.zip', ['source/', 'other_soure_file.js']).then(() => {
  console.log('all done!')
})
```
