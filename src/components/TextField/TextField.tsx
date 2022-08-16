import './TextField.css';
import classnames from 'classnames';
import {
  ChangeEvent, Dispatch, InputHTMLAttributes, ReactNode, SetStateAction,
} from 'react';
import { colorClass, Colors } from '../..';

export type TextFieldProps = {
  className?: string;
  value: any;
  prefix?: ReactNode;
  suffix?: ReactNode;
  placeholder?: string;
  borderType?: 'dash' | 'solid' | 'dot';
  border?: boolean ;
  setValue?: Dispatch<SetStateAction<any>>;
  textAlign?: 'left' | 'center' | 'right';
  ring?: boolean;
  format?: (value: string) => string;
  color?: Colors;
};

export function TextField({
  className, prefix, suffix,
  ring = true,
  placeholder,
  textAlign = 'left',
  border = false,
  borderType = 'solid',
  color = 'primary',
  value, setValue,
  ...inputProps
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
          'r-text-field-fill': !border,
          'r-text-field-ring': ring,
        },
        colorClass({
          ring: color,
        }),
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
      />
      {suffix && <div className="r-text-field-suffix">{suffix}</div>}
    </span>
  );
}
