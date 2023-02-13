import { type HTMLAttributes } from 'react'
import classNames from 'classnames'
import './Text.css'
export function Text ({ children, size = 'md', weight = 'medium', className, ...others }: HTMLAttributes<HTMLSpanElement> & {
  size?: 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  weight?: 'normal' | 'bold' | 'medium'
}) {
  return (<span className={classNames('r-text', {
    'r-text-bold': weight === 'bold',
    'r-text-medium': weight === 'medium',
    'r-text-normal': weight === 'normal',
  }, {
    'r-text-xxl': size === 'xxl',
    'r-text-xl': size === 'xl',
    'r-text-lg': size === 'lg',
    'r-text-md': size === 'md',
    'r-text-sm': size === 'sm',
    'r-text-xs': size === 'xs',
  })} {...others} >{ children }</span>)
}
