const path = require('path');
const  webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => ({
  mode: 'development',
  entry: {
    index: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "[name].min.js",
    libraryTarget: "umd", // CMD 仅NODE，AMD仅浏览器，UMD同时支持
    // 　libraryTarget：为了支持多种使用场景，我们需要选择合适的打包格式。libraryTarget 属性。这是可以控制 library 如何以不同方式暴露的选项。
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [
          '/node_modules/',
          path.resolve(__dirname, 'src/test')
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          '/node_modules/',
          path.resolve(__dirname, 'src/test')
        ]
      }
    ]
  },
  plugins:[
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 1024,
    contentBase: './',
    hot: true
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.jsx', '.js' ],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@decorators': path.resolve(__dirname, './src/decorators/index.ts'),
      '@factories': path.resolve(__dirname, './src/factories/index.ts')
    }
  },
  devtool: 'eval-source-map'
});