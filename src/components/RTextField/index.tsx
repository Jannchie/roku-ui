import "./RTextField.css";
import classnames from "classnames";
import { ChangeEvent, FC, ReactNode, useEffect, useState } from "react";
type RTextFieldProps = {
  className?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  placeholder?: string;
  borderType?: "dash" | "solid" | "dot";
  border?: boolean;
  value: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
  textAlign?: "left" | "center" | "right";
  format?: (value: string) => string;
};

export function RTextField({
  className,
  prefix,
  suffix,
  placeholder,
  type = "text",
  textAlign = "left",
  border = true,
  borderType = "solid",
  value,
  setValue,
  format = (value) => value,
  ...inputProps
}: RTextFieldProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const onChange = inputProps.onChange
    ? inputProps.onChange
    : setValue
    ? (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      }
    : undefined;
  // const [displayVal, setDisplayVal] = useState(value);
  // useEffect(() => {
  //   setDisplayVal(value);
  // }, [value]);
  return (
    <span
      className={classnames(
        className,
        "r-text-field-wrapper",
        `r-text-field-${borderType}`,
        {
          "r-text-field-border": border,
        }
      )}
    >
      {prefix && <div className="r-text-field-prefix">{prefix}</div>}
      <input
        placeholder={placeholder}
        className={classnames("r-text-field", {
          "text-left": textAlign === "left",
          "text-center": textAlign === "center",
          "text-right": textAlign === "right",
        })}
        value={value}
        onChange={onChange}
        {...inputProps}
        type={type}
      ></input>
      {suffix && <div className="r-text-field-suffix">{suffix}</div>}
    </span>
  );
}
