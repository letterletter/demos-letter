const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry: "./src/index",
  entry: {
    index: path.resolve(__dirname, './src/pages/home/index.tsx'),
    app2: path.resolve(__dirname, './src/pages/app2/index.tsx'),
  },
  // output: {
  //   filename: "index.js",
  //   path: path.resolve(__dirname, "dist"),
  // },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)?$/,
        include: [path.resolve(__dirname,'src'), /node_modules\/(@mybricks|simple-ts-letter-f1)\/.*/],
        // 排除@Mybricks下面的包，只有@Mybricks/下面的包被处理
        // exclude: /node_modules\/(?!(@mybricks)\/).*/,
        // exclude: /node_modules\/(?!(@mybricks|simple-ts-letter-f1)\/).*/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3,
                  targets: "> 0.25%, not dead",
                },
              ],
              "@babel/preset-typescript",
            ],
            plugins: [
                ['@babel/plugin-transform-runtime', {
                    "corejs": 3, // 当我们使用 ES6 的静态事件或内置对象时自动引入 babel-runtime/core-js
                    "helpers": true,// 避免内联的 helper 代码在多个文件重复出现，使用babel-runtime/helpers 来替换
                    "regenerator": true // 转换成使用regenerator runtime来避免污染全局域
                }]
              ]
          },
        },
      },
    //   {
    //     test: /\.(j)sx?$/,
    //     exclude: /node_modules/,
    //     use: {
    //       loader: "babel-loader",
    //       options: {
    //         presets: [
    //           "@babel/preset-react",
    //           "@babel/preset-env",
    //           "@babel/preset-typescript",
    //         ],
    //       },
    //     },
    //   },
      {
        test: /.css$/, //匹配 css 文件
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(xml|txt|html|cjs|theme)$/i,
      //   use: [{ loader: 'raw-loader' }],
      // },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, "public", "index.html"),
    //   filename: "index.html",
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './public/assets/index.html'),
      chunks: ['index'],
      publicPath: '/'
    }),
    new HtmlWebpackPlugin({
      filename: 'app2.html',
      template: path.resolve(__dirname, './public/assets/app2.html'),
      chunks: ['app2'],
      publicPath: '/'
    }),
  ],
  devServer: {
    open: true,
    hot: true,
    compress: true,
    port: 9000,
    // historyApiFallback: true,
    proxy: [
      {
        context: ['/apis'],
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      },
    ],
    historyApiFallback: {
      rewrites: [
        { from: /^\/index.html(\/\w+)?$/, to: '/' },
        { from: /^\/app2/, to: '/app2.html' },
      ],
    },
  },
};
