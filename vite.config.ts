import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  switch (command) {
    case 'serve': {
      return {
        plugins: [react()],
        assetsInclude: ['**/*.md', 'doc/assets'],
        input: {
          main: resolve(__dirname, 'doc/index.html'),
        },
      }
    }
    case 'build': {
      process.env.NODE_ENV = 'production'
      switch (mode) {
        case 'doc': {
          return {
            plugins: [react()],
            assetsInclude: ['**/*.md', 'doc/assets'],
            input: {
              main: resolve(__dirname, 'doc/index.html'),
            },
            build: {
              minify: 'terser',
              outDir: 'dist-doc',
            },
          }
        }
        default: {
          return {
            build: {
              lib: {
                entry: resolve(__dirname, 'src/index.tsx'),
                fileName: 'roku-ui',
                name: 'RokuUI',
              },
              rollupOptions: {
                external: ['react', 'react-dom'],
                output: {
                  globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                  },
                },
              },
              target: 'modules',
            },
            plugins: [react(), dts({ outputDir: 'dist/types' })],
          }
        }
      }
    }
  }
})
