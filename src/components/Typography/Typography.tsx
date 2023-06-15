import classNames from 'classnames'
import { type HTMLAttributes, type ReactNode } from 'react'

function H1 ({ children, className, ...props }: {
  children: ReactNode
} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={classNames(className, 'text-4xl font-bold')}
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
      className={classNames(className, 'text-3xl font-bold')}
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
      className={classNames(className, 'text-2xl font-bold')}
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
      className={classNames(className, 'text-xl font-bold')}
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
      className={classNames(className, 'text-lg font-bold')}
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
      className={classNames(className, 'text-base font-bold')}
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
      className={classNames(className, 'text-base')}
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
      className={classNames(className, 'text-sm')}
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
      className={classNames(className, 'text-base font-bold')}
      {...props}
    >
      { children }
    </span>
  )
}

export const T = {
  H1, H2, H3, H4, H5, H6, P, Caption, Button,
}
