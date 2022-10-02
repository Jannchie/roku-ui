import { defaultDark, defaultLight } from './themes'
import { registTheme } from './utils'

registTheme('dark', defaultDark)
registTheme('light', defaultLight)

export * from './HSLColor'
export * from './Theme'
export * from './themes'
