// import resolve from 'rollup-plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
// import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
// import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/App.tsx', // 入口文件
  output: {
    file: 'dist/my-react-umd-project.js',
    format: 'umd',
    name: 'MyReactUMDProject', // UMD 模块的全局变量名
    globals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
  },
  external: ['react', 'react-dom'], // 不打包 React 和 ReactDOM
  plugins: [
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
    // terser(), // 压缩代码
  ],
};
