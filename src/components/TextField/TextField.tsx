import './TextField.css';
import classnames from 'classnames';
import {
  ChangeEvent, Dispatch, InputHTMLAttributes, ReactNode, SetStateAction,
} from 'react';

export type TextFieldProps = {
  className?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  placeholder?: string;
  borderType?: 'dash' | 'solid' | 'dot';
  border?: boolean;
  value: any;
  setValue?: Dispatch<SetStateAction<any>>;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  textAlign?: 'left' | 'center' | 'right';
  ring?: boolean;
  format?: (value: string) => string;
};

export function TextField({
  className, prefix, suffix, ring = true, placeholder, type = 'text', textAlign = 'left', border = true, borderType = 'solid', value, setValue, ...inputProps
}: TextFieldProps & InputHTMLAttributes<HTMLInputElement>) {
  let onChange;
  if (inputProps.onChange) {
    onChange = inputProps.onChange;
  } else if (setValue) {
    onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  }
  // const [displayVal, setDisplayVal] = useState(value);
  // useEffect(() => {
  //   setDisplayVal(value);
  // }, [value]);
  return (
    <span
      className={classnames(
        className,
        'r-text-field-wrapper',
        `r-text-field-${borderType}`,
        {
          'r-text-field-border': border,
          'r-text-field-ring': ring,
        },
      )}
    >
      {prefix && <div className="r-text-field-prefix">{prefix}</div>}
      <input
        className={classnames('r-text-field', {
          'text-center': textAlign === 'center',
          'text-left': textAlign === 'left',
          'text-right': textAlign === 'right',
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
        type={type}
      />
      {suffix && <div className="r-text-field-suffix">{suffix}</div>}
    </span>
  );
}
