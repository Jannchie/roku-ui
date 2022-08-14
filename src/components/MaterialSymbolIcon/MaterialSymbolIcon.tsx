import './MaterialSymbolIcon.css';
import classNames from 'classnames';
import { CSSProperties } from 'react';

export function MaterialSymbolIcon(props: {
  icon: string,
  size?: number | 'xs' | 'sm' | 'md' | 'lg'
  fill?: boolean
}) {
  const style: CSSProperties = { verticalAlign: 'bottom' };
  if (typeof props.size === 'number') {
    style.fontSize = props.size;
  }
  const clsName = classNames(
    'material-symbols-outlined',
    { filled: props.fill },
    { 'r-icon-xs': props.size === 'xs' },
    { 'r-icon-sm': props.size === 'sm' },
    { 'r-icon-md': props.size === 'md' },
    { 'r-icon-lg': props.size === 'lg' },
  );
  return (
    <i className={clsName} style={style}>
      {props.icon}
    </i>
  );
}
