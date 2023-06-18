import { AnimatePresence, motion } from 'framer-motion'
import {
  type ReactNode, useCallback, useEffect, useRef, useState,
} from 'react'
import classnames from 'classnames'
import { type Color, Notice, Icon } from '../..'
import { TablerMessage2, TablerMessage2Check, TablerMessage2Exclamation, TablerMessage2X } from '@roku-ui/icons-tabler'

interface NoticeData { key: number, value: ReactNode }
interface PushConfig {
  existsMS?: number
  name?: string
}

export interface NoticeConfig {
  title: ReactNode
  desc?: ReactNode
  type?: 'success' | 'danger' | 'warning' | 'info'
  existsMS?: number
  progressBar?: boolean
  closable?: boolean
}

export type OnPush = (data: any, config?: PushConfig) => void
type OnRemove = (notice: ReactNode) => void

interface NotificationsEventManager {
  onPush: OnPush[]
  onRemove: OnRemove[]
}

const nEventMgr: NotificationsEventManager = {
  onPush: [],
  onRemove: [],
}
export const push = (notice: any, config?: PushConfig): void => {
  if (nEventMgr.onPush.length === 0) {
    throw new Error(
      'No notification event listener, you should add at least one Notifications Component to your app.',
    )
  }
  nEventMgr.onPush.forEach((cb) => { cb(notice, config) })
}

export const pushNotice = (config: PushConfig & NoticeConfig) => {
  let { existsMS, closable = false, name = 'default' } = config
  const { title, desc, type } = config

  if (!existsMS) existsMS = 3000
  let mainColor: Color
  let icon: ReactNode = ''
  switch (type) {
    case 'success': {
      mainColor = 'success'
      icon = <TablerMessage2Check />
      break
    }
    case 'danger': {
      mainColor = 'danger'
      icon = <TablerMessage2X />
      break
    }
    case 'warning': {
      mainColor = 'warning'
      icon = <TablerMessage2Exclamation />
      break
    }
    default: {
      mainColor = 'info'
      icon = <TablerMessage2 />
    }
  }
  const n = (
    <Notice
      outlined
      progress
      shadow
      close={closable
        ? () => {
          nEventMgr.onRemove.forEach((cb) => { cb(n) })
        }
        : undefined}
      desc={desc}
      existMS={existsMS}
      icon={<Icon
        variant="dual"
        color={mainColor}
      >
        { icon }
      </Icon>}
      color={mainColor}
      title={title}
    />
  )
  push(n, { existsMS, name })
}
interface NotificationConfig {
  left?: boolean
  right?: boolean
  bottom?: boolean
  className?: string
  defaultExistsMS?: number
  maxCount?: number
  stack?: boolean
  wait?: boolean
  name?: string
  getNotice?: (data: any) => ReactNode
}

