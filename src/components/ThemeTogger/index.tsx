import { useTheme } from '../../hooks'
import { Btn } from '../Btn'
import { TablerMoon, TablerSun, TablerSunMoon } from '@roku-ui/icons-tabler'
import { type ButtonProps } from '../Btn/Btn'
export function ThemeToggle ({ ...others }: Omit<ButtonProps, 'onClick' | 'icon' >) {
  const { theme, toggleTheme } = useTheme()
  let icon = <TablerMoon />
  switch (theme) {
    case 'dark':
      icon = <TablerSun />
      break
    case 'system':
      icon = <TablerSunMoon />
  }
  return (
    <Btn
      icon
      onClick={toggleTheme}
      {...others}
    >
      { icon }
    </Btn>
  )
}
