import * as Scroll from '@radix-ui/react-scroll-area'
import classNames from 'classnames'

export function ScrollArea ({ children, className, style }: { children?: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Scroll.Root
      className={classNames(className, 'overflow-hidden')}
      style={{ ...style }}
    >
      <Scroll.Viewport className="w-full h-full">
        { children }
      </Scroll.Viewport>
      <Scroll.Scrollbar
        className="flex w-1 hover:w-2 transition-all"
        orientation="vertical"
      >
        <Scroll.Thumb className="bg-[hsl(var(--r-frontground-3))] relative flex-1 rounded-full" />
      </Scroll.Scrollbar>
      <Scroll.Scrollbar
        className="flex h-1 hover:w-2 transition-all"
        orientation="horizontal"
      >
        <Scroll.Thumb className="bg-[hsl(var(--r-frontground-3))] relative flex-1 rounded-full" />
      </Scroll.Scrollbar>
      <Scroll.Corner />
    </Scroll.Root>
  )
}
