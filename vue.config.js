// const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
// const env = process.env.NODE_ENV;
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const CopyPlugin = require('copy-webpack-plugin');
// const path = require('path');
// const remoteurl = process.env.VUE_APP_baseurl;
// const rewritePath = process.env.VUE_APP_rewritePath;
// const rewritePath2 = process.env.VUE_APP_rewritePath2;
const options = {
  // baseUrl: "./",
  // outputDir: "dist",
  //postcss 配置
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // autoprefixer({
          //   browsers: ["Android >= 4.0", "iOS >= 7"]
          // }),
          pxtorem({
            rootValue: 37.5,
            propList: ["*"]
          })
        ]
      }
    }
  },
  // configureWebpack: config => {
  //   let plugins = [
  //     new UglifyJsPlugin({
  //       uglifyOptions: {
  //         compress: {
  //           // warnings: false,
  //           drop_console: true,
  //           drop_debugger: true
  //         },
  //         output: {
  //           // 去掉注释内容
  //           comments: false
  //         }
  //       },
  //       sourceMap: true,
  //       parallel: 2
  //     }),
  //     new CopyPlugin([{
  //       from: path.join(__dirname, 'static/MP_verify_zZrimJA4pg7kgfnw.txt'),
  //       to: path.join(__dirname, 'dist')
  //     }]),
  //   ];
  //   if (
  //     process.env.NODE_ENV == "production"
  //   ) {
  //     config.plugins = [...config.plugins, ...plugins];
  //   }
  // },
  // devServer: {
  //   proxy: {
  //     "/gateway": {
  //       target: remoteurl,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/gateway": rewritePath
  //       }
  //     },
  //     "/outer": {
  //       target: remoteurl,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/outer": rewritePath2
  //       }
  //     }
  //   }
  // }
};
module.exports = options;