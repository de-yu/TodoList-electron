var webpack = require('webpack');
var path = require('path');

var DIST_DIR = path.resolve(__dirname, 'application-webpack');
var SRC_DIR = path.resolve(__dirname, "application");

// 調整 entry 和 output path 分別打包
var config = {
  mode:"none",
    entry: ["@babel/polyfill" ,SRC_DIR + "/view/index.js"],
    output: {
        path: DIST_DIR + "/",
        filename: "bundle.js",
        publicPath: "/js/"
    },
    devServer: {
        contentBase: DIST_DIR,
        port: 7000,
    },
    module: {
        rules: [
            {
                test: /\.js?/, exclude: /node_modules/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                     "presets": ["@babel/preset-env", "@babel/preset-react"] , "plugins": [
                            ["@babel/plugin-transform-spread", {
                              "loose": true
                            }]
                          ],   "compact": false
                }
            }
        ]
    }, 
      plugins: [
   new webpack.LoaderOptionsPlugin({
     debug: true
   })
  ]
}

module.exports = config;