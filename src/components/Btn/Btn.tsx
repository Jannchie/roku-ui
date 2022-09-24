import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import {
  createContext, CSSProperties, HTMLAttributes, ReactNode, useContext, useMemo, useState,
} from 'react'
import {
  Colors, colorClass, bgColorClass, textColorClass, borderColorClass, hoverBgColorClass,
} from '../../utils/colors'
import { Loading } from '../../icons/Loading'
import { MaterialSymbolIcon } from '../MaterialSymbolIcon'
import './Btn.css'
import { Typography } from '../Typography'

export interface ButtonProps {
  label?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  style?: CSSProperties
  rounded?: boolean
  color?: Colors
  hoverColor?: Colors
  filled?: boolean
  border?: boolean
  dash?: boolean
  text?: boolean
  disabled?: boolean
  onClick?: () => void
  loading?: boolean
  ring?: boolean
  children?: ReactNode
  className?: string
  icon?: boolean
  loadingIcon?: ReactNode
  leadingIcon?: ReactNode
  left?: boolean
  value?: any
  right?: boolean
}

interface BtnGroupCtxType {
  cancelable: any
  value: any
  setValue: ((value: any) => void)
  activeColor: Colors
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
  color = 'default',
  hoverColor,
  dash = false,
  loading = false,
  disabled = false,
  border = false,
  rounded = false,
  ring = false,
  filled = true,
  text = false,
  style,
  children,
  onClick,
  className,
  icon = false,
  loadingIcon = <Loading />,
  leadingIcon = null,
  left,
  value,
  right,
}: ButtonProps) {
  const ctx = useContext(BtnGroupCtx)
  const [hover, setHover] = useState(false)
  const hColor = hoverColor ?? color
  const btnClass = classNames(
    'r-btn',
    `r-btn-${size}`,
    { 'r-btn-icon': icon },
    { 'r-btn-icon-border': icon && border },
    { 'r-btn-rounded': rounded },
    { 'r-btn-dash': dash },
    { 'r-btn-ring': ring },
    { 'r-btn-filled': filled && !text },
    { 'r-btn-text': text },
    { 'active:scale-[0.98]': true },
    { [hoverBgColorClass(hColor)]: hover },
    { [bgColorClass(color)]: !hover && !text },
    { [textColorClass(color)]: text && !hover },
    { [textColorClass(hColor)]: text && hover },
    { [borderColorClass(color)]: border && !hover },
    { [bgColorClass(hColor)]: hover },
    { '!bg-opacity-25': text && hover },
    { [borderColorClass(hColor)]: border && hover },
    { 'border-transparent': !border },
    className,
  )
  const body = children ?? label
  const loadingFinalClass = classNames('leading-[0]', {
    'r-loading-xs': size === 'xs',
    'r-loading-sm': size === 'sm',
    'r-loading-md': size === 'md',
    'r-loading-lg': size === 'lg',
  })
  const clickCallback = onClick !== null
    ? onClick
    : () => {
      if (value) {
        if (ctx.value !== value) {
          ctx.setValue(value)
        } else if (ctx.cancelable) {
          ctx.setValue(undefined)
        }
      }
    }
  if (icon) {
    return (
      <button
        className={btnClass}
        disabled={disabled}
        style={style}
        type="button"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={clickCallback}
      >
        <div
          className={loadingFinalClass}
        >
          {loading ? loadingIcon : children}
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
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={clickCallback}
    >
      <div className={classNames(
        'r-btn-main',
        { 'r-btn-left': left },
        { 'r-btn-right': right },
        { 'r-btn-center': !left && !right },
      )}
      >
        {leadingIcon
          ? (
            <div
              className={classNames(loadingFinalClass, 'r-btn-leading-icon')}
              style={{
                fontSize: size === 'sm' ? '1rem' : '1.5rem',
              }}
            >
              {loading ? loadingIcon : leadingIcon}
            </div>
          )
          : (
            <AnimatePresence>
              {loading && (
                <motion.div
                  layout
                  animate={{
                    marginRight: size === 'sm' ? 4 : 8,
                    width: size === 'lg' ? 20 : 16,
                    height: size === 'lg' ? 20 : 16,
                  }}
                  className={loadingFinalClass}
                  exit={{ marginRight: 0, width: 0 }}
                  initial={{
                    marginRight: 0,
                    width: 0,
                  }}
                  transition={{
                    bounce: 0,
                    duration: 0.15,
                    type: 'spring',
                  }}
                >
                  {loadingIcon}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        <Typography.Button>
          {body}
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
  activeColor: Colors
}
function Group ({
  className, children, value, setValue, activeColor = 'primary', cancelable,
}: BtnGroup) {
  const ctx = useMemo(() => ({
    value, setValue, activeColor, cancelable,
  }), [value, setValue, activeColor, cancelable])
  const colorCls = colorClass({
    border: activeColor,
  })
  return (
    <BtnGroupCtx.Provider value={ctx}>
      <div className="relative flex">
        <div
          className={classNames(
            className,
            { [colorCls]: ctx.value },
            { [colorClass({ border: 'default' })]: !ctx.value },
            'r-btn-group',
          )}
        >
          {children}
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
  color?: Colors
  active?: boolean
  fill?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
} & HTMLAttributes<HTMLButtonElement>) {
  const [hover, setHover] = useState(false)
  const iconCls = classNames(
    { [textColorClass(color)]: hover || active, [bgColorClass(color)]: hover || active },
    { [textColorClass('default')]: !hover && !active },
    `r-btn-${size}`,
    'r-btn-icon r-btn bg-opacity-10 dark:bg-opacity-10',
    'border-transparent',
  )
  const textCls = classNames(
    'r-btn-counter-value transition',
    { [textColorClass(color)]: hover || active },
    { [textColorClass('default')]: !hover && !active },
  )
  return (
    <button
      {...props}
      type="button"
      className="r-btn-counter text-sm flex items-center gap-2 hover:cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={iconCls}>
        {
          typeof icon === 'string'
            ? (
              <MaterialSymbolIcon size={size} icon={icon} fill={fill} />
            )
            : icon
        }
      </div>
      <Typography.Button className={textCls}>{value}</Typography.Button>
    </button>
  )
}
export const Btn = Object.assign(BtnRoot, {
  Group, Counter,
})
