const path = require('path')

const outputPath = (
  path
  .resolve(
    __dirname,
    'dist',
  )
)

module.exports = {
  entry: './src/entrypoint.js',
  externals: [
    'react',
  ],
  mode: 'development',
  output: {
    filename: 'index.js',
    library: {
      name: 'component-library',
      type: 'umd2',
    },
    path: outputPath,
  },
}
