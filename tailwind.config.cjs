/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const saveList = []
const variants = ['hover', 'active', 'group-hover', 'focus-within']
const utilities = ['border', 'bg', 'text', 'ring', 'outlined']
const colorType = ['primary', 'secondary', 'default', 'success', 'danger', 'warning', 'info', 'fg', 'bg']
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
for (const type of ['bg', 'fg']) {
  colors[`${type}`] = {}
  for (const level of colorLevel) {
    saveList.push(`${type}-${level}`)
    colors[`${type}`][`${level}`] = `hsl(var(--r-${type}-${level}))`
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    },
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  safelist: saveList,
  variants: {
    extend: {},
  },
}
