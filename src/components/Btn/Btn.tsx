import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import {
  createContext, type CSSProperties, type HTMLAttributes, type ReactNode, useContext, useMemo, forwardRef, useRef,
} from 'react'
import { isColor, type Color } from '../../utils/colors'
import { SvgSpinners90RingWithBg } from '@roku-ui/icons-svg-spinners'
import { useTrueColor, useHover, useThemeData, useColorHex, useContrastFrontgroundColor } from '../../hooks'
import { Flex, Icon } from '../..'
import { createPolymorphicComponent } from '../../utils/polymorphic'

type ButtonType = 'fill' | 'text' | 'default' | 'contrast' | 'light'

export type ButtonProps = {
  as?: any
  variant?: ButtonType
  active?: 'translate' | 'scale' | 'darken' | 'lighten'
  text?: boolean
  fill?: boolean
  normal?: boolean
  light?: boolean
  label?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  style?: CSSProperties & { '--r-bg-gradient'?: string }
  rounded?: boolean
  color?: Color | string
  hoverColor?: Color | string
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
} & HTMLAttributes<HTMLButtonElement>

interface BtnGroupCtxType {
  cancelable: any
  value: any
  setValue: (value: any) => void
  activeColor: Color
}

function getTrueBtnVariant ({ fill, text, variant, contrast, light }: ButtonProps): ButtonType {
  switch (variant) {
    case 'default':
      return 'default'
    case 'text':
      return 'text'
    case 'light':
      return 'light'
    case 'contrast':
      return 'contrast'
    case 'fill':
      return 'fill'
    default:
      if (text) {
        return 'text'
      } else if (contrast) {
        return 'contrast'
      } else if (light) {
        return 'light'
      } else if (fill) {
        return 'fill'
      }
      return 'fill'
  }
}

const BtnGroupCtx = createContext<BtnGroupCtxType>({
  value: undefined,
  setValue: () => { },
  activeColor: 'primary',
  cancelable: false,
})

