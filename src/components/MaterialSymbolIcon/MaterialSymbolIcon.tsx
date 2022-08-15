import './MaterialSymbolIcon.css';
import classNames from 'classnames';
import { CSSProperties, HTMLAttributes } from 'react';

export function MaterialSymbolIcon({
  size = 'md',
  ...props
}: {
  icon: string,
  size?: number | 'xs' | 'sm' | 'md' | 'lg',
  fill?: boolean
} & HTMLAttributes<HTMLElement>) {
  const style: CSSProperties = { verticalAlign: 'bottom' };
  if (typeof size === 'number') {
    style.fontSize = size;
  }
  const clsName = classNames(
    'material-symbols-outlined',
    { filled: props.fill },
    { 'r-icon-xs': size === 'xs' },
    { 'r-icon-sm': size === 'sm' },
    { 'r-icon-md': size === 'md' },
    { 'r-icon-lg': size === 'lg' },
  );
  return (
    <i className={clsName} style={style}>
      {props.icon}
    </i>
  );
}
