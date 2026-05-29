import { defineConfig } from 'vite'
import { readdirSync } from 'fs'
import { resolve } from 'path'

const blogDir = resolve(__dirname, 'blog')
const blogFiles = readdirSync(blogDir)
  .filter(f => f.endsWith('.html') && !f.startsWith('_'))
  .reduce((acc, f) => {
    acc['blog/' + f.replace('.html', '')] = resolve(blogDir, f)
    return acc
  }, {})

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        services: 'services.html',
        contact: 'contact.html',
        ...blogFiles
      }
    }
  }
})
