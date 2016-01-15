
module.exports = {
  entry: './src/index.jsx',

  output: {
    path: './dist',
    filename: 'js/bundle.js',
    publicPath: 'dist'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
}