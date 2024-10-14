// import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import NpmImport from 'less-plugin-npm-import';
// import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import alias from '@rollup/plugin-alias';
import postcssImport from 'postcss-import';
import json from '@rollup/plugin-json';

import path from 'path'
// import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/render-com/index.tsx', // 入口文件
  // input: 'src/App.tsx', // 入口文件
  output: {
    file: 'dist/my-com-umd-demo.js',
    format: 'umd',
    inlineDynamicImports: true,
    dir: undefined,
    // manualChunks: undefined, // 禁用代码拆分
    name: 'MyReactComProject', // UMD 模块的全局变量名
    globals: {
      react: 'react',
      'react-dom': 'react-dom',
      '@m-ui/icons': '@m-ui/icons',
      '@m-ui/react': '@m-ui/react',
      lodash: 'lodash'

    },
  },
  external: ['http', 'https', 'url', 'stream', 'assert', 'tty', 'util', 'os', 'zlib', 'path', 'fs', 'react', 'react-dom', '@m-ui/react', '@m-ui/icons', 'lodash'], // 不打包 React 和 ReactDOM
  plugins: [
    alias({
      entries: [
        { find: '~', replacement: path.resolve(__dirname, 'node_modules/') },
      ]
    }),
    json(),
    postcss({
      exec: true,
      use: [['less', {
        plugins: [new NpmImport({prefix: '~'})],
        javascriptEnabled: true,
      }]],
      extensions: ['.css', '.less'],
      // inject: true, // 是否将CSS注入到JavaScript中，true表示创建style标签并插入head中
      minimize: true, // 压缩CSS
      // plugins: [
      //   postcssImport({
      //     resolve(id, basedir) {
      //       if (id.startsWith('~')) {
      //         return path.resolve('./node_modules', id.slice(1));
      //       }
      //       return path.resolve(basedir, id);
      //     },
      //   }),
      // ],
      // ...其他配置
    }),
    // postcss({
    //   extensions: ['.css', '.less'],
    //   inject: true, // 是否将CSS注入到JavaScript中，true表示创建style标签并插入head中
    //   minimize: true, // 压缩CSS
    // }),
    resolve(),
    commonjs(),
    babel({ 
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // 添加支持的文件扩展名
      exclude: 'node_modules/**' // 排除 node_modules 中的文件
    }),
    typescript({
      // tsconfig: 'tsconfig.json'
    }
    ),
    terser(), // 压缩代码
  ],
};
