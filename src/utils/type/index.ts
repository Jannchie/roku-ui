export interface BaseProps {
  id?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export type Rounded = 'none' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'full'

export type Size = 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl'
