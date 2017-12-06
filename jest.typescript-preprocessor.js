// from https://github.com/facebook/jest/blob/master/examples/typescript/preprocessor.js

const tsc = require('typescript')

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      return tsc.transpile(src, null, path, [])
    }

    return src
  },
}
