import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import {
  createContext, type CSSProperties, type HTMLAttributes, type ReactNode, useContext, useMemo,
} from 'react'
import { type Color } from '../../utils/colors'
// import { Loading } from '../../icons/Loading'
import { MaterialSymbolIcon } from '../MaterialSymbolIcon'
import './Btn.css'
import { Typography } from '../Typography'
import { SvgSpinners90RingWithBg } from '@roku-ui/icons-svg-spinners'

type ButtonType = 'fill' | 'text' | 'default' | 'contrast' | 'light'

export type ButtonProps = {
  variant?: ButtonType
  active?: 'translate' | 'scale'
  text?: boolean
  fill?: boolean
  normal?: boolean
  light?: boolean
  label?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  style?: CSSProperties & { '--r-btn-glory-color'?: string }
  rounded?: boolean
  color?: Color
  hoverColor?: Color
  border?: boolean
  dash?: boolean
  disabled?: boolean
  loading?: boolean
  outline?: boolean
  icon?: boolean
  scale?: boolean
  contrast?: boolean
  loadingIcon?: ReactNode
  leadingIcon?: ReactNode
  left?: boolean
  value?: any
  right?: boolean
  gloryColor?: string
} & HTMLAttributes<HTMLButtonElement>

interface BtnGroupCtxType {
  cancelable: any
  value: any
  setValue: (value: any) => void
  activeColor: Color
}

function getTrueBtnVariant ({ fill, text, variant, contrast, light }: ButtonProps): ButtonType {
  switch (variant) {
    case 'fill':
      return 'fill'
    case 'text':
      return 'text'
    case 'light':
      return 'light'
    case 'contrast':
      return 'contrast'
    case 'default':
      return 'default'
    default:
      if (text) {
        return 'text'
      } else if (fill) {
        return 'fill'
      } else if (contrast) {
        return 'contrast'
      } else if (light) {
        return 'light'
      } else {
        return 'default'
      }
  }
}

const BtnGroupCtx = createContext<BtnGroupCtxType>({
  value: undefined,
  setValue: () => { },
  activeColor: 'primary',
  cancelable: false,
})

