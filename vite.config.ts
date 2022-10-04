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
        define: {
          APP_VERSION: JSON.stringify(process.env.npm_package_version),
        },
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
            define: {
              APP_VERSION: JSON.stringify(process.env.npm_package_version),
            },
            assetsInclude: ['**/*.md', 'doc/assets'],
            input: {
              main: resolve(__dirname, 'doc/index.html'),
            },
            build: {
              outDir: 'dist-doc',
            },
          }
        }
        default: {
          return {
            esbuild: {
              minifyIdentifiers: false,
            },
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