function isReactNode (value: any): value is ReactNode {
  // 检查是否是React组件
  if (typeof value === 'function' || typeof value === 'object') {
    return 'type' in value && 'props' in value
  }

  // 检查是否是基本类型
  return typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean' || value === null || value === undefined
}
export function Notifications ({
  bottom,
  left,
  right,
  defaultExistsMS,
  maxCount = 3,
  wait,
  className,
  stack,
  getNotice,
  name,
}: NotificationConfig) {
  let align = 'top'
  if (bottom) {
    align = 'bottom'
  }
  let justify = 'center'
  if (left) {
    justify = 'left'
  }
  if (right) {
    justify = 'right'
  }
  const [notices, setNotices] = useState<NoticeData[]>([])
  const id = useRef(1)
  const waitList = useRef<Array<[ReactNode, PushConfig]>>([])

  // 当存在数据被 push 时，将其推入 notices，或者 wait list
  const pushCallback = useCallback<OnPush>((data: any, config: PushConfig = {}) => {
    if (name && config.name !== name) return
    let existsMS
    if (config.existsMS) {
      existsMS = config.existsMS
    }
    if (!existsMS) {
      existsMS = defaultExistsMS ?? 3000
    }
    const notice = getNotice ? getNotice(data) : data

    if (!isReactNode(notice)) {
      throw new Error('You should use getNotice prop to return a ReactNode.')
    }

    if (maxCount && notices.length >= maxCount) {
      if (wait) {
        waitList.current.push([notice, config])
        return
      }
      notices.pop()
    }
    const currentId = id.current

    id.current += 1
    setNotices([{ key: currentId, value: notice }, ...notices])
    setTimeout(() => {
      setNotices((val) => val.filter((n) => n.key !== currentId))
    }, existsMS)
  }, [name, getNotice, maxCount, notices, defaultExistsMS, wait])

  // 当 wait list 不为空，且 notices 数量小于 maxCount 时，将 wait list 中的第一个元素推入 notices
  useEffect(() => {
    if (wait && maxCount && waitList.current.length > 0 && notices.length < maxCount) {
      const current = waitList.current.shift()
      if (current != null) {
        pushCallback(...current)
      }
    }
  }, [notices, maxCount, wait, pushCallback])

  // 移除某个 notice
  const removeCallback: OnRemove = (notice: ReactNode) => {
    setNotices((val) => val.filter((n) => n.value !== notice))
  }

  // resiger callback, notice that it is a effect.
  useEffect(() => {
    nEventMgr.onPush.unshift(pushCallback)
    return () => {
      nEventMgr.onPush.splice(nEventMgr.onPush.indexOf(pushCallback), 1)
    }
  })

  useEffect(() => {
    nEventMgr.onRemove.unshift(removeCallback)
    return () => {
      nEventMgr.onRemove.splice(nEventMgr.onRemove.indexOf(removeCallback), 1)
    }
  })
  const noticesWrapper = useRef<HTMLDivElement>(null)
  function getNoticeAnimate (i: number) {
    if (!stack) {
      return {
        animate: {
          opacity: 1,
          scale: 1,
        },
        exit: {
          opacity: 0,
        },
        initial: {
          opacity: 0,
          scale: 0.8,
        },
      }
    }
    switch (align) {
      case 'bottom': {
        return {
          animate: {
            opacity: 1,
            zIndex: -i,
            y: i * 70,
            height: 0,
            scale: 1 - i * 0.075,
          },
          exit: {
            opacity: 0,
            scale: 0,
            y: i * 70,
          },
          initial: {
            opacity: 0,
            scale: 1.2,
          },
        }
      }
      default: {
        return {
          animate: {
            opacity: 1,
            zIndex: -i,
            y: -i * 70,
            scale: 1 - i * 0.075,
          },
          exit: {
            opacity: 0,
            scale: 0,
            height: 0,
            y: -i * 70,
          },
          initial: {
            opacity: 0,
            scale: 1.2,
          },
        }
      }
    }
  }
  return (
    <div
      key="r-notification"
      className={classnames(
        'fixed z-10 md:w-40ch w-full p-2',
        {
          'justify-center left-1/2 right-auto -translate-x-1/2': justify === 'center',
          'left-0': justify === 'left',
          'right-0': justify === 'right',
          'top-0': align === 'top',
          'bottom-0': align === 'bottom',
        },
        className,
      )}
    >
      <div
        ref={noticesWrapper}
        className={classnames('flex gap-2 h-0', {
          'flex-col': align === 'top',
          'flex-col-reverse': align === 'bottom',
        })}
      >
        <AnimatePresence>
          { notices
            .sort((a, b) => b.key - a.key)
            .map((notice, i) => (
              <motion.div
                key={notice.key}
                layout
                {...getNoticeAnimate(i)}
                style={{ order: -notice.key }}
                transition={{ duration: 0.15 }}
              >
                { notice.value }
              </motion.div>
            )) }
        </AnimatePresence>
      </div>
    </div>
  )
}
