import { useState } from 'react'
import { Btn, Flex, TextField, ToggleGroup, defaultDark, defaultLight, getConstractColor, getFullThemeData } from '../../src'

export default function Demo () {
  const themes = [defaultDark, defaultLight]
  const [theme, setTheme] = useState(themes[0])
  const names = ['Dark', 'Light']

  const fullData = getFullThemeData(theme)
  return (
    <Flex
      col
      gap="1rem"
    >
      <Flex
        gap="0.25rem"
        align="center"
      >
        <ToggleGroup
          data={themes}
          value={theme}
          setValue={setTheme}
          body={(_, i) => names[i]}
        />
        <Btn
          color="primary"
          onClick={() => {
            const a = document.createElement('a')
            a.href = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(theme))}`
            a.download = 'theme.json'
            a.click()
          }}
        >
          Download Data
        </Btn>
      </Flex>
      <Flex
        wrap="wrap"
        gap="0.5rem"
      >
        { Object.entries(theme).map(([k, v]) => {
          if (k === 'k') {
            return (
              <Flex
                key={k}
                style={{ flex: '0 0 calc(50% - 0.5rem)' }}
                gap="0.25rem"
                align="center"
              >
                <TextField
                  prefix="K = "
                  style={{ flex: '0 0 calc(50% - 0.5rem)' }}
                  value={v}
                  setValue={(v) => { setTheme({ ...theme, [k]: v }) }}
                />
              </Flex>
            )
          }
          if (k === 'dark') {
            return (
              <Flex
                key={k}
                style={{ flex: '0 0 calc(50% - 0.5rem)' }}
              >
                <ToggleGroup
                  value={theme[k]}
                  setValue={(v) => {
                    setTheme({ ...theme, [k]: v })
                  }}
                  data={[true, false]}
                />
              </Flex>
            )
          }
          return (
            <Flex
              key={k}
              style={{ flex: '0 0 calc(50% - 0.5rem)' }}
              gap="0.25rem"
              align="center"
            >
              <TextField
                prefix={(
                  <div
                    style={{ width: 100 }}
                  >
                    { k }
                  </div>
                )}
                style={{ width: 200 }}
                value={v}
                setValue={(v) => { setTheme({ ...theme, [k]: v }) }}
              />
              <input
                type="color"
                value={v}
                onChange={(e) => { setTheme({ ...theme, [k]: e.target.value }) }}
              />
            </Flex>
          )
        }) }
      </Flex>
      <Flex
        style={{
          background: fullData.dark ? '#000' : '#FFF',
          color: fullData.color.frontground.base,
          padding: '1rem',
          borderRadius: '.5rem',
        }}
      >
        <Flex
          wrap="wrap"
          gap="1rem"
        >
          { Object.entries(fullData.color).map(([k, v]) => {
            return (
              <div
                key={k}
              >
                <div>{ k }</div>
                <Flex
                  gap=".25rem"
                >
                  <div style={{ fontFamily: 'monospace', textTransform: 'uppercase', color: getConstractColor(v.lighter), display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4, width: 80, height: 30, background: v.lighter }} >{ v.lighter }</div>
                  <div style={{ fontFamily: 'monospace', textTransform: 'uppercase', color: getConstractColor(v.base), display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4, width: 80, height: 30, background: v.base }} >{ v.base }</div>
                  <div style={{ fontFamily: 'monospace', textTransform: 'uppercase', color: getConstractColor(v.darker), display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4, width: 80, height: 30, background: v.darker }} >{ v.darker }</div>
                </Flex>
              </div>
            )
          }) }
        </Flex>
      </Flex>
    </Flex>
  )
}
