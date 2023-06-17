import { presetTypography, presetUno, transformerDirectives, defineConfig } from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      variablePrefix: 'r-',
    }),
    presetTypography({
      variablePrefix: 'r-',
    }),
  ],
  theme: {},
  transformers: [
    transformerDirectives(),
  ],
  rules: [
  ],
})
