// webpack.base.js
const path = require('path')
const { VueLoaderPlugin }  = require('vue-loader')
const HtmlWebpackPlugin= require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/index.ts'), // 入口文件
  output: {
    filename: 'static/js/[name].js', // 每个输出js的名称
    path: path.join(__dirname, '/dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/' // 打包后文件的公共前缀路径
  },
  module: {
    rules: [
      {
      	test: /\.vue$/, // 匹配.vue文件
      	use: 'vue-loader', // 用vue-loader去解析vue文件
      },
      {
        test: /\.(tsx|ts|js)?$/,
        // test: /\.ts$/, // 匹配.ts文件
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              // [
              //   "@babel/preset-env",
              //   {
              //      "useBuiltIns": "usage", // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
              //      "corejs": 3, // 配置使用core-js低版本
              //    }
              // ],
              [
                '@babel/preset-typescript',
                {
                  allExtensions: true, //支持所有文件扩展名，很关键
                },
              ]
            ],
          }
        }
      },
      // {
      //   test: /\.js?$/,
      //   exclude: /node_modules\/(?!(@mybricks)\/).*/,
      //   use: {
      //       loader: 'babel-loader',
      //       options: {
      //          presets: [["@babel/preset-env", { useBuiltIns: 'usage', corejs: { version: 3 } }]],
      //           plugins: [
      //           ['@babel/plugin-transform-runtime', {
      //               "corejs": 3, // 当我们使用 ES6 的静态事件或内置对象时自动引入 babel-runtime/core-js
      //               "helpers": true,// 避免内联的 helper 代码在多个文件重复出现，使用babel-runtime/helpers 来替换
      //               "regenerator": true // 转换成使用regenerator runtime来避免污染全局域
      //           }]
      //       ]
      //       }
      //   }
      // },
      {
        test: /\.css$/, //匹配 css 文件
        use: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'), // 模板取定义root节点的模板
      inject: true, // 自动注入静态资源
    }),
    // ...
    new VueLoaderPlugin(), // vue-loader插件
  ],
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.json'],
  }
}