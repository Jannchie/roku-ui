import "./REditableLine.css";
import classnames from "classnames";
import { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import { FadeTransitionChild } from "../../Transitions";
import { RTextField } from "../RTextField";
import { RBtn } from "../..";
import { REditableLineProps } from "./REditableLineProps";

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
      <Transition show={editing}>
        <FadeTransitionChild>
          <div className="flex gap-2">
            <RBtn
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
              className="r-editable-line-cancel-btn"
              onClick={() => {
                setEditing(false);
                setValue(tempValue.current);
              }}
            >
              {cancelBtnContent}
            </RBtn>
          </div>
        </FadeTransitionChild>
      </Transition>
    </div>
  );
}
