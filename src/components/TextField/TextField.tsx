import classnames from 'classnames'
import {
  type ChangeEvent, type Dispatch,
  type InputHTMLAttributes,
  type ReactNode, type SetStateAction,
} from 'react'
import { useTrueColor, type Color } from '../..'

export type TextFieldProps = {
  className?: string
  classNames?: {
    'input': string
  }
  value: any
  prefix?: ReactNode
  suffix?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  placeholder?: string
  suffixAbsolute?: boolean
  borderType?: 'dash' | 'solid' | 'dot'
  text?: boolean
  setValue?: Dispatch<SetStateAction<any>>
  textAlign?: 'left' | 'center' | 'right'
  format?: (value: string) => string
  color?: Color
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'suffix'>

export function TextField ({
  className,
  classNames,
  prefix,
  suffix,
  suffixAbsolute,
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
  const mainColor = useTrueColor(color)
  const colorStyle = {
    '--r-main-color': mainColor,
    '--r-bg': useTrueColor('background'),
    '--r-border': useTrueColor('border'),
  }
  return (
    <span
      style={{ ...style, ...colorStyle }}
      className={classnames(
        className,
        'min-w-32 relative rounded inline-flex justify-center items-center border transition-border-color',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-base': size === 'lg',
        },
        {
          'border border-border-2': border,
          'border-transparent': !border,
          'border-dashed': borderType === 'dash',
          'border-solid': borderType === 'solid',
          'border-dotted': borderType === 'dot',
        },
        {
          'border-[var(--r-border)] bg-[var(--r-bg)]': border,
          'focus-within:border-[var(--r-main-color)]': color,
        },
      )}
    >
      { prefix && <div className="min-w-fit inline-block flex pr-2">{ prefix }</div> }
      <input
        className={classnames(
          classNames?.input,
          'p-2 w-full outline-none bg-transparent flex-shrink', {
            'text-center': textAlign === 'center',
            'text-left': textAlign === 'left',
            'text-right': textAlign === 'right',
          })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
      { suffix && <div
        className={classnames(
          'min-w-fit',
          { 'inline-block flex pl-2': !suffixAbsolute },
          { 'absolute right-2 inline leading-0 pointer-events-none': suffixAbsolute },
        )}
      >
        { suffix }
      </div> }
    </span>
  )
}
