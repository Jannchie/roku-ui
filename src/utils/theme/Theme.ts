export interface ThemeColorObject { k?: number, base: string, darker?: string, lighter?: string }
export type ThemeInputColor = string | ThemeColorObject

export interface ThemeColor { base: string, darker: string, lighter: string }
export interface ThemeData {
  dark: boolean
  color: Record<string, ThemeColor>
}
export interface InputTheme {
  k: number
  dark: boolean
  background: ThemeInputColor
  frontground: ThemeInputColor
  border: ThemeInputColor
  primary: ThemeInputColor
  secondary: ThemeInputColor
  default: ThemeInputColor
  success: ThemeInputColor
  warning: ThemeInputColor
  danger: ThemeInputColor
  info: ThemeInputColor
}
