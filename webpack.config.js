const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    entry: './src/index.tsx',
    mode: 'development',
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    stats: 'minimal',
    devServer: {
      static: './dist',
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.(ts | tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader'
        },
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg)$/i,
          type: 'asset/resource'
        }
      ]
    }
  }
];
