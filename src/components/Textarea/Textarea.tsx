import classNames from 'classnames'
import { type TextareaHTMLAttributes, useEffect, useRef, useState } from 'react'
import { type Color } from '../../utils/colors'

export interface TextareaProps {
  setValue: (value: string) => void
  maxLength?: number
  maxHeight?: number
  autoResize?: boolean
  border?: 'solid' | 'dashed' | 'dotted' | 'transparent'
  color?: Color
}

export function Textarea ({
  autoResize = true, className, value, setValue, maxLength, maxHeight, border = 'solid', color = 'primary', ...props
}: TextareaProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const textarea = useRef<HTMLTextAreaElement>(null)
  const [height, setHeight] = useState<number>(38)
  const [h, setH] = useState<number>(height)
  useEffect(() => {
    setH(height)
  }, [height])
  return (
    <div className={classNames('relative leading-0', className)}>
      { maxLength && (
        <div className={classNames('absolute top-full mt-1 text-f-2')}>
          { textarea.current?.value.length }
          /
          { maxLength }
        </div>
      ) }
      <textarea
        ref={textarea}
        className={classNames(
          'transition-border-color w-full border rounded border-border-2 bg-background-1 text-sm p-[9px] py-[8px] outline-none',
          {
            border,
            'border-solid': border === 'solid',
            'border-dashed': border === 'dashed',
            'border-dotted': border === 'dotted',
          },
          `focus:border-${color}-2`,
          { 'transition-border-color,height resize-none overflow-hidden': autoResize },
        )}
        style={{
          height: h,
          ...props.style,
        }}
        value={value}
        onInput={(e) => {
          e.stopPropagation()
          e.preventDefault()
          setValue(e.currentTarget.value)
          // only update height if it's changed
          if (height !== e.currentTarget.scrollHeight) {
            const targetCopy = e.currentTarget.cloneNode(true) as HTMLElement
            targetCopy.style.height = '0px'
            targetCopy.style.visibility = 'hidden'
            document.body.appendChild(targetCopy)
            const newHeight = targetCopy.scrollHeight
            if (newHeight !== height) {
              if (!maxHeight || newHeight < maxHeight) {
                setHeight(newHeight + 2)
              } else {
                setHeight(maxHeight + 2)
              }
            }
            document.body.removeChild(targetCopy)
          }
        }}
        {...props}
      />
    </div>
  )
}
