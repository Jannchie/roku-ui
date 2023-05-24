import { useState } from 'react'
import { Flex, Panel, ToggleGroup, defaultDark, defaultLight, getConstractColor, getFullThemeData } from '../../src'

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
      <div>
        <ToggleGroup
          data={themes}
          value={theme}
          setValue={setTheme}
          body={(_, i) => names[i]}
        />
      </div>
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
      <Panel>
        text
      </Panel>
    </Flex>
  )
}
