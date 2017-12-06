const extensions = [
  'ts',
  'tsx',
  'js',
  'jsx',
  'json',
]

module.exports = {
  testRegex: `/(__tests__|spec)/.*\\.(spec|test)\\.(${extensions.join('|')})$`,
  moduleFileExtensions: extensions,
  // See http://facebook.github.io/jest/docs/en/configuration.html#setuptestframeworkscriptfile-string
  setupTestFrameworkScriptFile: '<rootDir>/spec/helpers/setup.ts',
  // Maybe there needs to be a file that sets up the database here?
  // See http://facebook.github.io/jest/docs/en/configuration.html#setupfiles-array
  setupFiles: [],
  transform: {
    '\\.tsx?$': '<rootDir>/jest.typescript-preprocessor.js',
  },
}
