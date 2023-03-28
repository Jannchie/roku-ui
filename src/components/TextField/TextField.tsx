import './TextField.css'
import classnames from 'classnames'
import {
  type ChangeEvent, type Dispatch,
  type InputHTMLAttributes,
  type ReactNode, type SetStateAction,
} from 'react'
import { type Colors } from '../..'

export type TextFieldProps = {
  className?: string
  value: any
  prefix?: ReactNode
  suffix?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  placeholder?: string
  borderType?: 'dash' | 'solid' | 'dot'
  text?: boolean
  setValue?: Dispatch<SetStateAction<any>>
  textAlign?: 'left' | 'center' | 'right'
  format?: (value: string) => string
  color?: Colors
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'suffix'>

export function TextField ({
  className,
  prefix,
  suffix,
  size = 'md',
  placeholder,
  textAlign = 'left',
  text = false,
  style,
  borderType = 'solid',
  color = 'primary',
  value,
  setValue,
  ...inputProps
}: TextFieldProps) {
  let onChange
  const border = !text
  if (inputProps.onChange != null) {
    onChange = inputProps.onChange
  } else if (setValue != null) {
    onChange = (e: ChangeEvent<HTMLInputElement>) => { setValue(e.target.value) }
  }
  return (
    <span
      style={style}
      className={classnames(
        className,
        'r-text-field-wrapper',
        `r-text-field-wrapper-${size}`,
        `r-text-field-${borderType}`,
        {
          'r-text-field-border': border,
          'r-text-field-fill': !border,
        },
        { [`focus-within:ring ring-${color}-2`]: color },
      )}
    >
      { prefix && <div className="r-text-field-prefix">{ prefix }</div> }
      <input
        className={classnames('r-text-field', {
          'text-center': textAlign === 'center',
          'text-left': textAlign === 'left',
          'text-right': textAlign === 'right',
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
      { suffix && <div className="r-text-field-suffix">{ suffix }</div> }
    </span>
  )
}
