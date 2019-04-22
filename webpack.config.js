const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const devMode = process.env.NODE_ENV !== 'production'

const config = {
  mode: devMode ? 'development' : 'production',
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './assets/js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/media/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/fonts/'
            }
          }
        ]
      },
      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   use: ['style-loader', 'css-loader']
      // }
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: process.env.NODE_ENV === 'development'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: devMode
        ? './assets/css/[name].css'
        : './assets/css/[name].[hash].css',
      chunkFilename: devMode
        ? './assets/css/[id].css'
        : './assets/css/[id].[hash].css'
    })
  ],
  devServer: {
    index: 'index.html',
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
    stats: 'normal',
    open: 'chrome',
    writeToDisk: true
  },
  devtool: 'source-map'
}

module.exports = config
