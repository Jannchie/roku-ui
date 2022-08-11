import "./REditableLine.css";
import classnames from "classnames";
import { useState, useRef } from "react";
import { RTextField } from "../RTextField";
import { RBtn } from "../..";
import { REditableLineProps } from "./REditableLineProps";
import { motion } from "framer-motion";
export function REditableLine({
  value,
  setValue,
  okBtnContent = "✔",
  cancelBtnContent = "✘",
  borderType = "dash",
  textAligin = "left",
  className,
  onOK,
}: REditableLineProps) {
  const [editing, setEditing] = useState(false);
  const tempValue = useRef(value);
  return (
    <div
      className={classnames("r-editable-line", "flex", "gap-2", {
        "r-editable-line-editing": editing,
      })}
    >
      <RTextField
        className={className}
        borderType={borderType}
        value={value}
        setValue={setValue}
        textAlign={textAligin}
        onFocus={() => {
          if (editing === false) {
            tempValue.current = value;
          }
          setEditing(true);
        }}
      />
      {editing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 0.15 }}
          className="flex gap-2"
        >
          <RBtn
            border
            className="r-editable-line-ok-btn"
            color="success"
            onClick={() => {
              setEditing(false);
              if (typeof onOK === "function") {
                onOK(value);
              }
            }}
          >
            {okBtnContent}
          </RBtn>
          <RBtn
            border
            className="r-editable-line-cancel-btn"
            onClick={() => {
              setEditing(false);
              setValue(tempValue.current);
            }}
          >
            {cancelBtnContent}
          </RBtn>
        </motion.div>
      )}
    </div>
  );
}
