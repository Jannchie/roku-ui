import classnames from 'classnames'
import { type Color } from 'd3-color'
import { type HTMLAttributes, type ReactNode } from 'react'
import { createPolymorphicComponent } from '../../utils/polymorphic'

type TextProps = {
  children: ReactNode
  color?: Color | string
} & HTMLAttributes<HTMLDivElement>
function _Text (props: TextProps) {
  return <div {...props} />
}

const Text = createPolymorphicComponent<'div', TextProps>(_Text)

function H1 ({ className, ...props }: TextProps) {
  return (
    <Text
      as={'h1'}
      className={classnames(className, 'text-4xl font-bold')}
      {...props}
    />
  )
}

function H2 ({ className, ...props }: TextProps) {
  return (
    <Text
      as={'h2'}
      className={classnames(className, 'text-3xl font-bold')}
      {...props}
    />
  )
}

function H3 ({ className, ...props }: TextProps) {
  return (
    <Text
      as={'h3'}
      className={classnames(className, 'text-2xl font-bold')}
      {...props}
    />
  )
}

function H4 ({ className, ...props }: TextProps) {
  return (
    <Text
      as={'h4'}
      className={classnames(className, 'text-xl font-bold')}
      {...props}
    />
  )
}

function P ({ children, className, ...props }: {
  children: ReactNode
} & HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={classnames(className, 'text-base text-[var(--r-color)]')}
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
      className={classnames(className, 'text-sm text-[var(--r-color)]')}
      {...props}
    >
      { children }
    </span>
  )
}

export const T = {
  H1, H2, H3, H4, P, Caption,
}