const _BtnRoot = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    as,
    label,
    size = 'md',
    variant,
    fill = false,
    light = false,
    text,
    color = 'default',
    contrast = false,
    active = 'translate',
    hoverColor,
    border = false,
    dash = false,
    loading = false,
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
  }, ref) => {
    const themeData = useThemeData()
    const ctx = useContext(BtnGroupCtx)
    if (!loadingIcon) {
      loadingIcon = (
        <SvgSpinners90RingWithBg />
      )
    }
    if (value && value === ctx.value) {
      color = ctx.activeColor
    }
    const trueBtnVariant = getTrueBtnVariant({ fill, text, variant, contrast, light })
    if (color === 'default' && !hoverColor) {
      if (trueBtnVariant === 'fill') {
        hoverColor = 'default'
      } else {
        hoverColor = 'frontground'
      }
    } else if (!hoverColor) hoverColor = color
    const colorColorBGHex = isColor(color) ? themeData.color[color].base : color
    const colorHoverBGHex = useColorHex(hoverColor)
    const hoverColorName = useTrueColor(hoverColor)
    const textHoverContrastColorName = useContrastFrontgroundColor(colorHoverBGHex)
    const textColorContrastColorName = useContrastFrontgroundColor(colorColorBGHex)
    const textSizeClass = {
      'text-xs !leading-none': size === 'xs',
      'p-2 text-xs !leading-none': size === 'sm',
      'p-2 text-xs': size === 'md',
      'p-2 text-base': size === 'lg',
    }
    const fgColor = useTrueColor('frontground')
    const bgColor = useTrueColor('background')
    const mainColorName = useTrueColor(color)
    const hColor = useTrueColor(hoverColor ?? color)
    const borderColorName = useTrueColor(color, 3)
    const useColorStyle = () => {
      switch (trueBtnVariant) {
        case 'contrast':
          return {
            '--r-text-color': color === 'default' ? fgColor : mainColorName,
            '--r-text-hover-color': bgColor,
            '--r-bg-hover-color': (!hoverColor && color === 'default') ? fgColor : hColor ?? mainColorName,
            '--r-border-color': borderColorName,
          }
        case 'text':
          return {
            '--r-text-color': color === 'default' ? fgColor : mainColorName,
            '--r-text-hover-color': hColor,
            '--r-border-color': borderColorName,
            '--r-outline-color': mainColorName,
            '--r-bg-color': 'transparent',
          }
        case 'fill':
          return {
            '--r-bg-color': mainColorName,
            '--r-bg-hover-color': hoverColorName,
            '--r-border-color': borderColorName,
            '--r-text-color': textColorContrastColorName,
            '--r-text-hover-color': textHoverContrastColorName,
          }
      }
    }
    const colorStyle = useColorStyle()
    const btnClass = classNames(
      textSizeClass,
      border,
      'inline-block overflow-visible relative border h-fit text-sm disabled:grayscale disabled:contrast-50 disabled:pointer-events-none rounded',
      { 'min-w-16': !icon },
      {
        'active:translate-y-[1px]': active === 'translate',
        'active:scale-[0.99]': active === 'scale',
      },
      'hover:bg-[var(--r-bg-hover-color)] bg-[var(--r-bg-color)] border-[var(--r-border-color)] text-[var(--r-text-color)] hover:text-[var(--r-text-hover-color)]',
      { 'leading-[0]': icon },
      { 'rounded-full': rounded },
      { 'border-dashed': dash },
      { 'outline-[var(--r-outline-color)] focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-2': outline },
      { 'active:scale-[0.98]': scale },
      { 'border-transparent': !border },
      className,
    )
    const body = children ?? label
    const loadingFinalClass = classNames({
      'h-3 w-3': size === 'xs',
      'h-4 w-4': size === 'sm',
      'h-5 w-5': size === 'md',
      'h-6 w-6': size === 'lg',
    }, 'leading-[0]')
    const clickCallback = onClick ?? (() => {
      if (value) {
        if (ctx.value !== value) {
          ctx.setValue(value)
        } else if (ctx.cancelable) {
          ctx.setValue(undefined)
        }
      }
    })

    const Element = as || 'button'
    if (icon) {
      return (
        <Element
          ref={ref}
          className={btnClass}
          disabled={disabled}
          style={{ ...style, ...colorStyle }}
          type="button"
          onClick={clickCallback}
          {...others}
        >
          <div
            className={classNames(loadingFinalClass)}
          >
            { loading
              ? loadingIcon
              : children }
          </div>
        </Element>
      )
    }
    return (
      <Element
        ref={ref}
        className={btnClass}
        disabled={disabled}
        style={{ ...style, ...colorStyle }}
        type="button"
        onClick={clickCallback}
        {...others}
      >
        <div className={classNames(
          'flex items-center relative',
          { 'justify-left': left },
          { 'justify-right': right },
          { 'justify-center': !left && !right },
        )}
        >
          <AnimatePresence>
            {
              (loading || leadingIcon) && (
                <motion.div
                  key="icon"
                  layout
                  animate={{ opacity: 1, width: '1em' }}
                  exit={{ opacity: 0, width: '0em' }}
                >
                  {
                    loading
                      ? (
                        <SvgSpinners90RingWithBg />
                      )
                      : leadingIcon
                  }
                </motion.div>
              )
            }
            <motion.div
              key="body"
              className={classNames({ 'ml-2': loading || leadingIcon })}
            >
              { body }
            </motion.div>
          </AnimatePresence>
        </div>
      </Element>
    )
  },
)
_BtnRoot.displayName = 'Btn'

const BtnRoot = createPolymorphicComponent<'button', ButtonProps>(_BtnRoot)

interface BtnGroup {
  className?: string
  children?: ReactNode
  cancelable?: boolean
  value: any
  setValue: (val: any) => void
  activeColor?: Color
}
function Group ({
  className, children, value, setValue, activeColor = 'primary', cancelable, style,
}: BtnGroup & HTMLAttributes<HTMLDivElement>) {
  const ctx = useMemo(() => ({
    value, setValue, activeColor, cancelable,
  }), [value, setValue, activeColor, cancelable])
  const colorStyle = {
    '--r-main-color': useTrueColor(activeColor),
  }
  return (
    <BtnGroupCtx.Provider value={ctx}>
      <div className="relative flex">
        <div
          className={classNames(
            className,
            'border-[hsl(var(--r-main-color))]',
            'flex border rounded-lg transform overflow-hidden',
          )}
          style={{
            ...style,
            ...colorStyle,
          }}
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
  icon,
  fill = false,
  active = false,
  ...props
}: {
  value: number
  icon: ReactNode
  color?: Color
  active?: boolean
  fill?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
} & HTMLAttributes<HTMLButtonElement>) {
  const btn = useRef(null)
  const isHover = useHover(btn)
  return (
    <Btn
      ref={btn}
      text
      hoverColor={color}
      {...props}
    >
      <Flex
        gap="0.5rem"
        align="center"
      >
        <Icon
          color={isHover ? color : 'frontground'}
          variant="text"
        >
          { icon }
        </Icon>
        <span>
          { value || 0 }
        </span>
      </Flex>
    </Btn>
  )
}
export const Btn = Object.assign(BtnRoot, {
  Group, Counter,
})
