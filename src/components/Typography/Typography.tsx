import classnames from 'classnames'
import { type Color } from 'd3-color'
import { type HTMLAttributes, type ReactNode } from 'react'
import { useTrueColor } from '../../hooks'

function H1 ({ color, style, children, className, ...props }: {
  children: ReactNode
  color: Color | string
} & HTMLAttributes<HTMLHeadingElement>) {
  const textColor = useTrueColor(color)
  return (
    <h1
      className={classnames(className, 'text-4xl font-bold color-[var(--r-color)]')}
      style={{
        ...style,
        ...{
          '--r-color': textColor,
        },
      }}
      {...props}
    >
      { children }
    </h1>
  )
}

function H2 ({ children, className, ...props }: {
  children: ReactNode
} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={classnames(className, 'text-3xl font-bold')}
      {...props}
    >
      { children }

    </h2>
  )
}

function H3 ({ children, className, ...props }: {
  children: ReactNode
} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={classnames(className, 'text-2xl font-bold')}
      {...props}
    >
      { children }
    </h3>
  )
}

function H4 ({ children, className, ...props }: {
  children: ReactNode
} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={classnames(className, 'text-xl font-bold')}
      {...props}
    >
      { children }
    </h4>
  )
}

function H5 ({ children, className, ...props }: {
  children: ReactNode
} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={classnames(className, 'text-lg font-bold')}
      {...props}
    >
      { children }

    </h5>
  )
}

function H6 ({ children, className, ...props }: {
  children: ReactNode
} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h6
      className={classnames(className, 'text-base font-bold')}
      {...props}
    >
      { children }
    </h6>
  )
}

function P ({ children, className, ...props }: {
  children: ReactNode
} & HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={classnames(className, 'text-base')}
      {...props}
    >
      { children }
    </p>
  )
}
function Caption ({ children, className, ...props }: {
  children: ReactNode
} & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={classnames(className, 'text-sm')}
      {...props}
    >
      { children }
    </span>
  )
}
function Button ({ children, className, ...props }: {
  children: ReactNode
} & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={classnames(className, 'text-base font-bold')}
      {...props}
    >
      { children }
    </span>
  )
}

export const T = {
  H1, H2, H3, H4, H5, H6, P, Caption, Button,
}
