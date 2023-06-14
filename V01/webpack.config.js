const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: true,
    entry: {
    index: path.resolve(__dirname, './src/js/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|jpg)$/i, 
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]'
        }
      },

      {
        test: /\.csv$/, 
        use: 'file-loader'
        // type: 'asset/resource',
        // generator: {
        //   filename: 'assets/[name][ext][query]'
        // }
      },

    ],
  },
};