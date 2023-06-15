import { type ReactNode } from 'react'

export function HolyGrail (args: {
  style?: React.CSSProperties
  icon?: ReactNode
  title?: ReactNode
  searchCallback?: ((value: string) => void) | undefined
  tailing?: ReactNode
  outerLeft?: ReactNode
  outerRight?: ReactNode
  innerLeft?: ReactNode
  innerRight?: ReactNode
  main?: ReactNode
  header?: ReactNode
  footer?: ReactNode
}) {
  return (
    <div
      className="flex"
      style={args.style}
    >
      { args.outerLeft && (args.outerLeft) }
      <div className="flex-grow relative flex-col flex h-full;">
        { args.header && (args.header) }
        <main className="flex-grow flex items-start">
          { args.innerLeft && (args.innerLeft) }
          <div className="flex-grow h-full">
            { args.main }
          </div>
          { args.innerRight && (args.innerRight) }
        </main>
        { args.footer && (args.footer) }
      </div>
      { args.outerRight && (args.outerRight) }
    </div>
  )
}
