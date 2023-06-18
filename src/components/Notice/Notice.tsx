import classnames from 'classnames'
import { type HTMLAttributes, type ReactNode, useEffect } from 'react'
import {
  Btn, type Color, Panel, type PanelProps, Progress, useColorHex,
} from '../..'
import { TablerX } from '@roku-ui/icons-tabler'

export interface NoticeProps {
  color?: Color
  title?: ReactNode
  desc?: ReactNode
  wrapperClass?: string
  titleClass?: string
  descClass?: string
  icon?: ReactNode
  outlined?: boolean
  dense?: boolean
  progress?: boolean
  shadow?: boolean
  blur?: boolean
  progressValue?: number
  progressTotal?: number
  close?: () => void
  existMS?: number
}
export async function animate (
  el: HTMLElement,
  keyframes: Keyframe[] | PropertyIndexedKeyframes,
  options?: number | KeyframeAnimationOptions,
): Promise<void> {
  await new Promise<void>((resolve) => {
    const anim = el.animate(keyframes, options)
    anim.addEventListener('finish', () => { resolve() })
    anim.addEventListener('cancel', () => { resolve() })
  })
}

export function Notice ({
  wrapperClass,
  titleClass,
  descClass,
  className,
  color = 'primary',
  title,
  desc,
  shadow,
  progress,
  outlined,
  dense,
  blur,
  icon,
  existMS = 3000,
  progressValue,
  progressTotal = 100,
  close,
  ...others
}: NoticeProps & PanelProps & Omit<HTMLAttributes<HTMLDivElement>, 'title'>) {
  const wrapperCls = classnames(
    'bg-[var(--r-bg-color)] text-sm',
    { 'shadow-lg shadow-black/5': shadow },
    'overflow-hidden',
    { dense },
    { 'border border-[var(--r-border-color)]': outlined },
    className,
    wrapperClass,
  )
  const mainTextColorCls = `text-${color}-2`
  const descCls = classnames('text-frontground-2', descClass)
  const titleCls = classnames(
    'r-notice-title',
    mainTextColorCls,
    titleClass,
  )
  useEffect(() => {
    if (progressValue === undefined) {
      setTimeout(() => {
        if (close != null) {
          close()
        }
      }, existMS)
    }
  })
  const iconCls = classnames('self-center mr-4 leading-none', mainTextColorCls)
  return (
    <Panel
      style={{
        ...others.style,
        ...{
          '--r-bg-color': useColorHex('background'),
          '--r-border-color': useColorHex('border'),
        },
      }}
      {...others}
      className={wrapperCls}
    >
      <div className={classnames(dense ? 'p-2 pb-0' : 'p-4 pb-0')}>
        <div className="flex justify-between">
          <div className="flex items-center">
            { icon &&
              <div className={iconCls}>{ icon }</div>
            }
            <div>
              <div className={titleCls}>{ title }</div>
              <div className={descCls}>{ desc }</div>
            </div>
          </div>
          { (close != null) && (
            <Btn
              icon
              text
              onClick={close}
            >
              <TablerX />
            </Btn>
          ) }
        </div>
      </div>
      <div className="p-2">
        { progress && progressValue === undefined
          ? (
            <Progress
              blur={blur}
              durationMS={existMS}
              color={color}
            />
          )
          : (
            <Progress
              blur={blur}
              value={progressValue}
              total={progressTotal}
              color={color}
            />
          ) }
      </div>
    </Panel>
  )
}
