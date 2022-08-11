import "./TextField.css";
import classnames from "classnames";
import { ChangeEvent } from "react";
import { ReactNode } from "react";
export type TextField = {
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

export function TextField({
  className, prefix, suffix, placeholder, type = "text", textAlign = "left", border = true, borderType = "solid", value, setValue, ...inputProps
}: TextField & React.InputHTMLAttributes<HTMLInputElement>) {
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
        className={classnames("r-text-field", {
          "text-center": textAlign === "center",
          "text-left": textAlign === "left",
          "text-right": textAlign === "right",
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
        type={type}
      ></input>
      {suffix && <div className="r-text-field-suffix">{suffix}</div>}
    </span>
  );
}
