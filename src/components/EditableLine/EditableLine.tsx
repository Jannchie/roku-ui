import "./EditableLine.css";
import classnames from "classnames";
import { useState, useRef } from "react";
import { TextField, Btn } from "../..";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export type EditableLine = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  okBtnContent?: ReactNode;
  cancelBtnContent?: ReactNode;
  className?: string;
  textAligin?: "left" | "center" | "right";
  borderType?: "dash" | "solid" | "dot";
  onOK?: (value: string) => void;
};

export function EditableLine({
  value,
  setValue,
  okBtnContent = "✔",
  cancelBtnContent = "✘",
  borderType = "dash",
  textAligin = "left",
  className,
  onOK,
}: EditableLine) {
  const [editing, setEditing] = useState(false);
  const tempValue = useRef(value);
  return (
    <div
      className={classnames("r-editable-line", "flex", "gap-2", {
        "r-editable-line-editing": editing,
      })}
    >
      <TextField
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
          <Btn
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
          </Btn>
          <Btn
            border
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
