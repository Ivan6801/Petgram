/* eslint-disable prefer-regex-literals */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  stats: { children: true },
  entry: {
    // Punto de entrada
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    // Punto de salida
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' })
  ],
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env'],
            [
              '@babel/preset-react',
              {
                runtime: 'automatic'
              }
            ]
          ],
          plugins: ['@emotion']
        }
      }
    ]
  }
}
