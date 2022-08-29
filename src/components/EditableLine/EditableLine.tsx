/* eslint-disable no-param-reassign */
import './EditableLine.css';
import classnames from 'classnames';
import { useRef, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Btn, MaterialSymbolIcon, TextField } from '../..';

export type EditableLineProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  okBtnContent?: ReactNode;
  cancelBtnContent?: ReactNode;
  className?: string;
  textAligin?: 'left' | 'center' | 'right';
  borderType?: 'dash' | 'solid' | 'dot';
  onOK?: (value: string) => void;
  size?: 'sm' | 'md' | 'lg';
};

export function EditableLine({
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
  const [editing, setEditing] = useState(false);
  const tempValue = useRef(value);
  if (!okBtnContent) okBtnContent = <MaterialSymbolIcon icon="check" size={size} />;
  if (!cancelBtnContent) cancelBtnContent = <MaterialSymbolIcon icon="close" size={size} />;
  return (
    <div
      className={classnames('r-editable-line', 'flex', 'gap-2', {
        'r-editable-line-editing': editing,
      })}
    >
      <TextField
        size={size}
        borderType={borderType}
        className={className}
        setValue={setValue}
        textAlign={textAligin}
        value={value}
        onFocus={() => {
          if (editing === false) {
            tempValue.current = value;
          }
          setEditing(true);
        }}
      />
      {editing && (
        <motion.div
          animate={{
            opacity: 1,
          }}
          className="flex gap-2"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <Btn
            border
            size={size}
            className="r-editable-line-ok-btn"
            color="success"
            onClick={() => {
              setEditing(false);
              if (typeof onOK === 'function') {
                onOK(value);
              }
            }}
          >
            {okBtnContent}
          </Btn>
          <Btn
            border
            size={size}
            className="r-editable-line-cancel-btn"
            onClick={() => {
              setEditing(false);
              setValue(tempValue.current);
            }}
          >
            {cancelBtnContent}
          </Btn>
        </motion.div>
      )}
    </div>
  );
}
