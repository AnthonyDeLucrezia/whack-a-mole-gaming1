const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode:  'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/',
  },
  module: {
    rules: [
        // {
        //   test: /\.(ts|tsx)$/,
        //   enforce: 'pre',
        //   use: [
        //     {
        //       options: {
        //         eslintPath: require.resolve('eslint'),
      
        //       },
        //       loader: require.resolve('eslint-loader'),
        //     },
        //   ],
        //   exclude: /node_modules/,
        // },
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
              use: [{
                loader: "style-loader"
              }, {
                loader: "css-loader" 
              }, {
                loader: "sass-loader"
              }]
          },
          {
            test: /\.(jpg|png|svg)$/,
            loader: 'file-loader',
          },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
}, 
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'API_URL': JSON.stringify('http://localhost:8080/api')
      }
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  
  devServer: {
    static:__dirname + '/dist/',
    port: 3001,
    hot: 'only',
    compress: true,
    open: true,
},
};