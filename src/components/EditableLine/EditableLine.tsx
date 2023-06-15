/* eslint-disable no-param-reassign */
import classnames from 'classnames'
import { useRef, useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Btn, TextField } from '../..'
import { TablerCheck, TablerX } from '@roku-ui/icons-tabler'

export interface EditableLineProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  okBtnContent?: ReactNode
  cancelBtnContent?: ReactNode
  className?: string
  textAligin?: 'left' | 'center' | 'right'
  borderType?: 'dash' | 'solid' | 'dot'
  onOK?: (value: string) => void
  size?: 'sm' | 'md' | 'lg'
}

export function EditableLine ({
  value,
  setValue,
  size = 'md',
  okBtnContent,
  cancelBtnContent,
  borderType = 'dash',
  textAligin = 'left',
  className,
  onOK,
}: EditableLineProps) {
  const [editing, setEditing] = useState(false)
  const tempValue = useRef(value)
  const getSize = (size: string) => {
    if (size === 'sm') {
      return '1em'
    }
    if (size === 'md') {
      return '1.25rem'
    }
    if (size === 'lg') {
      return '1.5rem'
    }
    return size
  }
  if (!okBtnContent) {
    okBtnContent = (
      <TablerCheck height={getSize(size)} />
    )
  }
  if (!cancelBtnContent) {
    cancelBtnContent = (
      <TablerX height={getSize(size)} />
    )
  }
  return (
    <div
      className={classnames('flex', 'gap-2')}
    >
      <TextField
        size={size}
        borderType={borderType}
        className={className}
        setValue={setValue}
        textAlign={textAligin}
        value={value}
        onFocus={() => {
          if (!editing) {
            tempValue.current = value
          }
          setEditing(true)
        }}
      />
      { editing && (
        <motion.div
          animate={{
            opacity: 1,
          }}
          className="flex gap-2"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Btn
            border
            size={size}
            color="success"
            onClick={() => {
              setEditing(false)
              if (typeof onOK === 'function') {
                onOK(value)
              }
            }}
          >
            { okBtnContent }
          </Btn>
          <Btn
            border
            size={size}
            onClick={() => {
              setEditing(false)
              setValue(tempValue.current)
            }}
          >
            { cancelBtnContent }
          </Btn>
        </motion.div>
      ) }
    </div>
  )
}
