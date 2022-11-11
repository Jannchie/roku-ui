export interface ThemeColorObject { k?: number, base: string, darker?: string, lighter?: string }
export type ThemeColor = string | ThemeColorObject
export interface Theme {
  k: number
  background: ThemeColor
  frontground: ThemeColor
  border: ThemeColor
  primary: ThemeColor
  secondary: ThemeColor
  default: ThemeColor
  success: ThemeColor
  warning: ThemeColor
  danger: ThemeColor
  info: ThemeColor
}
