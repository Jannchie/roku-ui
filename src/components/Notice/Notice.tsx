import classNames from 'classnames'
import { type HTMLAttributes, type ReactNode, useEffect } from 'react'
import {
  Btn, type Colors, MaterialSymbolIcon, Panel, type PanelProps, Progress,
} from '../..'
import './Notice.css'

export interface NoticeProps {
  color?: Colors
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
}: NoticeProps & PanelProps & HTMLAttributes<HTMLDivElement>) {
  const wrapperCls = classNames(
    'r-notice-wrapper',
    { 'shadow-lg shadow-black/5': shadow },
    'overflow-hidden',
    { dense },
    { border: outlined },
    className,
    wrapperClass,
  )
  const mainTextColorCls = `text-${color}-2`
  const descCls = classNames('r-notice-desc', descClass)
  const titleCls = classNames(
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
  const iconCls = classNames('r-notice-icon', mainTextColorCls)
  return (
    <Panel {...others} className={wrapperCls}>
      <div className={classNames(dense ? 'p-2' : 'p-4')}>
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
              className="!rounded-full dark:!text-default-400 hover:!bg-opacity-10 hover:!text-default-900 dark:hover:!text-default-200"
              onClick={close}
            >
              <MaterialSymbolIcon icon="close" />
            </Btn>
          ) }
        </div>
      </div>
      { progress && progressValue === undefined
        ? <Progress blur={blur} durationMS={existMS} color={color} />
        : <Progress blur={blur} value={progressValue} total={progressTotal} color={color} /> }
    </Panel>
  )
}
