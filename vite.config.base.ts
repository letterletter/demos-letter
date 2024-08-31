import react from '@vitejs/plugin-react'
import { UserConfigExport } from 'vite'
import svgr from 'vite-plugin-svgr'

export const baseConfig: UserConfigExport = {
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  define: {
    PLATFORM: JSON.stringify(process.env.PLATFORM),
  },
  plugins: [
    svgr(),
    react({
      babel: {
        plugins: [
          ['@babel/plugin-proposal-decorators', { legacy: true }],
          ['@babel/plugin-proposal-class-properties', { loose: true }],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      path: 'path-browserify',
    },
    ...(process.env.NODE_ENV === 'development'
      ? {
          preserveSymlinks: true,
        }
      : {}),
  },
}
