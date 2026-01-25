import { defineConfig } from 'vite'
import honox from 'honox/vite'
import pages from '@hono/vite-build/cloudflare-pages'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [
    honox({
      devServer: {
        exclude: [
          /^\/@.+$/,
          /^\/favicon\.ico$/,
          /^\/static\/.+/,
          /^\/node_modules\/.*/
        ]
      }
    }),
    pages()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'app')
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()]
    }
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'static/[name].[hash].[ext]'
      }
    }
  }
})
