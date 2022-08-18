import './Textarea.css';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { HTMLMotionProps, motion, useSpring } from 'framer-motion';

export type TextareaProps = {
  setValue: (value: string) => void,
  maxLength?: number,
  maxHeight?: number,
  border?: 'solid' | 'dashed' | 'dotted' | 'transparent',
}

export function Textarea({
  className, value, setValue, maxLength, maxHeight, border = 'transparent', ...props
}: TextareaProps & HTMLMotionProps<'textarea'>) {
  const textarea = useRef<HTMLTextAreaElement>(null);
  const [height, setHeight] = useState<number>(38);
  const springH = useSpring(height);
  useEffect(() => {
    springH.set(height);
  }, [height, springH]);
  // on resize
  return (
    <>
      {maxLength && (
        <div className={classNames('r-textarea-extra-info')}>
          {textarea.current?.value.length}
          /
          {maxLength}
        </div>
      )}
      <motion.textarea
        ref={textarea}
        className={classNames(className, 'r-textarea', `r-textarea-border-${border}`)}
        style={{ height: springH, top: 0 }}
        value={value}
        onInput={(e) => {
          e.stopPropagation();
          setValue(e.currentTarget.value);
          // only update height if it's changed
          if (height !== e.currentTarget.scrollHeight) {
            e.currentTarget.style.height = '0px'; // to make the scroll height as the real content height.
            const newHeight = e.currentTarget.scrollHeight;
            if (newHeight !== height) {
              if (!maxHeight || newHeight < maxHeight) {
                setHeight(newHeight);
              }
            }
          }
        }}
        {...props}
      />
    </>
  );
}
