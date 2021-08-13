const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/main.ts',
  
  target: 'node',

  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
