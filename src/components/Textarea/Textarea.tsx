import './Textarea.css'
import classNames from 'classnames'
import { TextareaHTMLAttributes, useEffect, useRef, useState } from 'react'
import { Colors } from '../../utils/colors'

export interface TextareaProps {
  setValue: (value: string) => void
  maxLength?: number
  maxHeight?: number
  border?: 'solid' | 'dashed' | 'dotted' | 'transparent'
  color?: Colors
}

export function Textarea ({
  className, value, setValue, maxLength, maxHeight, border = 'solid', color = 'primary', ...props
}: TextareaProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const textarea = useRef<HTMLTextAreaElement>(null)
  const [height, setHeight] = useState<number>(38)
  const [h, setH] = useState<number>(height)
  useEffect(() => {
    setH(height)
  }, [height])
  return (
    <>
      {maxLength && (
        <div className={classNames('r-textarea-extra-info')}>
          {textarea.current?.value.length}
          /
          {maxLength}
        </div>
      )}
      <textarea
        ref={textarea}
        className={classNames(className,
          'r-textarea',
          `r-textarea-border-${border}`,
          'border-border-2',
          `hover:bg-b-1 bg-b-1/50 ring-${color}-2`,
        )}
        style={{
          height: h,
          ...props.style,
        }}
        value={value}
        onInput={(e) => {
          e.stopPropagation()
          setValue(e.currentTarget.value)
          // only update height if it's changed
          if (height !== e.currentTarget.scrollHeight) {
            const targetCopy = e.currentTarget.cloneNode(true) as HTMLElement
            targetCopy.style.height = '0px'
            targetCopy.style.visibility = 'hidden'
            document.body.appendChild(targetCopy)
            const newHeight = targetCopy.scrollHeight
            console.log(newHeight)
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
    </>
  )
}
