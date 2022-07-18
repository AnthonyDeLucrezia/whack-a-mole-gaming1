const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode:  'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/',
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
        },
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
            },
            use: 'ts-loader',
        },
        { 
            test: /\.scss$/, 
            use: [ "style-loader", "css-loader", "sass-loader" ] 
        },
        {
            test: /\.css$/,
            use: ['css-loader'],
        },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
}, 
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new CleanWebpackPlugin()
  ],
  
  devServer: {
    static:__dirname + '/dist/',
    port: 3001,
    hot: 'only',
    compress: true,
    open: true,
},
};