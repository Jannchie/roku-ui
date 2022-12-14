import { HTMLAttributes } from 'react'

export function Icon ({ children, data }: { data: string } & HTMLAttributes<HTMLElement>) {
  console.log(data)
  return (
    <i
      style={{
        WebkitMaskImage: `url(${data})`,
        WebkitMaskSize: '100% 100%',
        backgroundColor: 'currentcolor',
      }}
      className="h-[1em] w-[1em] inline-block"
    >
      {children}
    </i>)
}
