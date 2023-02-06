import { presetTypography, presetUno, transformerDirectives, defineConfig } from 'unocss'
const saveList = []
const variants = ['hover', 'active', 'group-hover', 'focus-within']
const utilities = ['border', 'bg', 'text', 'ring', 'outlined', 'decoration']
const colorType = ['primary', 'secondary', 'default', 'success', 'danger', 'warning', 'info', 'background', 'frontground', 'border']
const colorLevel = [1, 2, 3]
const opacityLevel = [10, 25, 50, 75, 90]
const colors = {}
for (const utility of utilities) {
  for (const type of colorType) {
    for (const level of colorLevel) {
      saveList.push(`${utility}-${type}-${level}`)
      for (const variant of variants) {
        saveList.push(`${variant}:${utility}-${type}-${level}`)
      }
      for (const opacity of opacityLevel) {
        saveList.push(`${utility}-${type}-${level}/${opacity}`)
        for (const variant of variants) {
          saveList.push(`${variant}:${utility}-${type}-${level}/${opacity}`)
        }
      }
    }
  }
}

for (const type of colorType) {
  colors[type] = {}
  for (const level of colorLevel) {
    colors[type][`${level}`] = `hsl(var(--r-${type}-${level}))`
    for (const opacity of opacityLevel) {
      colors[type][`${level}/${opacity}`] = `hsl(var(--r-${type}-${level}) / ${opacity / 100})`
    }
  }
}
for (const type of ['background', 'frontground']) {
  colors[`${type}`] = {}
  for (const level of colorLevel) {
    saveList.push(`${type}-${level}`)
    colors[`${type}`][`${level}`] = `hsl(var(--r-${type}-${level}))`
  }
}
export default defineConfig({
  presets: [
    presetUno({
      variablePrefix: 'r-',
    }),
    presetTypography({
      variablePrefix: 'r-',
    }),
  ],
  theme: {
    colors,
  },
  transformers: [
    transformerDirectives(),
  ],
  safelist: saveList,
})
