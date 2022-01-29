const path = require('path');
module.exports = (env, argv) => {
  return {
    entry: {
      'dist/main': './src/main.tsx'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname),
      publicPath: argv.mode === 'production' ? '/apprun-todo/' : '/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        { test: /\.js$/, use: ["source-map-loader"], enforce: "pre" }
      ]
    },
    devServer: {
      open: true,
      static: path.join(__dirname)
    },
    devtool: 'source-map'
  }
}