function BtnRoot ({
  label,
  size = 'md',
  variant,
  fill = false,
  text,
  color = 'default',
  contrast = false,
  active,
  normal = true,
  hoverColor,
  gloryColor,
  border = false,
  dash = false,
  loading = false,
  light = false,
  disabled = false,
  scale = false,
  rounded = false,
  outline = true,
  style,
  children,
  onClick,
  className,
  icon = false,
  loadingIcon,
  leadingIcon = null,
  left,
  value,
  right,
  ...others
}: ButtonProps) {
  // const isDark = isDarkColor(color)
  // const themeData = useThemeData()
  // console.log(themeData)
  // console.log(isDark, color)
  const ctx = useContext(BtnGroupCtx)
  const hColor = hoverColor ?? color
  const fgColor = 'frontground'
  if (!loadingIcon) {
    loadingIcon = (
      <SvgSpinners90RingWithBg />
    )
  }
  if (value && value === ctx.value) {
    color = ctx.activeColor
  }
  if (gloryColor) {
    style = { ...style, '--r-btn-glory-color': gloryColor }
  }
  const trueBtnVariant = getTrueBtnVariant({ variant, fill, text, normal, contrast })
  const btnClass = classNames(
    'r-btn',
    {
      'translate-y-[1px]': active === 'translate',
      'scale-[0.99]': active === 'scale',
    },
    `r-btn-${size}`,
    { [`r-btn-filled bg-${color}-2`]: trueBtnVariant === 'fill' },
    { 'bg-background-2 border-border-2': trueBtnVariant === 'default' },
    { [`border-${color}-1`]: border && trueBtnVariant !== 'default' },
    { [`text-${fgColor}-2 hover:text-${hColor}-1`]: trueBtnVariant === 'text' },
    { [`text-${fgColor}-2 hover:text-${hColor}-1 hover:bg-${hColor}-1/25`]: trueBtnVariant === 'light' },
    { [`hover:bg-${hColor}-2`]: trueBtnVariant === 'contrast' },
    { 'r-btn-icon': icon },
    { 'r-btn-icon-border': icon && border },
    { 'r-btn-rounded': rounded },
    { 'r-btn-dash': dash },
    { 'r-btn-blur': gloryColor },
    { [`outline-${color}-2 r-btn-outline`]: outline },
    { 'active:scale-[0.98]': scale },
    { 'border-transparent': !border },
    className,
  )
  const body = children ?? label
  const loadingFinalClass = classNames({
    'r-loading-xs': size === 'xs',
    'r-loading-sm': size === 'sm',
    'r-loading-md': size === 'md',
    'r-loading-lg': size === 'lg',
  }, 'r-btn-leading-icon')
  const clickCallback = onClick ?? (() => {
    if (value) {
      if (ctx.value !== value) {
        ctx.setValue(value)
      } else if (ctx.cancelable) {
        ctx.setValue(undefined)
      }
    }
  })
  function getRemBySize (size: 'xs' | 'sm' | 'md' | 'lg') {
    switch (size) {
      case 'xs':
        return '0.5rem'
      case 'sm':
        return '0.75rem'
      case 'md':
        return '1rem'
      case 'lg':
        return '1.25rem'
    }
  }
  if (icon) {
    return (
      <button
        className={btnClass}
        disabled={disabled}
        style={style}
        type="button"
        onClick={clickCallback}
        {...others}
      >
        <div
          className={loadingFinalClass}
        >
          { loading ? loadingIcon : children }
        </div>
      </button>
    )
  }
  return (
    <button
      className={btnClass}
      disabled={disabled}
      style={style}
      type="button"
      onClick={clickCallback}
    >
      <div className={classNames(
        'r-btn-main',
        { 'r-btn-left': left },
        { 'r-btn-right': right },
        { 'r-btn-center': !left && !right },
      )}
      >
        { leadingIcon
          ? (
            <div
              className={classNames(loadingFinalClass)}
              style={{
                fontSize: size === 'sm' ? '1rem' : '1.5rem',
              }}
            >
              { loading ? loadingIcon : leadingIcon }
            </div>
          )
          : (
            <AnimatePresence>
              { loading && (
                <motion.div
                  layout
                  animate={{
                    marginRight: size === 'sm' ? 4 : 8,
                    width: getRemBySize(size),
                    height: getRemBySize(size),
                  }}
                  className={loadingFinalClass}
                  exit={{
                    marginRight: 0,
                    width: 0,
                    height: 0,
                  }}
                  initial={{
                    marginRight: 0,
                    width: 0,
                    height: 0,
                  }}
                  transition={{
                    bounce: 0,
                  }}
                >
                  { loadingIcon }
                </motion.div>
              ) }
            </AnimatePresence>
          ) }
        <Typography.Button>
          { body }
        </Typography.Button>
      </div>
    </button>
  )
}

interface BtnGroup {
  className?: string
  children?: ReactNode
  cancelable?: boolean
  value: any
  setValue: (val: any) => void
  activeColor?: Color
}
function Group ({
  className, children, value, setValue, activeColor = 'primary', cancelable,
}: BtnGroup) {
  const ctx = useMemo(() => ({
    value, setValue, activeColor, cancelable,
  }), [value, setValue, activeColor, cancelable])
  return (
    <BtnGroupCtx.Provider value={ctx}>
      <div className="relative flex">
        <div
          className={classNames(
            className,
            `border-${activeColor}-2`,
            'r-btn-group',
          )}
        >
          { children }
        </div>
      </div>
    </BtnGroupCtx.Provider>
  )
}

function Counter ({
  value,
  size = 'md',
  color = 'primary',
  icon = 'check_circle',
  fill = false,
  active = false,
  ...props
}: {
  value: number
  icon: string | ReactNode
  color?: Color
  active?: boolean
  fill?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
} & HTMLAttributes<HTMLButtonElement>) {
  const iconCls = classNames(
    `r-btn-${size}`,
    'r-btn-icon r-btn bg-opacity-10 dark:bg-opacity-10',
    'border-transparent',
    `group-hover:bg-${color}-1/10 group-hover:text-${color}-1`,
  )
  const textCls = classNames(
    `r-btn-counter-value group-hover:text-${color}-1`,
  )
  return (
    <button
      {...props}
      type="button"
      className="r-btn-counter group text-sm flex items-center gap-2 hover:cursor-pointer"
    >
      <div className={iconCls}>
        {
          typeof icon === 'string'
            ? (
              <MaterialSymbolIcon
                size={size}
                icon={icon}
                fill={fill}
              />
            )
            : icon
        }
      </div>
      <Typography.Button className={textCls}>{ value }</Typography.Button>
    </button>
  )
}
export const Btn = Object.assign(BtnRoot, {
  Group, Counter,
})
