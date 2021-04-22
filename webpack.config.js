const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!html-loader!templates/index.html'
    })
  ],
  devtool: 'source-map',
  mode: "development",
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
