import classNames from 'classnames'
import { type HTMLAttributes, type ReactNode } from 'react'
import './Typography.css'

function H1 ({ children, className, ...props }: {
  children: ReactNode
} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={classNames('r-typography-h1', className)}
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
      className={classNames('r-typography-h2', className)}
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
      className={classNames('r-typography-h3', className)}
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
      className={classNames('r-typography-h4', className)}
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
      className={classNames('r-typography-h5', className)}
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
      className={classNames('r-typography-h6', className)}
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
      className={classNames('r-typography-p', className)}
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
      className={classNames('r-typography-caption', className)}
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
      className={classNames('r-typography-btn', className)}
      {...props}
    >
      { children }
    </span>
  )
}

export const Typography = {
  H1, H2, H3, H4, H5, H6, P, Caption, Button,
}
