import { useEffect } from 'react'

export function useAutoSetHeight (compRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    if (compRef.current && compRef.current.children.length > 0) {
      const observer = new ResizeObserver((e) => {
        const p = e[0].target.parentElement
        if (p) {
          const pStyle = getComputedStyle(p)
          p.style.height = `${Array.from(p.children).reduce((pre, element) => {
            if (element instanceof HTMLElement) {
              const style = window.getComputedStyle(element)
              const height = element.offsetHeight
              const margin = parseFloat(style.marginTop) + parseFloat(style.marginBottom)
              const padding = parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)
              const border = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth)
              return pre + height + margin + padding + border
            }
            return 0
          }, 0) + parseFloat(pStyle.marginTop) +
                        parseFloat(pStyle.marginBottom) +
                        parseFloat(pStyle.paddingTop) +
                        parseFloat(pStyle.paddingBottom) +
                        parseFloat(pStyle.borderTopWidth) +
                        parseFloat(pStyle.borderBottomWidth)}px`
        }
      })
      for (const child of compRef.current.children) {
        observer.observe(child)
      }
      return () => {
        observer.disconnect()
      }
    }
  })
}
