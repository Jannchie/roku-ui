import { useState } from 'react'
import { Flex, Panel, ToggleGroup, defaultDark, defaultLight, getFullThemeData } from '../../src'

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
          item={(_, i) => names[i]}
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
                  <div style={{ borderRadius: 4, width: 20 / 9 * 16, height: 20, background: v.lighter }} />
                  <div style={{ borderRadius: 4, width: 20 / 9 * 16, height: 20, background: v.base }} />
                  <div style={{ borderRadius: 4, width: 20 / 9 * 16, height: 20, background: v.darker }} />
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
