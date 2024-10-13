import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path';
// import babel from '@rollup/plugin-babel'

export default defineConfig({
  define: {
    'process.env': {}, // 可以根据需要添加环境变量
    process: {
      env: {
        NODE_ENV: 'production', // 或 'development'
        // 其他环境变量
      }
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       javascriptEnabled: true,
  //     },
  //   },
  // },
  plugins: [react()],
  // optimizeDeps: {
  //   include: ['@m-ui/react'],
  // },
  build: {
    lib: {
      entry: 'src/index.jsx', // 入口文件
      name: 'MyComponent', // UMD 模块名称
      fileName: format => `my-component.${format}.js`, // 输出文件名
      formats: ['umd'], // 输出格式
    },
      commonjsOptions: {
        // include: [/node_modules/], // 只处理 node_modules 中的模块
        // exclude: ['/node_module/**']
      },
    rollupOptions: {
      external: ['react', 'react-dom'],
      // plugins:[
      //   babel({
      //     exclude: ['node_modules/*'],
      //     babelHelpers: 'runtime', // 因为设置了 runtime, 所以 babel.config.js 配置了 @babel/plugin-transform-runtime
      //     extensions: ['ts', '.tsx']
      //   }),
      // ],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
          // lodash: 'lodash',
          // '@m-ui/react': '@m-ui/react',
          // '@m-ui/icons': '@m-ui/icons',
        },
      },
      // 不需要设置 input，确保只使用一个入口
    },
  },
})
