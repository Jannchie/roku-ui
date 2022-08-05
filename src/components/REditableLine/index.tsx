import "./REditableLine.css";
import classnames from "classnames";
import { FC, useState, useRef, ReactNode } from "react";
import { RBtn } from "../RBtn";
import { Transition } from "@headlessui/react";
import { FadeTransition } from "../../Transitions";
import { RTextField } from "../RTextField";
export const REditableLine: FC<{
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  okBtnContent?: ReactNode;
  cancelBtnContent?: ReactNode;
  className?: string;
  textAligin?: "left" | "center" | "right";
  borderType?: "dash" | "solid" | "dot";
}> = ({
  value,
  setValue,
  okBtnContent = "✔",
  cancelBtnContent = "✘",
  borderType = "dash",
  textAligin = "left",
  className,
}) => {
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
        <FadeTransition>
          <div className="flex gap-2">
            <RBtn
              className="r-editable-line-ok-btn"
              color="success"
              onClick={() => {
                setEditing(false);
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
        </FadeTransition>
      </Transition>
    </div>
  );
};
