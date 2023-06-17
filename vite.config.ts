import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import unocss from 'unocss/vite'
import postnest from 'postcss-nesting'
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  switch (command) {
    case 'serve': {
      return {
        plugins: [react(), unocss()],
        define: {
          APP_VERSION: JSON.stringify(process.env.npm_package_version),
        },
        css: {
          postcss: {
            plugins: [
              postnest(),
            ],
          },
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
            plugins: [react(), unocss()],
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
            css: {
              postcss: {
                plugins: [
                  postnest({}),
                ],
              },
            },
            esbuild: {
              minifyIdentifiers: true,
            },
            build: {
              lib: {
                entry: resolve(__dirname, 'src/index.ts'),
                fileName: 'roku-ui',
                name: 'RokuUI',
              },
              rollupOptions: {
                external: ['react', 'react-dom', 'react/jsx-runtime'],
                output: {
                  globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'jsxRuntime',
                  },
                },
              },
              target: 'modules',
            },
            plugins: [
              react(),
              unocss(),
              dts({
                outputDir: 'dist/types',
                include: ['./src/**/*.ts(x)?'],
              }),
            ],
          }
        }
      }
    }
  }
})
