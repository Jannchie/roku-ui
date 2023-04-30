import { Btn, useTheme } from '../../src'

export default function Demo () {
  const { theme, setTheme } = useTheme()
  return (
    <Btn onClick={() => {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }}
    >
      Btn with Popover
    </Btn>
  )
}
