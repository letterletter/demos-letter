import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/App.tsx'),
      name: 'MyLibrary',
      formats: ['umd'],
      fileName: 'my-library.js'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom'],
      output: {
        // 在 UMD 构建模式下，这是全局变量的名称
        globals: {
          react: 'react',
          'react-dom': 'react-dom'
        }
      }
    }
  }
})
