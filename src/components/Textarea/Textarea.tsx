import './Textarea.css'
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
    <div className={classNames('r-textarea-wrapper', className)}>
      { maxLength && (
        <div className={classNames('r-textarea-extra-info')}>
          { textarea.current?.value.length }
          /
          { maxLength }
        </div>
      ) }
      <textarea
        ref={textarea}
        className={classNames(
          'r-textarea',
          `r-textarea-border-${border}`,
          `focus:border-${color}-2`,
          { 'r-no-resize': autoResize },
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
